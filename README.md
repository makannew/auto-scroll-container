
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
    <AutoScrollContainer className='simple-scroll'>
      <p>
        Lorem200 // enough content for scrolling
      </p>
    </AutoScrollContainer>
  )
}
```

Then in CSS add `overflow-y: scroll;` to its style
```css
.simple-scroll {
  height: 200px;
  width: 300px;
  overflow-y: scroll;
}

```

## License

MIT © [makannew](https://github.com/makannew)
