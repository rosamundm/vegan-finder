import { Cuisine, District, PlaceType } from "../types";

export const places = [
    {
        name: "Cafe 93",
        category: PlaceType.cafe,
        district: District.mitte,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: false,
        toilet: true,
        notes: "It gets pretty full even since their 2022 expansion, so go at non-peak times \
        or get something to take away and enjoy in the nearby Monbijoupark",
        website: "https://www.instagram.com/cafeneundrei/"
    },
    {
        name: "Round & Edgy",
        category: PlaceType.cafe,
        district: District.mitte,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: false,
        toilet: false,
        notes: "Rich yummy gooey cookies",
        website: "https://www.instagram.com/roundedgy/"
    },
    {
        name: "Sammy's Berliner Donuts",
        category: PlaceType.cafe,
        district: District.mitte,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: false,
        notes: "The vegan donuts stand up pretty well against a certain other local franchise",
        website: "https://sammysberlinerdonuts.de/"
    },
    {
        name: "FREA Bakery",
        category: PlaceType.cafe,
        district: District.mitte,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        website: "https://freabakery.de/"
    },
    {
        name: "The Sanctuary",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.italian,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: false,
        website: "https://www.instagram.com/thesanctuaryberlin/"
    },
    {
        name: "Lovebirds Contemporary Pizza",
        category: PlaceType.restaurant,
        district: District.mitte,
        cuisine: Cuisine.italian,
        fully_vegan: false,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        website: "https://lovebirdspizza.com/"
    },

]