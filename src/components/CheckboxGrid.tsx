import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import CuisineDropDown from './CuisineDropDown';
import DistrictDropDown from './DistrictDropDown';
import PlaceTypeDropDown from "./PlaceTypeDropDown";

const GridElement = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));  

const CheckboxGrid: React.FC = () => {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={2} sm={4} md={4}>
            <GridElement>
                <PlaceTypeDropDown />
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
    );
  }

export default CheckboxGrid;