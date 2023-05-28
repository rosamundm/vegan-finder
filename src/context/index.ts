import { createContext } from "react";
import { Place } from "../types";

export const PlaceTypeContext = createContext({
    chosenPlaceType: "",
    setChosenPlaceType: (chosenPlaceType: string) => {} 
})

export const DistrictContext = createContext({
    chosenDistrict: "",
    setChosenDistrict: (chosenDistrict: string) => {} 
})

export const CuisineContext = createContext({
    chosenCuisine: "",
    setChosenCuisine: (chosenCuisine: string) => {} 
})

export const ResultContext = createContext({
    dropdownResults: [],
    setDropdownResults: (dropdownResults: Array<Place>) => {}
})