import React from 'react'
import { AutoScrollContainer } from 'auto-scroll-container'
import styles from '../two-scroll-example/two-scroll-example.module.css'

export default function TwoScrollExample({ className, contentClass, ...rest }) {
  const {
    nestedScrollPos,
    setNestedScrollPos,
    nestedMarginTop,
    nestedMarginBottom
  } = rest
  return (
    <AutoScrollContainer
      className={styles['first-scroll']}
      contentClass={styles['first-scroll-content']}
      {...rest}
      marginLeft={0}
      marginRight={0}
    >
      <div className={styles['form-container']}>
        <form>
          <h3>Inside Scroll 1</h3>
          <input type='text' placeholder='First Name' autoComplete='lol' />
          <input type='text' placeholder='Last Name' autoComplete='lol' />
          <input type='submit' name='Submit' />
        </form>
      </div>
      <AutoScrollContainer
        className={styles['second-scroll']}
        contentClass={styles['second-scroll-content']}
        scrollPos={nestedScrollPos}
        setScrollPos={setNestedScrollPos}
        marginTop={nestedMarginTop}
        marginBottom={nestedMarginBottom}
      >
        <h4 id={styles['label4']}>Second scroll Content</h4>

        <div className={styles['form-container']}>
          <form>
            <h3>Inside Scroll 2</h3>
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
            <h3>Inside Scroll 2</h3>
            <input type='text' placeholder='First Name' autoComplete='lol' />
            <input type='text' placeholder='Last Name' autoComplete='lol' />
            <input type='submit' name='Submit' />
          </form>
        </div>
      </AutoScrollContainer>
    </AutoScrollContainer>
  )
}
