import React, { useContext } from "react";
import { places } from "../data";
import { PlaceTypeContext, DistrictContext, CuisineContext } from "../context";
import { Place } from "../types";

const ResultCalculation: React.FC = () => {

    const { chosenPlaceType } = useContext(PlaceTypeContext)
    const { chosenDistrict } = useContext(DistrictContext)
    const { chosenCuisine } = useContext(CuisineContext)

    const baseResults = places
    .filter((place) => {
        return place.category.includes(chosenPlaceType)
    })
    .filter((place) => {
        return place.district.includes(chosenDistrict)
    })

    // for now, an additional filter due to error with optional Place.cuisine property
    const results = places
    .filter((place) => {
        return place.category.includes(chosenPlaceType)
    })
    .filter((place) => {
        return place.district.includes(chosenDistrict)
    }).filter((place) => {
        return place.cuisine?.includes(chosenCuisine)
    })

    console.log(results)

    if (baseResults.length === 0 && results.length === 0) {

        return (
            <div>
                We don't currently have anything that matches your criteria. Try 
                setting one of the boxes to "No Preference" to broaden your search!
            </div>
        )
    
    } else {

    return (
        <div>
            {!chosenCuisine ? (
                <ul>
                    {baseResults.map((result: Place) => (
                        <li>
                            {result.name}
                        </li>
                    ))}
                </ul>
            ) : (
            <ul>
                {results.map((result: Place) => (
                    <li>
                        {result.name}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )

}

};

export default ResultCalculation;
