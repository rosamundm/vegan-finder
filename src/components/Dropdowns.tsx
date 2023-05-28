import React, { useContext } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { cuisines, districts, placeTypes } from "../dataArrays";
import { PlaceType, District, Cuisine } from "../types";
import { PlaceTypeContext, DistrictContext, CuisineContext } from "../context";

export const PlaceTypeDropdown: React.FC = () => {

    const { chosenPlaceType, setChosenPlaceType } = useContext(PlaceTypeContext)

    const handleChange = (event: SelectChangeEvent) => {
        setChosenPlaceType(event.target.value)
    };

    return (

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Type
                </InputLabel>
                <Select 
                    label="Type"
                    value={chosenPlaceType}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>No Preference</em>
                    </MenuItem>
                    {placeTypes.map((placeType: PlaceType) => (
                    <MenuItem value={placeType}>
                        {placeType}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    
    )
};

export const DistrictDropdown: React.FC = () => {

    const { chosenDistrict, setChosenDistrict } = useContext(DistrictContext)

    const handleChange = (event: SelectChangeEvent) => {
        setChosenDistrict(event.target.value)
    };

    return (

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    District
                </InputLabel>
                <Select 
                    label="District"
                    value={chosenDistrict}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>No Preference</em>
                    </MenuItem>
                    {districts.map((district: District) => (
                    <MenuItem value={district}>
                        {district}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    
    )
};

export const CuisineDropdown: React.FC = () => {

    const { chosenCuisine, setChosenCuisine } = useContext(CuisineContext)

    const handleChange = (event: SelectChangeEvent) => {
        setChosenCuisine(event.target.value)
    };

    return (

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Cuisine
                </InputLabel>
                <Select 
                    label="Cuisine"
                    value={chosenCuisine}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>No Preference</em>
                    </MenuItem>
                    {cuisines.map((cuisine: Cuisine) => (
                    <MenuItem value={cuisine}>
                        {cuisine}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    
    )
};





