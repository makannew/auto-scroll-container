import React, { useRef, useEffect } from 'react'
import useDelayedFunction from 'use-delayed-function'

export default function AutoScrollContainer({
  children,
  className = '',
  contentClass = '',
  marginTop = 0.5,
  marginBottom = 0.5,
  marginLeft = 0,
  marginRight = 0,
  scrollPos,
  setScrollPos,
  focus,
  setFocus,
  smoothScroll,
  viewMargin = { top: 0.05, bottom: 0.05, left: 0.05, right: 0.05 },
  autoScrollOnFocus = true,
  debouncingDelay = 200,
  keyboardPopDelay = 1500,
  signature = 'data-auto-scroll-container-signature'
}) {
  const scrollDiv = useRef()
  const contentDiv = useRef()
  const rightMarginDiv = useRef()
  const currentFocus = useRef(null)
  const childObserver = useRef(null)
  const mobileKeyboard = useRef(false)
  const justFocused = useRef(false)
  const prevViewMargin = useRef()

  const [debounceResize] = useDelayedFunction(calcDivSize, debouncingDelay)
  const [setJustFocusedLater] = useDelayedFunction(
    setJustFocused,
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
      x: scrollPos?.scrollX || 0,
      offsetX: scrollPos
        ? scrollPos.viewX === undefined
          ? 0.1
          : scrollPos.viewX
        : 0.1,
      y: scrollPos?.scrollY || 0,
      offsetY: scrollPos
        ? scrollPos.viewY === undefined
          ? 0.1
          : scrollPos.viewY
        : 0.1
    }
  }).current

  function setMobileKeyboard(status) {
    mobileKeyboard.current = status
  }

  function setJustFocused(status) {
    justFocused.current = status
  }

  const handleScroll = (e) => {
    if (scroll.isAutoScrolling) {
      scroll.isAutoScrolling = false
      return
    }
    if (mobileKeyboard.current) {
      scrollToNewPos({ ...scroll.pos, ...compensatedOffsets() })
      return
    }
    scroll.pos = currentPos()
    setPosState()
  }

  const handleFocus = (e) => {
    removeChildObserver()
    currentFocus.current = e.target
    if (setFocus) {
      setFocus(() => ({ element: currentFocus.current }))
    }
    scroll.immediateChild = null
    scroll.pos = currentPos()
    addChildObserver()
    if (autoScrollOnFocus) {
      setJustFocused(true)
      scrollToNewPos({ ...scroll.pos, ...compensatedOffsets() })
      setJustFocusedLater(false)
    }
    setPosState()
  }

  const handleBlure = (e) => {
    removeChildObserver()
    currentFocus.current = null
    if (setFocus) {
      setFocus(() => null)
    }
    scroll.pos = currentPos()
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
    calcDivSize()
    setMobileKeyboard(false)
    adjustScroll()
    resizeParent()
  }

  function handleResize() {
    if (scroll.initializing) return
    if (justFocused.current) {
      setMobileKeyboard(true)
    }
    if (scroll.immediateChild) return
    debounceResize().then(() => {
      setMobileKeyboard(false)
      adjustScroll()
      resizeParent()
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    if (scroll.initializing || !scrollPos) return
    if (scrollPos.autoScroll) {
      scrollPos.autoScroll = false
      return
    }
    const { scrollX = 0, viewX = 0.1, scrollY = 0, viewY = 0.1 } = scrollPos
    scroll.pos = {
      x: scrollX,
      offsetX: viewX,
      y: scrollY,
      offsetY: viewY
    }
    scrollToNewPos({ ...scroll.pos })
  }, [scrollPos])

  useEffect(() => {
    if (scroll.initializing) return
    adjustScroll()
  }, [marginTop, marginBottom, marginLeft, marginRight])

  useEffect(() => {
    if (scroll.initializing) return
    if (prevViewMargin.current) {
      const { top, bottom, left, right } = prevViewMargin.current
      if (
        viewMargin.top != top ||
        viewMargin.bottom != bottom ||
        viewMargin.left != left ||
        viewMargin.right != right
      ) {
        adjustScroll()
      }
    }
    return () => {
      prevViewMargin.current = viewMargin
    }
  }, [viewMargin])

  useEffect(() => {
    scrollDiv.current.setAttribute(signature, '0')
    childObserver.current = new MutationObserver(resizeByChild)
    return () => {
      childObserver.current.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!smoothScroll) return
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame
    const cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame
    const {
      smoothFunction = (x) => 1 - Math.pow(1 - x, 3), // (x) => x * x * x
      duration = 800,
      scrollX: fx = 0,
      scrollY: fy = 0,
      viewX: fvx = 0.1,
      viewY: fvy = 0.1
    } = smoothScroll
    const { x: sx, y: sy, offsetX: svx, offsetY: svy } = scroll.pos
    let startTime
    let lastAnimationID
    function smoothPos(timestamp) {
      if (startTime === undefined) {
        startTime = timestamp
      }
      const passedT = timestamp - startTime
      const r = smoothFunction(passedT / duration)
      scroll.pos = {
        x: sx + (fx - sx) * r,
        y: sy + (fy - sy) * r,
        offsetX: svx + (fvx - svx) * r,
        offsetY: svy + (fvy - svy) * r
      }
      scrollToNewPos({ ...scroll.pos })
      scroll.pos = currentPos()
      setPosState()
      if (passedT < duration) {
        lastAnimationID = requestAnimationFrame(smoothPos)
      }
    }
    lastAnimationID = requestAnimationFrame(smoothPos)
    return () => {
      cancelAnimationFrame(lastAnimationID)
    }
  }, [smoothScroll])

  useEffect(() => {
    scrollDiv.current.style.visibility = 'hidden'

    setPositionRelative()
    calcDivSize()
    adjustScroll()

    scroll.initializing = false
    scrollDiv.current.style.visibility = 'visible'
  }, [])

  useEffect(() => {
    if (!focus || !focus.element || currentFocus.current === focus.element)
      return
    focus.element.focus()
  }, [focus])

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
      const { top = 0, bottom = 0, left = 0, right = 0 } = viewMargin
      let hRatio = height / divSize.height
      let wRatio = width / divSize.width
      if (top + hRatio + bottom > 1) {
        if (offsetY + hRatio / 2 > 0.5) {
          offsetY = top
        } else {
          offsetY = 1 - hRatio - bottom
        }
      } else {
        if (offsetY < top) {
          offsetY = top
        }
        if (offsetY + hRatio > 1 - bottom) {
          offsetY = 1 - bottom - hRatio
        }
      }
      if (left + wRatio + right > 1) {
        if (offsetX + wRatio / 2 > 0.5) {
          offsetX = left
        } else {
          offsetX = 1 - wRatio - right
        }
      } else {
        if (offsetX < left) {
          offsetX = left
        }
        if (offsetX + wRatio > 1 - right) {
          offsetX = 1 - right - wRatio
        }
      }
    }
    return { offsetY, offsetX }
  }

  function adjustScroll() {
    calcMargins()
    setMargins()
    calcContent()
    scrollToNewPos({ ...scroll.pos, ...compensatedOffsets() })
    scroll.pos = currentPos()
    setPosState()
  }

  function currentPos() {
    const { divSize, content, margins } = scroll
    const { viewX = 0.1, viewY = 0.1 } = scrollPos || { viewX: 0.1, viewY: 0.1 }
    const top = scrollDiv.current.scrollTop
    const left = scrollDiv.current.scrollLeft
    const [x, y] = currentFocus.current
      ? relativeOffset(currentFocus.current)
      : [left + viewX * divSize.width, top + viewY * divSize.height]
    return {
      x: (x - margins.left) / content.width,
      y: (y - margins.top) / content.height,
      offsetX: (x - left) / divSize.width,
      offsetY: (y - top) / divSize.height
    }
  }

  function setPosState() {
    if (!setScrollPos) return
    const {
      pos: { x, y, offsetX, offsetY }
    } = scroll
    setScrollPos(() => ({
      scrollX: x,
      viewX: offsetX,
      scrollY: y,
      viewY: offsetY,
      autoScroll: true
    }))
  }

  function scrollToNewPos({ x, y, offsetX, offsetY }) {
    const { content, divSize, margins } = scroll
    scroll.isAutoScrolling = true
    scrollDiv.current.scrollTop =
      y * content.height - offsetY * divSize.height + margins.top
    scrollDiv.current.scrollLeft =
      x * content.width - offsetX * divSize.width + margins.left
  }

  function setPositionRelative() {
    if (getComputedStyle(scrollDiv.current).position === 'static') {
      scrollDiv.current.style.position = 'relative'
    }
  }

  function calcDivSize() {
    const rect = scrollDiv.current.getBoundingClientRect()
    scroll.divSize = {
      width: rect.width,
      // mobile browsers viewport hack
      height: Math.min(rect.height, document.documentElement.clientHeight)
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
