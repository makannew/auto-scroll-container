import React from 'react'
import { AutoScrollContainer } from 'auto-scroll-container'
import styles from '../two-scroll-example/two-scroll-example.module.css'

export default function TwoScrollExample() {
  return (
    <AutoScrollContainer
      className={styles['first-scroll']}
      contentClass={styles['first-scroll-content']}
    >
      <h4 id={styles['label1']}>First Scroll</h4>
      <h4 id={styles['label2']}>First scroll Content</h4>
      <h4 id={styles['label3']}>Second Scroll</h4>

      <AutoScrollContainer
        className={styles['second-scroll']}
        contentClass={styles['second-scroll-content']}
      >
        <h4 id={styles['label4']}>Second scroll Content</h4>

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
                />
                <label htmlFor='option1'>Option 1</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='option2'
                  name='favorit'
                  value='option2'
                />
                <label htmlFor='option2'>Option 2</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='option3'
                  name='favorit'
                  value='option3'
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
          <form>
            <h3>Sample content 2</h3>
            <input type='text' placeholder='First Name' autoComplete='lol' />
            <input type='text' placeholder='Last Name' autoComplete='lol' />
            <input type='submit' name='Submit' />
          </form>
        </div>
      </AutoScrollContainer>
    </AutoScrollContainer>
  )
}
