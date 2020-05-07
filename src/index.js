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
  defaultViewPointX = 0.5,
  defaultViewPointY = 0.1
}) => {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const pos = useRef({ x: 0, offsetX: 0, y: 0, offsetY: 0 }).current
  // const voidSpace = useRef({ top: 0, bottom: 0, left: 0, right: 0 }).current
  const currentFocus = useRef(null)
  const [divSize, setDivSize] = useState(() => null)
  const [content, setContent] = useState(() => null)
  const [needsScroll, setNeedsScroll] = useState(() => false)

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

  // const getScrollPos = ({
  //   x,
  //   offsetX,
  //   y,
  //   offsetY,
  //   divSize,
  //   scrollWidth,
  //   scrollHeight
  // }) => {
  //   const topVoid = divSize.height * topVoidRatio
  //   const bottomVoid = divSize.height * bottomVoidRatio
  //   const contentHeight = scrollHeight - topVoid - bottomVoid
  //   const leftVoid = divSize.width * leftVoidRatio
  //   const rightVoid = divSize.width * rightVoidRatio
  //   const contentWidth = scrollWidth - leftVoid - rightVoid
  //   const top = y * contentHeight - offsetY * divSize.height + topVoid
  //   const left = x * contentWidth - offsetX * divSize.width + leftVoid

  //   return [top, left]
  // }

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
    // current focus default viewpoints
    currentFocus.current = null
  }

  // useEffect(() => {
  //   if (divSize === null) return
  //   if (currentFocus.current) {
  //     scrollDiv.current.scrollTop = pos.y
  //     console.log(pos.y)
  //   } else {
  //     const scrollHeight = scrollDiv.current.scrollHeight
  //     const scrollWidth = scrollDiv.current.scrollWidth
  //     const [top, left] = getScrollPos({
  //       ...pos,
  //       divSize,
  //       scrollWidth,
  //       scrollHeight
  //     })
  //     scrollDiv.current.scrollLeft = left
  //     scrollDiv.current.scrollTop = top
  //   }
  // }, [divSize])

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     const divComputedStyle = getComputedStyle(scrollDiv.current)
  //     const height = parseInt(divComputedStyle.height)
  //     const width = parseInt(divComputedStyle.width)
  //     setVoidSpace(width, height)
  //     resetScrollPos(width, height)
  //     setDivSize(() => ({ width, height }))
  //   }
  //   addEventListener('resize', handleResize)
  //   handleResize()
  //   return () => {
  //     removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (divSize === null) return
  //   setVoidSpace(divSize.width, divSize.height)
  // }, [bottomVoidRatio, topVoidRatio, leftVoidRatio, rightVoidRatio])

  // const [toggleUpdate, setToggleUpdate] = useState(false)
  // useEffect(() => {
  //   if (divSize === null) {
  //     setToggleUpdate(!toggleUpdate)
  //     return
  //   }
  //   const scrollHeight = scrollDiv.current.scrollHeight
  //   const scrollWidth = scrollDiv.current.scrollWidth
  //   const [top, left] = getScrollPos({
  //     x: iniPosX,
  //     offsetX: iniPosXOffset,
  //     y: iniPosY,
  //     offsetY: iniPosYOffset,
  //     divSize,
  //     scrollWidth,
  //     scrollHeight
  //   })
  //   scrollDiv.current.scrollLeft = left
  //   scrollDiv.current.scrollTop = top
  //   pos.x = iniPosX
  //   pos.offsetX = iniPosXOffset
  //   pos.y = iniPosY
  //   pos.offsetY = iniPosYOffset
  // }, [iniPosX, iniPosXOffset, iniPosY, iniPosYOffset, toggleUpdate])

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
  }, [content, needsScroll])

  useEffect(() => {
    pos.x = moveScrollX
    pos.offsetX = defaultViewPointX
    pos.y = moveScrollY
    pos.offsetY = defaultViewPointY
    setNeedsScroll(() => true)
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
