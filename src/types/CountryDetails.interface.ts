export interface CountryDetails {
  name: Name;
  cca3: string;
  tld: string[];
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Languages {
  [key: string]: string;
}
