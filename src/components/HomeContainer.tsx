import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import styles from '../styles/components/HomeContainer.module.scss';

export function HomeContainer() {
  return(
    <div className={styles.homeContainer}>
      <section className={styles.firstSection}>
        <section className={styles.leftSection}>
          <h1>Veja o valor do dólar de maneira divertida!</h1>
          <p>Fique sabendo do valor atual do dólar e conheça novos Pokémon. Basta clicar no botão abaixo para se manter informado! ✨</p>
          <Link href="dollar">
            <button>
              Ver o valor do dólar
              <BsArrowRight />
            </button>
          </Link>
        </section>
        <section className={styles.rightSection}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
        </section>
      </section>
    </div>
  );
}
