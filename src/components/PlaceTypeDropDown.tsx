import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PlaceType } from "../types";

const placeTypes = [PlaceType.cafe, PlaceType.restaurant]

const PlaceTypeDropDown: React.FC = () => {

    const [chosenPlaceType, setChosenPlaceType] = useState<string>("");

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
                {placeTypes.map((placeType: PlaceType) => (
                <MenuItem value={placeType}>
                    {placeType}
                </MenuItem>
                ))}
            </Select> 
        </FormControl>
        </Box>
    )
}

export default PlaceTypeDropDown;