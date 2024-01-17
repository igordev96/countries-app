import { Moon } from '@phosphor-icons/react';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Where in the world?</h1>
      <div className={styles.button}>
        <Moon size={16} weight='fill' />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}
