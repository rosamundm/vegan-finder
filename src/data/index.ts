import { Cuisine, District, PlaceType } from "../types";

export const places = [
    {
	name: "Vegan Vibes",
	category: PlaceType.cafe,
	district: District.friedrichshain,
	cuisine: Cuisine.general,
	fully_vegan: true,
	open_mondays: false,
	open_sundays: true,
	toilet: true,
	notes: "Cute and cosy oasis, a short walk from the chaos of Boxhagener Platz",
	website: "https://www.veganvibes.berlin/",
	address: "Niederbarnimstraße 16, 10247 Berlin" 
    },
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
        name: "Sammy's Berliner Donuts",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: "The vegan donuts stand up pretty well against a certain other local franchise",
        website: "https://sammysberlinerdonuts.de/",
        address: "Sophienstraße 30-31, 10178 Berlin"
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
        notes: "Italian-style vegan pastries. Perfect when you wanna get yourself a lil treat",
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
    {
        name: "Sakura",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.japanese,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: "Pink, pretty, and calming space to enjoy Japanese-inspired baked goods",
        website: "https://www.sakura.berlin/",
        address: "Tieckstraße 8, 10115 Berlin"
    },
    {
        name: "Sotto",
        category: PlaceType.restaurant,
        district: District.wedding,
        cuisine: Cuisine.italian,
        fully_vegan: false,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Vegetarian & vegan pizza place with a great vibe",
        website: "https://www.instagram.com/restaurantsotto/?hl=en",
        address: "Neue Hochstraße 25, 13347 Berlin"
    },
    {
        name: "The Butterfly Lovers",
        category: PlaceType.restaurant,
        district: District.mitte,
        cuisine: Cuisine.chinese,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "May not be the most budget-friendly option, but it's gorgeous",
        website: "https://the-butterfly-lovers.eatbu.com/",
        address: "Veteranenstraße 10, 10119 Berlin"
    },
    {
        name: "La Stella Nera",
        category: PlaceType.restaurant,
        district: District.neukoelln,
        cuisine: Cuisine.italian,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Go there for the calzone",
        website: "https://www.instagram.com/lastellaneraberlin/",
        address: "Leykestraße 18, 12053 Berlin"
    },
    {
        name: "Velicious",
        category: PlaceType.cafe,
        district: District.friedrichshain,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: false,
        notes: "It's a guinea pig-themed café with amazing cakes that people often order for weddings! Check the latest opening hours before you go",
        website: "https://www.velicious-cafe.de/",
        address: "Lenbachstraße 13B, 10245 Berlin"
    },
    {
        name: "Humbaba Falafel",
        category: PlaceType.restaurant,
        district: District.moabit,
        cuisine: Cuisine.arab,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: false,
        notes: "Great range of all-vegan sauces for your falafel or makali, including sesame and mango",
        website: "https://www.facebook.com/falafel.humbaba",
        address: "Turmstraße 85, 10551 Berlin"
    },
    {
        name: "Alaska",
        category: PlaceType.cafe,
        district: District.neukoelln,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: " All-vegan tapas bar with a queer vibe in a living-room setting. Good selection of mocktails (alcohol too, of course). Highly recommend the patatas bravas",
        website: "https://www.instagram.com/alaska_berlin/",
        address: "Reuterstraße 85, 12053 Berlin"
    },
    {
        name: "Radikalecker",
        category: PlaceType.cafe,
        district: District.neukoelln,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Vegan workers' co-op (attached to a small organic supermarket) with tasty cakes and breakfast food",
        website: "http://www.radikalecker.org",
        address: "Weserstraße 212, 12047 Berlin"
    },
    {
        name: "Cinnamood",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: false,
        notes: "Cute pastel-lilac shop selling a variety of cinnamon rolls and also some stationery. Note that there is nowhere to sit — takeaway only",
        website: "https://cinnamood.de/",
        address: "Oranienburger Straße 8, 10178 Berlin"
    },
    {
        name: "Savory Chay",
        category: PlaceType.restaurant,
        district: District.mitte,
        cuisine: Cuisine.vietnamese,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: false,
        toilet: true,
        notes: "Unpretentious vegetarian (but mostly vegan) restaurant off Friedrichstraße. Note that it's closed on weekends",
        website: "http://savorychay.de/",
        address: "Kronenstraße 70, 10117 Berlin"
    },
    {
        name: "Caphe HOA",
        category: PlaceType.restaurant,
        district: District.mitte,
        cuisine: Cuisine.vietnamese,
        fully_vegan: false,
        open_mondays: true,
        open_sundays: true,
        toilet: true,
        notes: "Technically in Mitte, but if you're near Moritzplatz, this is a nice lunch spot in a hidden spot",
        website: "https://www.caphe-hoa.com/hoa1-startseite",
        address: "Stallschreiberstraße 15, 10179 Berlin"
    },
    {
        name: "Dat Cookie",
        category: PlaceType.cafe,
        district: District.mitte,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: true,
        open_sundays: true,
        toilet: false,
        notes: "New spot tucked inside the unique labyrinth of the Hackesche Höfe, with inventive cookie flavours changing every month",
        website: "https://www.dat-cookie.com/",
        address: "Rosenthaler Str. 36, 10178 Berlin"
    },
    {
        name: "C+ Bakery",
        category: PlaceType.cafe,
        district: District.kreuzberg,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Cinnamon buns and other sweet treats, as well as savoury snacks like foccacia. It is Black, queer, and feminist-owned, hosting regular events for the community",
        website: "https://linktr.ee/cplusveganbakery",
        address: "Falckensteinstraße 35, 10997 Berlin"
    },
    {
        name: "Al Catzone",
        category: PlaceType.restaurant,
        district: District.kreuzberg,
        cuisine: Cuisine.italian,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: false,
        toilet: true,
        notes: "A very laid-back place tucked away off Mehringplatz, serving pizzas with puffy Neapolitan crusts",
        website: "https://www.alcatzone.com/",
        address: "Brandesstraße 7, 10969 Berlin"
    },
    {
        name: "Dervish",
        category: PlaceType.restaurant,
        district: District.friedrichshain,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Central Asian cuisine (with a focus on Uzbek): manti, flatbread, and other flavourful foods made with whole ingredients",
        website: "https://dervish.eu/",
        address: "Krossener Str. 16, 10245 Berlin"
    },
    {
        name: "La Petite Véganerie",
        category: PlaceType.restaurant,
        district: District.kreuzberg,
        cuisine: Cuisine.general,
        fully_vegan: true,
        open_mondays: false,
        open_sundays: true,
        toilet: true,
        notes: "Veganised French cuisine in tapas-style format so you can try a variety of smaller dishes, plus pastries and desserts like crême brûlée",
        website: "https://la-petite-veganerie.de/",
        address: "Falckensteinstraße 37, 10997 Berlin"
    }
]

