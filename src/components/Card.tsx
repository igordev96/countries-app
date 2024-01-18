import { AllCountries } from '../types/AllCountries.interface';
import styles from './Card.module.scss';

export function Card(props: AllCountries) {
  const { flags, name, capital, population, region } = props;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={flags.png} alt={flags.alt} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name.common}</h2>
        <p className={styles.label}>
          <span>Population: </span>
          {population.toLocaleString('pt-BR')}
        </p>
        <p className={styles.label}>
          <span>Region: </span>
          {region}
        </p>
        <p className={styles.label}>
          <span>Capital: </span>
          {capital.join(', ')}
        </p>
      </div>
    </div>
  );
}
