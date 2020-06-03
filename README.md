
# auto-scroll-container

> React component provides scrollable `div` 

[![NPM](https://img.shields.io/npm/v/auto-scroll-container.svg)](https://www.npmjs.com/package/auto-scroll-container) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component provides an easy way to put other react components in a scrollable content.

## Install

```bash
npm install --save auto-scroll-container
```

## Usage

To made the most basic scroll container just pass a className to the component
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
- Void space added in top and bottom of content

## Style
Like styling scroll container we can apply style on content by passing a class name through`contentClass` prop
```jsx
    <AutoScrollContainer 
      className='my-scroll-style' 
      contentClass='my-content-style'
      >
    </AutoScrollContainer>
    
```

## Scroll navigation
To make navigation easier this component uses fractional values. It normalizes content height and scroll view port to 1.
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
For horizontal or 2D scrolls the prop object is `{scrollY, viewY, scrollX, viewX}`

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
It accepts same values like `scrollPos` but it is optional to set `smoothFunction` and `duration` for more control.
```jsx
      smoothScroll={{
        scrollY: 0.7,
        viewY: 0.2,
        smoothFunction: (x) => x * x * x , // easeInCubic
        duration: 2000
      }}
```
Default smooth function is `smoothFunction: (x) => 1 - Math.pow(1 - x, 3)` which is [easeInOutQuart](https://easings.net/#easeInOutQuart) provided by Andrey Sitnik and Ivan Solovev. Find more functions [here](https://easings.net/).

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
So above code adds 90% of the scroll view port height at the beginning and end of content. Default values are `0.5`
For horizontal or 2D scrolls we can set `marginLeft` and `marginRight`.
All void spaces recalculated after view port resize, so it guarantees same void space against scroll view port.

# Focus element
To bring an input element to focus we can set `focus={{ element: myElement }}`. 
Below code bring input field to focus after mounting.
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
        <input
        ref={inputRef}
        type='text'
        placeholder='Phone Number'
        autoComplete='lol'
        />
    </AutoScrollContainer>
    )
```

## License

MIT © [makannew](https://github.com/makannew)
