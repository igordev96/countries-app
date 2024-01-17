import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
