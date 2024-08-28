
export interface CountryInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[] | null; // borders может быть массивом или null
}

interface Border {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
}
