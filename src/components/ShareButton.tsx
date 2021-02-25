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

          <a href="whatsapp://send?text=192.168.100.18:3001" data-action="share/whatsapp/share">
            <ImWhatsapp />
          </a>

          <a href={encodeURI('https://twitter.com/intent/tweet?text=O valor do dolar está em 5,49. Veja em: https://pokedollar.herokuapp.com/')} target="_blank">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
}
