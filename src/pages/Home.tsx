import { Card } from '../components/Card';
import { InputController } from '../controllers/InputController';
import { SelectController } from '../controllers/SelectController';
import { useController } from '../hooks/useController';
import { useCountries } from '../hooks/useCountries';
import { Regions } from '../types/Regions.enum';
import styles from './Home.module.scss';

const REGIONS = Object.entries(Regions).map((entry) => ({
  value: entry[0],
  name: entry[1],
}));

export function Home() {
  const { data: countries, isLoading, isSuccess } = useCountries();
  const {
    value: inputValue,
    debouncedValue: inputDebouncedValue,
    onInputValueChange,
  } = useController();
  const {
    value: selectValue,
    debouncedValue: selectDebouncedValue,
    onSelectValueChange,
  } = useController();

  return (
    !isLoading &&
    isSuccess && (
      <div>
        <div className={styles['search-container']}>
          <InputController
            value={inputValue}
            onChange={onInputValueChange}
            placeholder='Search for a country...'
          />
          <SelectController
            value={selectValue}
            onValueChange={onSelectValueChange}
            placeholder='Filter by Region'
            items={REGIONS}
          />
        </div>
        <div className={styles.cards}>
          {countries
            .filter((country) => {
              if (inputDebouncedValue) {
                return country.name.common
                  .toLowerCase()
                  .includes(inputDebouncedValue.toLowerCase());
              }
              return country;
            })
            .filter((country) => {
              if (selectDebouncedValue) {
                return (
                  country.region.toLowerCase() ===
                  selectDebouncedValue.toLowerCase()
                );
              }
              return country;
            })
            .map((country) => (
              <Card
                to={`/${country.cca3}`}
                {...country}
                key={country.name.common}
              />
            ))}
        </div>
      </div>
    )
  );
}
