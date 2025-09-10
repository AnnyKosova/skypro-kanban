import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }
  
  ul li {
    list-style: none;
  }
  
  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
  
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    background-color: #F1F1F1;
  }

  [data-theme="dark"] html,
  [data-theme="dark"] body,
  [data-theme="dark"] #root {
    background-color: rgba(21, 20, 25, 1) !important;
    color: #FFFFFF !important;
  }
  
  ._hover01:hover {
    background-color: #33399b;
  }
  
  ._hover02:hover, .header__user:hover {
    color: #33399b;
  }
  ._hover02:hover::after, .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
  
  ._hover03:hover {
    color: #FFFFFF;
  }
  ._hover03:hover a {
    color: #FFFFFF;
  }
  
  ._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
  }

  [data-theme="dark"] ._orange {
    background-color: rgba(255, 109, 0, 1);
    color: rgba(255, 228, 194, 1);
  }
  
  ._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  [data-theme="dark"] ._green {
    background-color: rgba(6, 177, 110, 1);
    color: rgba(180, 253, 209, 1);
  }
  
  ._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  [data-theme="dark"] ._purple {
    background-color: rgba(154, 72, 241, 1);
    color: rgba(233, 212, 255, 1);
  }
  
  ._gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
  
  ._active-category {
    opacity: 1 !important;
  }
  
  ._hide {
    display: none;
  }
  
  ._dark {
    display: none;
  }

  [data-theme="dark"] ._show._light {
    display: none;
  }

  [data-theme="dark"] ._dark {
    display: block;
  }
`

export default GlobalStyles
