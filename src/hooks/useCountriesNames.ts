import { useQuery } from '@tanstack/react-query';
import { countriesService } from '../services/CountriesAPI.service';

export function useCountriesNames(cca3Arr?: string[]) {
  return useQuery({
    enabled: !!cca3Arr,
    queryKey: ['Countries names', ...(cca3Arr ?? [])],
    queryFn: () => countriesService.getCountryName(cca3Arr as string[]),
    refetchOnWindowFocus: false,
  });
}
