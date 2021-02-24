import styles from '../styles/components/Overview.module.scss';
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
}
export function Overview(props: pokemonDetails){
  return(
    <div className={styles.overviewContainer}>
      <div className={styles.title}>
        <span className={styles.pokemonName}>{props.pokemonName}</span>
        <span className={styles.pokemonNumber}>N° {props.pokemonId}</span>
      </div>

      <section>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <img src={props.pokemonImage} alt=""/>
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
