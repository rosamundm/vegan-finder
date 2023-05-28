import React, { useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";

import GlobalStyle from "./components/GlobalStyle";
import GridElement from "./components/GridElement";


import { PlaceTypeDropdown, DistrictDropdown, CuisineDropdown } from "./components/Dropdowns";

import GetResultButton from "./components/ResultButton";
import TitleHeader from "./components/TitleHeader";

import ResultCalculation from "./components/Results";

import { PlaceTypeContext, DistrictContext, CuisineContext } from "./context";


const App: React.FC = () => {

  const [chosenPlaceType, setChosenPlaceType] = useState<string>("");
  const [chosenDistrict, setChosenDistrict] = useState<string>("");
  const [chosenCuisine, setChosenCuisine] = useState<string>("");

  console.log(chosenPlaceType)
  console.log(chosenDistrict)
  console.log(chosenCuisine)

  return (
    <>

    <PlaceTypeContext.Provider value={{ chosenPlaceType, setChosenPlaceType }}>
    <DistrictContext.Provider value={{ chosenDistrict, setChosenDistrict }}>
    <CuisineContext.Provider value={{ chosenCuisine, setChosenCuisine }}>


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
                  <PlaceTypeDropdown/>
              </GridElement>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <GridElement>
                  <DistrictDropdown />
              </GridElement>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <GridElement>
                  <CuisineDropdown />
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

      </CuisineContext.Provider>
      </DistrictContext.Provider>
      </PlaceTypeContext.Provider>

    </>
  );
};

export default App;
