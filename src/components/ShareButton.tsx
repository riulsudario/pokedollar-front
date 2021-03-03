import { MdShare } from "react-icons/md";
import { ImFacebook,ImWhatsapp, ImTwitter } from "react-icons/im";

import styles from '../styles/components/ShareButton.module.scss';

export function ShareButton(){
  return(
    <div className={styles.shareButtonContainer}>
      <button>
        <MdShare />
      </button>
      <ul>
        <li>
          <a href='https://www.facebook.com/sharer/sharer.php?u=https://pokedollar.herokuapp.com/' target="_blank">
            <ImFacebook />
          </a>

          <a href={encodeURI("https://wa.me/?text=Pokédollar: Veja o valor do dólar como um Pokémon: https://pokedollar.herokuapp.com/")} data-action="share/whatsapp/share" target="_blank">
            <ImWhatsapp />
          </a>

          <a href={encodeURI('https://twitter.com/intent/tweet?text=Pokédollar: Veja o valor do dólar como um Pokémon: https://pokedollar.herokuapp.com/')} target="_blank">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
}
