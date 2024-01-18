import { useNavigate, useParams } from 'react-router-dom';
import { useCountry } from '../hooks/useCountry';
import { Button } from '../components/Button';
import { ArrowLeft } from '@phosphor-icons/react';
import styles from './Details.module.scss';

export function Details() {
  const { cca3 } = useParams<{ cca3: string }>();
  const { data, isSuccess, isLoading } = useCountry(cca3);
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  console.log(data);

  return (
    !isLoading &&
    isSuccess && (
      <main>
        <Button
          className={styles.back}
          onClick={handleBack}
          leftIcon={<ArrowLeft size={16} weight='bold' />}
          title='Back'
        />
        <div className={styles.content}>
          <img
            className={styles.image}
            src={data.flags.svg}
            alt={data.flags.alt}
          />
          <div className={styles.details}>
            <h2 className={styles.title}>{data.name.common}</h2>
            <div className={styles.info}>
              <div className={styles.first}>
                <p>
                  <span>Native Name: </span>
                  {Object.keys(data.name.nativeName)
                    .map((nameKey) => data.name.nativeName[nameKey].common)
                    .join(' / ')}
                </p>
                <p>
                  <span>Population: </span>
                  {data.population.toLocaleString('pt-BR')}
                </p>
                <p>
                  <span>Region: </span>
                  {data.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {data.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {data.capital.join(', ')}
                </p>
              </div>
              <div className={styles.second}>
                <p>
                  <span>Top Level Domain: </span>
                  {data.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.keys(data.currencies)
                    .map((currencyKey) => data.currencies[currencyKey].name)
                    .join(', ')}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.keys(data.languages)
                    .map((langKey) => data.languages[langKey])
                    .join(', ')}
                </p>
              </div>
            </div>
            <div className={styles.borders}>
              <p>Border Countries: </p>
              <div className={styles.buttons}>
                {data.borders.map((border) => (
                  <Button
                    onClick={() => navigate(`/${border}`)}
                    title={border}
                    key={border}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
