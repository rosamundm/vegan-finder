import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

const GridElement = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default GridElement;