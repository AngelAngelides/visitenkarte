import { createGlobalStyle } from 'styled-components'
import { brandGreen } from './colors'

export const GlobalStyleReset = createGlobalStyle`
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
  line-height: 1;
  font-family: sans-serif;
  background-color: ${brandGreen};
}

iframe {
  border: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

blockquote {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  background: none;
}

strong {
  font-weight: bold;
}

img {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: inherit;
  font: inherit;
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  background: none;
  cursor: pointer;
  overflow: visible;
}

::-moz-focus-inner {
  border: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: subpixel-antialiased;
}

body.noscroll {
  overflow: hidden;
  padding-right: 15px;
}

* {
  box-sizing: border-box;
  outline: 0;
}

img {
  display: block;
}

*:before,
*:after {
  box-sizing: inherit;
}  
`
