import styles from '../styles/components/Navbar.module.scss';

export function Navbar(){
  return(
    <header className={styles.navbarContainer}>
      <img src="logo.png" alt="Pokédollar"/>
    </header>
  );
}
