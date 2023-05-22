import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { PlaceType } from "../types";

const placeTypes = [PlaceType.cafe, PlaceType.restaurant]

const PlaceTypeCheckboxes: React.FC = () => {
    return (
        <FormGroup>
            {placeTypes.map((placeType: PlaceType) => (
                <FormControlLabel control={<Checkbox color="success"/>} label={placeType} />
            ))}
        </FormGroup>
    )
}

export default PlaceTypeCheckboxes;