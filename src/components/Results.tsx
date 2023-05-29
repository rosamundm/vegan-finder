import React, { useContext } from "react";
import { places } from "../data";
import { PlaceTypeContext, DistrictContext, CuisineContext } from "../context";
import { Place } from "../types";

export const ResultCalculation: React.FC = () => {

    const { chosenPlaceType } = useContext(PlaceTypeContext)
    const { chosenDistrict } = useContext(DistrictContext)
    const { chosenCuisine } = useContext(CuisineContext)

    const results = places
    .filter((place) => {
        return place.category.includes(chosenPlaceType)
    })
    .filter((place) => {
        return place.district.includes(chosenDistrict)
    })
    .filter((place) => {
        return place.cuisine.includes(chosenCuisine)
    })

    console.log(results)

    if (results.length === 0) {

        return (

            <div className="results-box">
        
                <div>
                    We don't currently have anything that matches your criteria. Try 
                    setting one of the boxes to "No Preference" to broaden your search!
                </div>

            </div>
        )
    
    } else {

    return (

        <div className="result-box">

            <h2>We found these tasty results for you!</h2>

        
                {results.map((result: Place) => (

                    <div className="place-details">

                        {result.website ?
                            <h4>
                                <a href={result.website}>
                                    {result.name}
                                </a>
                            </h4> 
                            : <h4>{result.name}</h4> 
                        }

                        {result.notes ?
                            <span>{result.notes}</span> 
                            : null
                        }
                        
                        <ul>
                     
                            <li>
                                {result.fully_vegan === true ? 
                                    <span>💚 Fully vegan</span> 
                                    : <span>💔 Not fully vegan</span>
                                }
                            </li> 

                            <li>
                                {result.toilet === true ? 
                                    <span>🧻 Toilet available</span> 
                                    : <span>💩 No toilet available</span>
                                }
                            </li>  

                            <li>
                                {result.open_sundays === true ? 
                                    <span>✅ Open on Sundays</span> 
                                    : <span>❌ Closed on Sundays</span>
                                }
                            </li>     

                            <li>
                                {result.open_mondays === true ? 
                                    <span>✅ Open on Mondays</span> 
                                    : <span>❌ Closed on Mondays</span>
                                }
                            </li>       

                        </ul>
                    </div>
                ))}
     

        </div>
   
    )

}


};
