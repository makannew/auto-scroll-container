/*
 * Example to show  how auto-scroll-container
 * component is working
 *
 * @link https://github.com/makannew/auto-scroll-container
 * @file index.js
 * @author Makan Edrisi
 * @since 2020
 *
 */
import React from 'react'

import { AutoScrollContainer } from 'auto-scroll-container'

const App = () => {
  return (
    <AutoScrollContainer
      className='first-scroll'
      contentClass='first-scroll-content'
      topVoidRatio={1}
      bottomVoidRatio={1}
      iniPosY={0}
      iniPosYOffset={0}
    >
      <h4 id='label1'>First Scroll</h4>
      <h4 id='label2'>First scroll Content</h4>
      <h4 id='label3'>Second Scroll</h4>
      {/* 
      <AutoScrollContainer
        className='second-scroll'
        contentClass='second-scroll-content'
      > */}
      <h4 id='label4'>Second scroll Content</h4>
      <div className='form-container'>
        <form>
          <h3>Sample content 1</h3>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <div>
            <div>
              <input type='radio' id='option1' name='favorit' value='option1' />
              <label htmlFor='option1'>Option 1</label>
            </div>
            <div>
              <input type='radio' id='option2' name='favorit' value='option2' />
              <label htmlFor='option2'>Option 2</label>
            </div>
            <div>
              <input type='radio' id='option3' name='favorit' value='option3' />
              <label htmlFor='option3'>Option 3</label>
            </div>
          </div>
          <input type='text' placeholder='Phone Number' />
          <textarea placeholder='Address' rows='5' />
          <input type='submit' name='Submit' />
        </form>
      </div>
      <div className='form-container'>
        <form>
          <h3>Sample content 2</h3>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='submit' name='Submit' />
        </form>
      </div>
      {/* </AutoScrollContainer> */}
    </AutoScrollContainer>
  )
}

export default App
