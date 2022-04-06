


export interface All {
    countries: [],
    cities: []
}

export interface Content {
    ALL: All,
    regions: [],
    USERS: [],
}

export interface ListCountries {
    META: {};
    CONTENT: Content;
    [x: string]: any;
}