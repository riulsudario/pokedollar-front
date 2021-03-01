import styles from '../styles/components/Currency.module.scss';
import { TiArrowShuffle,TiArrowUp, TiArrowDown } from 'react-icons/ti';

interface money {
  dollar: {
    value: number,
    percentage_change: number,
    positive: boolean
  }
}

export function Currency(props: money) {
  return(
    <div className={styles.dollarContainer}>
        <div className={styles.currencyContainer}>
          <div className={styles.dollar}>
            <span>US$</span>
            <span>1.00</span>
          </div>
          <TiArrowShuffle />
          <div className={styles.real}>
            <span>R$</span>
            <span>{props.dollar.value}</span>
          </div>
        </div>

        { props.dollar.positive ? (
          <span className={styles.up}>
            <TiArrowUp />
            subiu {props.dollar.percentage_change}%
          </span>
        ) : (
          <span className={styles.down}>
          <TiArrowDown />
          abaixou {props.dollar.percentage_change}%
        </span>
        ) }
    </div>
  );
}
