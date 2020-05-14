import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import useDelayedState from 'use-delayed-state'

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
  focusBoundary = 0.05,
  autoScrollOnFocus = true,
  debouncingDelay = 200
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const topDiv = useRef()
  const pos = useRef({ x: 0, offsetX: 0, y: 0, offsetY: 0 }).current
  const currentFocus = useRef(null)
  const isAutoScrolling = useRef(false)
  const [divSize, setDivSize] = useDelayedState(() => null)
  const [content, setContent] = useState(() => null)
  const [needsScroll, setNeedsScroll] = useState(() => false)
  const [initializing, setInitializing] = useState(() => true)

  const handleScroll = (e) => {
    if (isAutoScrolling.current) {
      isAutoScrolling.current = false
      return
    }
    setPos()
  }

  const setPos = () => {
    if (content === null || divSize === null) return
    const top = scrollDiv.current.scrollTop
    const left = scrollDiv.current.scrollLeft
    let x, y
    if (currentFocus.current) {
      x = currentFocus.current.offsetLeft
      y = currentFocus.current.offsetTop
    } else {
      x = left + defaultViewPointX * divSize.width
      y = top + defaultViewPointY * divSize.height
    }
    pos.x = (x - content.marginLeft) / content.contentWidth
    pos.y = (y - content.marginTop) / content.contentHeight
    pos.offsetX = (x - left) / divSize.width
    pos.offsetY = (y - top) / divSize.height
  }

  const handleFocus = (e) => {
    if (e.currentTarget !== e.target.offsetParent) return
    currentFocus.current = e.target
    setPos()
    if (autoScrollOnFocus) {
      setNeedsScroll((needsScroll) => !needsScroll)
    }
  }

  const handleBlure = (e) => {
    currentFocus.current = null
    setPos()
  }

  const compensatedOffsets = () => {
    let offsetY = pos.offsetY
    let offsetX = pos.offsetX
    if (currentFocus.current) {
      const { height, width } = currentFocus.current.getBoundingClientRect()
      let hRatio = height / divSize.height
      let wRatio = width / divSize.width
      if (focusBoundary + hRatio + focusBoundary > 1) {
        if (offsetY + hRatio / 2 > 0.5) {
          offsetY = focusBoundary
        } else {
          offsetY = 1 - hRatio - focusBoundary
        }
      } else {
        if (offsetY < focusBoundary) {
          offsetY = focusBoundary
        }
        if (offsetY + hRatio > 1 - focusBoundary) {
          offsetY = 1 - focusBoundary - hRatio
        }
      }
      if (focusBoundary + wRatio + focusBoundary > 1) {
        if (offsetX + wRatio / 2 > 0.5) {
          offsetX = focusBoundary
        } else {
          offsetX = 1 - wRatio - focusBoundary
        }
      } else {
        if (offsetX < focusBoundary) {
          offsetX = focusBoundary
        }
        if (offsetX + wRatio > 1 - focusBoundary) {
          offsetX = 1 - focusBoundary - wRatio
        }
      }
    }
    return { offsetY, offsetX }
  }

  useLayoutEffect(() => {
    if (content === null) return
    const { offsetY, offsetX } = compensatedOffsets()
    scrollDiv.current.scrollTop =
      pos.y * content.contentHeight -
      offsetY * divSize.height +
      content.marginTop
    scrollDiv.current.scrollLeft =
      pos.x * content.contentWidth -
      offsetX * divSize.width +
      content.marginLeft
    isAutoScrolling.current = true
    if (initializing) {
      setInitializing(() => false)
    }
  }, [content, needsScroll])

  useEffect(() => {
    pos.x = moveScrollX
    pos.offsetX = defaultViewPointX
    pos.y = moveScrollY
    pos.offsetY = defaultViewPointY
    setNeedsScroll((needsScroll) => !needsScroll)
  }, [moveScrollX, moveScrollY, defaultViewPointX, defaultViewPointY])

  useLayoutEffect(() => {
    if (divSize === null) return
    const contentStyle = contentDiv.current.style
    const marginTop = contentMarginTop * divSize.height
    const marginBottom = contentMarginBottom * divSize.height
    const marginLeft = contentMarginLeft * divSize.width
    const marginRight = contentMarginRight * divSize.width

    if (contentMarginTop) {
      contentStyle.marginTop = `${marginTop}px`
    }
    if (contentMarginBottom) {
      contentStyle.marginBottom = `${marginBottom}px`
    }
    if (contentMarginLeft) {
      contentStyle.marginLeft = `${marginLeft}px`
    }
    if (contentMarginRight) {
      topDiv.current.style.left = `${
        scrollDiv.current.scrollWidth + marginRight
      }px`
    }

    const scrollWidth = scrollDiv.current.scrollWidth
    const scrollHeight = scrollDiv.current.scrollHeight
    const contentWidth = scrollWidth - marginLeft - marginRight
    const contentHeight = scrollHeight - marginTop - marginBottom
    setContent(() => ({
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      scrollWidth,
      scrollHeight,
      contentWidth,
      contentHeight
    }))
  }, [
    divSize,
    contentMarginTop,
    contentMarginBottom,
    contentMarginLeft,
    contentMarginRight
  ])

  useEffect(() => {
    const handleResize = () => {
      const width = scrollDiv.current.offsetWidth
      const height = scrollDiv.current.offsetHeight
      setDivSize(() => ({ width, height }), debouncingDelay)
    }
    addEventListener('resize', handleResize)
    handleResize()
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={scrollDiv}
      className={className}
      onScroll={handleScroll}
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlure}
      style={initializing ? { visibility: 'hidden' } : null}
    >
      <div
        ref={topDiv}
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
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
