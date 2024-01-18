import { AllCountries } from '../types/AllCountries.interface';
import { CountryDetails } from '../types/CountryDetails.interface';

class CountriesAPI {
  constructor() {}
  baseURL = 'https://restcountries.com/v3.1';

  getCountries(): Promise<AllCountries[]> {
    return fetch(
      `${this.baseURL}/all?fields=name,population,region,capital,flags`
    ).then((res) => res.json());
  }

  getCountryDetails(name: string): Promise<CountryDetails> {
    return fetch(
      `${this.baseURL}/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    )
      .then((res) => res.json())
      .then((data) => data[0]);
  }
}

export const countriesService = new CountriesAPI();
