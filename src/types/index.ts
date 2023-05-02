export type Props = {
    isOpen: boolean
    toggle: () => void
}

export enum Cuisine {
    arab = "Arab",
    chinese = "Chinese",
    indian = "Indian",
    italian = "Italian",
    usa = "USA",
    vietnamese = "Vietnamese"
}

export enum District {
    friedrichshain = "Friedrichshain",
    kreuzberg = "Kreuzberg",
    mitte = "Mitte",
    moabit = "Moabit",
    neukoelln = "Neukölln",
    schoeneberg = "Schöneberg",
    wedding = "Wedding"
}

export enum PlaceType {
    restaurant = "Restaurant",
    cafe = "Café"
}

export type Place = {
    name: string,
    category: PlaceType,
    district: District,
    cuisine?: Cuisine,
    fully_vegan: boolean,
    open_mondays: boolean,
    open_sundays: boolean,
    toilet: boolean,
    notes?: string,
    website?: string
}

