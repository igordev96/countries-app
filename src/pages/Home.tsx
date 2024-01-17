import { Header } from '../components/Header';
import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles.test}>
      <Header />
      Hello World
    </div>
  );
}
