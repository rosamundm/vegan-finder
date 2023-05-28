import React, { createContext, useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";

import GlobalStyle from "./components/GlobalStyle";
import GridElement from "./components/GridElement";

import CuisineDropDown from "./components/CuisineDropDown";
import DistrictDropDown from "./components/DistrictDropDown";
import PlaceTypeDropDown from "./components/PlaceTypeDropDown";

import GetResultButton from "./components/GetResultButton";
import TitleHeader from "./components/TitleHeader";

import ResultCalculation from "./components/ResultCalculation";

import { PlaceTypeContext } from "./context";

import { Place } from "./types";

// export const PlaceTypeContext = createContext({
//   chosenPlaceType: "",
//   setChosenPlaceType: (chosenPlaceType: string) => {} 
// })

const App: React.FC = () => {

  const [chosenPlaceType, setChosenPlaceType] = useState<string>("");

  // console.log(chosenPlaceType)

  return (
    <>

    <PlaceTypeContext.Provider value={{ chosenPlaceType, setChosenPlaceType }}>


    <GlobalStyle />

      <header className="App-header">
      </header>

      <div className="container">

        <div className="title-header">
          <TitleHeader />
        </div>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            <Grid item xs={2} sm={4} md={4}>
              <GridElement>
                  <PlaceTypeDropDown/>
              </GridElement>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <GridElement>
                  <DistrictDropDown />
              </GridElement>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <GridElement>
                  <CuisineDropDown />
              </GridElement>
            </Grid>

          </Grid>
        </Box>


        <div className="get-result-button">
          <GetResultButton />
        </div>

        <div>
          <ResultCalculation />
        </div>

      </div>

      </PlaceTypeContext.Provider>
  
    </>
  );
};

export default App;
