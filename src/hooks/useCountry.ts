import { useQuery } from '@tanstack/react-query';
import { countriesService } from '../services/CountriesAPI.service';

export function useCountry(cca3?: string) {
  return useQuery({
    enabled: !!cca3,
    queryKey: [cca3],
    queryFn: () => countriesService.getCountryDetails(cca3 as string),
    refetchOnWindowFocus: false,
  });
}
