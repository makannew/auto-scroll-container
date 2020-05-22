import React, { useRef, useEffect, useLayoutEffect } from 'react'
import useDelayedFunction from './use-delayed-function'

export const AutoScrollContainer = ({
  children,
  className = '',
  contentClass = '',
  contentMarginTop = 0.5, // fraction of visible div size
  contentMarginBottom = 0.5,
  contentMarginLeft = 0,
  contentMarginRight = 0,
  moveScrollX = 0, // fraction of total content size
  moveScrollY = 0,
  defaultViewPointX = 0.1,
  defaultViewPointY = 0.1,
  focusElemMargin = 0.05,
  autoScrollOnFocus = true,
  debouncingDelay = 200
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const rightMarginDiv = useRef()
  const currentFocus = useRef(null)
  const [debounceResize] = useDelayedFunction(calcDivSize, debouncingDelay)

  const scroll = useRef({
    initializing: true,
    isAutoScrolling: false,
    divSize: undefined,
    margins: undefined,
    content: undefined,
    pos: {
      x: moveScrollX,
      offsetX: defaultViewPointX,
      y: moveScrollY,
      offsetY: defaultViewPointY
    }
  }).current

  const handleScroll = (e) => {
    if (scroll.isAutoScrolling) {
      e.stopPropagation()
      scroll.isAutoScrolling = false
      return
    }
    setPos()
  }

  const handleFocus = (e) => {
    currentFocus.current = e.target
    setPos()
    if (autoScrollOnFocus) {
      scrollToNewPos()
    }
  }

  const handleBlure = (e) => {
    currentFocus.current = null
    setPos()
  }

  useLayoutEffect(() => {
    scrollDiv.current.style.visibility = 'hidden'
    setPositionRelative()
    calcDivSize()
    calcMargins()
    setMargins()
    calcContent()
    scrollToNewPos()
    scroll.initializing = false
    scrollDiv.current.style.visibility = 'visible'
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (scroll.initializing) return
      debounceResize().then(() => {
        calcMargins()
        setMargins()
        calcContent()
        scrollToNewPos()
      })
    }
    addEventListener('resize', handleResize)
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (scroll.initializing) return
    userPos()
    scrollToNewPos()
  }, [moveScrollX, moveScrollY, defaultViewPointX, defaultViewPointY])

  useEffect(() => {
    if (scroll.initializing) return
    calcMargins()
    setMargins()
    calcContent()
    scrollToNewPos()
  }, [
    contentMarginTop,
    contentMarginBottom,
    contentMarginLeft,
    contentMarginRight,
    focusElemMargin
  ])

  const relativeOffset = (element) => {
    if (!element) {
      return [0, 0]
    }
    const elementParent = element.offsetParent
    const x = element.offsetLeft
    const y = element.offsetTop
    if (
      elementParent === rightMarginDiv.current.offsetParent ||
      !elementParent
    ) {
      return [x, y]
    } else {
      const [xParent, yParent] = relativeOffset(elementParent)
      return [
        x + xParent - elementParent.scrollLeft,
        y + yParent - elementParent.scrollTop
      ]
    }
  }

  const compensatedOffsets = () => {
    const { divSize, pos } = scroll
    let offsetY = pos.offsetY
    let offsetX = pos.offsetX
    if (currentFocus.current) {
      const { height, width } = currentFocus.current.getBoundingClientRect()
      let hRatio = height / divSize.height
      let wRatio = width / divSize.width
      if (focusElemMargin + hRatio + focusElemMargin > 1) {
        if (offsetY + hRatio / 2 > 0.5) {
          offsetY = focusElemMargin
        } else {
          offsetY = 1 - hRatio - focusElemMargin
        }
      } else {
        if (offsetY < focusElemMargin) {
          offsetY = focusElemMargin
        }
        if (offsetY + hRatio > 1 - focusElemMargin) {
          offsetY = 1 - focusElemMargin - hRatio
        }
      }
      if (focusElemMargin + wRatio + focusElemMargin > 1) {
        if (offsetX + wRatio / 2 > 0.5) {
          offsetX = focusElemMargin
        } else {
          offsetX = 1 - wRatio - focusElemMargin
        }
      } else {
        if (offsetX < focusElemMargin) {
          offsetX = focusElemMargin
        }
        if (offsetX + wRatio > 1 - focusElemMargin) {
          offsetX = 1 - focusElemMargin - wRatio
        }
      }
    }
    return { offsetY, offsetX }
  }

  function setPos() {
    const { divSize, content, margins, pos } = scroll
    const top = scrollDiv.current.scrollTop
    const left = scrollDiv.current.scrollLeft
    const [x, y] = currentFocus.current
      ? relativeOffset(currentFocus.current)
      : [
          left + defaultViewPointX * divSize.width,
          top + defaultViewPointY * divSize.height
        ]
    pos.x = (x - margins.left) / content.width
    pos.y = (y - margins.top) / content.height
    pos.offsetX = (x - left) / divSize.width
    pos.offsetY = (y - top) / divSize.height
  }

  function scrollToNewPos() {
    const { pos, content, divSize, margins } = scroll
    const { offsetY, offsetX } = compensatedOffsets()
    scroll.isAutoScrolling = true
    scrollDiv.current.scrollTop =
      pos.y * content.height - offsetY * divSize.height + margins.top
    scrollDiv.current.scrollLeft =
      pos.x * content.width - offsetX * divSize.width + margins.left
  }

  function userPos() {
    scroll.pos = {
      x: moveScrollX,
      offsetX: defaultViewPointX,
      y: moveScrollY,
      offsetY: defaultViewPointY
    }
  }
  function setPositionRelative() {
    if (getComputedStyle(scrollDiv.current).position === 'static') {
      scrollDiv.current.style.position = 'relative'
    }
  }

  function calcDivSize() {
    scroll.divSize = {
      width: scrollDiv.current.offsetWidth,
      height: scrollDiv.current.offsetHeight
    }
  }

  function calcMargins() {
    const {
      divSize: { width, height }
    } = scroll
    scroll.margins = {
      top: contentMarginTop * height,
      bottom: contentMarginBottom * height,
      left: contentMarginLeft * width,
      right: contentMarginRight * width
    }
  }

  function setMargins() {
    const {
      margins: { top, bottom, left, right }
    } = scroll
    const contentStyle = contentDiv.current.style
    if (contentMarginTop) {
      contentStyle.marginTop = `${top}px`
    }
    if (contentMarginBottom) {
      contentStyle.marginBottom = `${bottom}px`
    }
    if (contentMarginLeft) {
      rightMarginDiv.current.style.left = `${left}px`
      contentStyle.marginLeft = `${left}px`
    }
    if (contentMarginRight) {
      rightMarginDiv.current.style.left = `${
        scrollDiv.current.scrollWidth + right
      }px`
    }
  }

  function calcContent() {
    const {
      margins: { top, bottom, left, right }
    } = scroll
    scroll.content = {
      width: scrollDiv.current.scrollWidth - left - right,
      height: scrollDiv.current.scrollHeight - top - bottom
    }
  }

  return (
    <div
      ref={scrollDiv}
      className={className}
      onScroll={handleScroll}
      onFocus={handleFocus}
      onBlurCapture={handleBlure}
    >
      <div
        ref={rightMarginDiv}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          top: '0px',
          visibility: 'hidden'
        }}
      ></div>

      <div ref={contentDiv} className={contentClass}>
        {children}
      </div>
    </div>
  )
}
