/*
 * Example for auto-scroll-container
 *
 * @link https://github.com/makannew/auto-scroll-container
 * @file index.js
 * @author Makan Edrisi
 * @since 2020
 *
 */
import React, { useState } from 'react'
import TwoScrollExample from './components/two-scroll-example/two-scroll-example'
import SimpleExample from './components/simple-example/simple-example'
import TwoDimensionExample from './components/two-dimension-example/two-dimension-example'

const App = () => {
  const [example, setExample] = useState(1)
  const [menuState, setMenuState] = useState(true)
  const [activeMode, setActiveMode] = useState(true)
  const [autoScrollOnFocus, setAutoScrollOnFocus] = useState(true)
  const [scrollPos, setScrollPos] = useState(() => ({
    scrollX: 0,
    viewX: 0.1,
    scrollY: 0,
    viewY: 0.1
  }))
  const [marginTop, setMarginTop] = useState(0.5)
  const [marginBottom, setMarginBottom] = useState(0.5)
  const [marginLeft, setMarginLeft] = useState(0.5)
  const [marginRight, setMarginRight] = useState(0.5)
  const [nestedScrollPos, setNestedScrollPos] = useState({
    scrollY: 0,
    viewY: 0.1
  })
  // const [nestedViewY, setNestedViewY] = useState(0.1)
  const [nestedMarginTop, setNestedMarginTop] = useState(0.5)
  const [nestedMarginBottom, setNestedMarginBottom] = useState(0.5)

  function resetScrolls() {
    setScrollPos(() => ({ scrollX: 0, viewX: 0.1, scrollY: 0, viewY: 0.1 }))
    setMarginTop(0.5)
    setMarginBottom(0.5)
    setMarginLeft(0.5)
    setMarginRight(0.5)
  }

  const handleChange = (e) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'scrollY':
        setScrollPos((scrollPos) => ({ ...scrollPos, scrollY: value }))
        break
      case 'viewY':
        setScrollPos((scrollPos) => ({ ...scrollPos, viewY: value }))
        break
      case 'scrollX':
        setScrollPos((scrollPos) => ({ ...scrollPos, scrollX: value }))
        break
      case 'viewX':
        setScrollPos((scrollPos) => ({ ...scrollPos, viewX: value }))
        break
      case 'marginTop':
        setMarginTop(value)
        break
      case 'marginBottom':
        setMarginBottom(value)
        break
      case 'marginLeft':
        setMarginLeft(value)
        break
      case 'marginRight':
        setMarginRight(value)
        break
      case 'nestedScrollY':
        setNestedScrollPos((nestedScrollPos) => ({
          ...nestedScrollPos,
          scrollY: value
        }))
        break
      case 'nestedViewY':
        setNestedScrollPos((nestedScrollPos) => ({
          ...nestedScrollPos,
          viewY: value
        }))
        break
      case 'nestedMarginTop':
        setNestedMarginTop(value)
        break
      case 'nestedMarginBottom':
        setNestedMarginBottom(value)
        break
      default:
        break
    }
  }
  const passivePara = {
    autoScrollOnFocus,
    scrollPos,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    nestedScrollPos,
    nestedMarginTop,
    nestedMarginBottom
  }
  const activePara = {
    setScrollPos,
    setNestedScrollPos
  }
  const para = activeMode
    ? { ...passivePara, ...activePara }
    : { ...passivePara }

  return (
    <div className='app'>
      <div className={`options ${menuState === false ? 'options-hide' : ''}`}>
        <h3 onClick={() => setMenuState(!menuState)}>Hide26</h3>
        <h3
          className={`menu-button ${menuState === false ? 'visible' : ''}`}
          onClick={() => setMenuState(!menuState)}
        >
          Menu
        </h3>
        {/* <p id='temp'>{analizer}</p> */}
        <div className='containers'>
          <button
            onClick={() => {
              resetScrolls()
              setExample(1)
            }}
          >
            Simple responsive scroll
          </button>
          <button
            onClick={() => {
              resetScrolls()
              setExample(2)
            }}
          >
            Two dimentional scrolls
          </button>
          <button
            onClick={() => {
              resetScrolls()
              setExample(3)
            }}
          >
            Nested scrolls
          </button>
        </div>

        <div className='page-divider'></div>
        <div className='containers'>
          <div>
            <label htmlFor='active'>Active mode</label>

            <input
              type='checkbox'
              id='active'
              name='active'
              value='active'
              checked={activeMode}
              onChange={(e) => {
                setActiveMode(e.target.checked)
              }}
            />
          </div>

          <div>
            <label htmlFor='autofocus'>Auto scroll on focus</label>
            <input
              type='checkbox'
              id='autofocus'
              name='autofocus'
              value='autofocus'
              checked={autoScrollOnFocus}
              onChange={(e) => {
                setAutoScrollOnFocus(e.target.checked)
              }}
            />
          </div>
          <label htmlFor='scrollY'>{`scrollY = ${Number(
            scrollPos.scrollY
          ).toFixed(3)}`}</label>
          <input
            id='scrollY'
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={scrollPos.scrollY}
            name='scrollY'
            onChange={handleChange}
          />

          <label htmlFor='viewY'>{`viewY = ${Number(scrollPos.viewY).toFixed(
            3
          )}`}</label>
          <input
            id='viewY'
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={scrollPos.viewY}
            name='viewY'
            onChange={handleChange}
          />
          {example === 2 ? (
            <>
              <label htmlFor='scrollX'>{`scrollX = ${Number(
                scrollPos.scrollX
              ).toFixed(3)}`}</label>
              <input
                id='scrollX'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={scrollPos.scrollX}
                name='scrollX'
                onChange={handleChange}
              />

              <label htmlFor='viewX'>{`viewX = ${Number(
                scrollPos.viewX
              ).toFixed(3)}`}</label>
              <input
                id='viewX'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={scrollPos.viewX}
                name='viewX'
                onChange={handleChange}
              />
            </>
          ) : null}
        </div>
        <div className='page-divider'></div>
        <div className='containers'>
          <label htmlFor='marginTop'>{`marginTop = ${Number(marginTop).toFixed(
            3
          )}`}</label>
          <input
            id='marginTop'
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={marginTop}
            name='marginTop'
            onChange={handleChange}
          />
          <label htmlFor='marginBottom'>{`marginBottom = ${Number(
            marginBottom
          ).toFixed(3)}`}</label>
          <input
            id='marginBottom'
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={marginBottom}
            name='marginBottom'
            onChange={handleChange}
          />
          {example === 2 ? (
            <>
              <label htmlFor='marginLeft'>{`marginLeft = ${Number(
                marginLeft
              ).toFixed(3)}`}</label>
              <input
                id='marginLeft'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={marginLeft}
                name='marginLeft'
                onChange={handleChange}
              />

              <label htmlFor='marginRight'>{`marginRight = ${Number(
                marginRight
              ).toFixed(3)}`}</label>
              <input
                id='marginRight'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={marginRight}
                name='marginRight'
                onChange={handleChange}
              />
            </>
          ) : null}
        </div>
        {example === 3 ? (
          <>
            <div className='page-divider'></div>
            <div className='containers'>
              {example === 3 ? (
                <>
                  <h3>Nested Scroll</h3>

                  <label htmlFor='nestedScrollY'>{`scrollY = ${Number(
                    nestedScrollPos.scrollY
                  ).toFixed(3)}`}</label>
                  <input
                    id='nestedScrollY'
                    type='range'
                    min='0'
                    max='1'
                    step='0.05'
                    value={nestedScrollPos.scrollY}
                    name='nestedScrollY'
                    onChange={handleChange}
                  />

                  <label htmlFor='nestedViewY'>{`viewY = ${Number(
                    nestedScrollPos.viewY
                  ).toFixed(3)}`}</label>
                  <input
                    id='nestedViewY'
                    type='range'
                    min='0'
                    max='1'
                    step='0.05'
                    value={nestedScrollPos.viewY}
                    name='nestedViewY'
                    onChange={handleChange}
                  />
                </>
              ) : null}
            </div>
            <div className='containers'>
              <label htmlFor='nestedMarginTop'>{`marginTop = ${Number(
                nestedMarginTop
              ).toFixed(3)}`}</label>
              <input
                id='nestedMarginTop'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={nestedMarginTop}
                name='nestedMarginTop'
                onChange={handleChange}
              />

              <label htmlFor='nestedMarginBottom'>{`marginBottom = ${Number(
                nestedMarginBottom
              ).toFixed(3)}`}</label>
              <input
                id='nestedMarginBottom'
                type='range'
                min='0'
                max='1'
                step='0.05'
                value={nestedMarginBottom}
                name='nestedMarginBottom'
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
      </div>
      {example === 1 ? (
        <SimpleExample {...para} marginLeft={0} marginRight={0} />
      ) : null}
      {example === 2 ? <TwoDimensionExample {...para} /> : null}
      {example === 3 ? <TwoScrollExample {...para} /> : null}
    </div>
  )
}

export default App
