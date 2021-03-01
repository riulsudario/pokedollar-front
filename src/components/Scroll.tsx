import styles from '../styles/components/Scroll.module.scss';

export function Scroll() {
  return(
    <div className={styles.scrollContainer}>
      <span className={styles.scrollButton}>
        <a>
          <span className={styles.mouse}>
            <span>
            </span>
          </span>
        </a>
      </span>
    </div>
  );
}
