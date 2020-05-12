/*
 * Example to show  how auto-scroll-container
 * component works
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

  return (
    <>
      {example === 1 ? <SimpleExample /> : null}
      {example === 2 ? <TwoDimensionExample /> : null}
      {example === 3 ? <TwoScrollExample /> : null}
      <div className='buttons'>
        <button onClick={() => setExample(1)}>
          Test simple responsive scroll
        </button>
        <button onClick={() => setExample(2)}>
          Test two dimentional scroll
        </button>
        <button onClick={() => setExample(3)}>Test two nested scroll</button>
      </div>
    </>
  )
}

export default App
