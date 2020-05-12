import React from 'react'
import { AutoScrollContainer } from 'auto-scroll-container'
import styles from '../two-dimension-example/two-dimension-example.module.css'

export default function TwoDimensionExample() {
  return (
    <AutoScrollContainer
      className={styles['scroll-container']}
      contentClass={styles['scroll-content']}
      contentMarginLeft={0.9}
      contentMarginRight={0.9}
    >
      <h4 id={styles['label1']}>Scroll container</h4>
      <h4 id={styles['label2']}>Scrollablr Content</h4>
      <p className='description'>
        Focus on an Input and remember its position then resize the page.
        AutoScroll will maintain its position relative to new viewport size.
      </p>

      <div className={styles['form-container']}>
        <form>
          <h3>Sample content 1</h3>

          <input type='text' placeholder='First Name' autoComplete='lol' />
          <input type='text' placeholder='Last Name' autoComplete='lol' />
          <div>
            <div>
              <input
                type='radio'
                id='option1'
                name='favorit'
                value='option1'
                autoComplete='lol'
              />
              <label htmlFor='option1'>Option 1</label>
            </div>
            <div>
              <input
                type='radio'
                id='option2'
                name='favorit'
                value='option2'
                autoComplete='lol'
              />
              <label htmlFor='option2'>Option 2</label>
            </div>
            <div>
              <input
                type='radio'
                id='option3'
                name='favorit'
                value='option3'
                autoComplete='lol'
              />
              <label htmlFor='option3'>Option 3</label>
            </div>
          </div>
          <input type='text' placeholder='Phone Number' autoComplete='lol' />
          <textarea placeholder='Address' rows='5' autoComplete='lol' />
          <input type='submit' name='Submit' />
        </form>
      </div>
      <div className={styles['form-container']}>
        <form autoComplete='off'>
          <h3>Sample content 2</h3>
          <input type='text' placeholder='First Name' autoComplete='lol' />
          <input type='text' placeholder='Last Name' autoComplete='lol' />
          <textarea
            className={styles['story']}
            placeholder='Story'
            rows='25'
            autoComplete='lol'
          />

          <input type='submit' name='Submit' />
        </form>
      </div>
    </AutoScrollContainer>
  )
}
