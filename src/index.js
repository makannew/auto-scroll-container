import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

export const AutoScrollContainer = ({
  children,
  className = '',
  contentClass = '',
  injectMargin = { top: 0.9, bottom: 0.9, left: 0, right: 0 },
  topVoidRatio = 0.9, // fraction of visible div height 0 to 1
  bottomVoidRatio = 0.9, // fraction of visible div height 0 to 1
  leftVoidRatio = 0,
  rightVoidRatio = 0,
  moveScroll = {
    contentWidthRatio: 0,
    viewWidthRatio: 0,
    contentHeightRatio: 0,
    viewHeightRatio: 0
  },
  iniPosX = 0,
  iniPosXOffset = 0,
  iniPosY = 0, // fraction of all content height 0 to 1
  iniPosYOffset = 0.2, // fraction of visible div height 0 to 1
  defaultViewPoint = { x: 0.5, y: 0.5 }
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const pos = useRef({ x: 0, offsetX: 0, y: 0, offsetY: 0 }).current
  const voidSpace = useRef({ top: 0, bottom: 0, left: 0, right: 0 }).current
  const currentFocus = useRef(null)
  const [divSize, setDivSize] = useState(() => null)

  const resetScrollPos = (width, height) => {
    if (currentFocus.current) {
      scrollDiv.current.scrollTop = pos.y
      console.log(pos.y)
    } else {
      const scrollHeight = scrollDiv.current.scrollHeight
      const scrollWidth = scrollDiv.current.scrollWidth
      const [top, left] = getScrollPos({
        ...pos,
        divSize,
        scrollWidth,
        scrollHeight
      })
      scrollDiv.current.scrollLeft = left
      scrollDiv.current.scrollTop = top
    }
  }

  const setVoidSpace = (width, height) => {
    const contentStyle = contentDiv.current.style
    if (topVoidRatio) {
      voidSpace.top = topVoidRatio * height
      contentStyle.marginTop = `${voidSpace.top}px`
    }
    if (bottomVoidRatio) {
      voidSpace.bottom = bottomVoidRatio * height
      contentStyle.marginBottom = `${voidSpace.bottom}px`
    }
    if (leftVoidRatio) {
      voidSpace.left = leftVoidRatio * width
      contentStyle.marginLeft = `${voidSpace.left}px`
    }
    if (rightVoidRatio) {
      voidSpace.right = rightVoidRatio * width
      contentStyle.marginRight = `${voidSpace.right}px`
    }
  }

  const getScrollPos = ({
    x,
    offsetX,
    y,
    offsetY,
    divSize,
    scrollWidth,
    scrollHeight
  }) => {
    const topVoid = divSize.height * topVoidRatio
    const bottomVoid = divSize.height * bottomVoidRatio
    const contentHeight = scrollHeight - topVoid - bottomVoid
    const leftVoid = divSize.width * leftVoidRatio
    const rightVoid = divSize.width * rightVoidRatio
    const contentWidth = scrollWidth - leftVoid - rightVoid
    const top = y * contentHeight - offsetY * divSize.height + topVoid
    const left = x * contentWidth - offsetX * divSize.width + leftVoid

    return [top, left]
  }

  const setPosFromFocus = (x, y, focusX, focusY) => {}
  const handleScroll = (e) => {
    // pos.x =
    //   (e.target.scrollLeft ? e.target.scrollLeft : 0) / e.target.scrollWidth
    // pos.y =
    //   (e.target.scrollTop ? e.target.scrollTop : 0) / e.target.scrollHeight
    // console.log(scrollDiv.current.scrollHeight, contentDiv.current.scrollHeight)
  }

  const handleFocus = (e) => {
    currentFocus.current = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop
    }
    setPosFromFocus(currentFocus.current.x, currentFocus.current.y)
  }

  const handleBlure = (e) => {
    currentFocus.current = null
  }

  useEffect(() => {
    if (divSize === null) return
    if (currentFocus.current) {
      scrollDiv.current.scrollTop = pos.y
      console.log(pos.y)
    } else {
      const scrollHeight = scrollDiv.current.scrollHeight
      const scrollWidth = scrollDiv.current.scrollWidth
      const [top, left] = getScrollPos({
        ...pos,
        divSize,
        scrollWidth,
        scrollHeight
      })
      scrollDiv.current.scrollLeft = left
      scrollDiv.current.scrollTop = top
    }
  }, [divSize])

  useLayoutEffect(() => {
    const handleResize = () => {
      const divComputedStyle = getComputedStyle(scrollDiv.current)
      const height = parseInt(divComputedStyle.height)
      const width = parseInt(divComputedStyle.width)
      setVoidSpace(width, height)
      resetScrollPos(width, height)
      setDivSize(() => ({ width, height }))
    }
    addEventListener('resize', handleResize)
    handleResize()
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (divSize === null) return
    setVoidSpace(divSize.width, divSize.height)
  }, [bottomVoidRatio, topVoidRatio, leftVoidRatio, rightVoidRatio])

  const [toggleUpdate, setToggleUpdate] = useState(false)
  useEffect(() => {
    if (divSize === null) {
      setToggleUpdate(!toggleUpdate)
      return
    }
    const scrollHeight = scrollDiv.current.scrollHeight
    const scrollWidth = scrollDiv.current.scrollWidth
    const [top, left] = getScrollPos({
      x: iniPosX,
      offsetX: iniPosXOffset,
      y: iniPosY,
      offsetY: iniPosYOffset,
      divSize,
      scrollWidth,
      scrollHeight
    })
    scrollDiv.current.scrollLeft = left
    scrollDiv.current.scrollTop = top
    pos.x = iniPosX
    pos.offsetX = iniPosXOffset
    pos.y = iniPosY
    pos.offsetY = iniPosYOffset
  }, [iniPosX, iniPosXOffset, iniPosY, iniPosYOffset, toggleUpdate])

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
