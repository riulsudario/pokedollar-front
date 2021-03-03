import { AiFillHeart } from 'react-icons/ai';

import styles from '../styles/components/Footer.module.scss';

export function Footer(){
  return(
    <div className={styles.footerContainer}>
      <span>
       Feito com <AiFillHeart /> por <a href="https://github.com/riulsudario">Riul</a>.
      </span>
      <span>
        Pokémon e nomes de personagens Pokémon são marcas comerciais da Nintendo.
      </span>
    </div>
  );
}
