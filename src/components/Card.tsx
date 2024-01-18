import { Link, LinkProps } from 'react-router-dom';
import { AllCountries } from '../types/AllCountries.interface';
import styles from './Card.module.scss';

type CardProps = AllCountries & LinkProps;

export function Card(props: CardProps) {
  const { flags, name, capital, population, region, ...rest } = props;

  return (
    <Link className={styles.card} {...rest}>
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
    </Link>
  );
}
