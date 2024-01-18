import { InputController } from '../controllers/InputController';
import { SelectController } from '../controllers/SelectController';
import { Regions } from '../types/Regions.enum';
import styles from './Home.module.scss';

const REGIONS = Object.entries(Regions).map((entry) => ({
  value: entry[0],
  name: entry[1],
}));

export function Home() {
  return (
    <div>
      <div className={styles['search-container']}>
        <InputController placeholder='Search for a country...' />
        <SelectController placeholder='Filter by Region' items={REGIONS} />
      </div>
      <div className={styles.cards}>
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </div>
    </div>
  );
}
