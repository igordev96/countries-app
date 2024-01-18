import { Regions } from './Regions.enum';

export interface AllCountries {
  name: {
    common: string;
  };
  capital: Array<Regions>;
  region: string;
  population: number;
  flags: {
    png: string;
    alt: string;
  };
}
