import React, { useState, useEffect } from 'react'
import { AutoScrollContainer } from 'auto-scroll-container'
import styles from '../simple-example/simple-example.module.css'

export default function SimpleExample({ className, contentClass, ...rest }) {
  const [focus, setFocus] = useState()

  useEffect(() => {
    const prevPlaceholder = focus?.element?.placeholder
    if (focus?.element) {
      focus.element.placeholder = 'Focused element!'
    }
    return () => {
      if (focus?.element) {
        focus.element.placeholder = prevPlaceholder
      }
    }
  }, [focus])

  return (
    <AutoScrollContainer
      className={styles['scroll-container']}
      contentClass={styles['scroll-content']}
      focus={focus}
      setFocus={setFocus}
      {...rest}
    >
      <p className='description'>
        Focused element will automatically scroll to visible area.
      </p>

      <div className={styles['form-container']}>
        <form>
          <h3>Sample form 1</h3>

          <input type='text' placeholder='First Name' autoComplete='lol' />
          <input type='text' placeholder='Last Name' autoComplete='lol' />
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
          <input type='text' placeholder='Phone Number' autoComplete='lol' />
          <textarea placeholder='Address' rows='5' autoComplete='lol' />
          <input type='submit' name='Submit' />
        </form>
      </div>
      <div className={styles['form-container']}>
        <form>
          <h3>Sample form 2</h3>
          <input type='text' placeholder='First Name' autoComplete='lol' />
          <input type='text' placeholder='Last Name' autoComplete='lol' />
          <input type='submit' name='Submit' />
        </form>
      </div>
    </AutoScrollContainer>
  )
}
