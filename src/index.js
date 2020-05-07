import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export const AutoScrollContainer = ({
  children,
  className = '',
  contentClass = '',
  contentMarginTop = 0.9, // fraction of visible div size
  contentMarginBottom = 0.9,
  contentMarginLeft = 0,
  contentMarginRight = 0,
  moveScrollX = 0, // fraction of total content size
  moveScrollY = 0,
  defaultViewPointX = 0.1,
  defaultViewPointY = 0.1
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const pos = useRef({ x: 0, offsetX: 0, y: 0, offsetY: 0 }).current
  const currentFocus = useRef(null)
  const isAutoScrolling = useRef(false)
  const [divSize, setDivSize] = useState(() => null)
  const [content, setContent] = useState(() => null)
  const [needsScroll, setNeedsScroll] = useState(() => false)

  const handleScroll = (e) => {
    if (isAutoScrolling.current) {
      isAutoScrolling.current = false
      return
    }
    if (currentFocus.current) {
      setPos(currentFocus.current.x, currentFocus.current.y)
    } else {
      setPos()
    }
  }

  const setPos = (x, y) => {
    const top = scrollDiv.current.scrollTop
    const left = scrollDiv.current.scrollLeft
    if (x === undefined || y === undefined) {
      x = left + defaultViewPointX * divSize.width
      y = top + defaultViewPointY * divSize.height
    }
    pos.x = (x - content.marginLeft) / content.contentWidth
    pos.y = (y - content.marginTop) / content.contentHeight
    pos.offsetX = (x - left) / divSize.width
    pos.offsetY = (y - top) / divSize.height
  }

  const handleFocus = (e) => {
    currentFocus.current = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop
    }
    setPos(currentFocus.current.x, currentFocus.current.y)
  }

  const handleBlure = (e) => {
    currentFocus.current = null
    setPos()
  }

  useEffect(() => {
    if (content === null) return
    scrollDiv.current.scrollTop =
      pos.y * content.contentHeight -
      pos.offsetY * divSize.height +
      content.marginTop
    scrollDiv.current.scrollLeft =
      pos.x * content.contentWidth -
      pos.offsetX * divSize.width +
      content.marginLeft
    isAutoScrolling.current = true
  }, [content, needsScroll])

  useEffect(() => {
    pos.x = moveScrollX
    pos.offsetX = defaultViewPointX
    pos.y = moveScrollY
    pos.offsetY = defaultViewPointY
    setNeedsScroll((needsScroll) => !needsScroll)
  }, [moveScrollX, moveScrollY, defaultViewPointX, defaultViewPointY])

  useEffect(() => {
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
      contentStyle.marginRight = `${marginRight}px`
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
      setDivSize(() => ({ width, height }))
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
    >
      <div ref={contentDiv} className={contentClass}>
        {children}
      </div>
    </div>
  )
}
