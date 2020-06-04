
# auto-scroll-container

> React component provides scrollable `div` 

[![NPM](https://img.shields.io/npm/v/auto-scroll-container.svg)](https://www.npmjs.com/package/auto-scroll-container) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
 
Easy way to put react components in a scrollable content.
Provided [example](https://makannew.github.io/auto-scroll-container/) shows it in practice.

## Install

```bash
npm install --save auto-scroll-container
```

## Basic Usage

To made the most basic scroll just pass a className to the component and style it in CSS
```jsx
import React, { useState } from 'react'
import AutoScrollContainer from 'auto-scroll-container'

export default function App() {
  return (
    <AutoScrollContainer className='my-scroll-style'>
      <p>
        Lorem200 // enough content for scrolling
      </p>
    </AutoScrollContainer>
  )
}
```

Parrent node which here is `body` should be positioned and `overflow-y: scroll;` should set in `my-scroll-style`
```css
body {
  position: fixed;
  width: 100%;
  height: 100%;
}

.my-scroll-style {
  height: 100vh;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
}

```
Now it is ready to use and take advantage of few default feature wich already provided:
- Partially visible element came into view after focus
- Focused element will remain in view after resize
- On mobile device focus element remain in view after keyboard pop up
- Void space added at top and bottom of content

## Style
Like scroll container we can apply style on content by passing a class name to`contentClass`
```jsx
    <AutoScrollContainer 
      className='my-scroll-style' 
      contentClass='my-content-style'
      >
    </AutoScrollContainer>
    
```

## Scroll navigation
To make navigation easier this component uses fractional values. It normalizes content and scroll view port to 1.

Slightly different than standard scrolls wich position by just `scrollTop` and `scrollLeft`, it accepts additional optional values to tell where `scrollY` or `scrollX` should appear in scroll view port.

So for example if we want to show middle of the content in the beginning of the scroll view we need to set `scrollPos={{ scrollY: 0.5, viewY: 0 }}`.

By passing a prop or state to `scrollPos` we can navigate dynamically through the content.
```jsx
  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      scrollPos={{ scrollY: 0.5, viewY: 0 }}
    >
    </AutoScrollContainer>
    )
```
For horizontal or 2D scrolls the `scrollPos` object is `{scrollY, viewY, scrollX, viewX}`

`viewY` or `viewX` implicitly defins user's eye focus point on view port. It tells which part of the viewport is more important to keep in view during resize event. Its default value is `0.1`.



## Smooth scrolling
By setting `smoothScroll` we can navigate to certain point smoothly.
```jsx
  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      smoothScroll={{ scrollY: 0.3, viewY: 0.5 }}
    >
    </AutoScrollContainer>
    )
```
It accepts same values like `scrollPos` with optional `smoothFunction` and `duration` for more control.
```jsx
      smoothScroll={{
        scrollY: 0.7,
        viewY: 0.2,
        smoothFunction: (x) => x * x * x , // easeInCubic
        duration: 2000
      }}
```
Default smooth function is `smoothFunction: (x) => 1 - Math.pow(1 - x, 3)` which is [easeOutCubic](https://easings.net/#easeOutCubic) provided by [Andrey Sitnik](https://sitnik.ru/en/) and [Ivan Solovev](https://solovev.one/) (Thanks guys, you are awesome!). You can find more functions in [their website](https://easings.net/).

Default `duration` is `800` milliseconds.

## Void space
To make scrolling easier some voide space added by four main margins. These margins calculated as fraction of scroll view port which normalized to 1.

```jsx
  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      marginTop={0.9}
      marginBottom={0.9}
    >
    </AutoScrollContainer>
    )
```
So above code adds void space equal to 90% of the scroll view port height at the beginning and end of content. Default values are `0.5`
For horizontal or 2D scrolls we can set `marginLeft` and `marginRight` as well.
All void spaces recalculated after view port resize, so it guarantees same void space against scroll view port.

## Focus element
To bring an input element to focus we can set `focus={{ element: myElement }}`. 
Below code bring the input field to focus just after mounting.
```jsx
export default function App() {
  const inputRef = useRef()
  const [initialFocus, setInitialFocus] = useState(null)

  useEffect(() => {
    setInitialFocus(inputRef.current)
  }, [])

  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      focus={{ element: initialFocus }}
    >
        <p>
        lorem200
        </p>
        <input
        ref={inputRef}
        type='text'
        placeholder='Phone Number'
        autoComplete='lol'
        />
    </AutoScrollContainer>
    )
```

## Active mode
Up to here component works in passive mode. It is an stateless component which will render only once unless props changes. 

So scroll status will change in one way and it is usefull to set initial state or scroll it to a certain point.

But sometimes we want to know realtime scroll position or focused element to decide new scroll position or apply our logic. For this purpose we can put it in active mode by passing `setFocus` or `setScrollPos` handles.
In below code scrolling by user changes `scroll` state and cause re-rendering.
```jsx
export default function App() {
  const [scroll, setScroll] = useState({ scrollY: 0, viewY: 0.1 })
  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      scrollPos={scroll}
      setScrollPos={setScroll}
    >
      <p>
        lorem100
      </p>
      <h3>scrollY:{scroll.scrollY.toFixed(2)}</h3>
      <h3>viewY:{scroll.viewY.toFixed(2)}</h3>
    </AutoScrollContainer>
  )
}
```
And active focus example shows realtime focused element tag name:
```jsx
export default function App() {
  const [focus, setFocus] = useState()

  return (
    <AutoScrollContainer
      className='my-scroll-style' 
      contentClass='my-content-style'
      setFocus={setFocus}
    >
      <p>lorem100</p>

      <h3>Focus:{focus ? focus.element.tagName : 'Not Focused'}</h3>
      <input type='text' placeholder='Phone Number' autoComplete='lol' />
    </AutoScrollContainer>
  )
}

```

## Additional less important Props
- `viewMargin` 
  Defines boundaries of scroll view port which focus element has to be inside this boundaries. Think about it like padding.
  Its default is `viewMargin= { top: 0.05, bottom: 0.05, left: 0.05, right: 0.05 }`
- `autoScrollOnFocus`
  Its default is `autoScrollOnFocus = true` and it means try to keep focused element in scroll view port
- `debouncingDelay`
  Its default is `debouncingDelay = 200` in millisecounds. During resize event it cause a delay before start to       recalculate. It helps performance by avoiding unnecessary calculation
- `keyboardPopDelay`
 Its default is `keyboardPopDelay = 1500` milliseconds. It is for detecting mobile keyboard. It means monitor resize events for `1500ms` after any focus event, If resize triggered take care of mobile keyboard.
- `signature`
Its default is `signature = 'data-auto-scroll-container-signature'`. This signature added to Html scroll `div` attributes to internally intercept nested `AutoScrollContainer`. In case of name conflict you want to change it.


## License

MIT © [makannew](https://github.com/makannew)
