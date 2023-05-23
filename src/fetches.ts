import { places } from "./data";
import { Cuisine, District, PlaceType } from "./types";

export const filteredByPlaceType = (value: PlaceType) => {
    return places.filter(place => place.category.includes(value))
};

export const filteredByDistrict = (value: District) => {
    return places.filter(place => place.district.includes(value))
};

export const filteredByCuisine = (value: Cuisine) => {
    return places.filter(place => place.cuisine?.includes(value))
};

