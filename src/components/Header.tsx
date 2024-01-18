import { Moon, Sun } from '@phosphor-icons/react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prevValue) => !prevValue);
    document.body.classList.toggle('light');
  };

  return (
    <header className={styles.container}>
      <Link to='/' className={styles.title}>
        Where in the world?
      </Link>
      <div onClick={handleToggle} className={styles.button}>
        {isDark ? (
          <>
            <Moon size={16} weight='fill' />
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <Sun size={16} weight='fill' />
            <p>Light Mode</p>
          </>
        )}
      </div>
    </header>
  );
}
