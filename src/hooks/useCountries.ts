import { useQuery } from '@tanstack/react-query';
import { countriesService } from '../services/CountriesAPI.service';

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => countriesService.getCountries(),
    refetchOnWindowFocus: false,
  });
}
