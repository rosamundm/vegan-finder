import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { District } from "../types";

const districts = [
    District.friedrichshain,
    District.kreuzberg,
    District.mitte,
    District.moabit,
    District.neukoelln,
    District.schoeneberg,
    District.wedding
]

const DistrictDropDown: React.FC = () => {

    const [chosenDistrict, setChosenDistrict] = useState<string>("");
    
    // array for future multiselect:

    // const [chosenDistricts, setChosenDistricts] = useState<Array<string>>([]);

    // const handleChange = (event: SelectChangeEvent, value: string = event.target.value) => {
    //     setChosenDistricts(value.split(","))
    // };

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
                label="Type"
                value={chosenDistrict}
                onChange={handleChange}
            >
                {districts.map((district: District) => (
                <MenuItem value={district}>
                    {district}
                </MenuItem>
                ))}
            </Select> 
        </FormControl>
        </Box>
    )
}

export default DistrictDropDown;