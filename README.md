
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
    <AutoScrollContainer className='my-scroll'>
      <p>
        Lorem200 // enough content for scrolling
      </p>
    </AutoScrollContainer>
  )
}
```

Parrent node which here is `body` should be positioned and `overflow-y` should set to `scroll` in `my-scroll.
```css
body {
  position: fixed;
  width: 100%;
  height: 100%;
}

.my-scroll {
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
      className='simple-scroll' 
      contentClass='my-class'
      >
    </AutoScrollContainer>
```

## Scroll Position
To make positioning easier this component uses fractional values.

## License

MIT © [makannew](https://github.com/makannew)
