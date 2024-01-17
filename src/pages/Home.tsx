import styles from './Home.module.scss';

export function Home() {
  return (
    <div>
      <div className={styles['search-container']}>
        <input type='text' />
        <select name='' id='' />
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
