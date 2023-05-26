import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Cuisine } from "../types";

const cuisines = [
    Cuisine.arab,
    Cuisine.chinese,
    Cuisine.indian,
    Cuisine.italian,
    Cuisine.usa,
    Cuisine.vietnamese
]

const CuisineDropDown: React.FC = () => {

    const [chosenCuisine, setChosenCuisine] = useState<string>("");

    // array for future multiselect:

    // const [chosenCuisines, setChosenCuisines] = useState<Array<string>>([]);

    // const handleChange = (event: SelectChangeEvent, value: string = event.target.value) => {
    //     setChosenCuisines(value.split(","))
    // };

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
                label="Type"
                value={chosenCuisine}
                onChange={handleChange}
            >
                {cuisines.map((cuisine: Cuisine) => (
                <MenuItem value={cuisine}>
                    {cuisine}
                </MenuItem>
                ))}
            </Select> 
        </FormControl>
        </Box>
    )
    
}

export default CuisineDropDown;