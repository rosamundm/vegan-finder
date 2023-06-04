import { createContext } from "react";

// TODO: bundle into DropdownContext

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