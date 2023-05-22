import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Cuisine } from "../types";

const cuisines = [
    Cuisine.arab,
    Cuisine.chinese,
    Cuisine.indian,
    Cuisine.italian,
    Cuisine.usa,
    Cuisine.vietnamese
]

const CuisineCheckboxes: React.FC = () => {
    return (
        <FormGroup>
            {cuisines.map((cuisine: Cuisine) => (
                <FormControlLabel control={<Checkbox color="success"/>} label={cuisine} />
            ))}
        </FormGroup>
    )
}

export default CuisineCheckboxes;