import { AllCountries } from '../types/AllCountries.interface';
import { CountryDetails } from '../types/CountryDetails.interface';

class CountriesAPI {
  constructor() {}
  baseURL = 'https://restcountries.com/v3.1';

  getCountries(): Promise<AllCountries[]> {
    return fetch(
      `${this.baseURL}/all?fields=name,population,region,capital,flags,cca3`
    ).then((res) => res.json());
  }

  getCountryDetails(cca3: string): Promise<CountryDetails> {
    return fetch(
      `${this.baseURL}/alpha/${cca3}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    ).then((res) => res.json());
  }
}

export const countriesService = new CountriesAPI();
