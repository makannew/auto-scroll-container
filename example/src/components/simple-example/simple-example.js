import React from 'react'
import { AutoScrollContainer } from 'auto-scroll-container'
import styles from '../simple-example/simple-example.module.css'

export default function SimpleExample() {
  return (
    <AutoScrollContainer
      className={styles['scroll-container']}
      contentClass={styles['scroll-content']}
    >
      <h4 id={styles['label1']}>Scroll container</h4>
      <h4 id={styles['label2']}>Scrollablr Content</h4>
      <p className={styles['description']}>
        Focus on an Input and remember its position then resize the page.
        AutoScroll will maintain its position relative to new viewport size.
      </p>

      <div className={styles['form-container']}>
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
      <div className={styles['form-container']}>
        <form>
          <h3>Sample content 2</h3>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='submit' name='Submit' />
        </form>
      </div>
    </AutoScrollContainer>
  )
}
