export enum Cuisine {
    arab = "Arab 🥙",
    chinese = "Chinese 🥟",
    indian = "Indian 🍛",
    italian = "Italian 🍕",
    japanese = "Japanese 🍱",
    usa = "USA 🍔",
    vietnamese = "Vietnamese 🍜",
    general = "General/Other 🤷",
}

export enum District {
    friedrichshain = "Friedrichshain",
    kreuzberg = "Kreuzberg",
    mitte = "Mitte",
    moabit = "Moabit",
    neukoelln = "Neukölln",
    prenzlauerBerg = "Prenzlauer Berg",
    schoeneberg = "Schöneberg",
    wedding = "Wedding"
}

export enum PlaceType {
    restaurant = "Restaurant🍴",
    cafe = "Café 🧁"
}

export type Place = {
    name: string,
    category: PlaceType,
    district: District,
    cuisine: Cuisine,
    fully_vegan: boolean,
    open_mondays: boolean,
    open_sundays: boolean,
    toilet: boolean,
    notes?: string,
    website?: string,
    address: string
}

