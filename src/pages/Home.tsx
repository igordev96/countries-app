import { Card } from '../components/Card';
import { InputController } from '../controllers/InputController';
import { SelectController } from '../controllers/SelectController';
import { useCountries } from '../hooks/useCountries';
import { Regions } from '../types/Regions.enum';
import styles from './Home.module.scss';

const REGIONS = Object.entries(Regions).map((entry) => ({
  value: entry[0],
  name: entry[1],
}));

export function Home() {
  const { data: countries, isLoading, isSuccess } = useCountries();

  return (
    !isLoading &&
    isSuccess && (
      <div>
        <div className={styles['search-container']}>
          <InputController placeholder='Search for a country...' />
          <SelectController placeholder='Filter by Region' items={REGIONS} />
        </div>
        <div className={styles.cards}>
          {countries.map((country) => (
            <Card {...country} key={country.name.common} />
          ))}
        </div>
      </div>
    )
  );
}
