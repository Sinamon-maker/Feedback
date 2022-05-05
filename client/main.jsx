import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import { createGlobalStyle } from 'styled-components'
import ApercuWoff from './Fonts/ApercuArabicPro-Regular.woff'
import ApercuWoff2 from './Fonts/ApercuArabicPro-Regular.woff2'

import App from './components/App'

const Global = createGlobalStyle`
@fant-face {
  font-family: 'Apercu';
  src: url(${ApercuWoff}) format ('woff'),
  url(${ApercuWoff2}) format ('woff2');
  font-size: 30px;

body{
  background: black;
   margin:0;
  padding:0;
  min-height: 100vh;

}
div{
  font-family: 'Apercu'
}
h1{
 font-family: 'Apercu';
 font-weight: 400;
}
}
*{
  box-sizing:border-box;
  margin:0;
  padding:0;

}
input,
select,
textarea,
button {
  font-family: inherit;
}
button {
  outline: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
}
input,
textarea {
  outline: none;
  border: none;

  &::placeholder {
    color: #2D2D2D;
    font-family: 'Apercu';
    font-size: 18px;
    font-weight:400;
    line-height: 180%;

  }
}


`

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root'),
)
