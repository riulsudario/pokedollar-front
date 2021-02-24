import styles from '../styles/components/Loading.module.scss';

export function Loading() {
  return(
  <div className={styles.loadingContainer}>
    <div className={styles.pokeball}>
      <div className={styles.pokeballButton}>

      </div>
    </div>
  </div>
  );
}
