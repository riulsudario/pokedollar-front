import Link from 'next/link';
import styles from '../styles/components/Overview.module.scss';
import { Currency } from './Currency';
import { RadarChart } from './RadarChart';

interface pokemonDetails {
  pokemonId: number,
  pokemonName: string,
  pokemonImage: string,
  chartDetails: {
    max_base_stat: number,
    step_size: number,
  },
  statsDetails: [
    {
      name: string,
      base_stat: number,
    }
  ],
  dollar: {
    value: number,
    percentage_change: number,
    positive: boolean
  }
}
export function Overview(props: pokemonDetails){
  return(
    <div className={styles.overviewContainer}>
      <Currency
        dollar={props.dollar}
      />
      <div className={styles.title}>
        <Link href={`https://www.pokemon.com/br/pokedex/${props.pokemonId}`}>
          <h1
            className={styles.pokemonName}
            title="Mais informações sobre o Pokémon"
          >
            {props.pokemonName}
          </h1>
        </Link>
        <h1 className={styles.pokemonNumber}>N° {props.pokemonId}</h1>
      </div>

      <section>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <img src={props.pokemonImage} alt={props.pokemonName} draggable="false"/>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <span>Estatísticas base</span>
          <RadarChart
            chartDetails={props.chartDetails}
            statsDetails={props.statsDetails}
          />
        </div>
      </section>
    </div>
  );
}
