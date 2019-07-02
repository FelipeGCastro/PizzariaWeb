import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-foot-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;
export default GlobalStyle;
