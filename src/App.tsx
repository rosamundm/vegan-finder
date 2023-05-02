import React from "react";
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import CheckboxGrid from "./components/CheckboxGrid";
import GetResultButton from "./components/GetResultButton";

const App: React.FC = () => {

  return (
    <>
    <GlobalStyle />

      <header className="App-header">
      </header>

      <div className="container">

        <div>
          <CheckboxGrid />
        </div>

        <div>
          <GetResultButton />
        </div>

      </div>
  

    </>
  );
};

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

export default App;
