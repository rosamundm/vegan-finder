import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #BBE7C5;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    display: flex;
    font-family: roboto;
  };

  .container {
    min-height: 150;
    max-width: 500px;
  }

  h2 {
    font-size: 40
  };

  p {
    font-size: 20
  };
`

export default GlobalStyle;