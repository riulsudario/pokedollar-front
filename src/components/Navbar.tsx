import Link from 'next/link';
import styles from '../styles/components/Navbar.module.scss';

export function Navbar(){
  return(
    <header className={styles.navbarContainer}>
      <Link href="/">
        <a>
          <img src="logo.png" alt="Pokédollar"/>
        </a>
      </Link>
    </header>
  );
}
