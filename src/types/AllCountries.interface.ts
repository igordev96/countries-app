import { Regions } from './Regions.enum';

export interface AllCountries {
  name: {
    common: string;
  };
  cca3: string;
  capital: Array<Regions>;
  region: string;
  population: number;
  flags: {
    png: string;
    alt: string;
  };
}
