import { Cuisine, District, PlaceType } from "../types";

export const places = [
    {
        name: "Cafe 93",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: false,
        toilet: true,
        notes: "It gets pretty full, even after their 2022 expansion, so go at non-peak times or get something to take away and enjoy in the nearby Monbijoupark",
        website: "https://www.instagram.com/cafeneundrei/",
        address: "Monbijouplatz 2, 10178 Berlin"
    },
    {
        name: "Round & Edgy",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.usa,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: false,
        toilet: false,
        notes: "Rich, yummy, gooey, NYC-style cookies",
        website: "https://www.instagram.com/roundedgy/",
        address: "Rochstraße 3, 10178 Berlin"
    },
    {
        name: "Sammy's Berliner Donuts",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: false,
        notes: "The vegan donuts stand up pretty well against a certain other local franchise",
        website: "https://sammysberlinerdonuts.de/",
        address: "Sophienstraße 30-31, 10178 Berlin"
    },
    {
        name: "FREA Bakery",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        website: "https://freabakery.de/",
        address: "Gartenstraße 9, 10115 Berlin"
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
        website: "https://www.instagram.com/thesanctuaryberlin/",
        address: "Torstraße 175, 10115 Berlin"
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
        website: "https://lovebirdspizza.com/",
        address: "Rosenthaler Str. 3, 10119 Berlin"
    },
    {
        name: "No Milk Today",
        category: PlaceType.cafe,
        district: District.kreuzberg,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        website: "https://www.no-milk-today-berlin.de/",
        address: "Fichtestraße 3, 10967 Berlin"
    },
    {
        name: "Shisomen Vegan Ramen & Cocktail",
        category: PlaceType.restaurant,
        district: District.mitte,
        cuisine: Cuisine.japanese,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        website: "",
        address: "Gertrud-Kolmar-Straße 4, 10117 Berlin"
    },
    {
        name: "Mantra",
        category: PlaceType.restaurant,
        district: District.schoeneberg,
        cuisine: Cuisine.indian,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: "Vegetarian Indian restaurant with plenty of great vegan options that don't make you feel like you have to settle",
        website: "",
        address: "Dürerplatz 2, 12157 Berlin"
    },
    {
        name: "Froindlichst",
        category: PlaceType.restaurant,
        district: District.prenzlauerBerg,
        cuisine: Cuisine.usa,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: "Cosy feel-good vegan burgers and more decadent fast food",
        website: "https://www.froindlichst.com/berlin/",
        address: "Immanuelkirchstraße 31, 10405 Berlin"
    },




]


