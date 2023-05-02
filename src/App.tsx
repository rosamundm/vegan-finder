import React from "react";
import { createGlobalStyle } from "styled-components";
import { Place } from "./types";
import { places } from "./data";

const App: React.FC = () => {

  return (
    <>
    <GlobalStyle />

      <header className="App-header">
      </header>

      <div className="container">

        <div>
          {places.map((place: Place, i: number) => (

            <div key={i}>
              <h2>
                <a href={place.website}>
                  {place.name}
                </a>
              </h2>
         
            </div>
          
          ))}
        </div>

      </div>

    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    display: flex;
  };

  .container {
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
