import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
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

const DistrictCheckboxes: React.FC = () => {
    return (
        <FormGroup>
            {districts.map((district: District) => (
                <FormControlLabel control={<Checkbox color="success"/>} label={district} />
            ))}
        </FormGroup>
    )
}

export default DistrictCheckboxes;