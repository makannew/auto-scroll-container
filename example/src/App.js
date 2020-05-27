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
  const [activeMode, setActiveMode] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [viewY, setViewY] = useState(0.1)
  const [scrollX, setScrollX] = useState(0)
  const [viewX, setViewX] = useState(0.1)

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'scrollY':
        setScrollY(e.target.value)
        break
      case 'viewY':
        setViewY(e.target.value)
        break
      case 'scrollX':
        setScrollX(e.target.value)
        break
      case 'viewX':
        setViewX(e.target.value)
        break
      default:
        break
    }
  }
  const passivePara = { scrollY, viewY, scrollX, viewX }
  const activePara = { setScrollY, setViewY, setScrollX, setViewX }
  const para = activeMode
    ? { ...passivePara, ...activePara }
    : { ...passivePara }

  return (
    <>
      {example === 1 ? <SimpleExample {...para} /> : null}
      {example === 2 ? (
        <TwoDimensionExample {...para} marginLeft={0.9} marginRight={0.9} />
      ) : null}
      {example === 3 ? <TwoScrollExample /> : null}
      <div className='buttons'>
        <button onClick={() => setExample(1)}>
          Test simple responsive scroll
        </button>
        <button onClick={() => setExample(2)}>
          Test two dimentional scroll
        </button>
        <button onClick={() => setExample(3)}>Test nested scrolls</button>

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

        <label htmlFor='scrollY'>{`scrollY = ${Number(scrollY).toFixed(
          3
        )}`}</label>
        <input
          id='scrollY'
          type='range'
          min='0'
          max='1'
          step='0.05'
          value={scrollY}
          name='scrollY'
          onChange={handleChange}
        />

        <label htmlFor='viewY'>{`viewY = ${Number(viewY).toFixed(3)}`}</label>
        <input
          id='viewY'
          type='range'
          min='0'
          max='1'
          step='0.05'
          value={viewY}
          name='viewY'
          onChange={handleChange}
        />
        {example === 2 ? (
          <>
            <label htmlFor='scrollX'>{`scrollX = ${Number(scrollX).toFixed(
              3
            )}`}</label>
            <input
              id='scrollX'
              type='range'
              min='0'
              max='1'
              step='0.05'
              value={scrollX}
              name='scrollX'
              onChange={handleChange}
            />

            <label htmlFor='viewX'>{`viewX = ${Number(viewX).toFixed(
              3
            )}`}</label>
            <input
              id='viewX'
              type='range'
              min='0'
              max='1'
              step='0.05'
              value={viewX}
              name='viewX'
              onChange={handleChange}
            />
          </>
        ) : null}
      </div>
    </>
  )
}

export default App
