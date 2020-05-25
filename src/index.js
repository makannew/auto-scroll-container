import React, { useRef, useEffect, useLayoutEffect } from 'react'
import useDelayedFunction from './use-delayed-function'

export const AutoScrollContainer = ({
  children,
  className = '',
  contentClass = '',
  marginTop = 0.5, // fraction of visible div size
  marginBottom = 0.5,
  marginLeft = 0,
  marginRight = 0,
  moveX = 0, // fraction of total content size
  moveY = 0,
  viewX = 0.1,
  viewY = 0.1,
  viewMargin = 0.05,
  autoScrollOnFocus = true,
  debouncingDelay = 200,
  signature = 'data-auto-scroll-container-signature'
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const rightMarginDiv = useRef()
  const currentFocus = useRef(null)
  const childObserver = useRef(null)
  const [debounceResize] = useDelayedFunction(calcDivSize, debouncingDelay)

  const scroll = useRef({
    initializing: true,
    isAutoScrolling: false,
    immediateChild: null,
    divSize: undefined,
    margins: undefined,
    content: undefined,
    pos: {
      x: moveX,
      offsetX: viewX,
      y: moveY,
      offsetY: viewY
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
    removeChildObserver()
    currentFocus.current = e.target
    scroll.immediateChild = null
    setPos()
    addChildObserver()
    if (autoScrollOnFocus) {
      scrollToNewPos()
    }
  }

  function addChildObserver() {
    if (scroll.immediateChild === null) return
    scroll.immediateChild.setAttribute(signature, '0')
    childObserver.current.observe(scroll.immediateChild, {
      attributes: true,
      attributesFilter: [signature]
    })
  }

  function removeChildObserver() {
    if (scroll.immediateChild === null) return
    childObserver.current.disconnect()
  }

  function resizeParent() {
    const value = Number(scrollDiv.current.getAttribute(signature))
    scrollDiv.current.setAttribute(signature, (value + 1).toString())
  }

  function resizeByChild() {
    if (scroll.initializing) return
    console.log('resized by child')
    calcDivSize()
    adjustScroll()
    resizeParent()
  }

  const handleBlure = (e) => {
    removeChildObserver()
    currentFocus.current = null
    setPos()
  }

  useLayoutEffect(() => {
    scrollDiv.current.style.visibility = 'hidden'
    setPositionRelative()
    calcDivSize()
    adjustScroll()
    scroll.initializing = false
    scrollDiv.current.style.visibility = 'visible'
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (scroll.initializing || scroll.immediateChild) return
      debounceResize().then(() => {
        adjustScroll()
        resizeParent()
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
  }, [moveX, moveY, viewX, viewY])

  useEffect(() => {
    if (scroll.initializing) return
    adjustScroll()
  }, [marginTop, marginBottom, marginLeft, marginRight, viewMargin])

  useEffect(() => {
    scrollDiv.current.setAttribute(signature, '0')
    childObserver.current = new MutationObserver(resizeByChild)
    return () => {
      childObserver.current.disconnect()
    }
  }, [])

  function relativeOffset(element) {
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
      if (elementParent.hasAttribute(signature)) {
        scroll.immediateChild = elementParent
      }
      const [xParent, yParent] = relativeOffset(elementParent)
      return [
        x + xParent - elementParent.scrollLeft,
        y + yParent - elementParent.scrollTop
      ]
    }
  }

  function compensatedOffsets() {
    const { divSize, pos } = scroll
    let offsetY = pos.offsetY
    let offsetX = pos.offsetX
    if (currentFocus.current) {
      const { height, width } = currentFocus.current.getBoundingClientRect()
      let hRatio = height / divSize.height
      let wRatio = width / divSize.width
      if (viewMargin + hRatio + viewMargin > 1) {
        if (offsetY + hRatio / 2 > 0.5) {
          offsetY = viewMargin
        } else {
          offsetY = 1 - hRatio - viewMargin
        }
      } else {
        if (offsetY < viewMargin) {
          offsetY = viewMargin
        }
        if (offsetY + hRatio > 1 - viewMargin) {
          offsetY = 1 - viewMargin - hRatio
        }
      }
      if (viewMargin + wRatio + viewMargin > 1) {
        if (offsetX + wRatio / 2 > 0.5) {
          offsetX = viewMargin
        } else {
          offsetX = 1 - wRatio - viewMargin
        }
      } else {
        if (offsetX < viewMargin) {
          offsetX = viewMargin
        }
        if (offsetX + wRatio > 1 - viewMargin) {
          offsetX = 1 - viewMargin - wRatio
        }
      }
    }
    return { offsetY, offsetX }
  }

  function adjustScroll() {
    calcMargins()
    setMargins()
    calcContent()
    scrollToNewPos()
  }

  function setPos() {
    const { divSize, content, margins, pos } = scroll
    const top = scrollDiv.current.scrollTop
    const left = scrollDiv.current.scrollLeft
    const [x, y] = currentFocus.current
      ? relativeOffset(currentFocus.current)
      : [left + viewX * divSize.width, top + viewY * divSize.height]
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
      x: moveX,
      offsetX: viewX,
      y: moveY,
      offsetY: viewY
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
      top: marginTop * height,
      bottom: marginBottom * height,
      left: marginLeft * width,
      right: marginRight * width
    }
  }

  function setMargins() {
    const {
      margins: { top, bottom, left, right }
    } = scroll
    const contentStyle = contentDiv.current.style
    if (marginTop) {
      contentStyle.marginTop = `${top}px`
    }
    if (marginBottom) {
      contentStyle.marginBottom = `${bottom}px`
    }
    if (marginLeft) {
      rightMarginDiv.current.style.left = `${left}px`
      contentStyle.marginLeft = `${left}px`
    }
    if (marginRight) {
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
