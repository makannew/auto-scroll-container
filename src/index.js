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
  scrollX = 0, // fraction of total content size
  scrollY = 0,
  viewX = 0.1,
  viewY = 0.1,
  setScrollX,
  setScrollY,
  setViewX,
  setViewY,
  smoothScroll,
  viewMargin = 0.05,
  autoScrollOnFocus = true,
  debouncingDelay = 200,
  keyboardPopDelay = 200,
  signature = 'data-auto-scroll-container-signature',
  setAnalizer
}) => {
  const totalCall = useRef(0)
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const rightMarginDiv = useRef()
  const currentFocus = useRef(null)
  const childObserver = useRef(null)
  const browserScrolling = useRef('no')
  const prevPos = useRef({
    x: scrollX,
    offsetX: viewX,
    y: scrollY,
    offsetY: viewY
  })
  const [debounceResize] = useDelayedFunction(calcDivSize, debouncingDelay)
  const [setBrowserScrollingLater, cancelBrowserScrolling] = useDelayedFunction(
    setBrowserScrolling,
    keyboardPopDelay
  )

  const scroll = useRef({
    initializing: true,
    isAutoScrolling: false,
    immediateChild: null,
    divSize: undefined,
    margins: undefined,
    content: undefined,
    pos: {
      x: scrollX,
      offsetX: viewX,
      y: scrollY,
      offsetY: viewY
    }
  }).current

  function setBrowserScrolling(status) {
    browserScrolling.current = status
  }

  const handleScroll = (e) => {
    ++totalCall.current
    setAnalizer(`v4 ${browserScrolling.current} ${totalCall.current}`)
    if (scroll.isAutoScrolling) {
      e.stopPropagation()
      scroll.isAutoScrolling = false
      return
    }
    if (browserScrolling.current === 'stupid scrolling') {
      e.stopImmediatePropagation()
      e.stopPropagation()
      e.preventDefault()
      return
    }
    setPos()
    setPosState()
  }

  const handleFocus = (e) => {
    removeChildObserver()
    currentFocus.current = e.target
    scroll.immediateChild = null
    setPos()
    addChildObserver()
    if (autoScrollOnFocus) {
      setBrowserScrolling('just focused')
      setBrowserScrollingLater('no').then(() => {
        scrollToNewPos()
        setPosState()
      })
    } else {
      setPosState()
    }
  }

  const handleBlure = (e) => {
    removeChildObserver()
    currentFocus.current = null
    setPos()
    setPosState()
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
    // if (browserScrolling.current==="just focused"){
    //   setBrowserScrolling("stupid scrolling")
    // }
    calcDivSize()
    adjustScroll()
    resizeParent()
  }

  function handleResize() {
    if (scroll.initializing || scroll.immediateChild) return
    if (browserScrolling.current === 'just focused') {
      cancelBrowserScrolling()
      setBrowserScrolling('stupid scrolling')
    }
    debounceResize().then(() => {
      setBrowserScrolling('no')
      adjustScroll()
      resizeParent()
    })
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
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    if (scroll.initializing) return
    const {
      pos: { x, y, offsetX, offsetY }
    } = scroll
    const { prevSX, prevSY, prevVX, prevVY } = prevPos.current
    if (
      (setScrollX && scrollX != x) ||
      (setScrollY && scrollY != y) ||
      (setViewX && viewX != offsetX) ||
      (setViewY && viewY != offsetY) ||
      (!setScrollX && scrollX != prevSX) ||
      (!setScrollY && scrollY != prevSY) ||
      (!setViewX && viewX != prevVX) ||
      (!setViewY && viewY != prevVY)
    ) {
      userPos()
      scrollToNewPos()
    }
    return () => {
      prevPos.current = {
        prevSX: scrollX,
        prevSY: scrollY,
        prevVX: viewX,
        prevVY: viewY
      }
    }
  }, [scrollX, scrollY, viewX, viewY])

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
    setPos()
    setPosState()
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

  function setPosState() {
    const {
      pos: { x, y, offsetX, offsetY }
    } = scroll
    if (setScrollY) {
      setScrollY(y)
    }
    if (setScrollX) {
      setScrollX(x)
    }
    if (setViewY) {
      setViewY(offsetY)
    }
    if (setViewX) {
      setViewX(offsetX)
    }
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
      x: scrollX,
      offsetX: viewX,
      y: scrollY,
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
      // width: scrollDiv.current.clientWidth,
      // height: scrollDiv.current.clientHeight
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
