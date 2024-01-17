import { AllCountries } from '../types/AllCountries.interface';
import { CountryDetails } from '../types/CountryDetails.interface';

class CountriesAPI {
  constructor() {}
  baseURL = 'https://restcountries.com/v3.1';

  getCountries(name?: string): Promise<AllCountries[]> {
    if (name) {
      return fetch(
        `${this.baseURL}/name/${name}?fields=name,population,region,capital`
      ).then((res) => res.json());
    }
    return fetch(
      `${this.baseURL}/all?fields=name,population,region,capital`
    ).then((res) => res.json());
  }

  getCountryDetails(name: string): Promise<CountryDetails> {
    return fetch(
      `${this.baseURL}/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders`
    )
      .then((res) => res.json())
      .then((data) => data[0]);
  }
}

export const countriesService = new CountriesAPI();
