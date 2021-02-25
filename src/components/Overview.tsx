import styles from '../styles/components/Overview.module.scss';
import Head from 'next/head';
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
      <Head>
        <title>Pokedollar | R$5,47</title>
        <meta property="og:image" content={props.pokemonImage} />
        <meta property="og:url"           content="https:/pokedollar.herokuapp.com/" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Pokedollar | R$5,47" />
        <meta property="og:description"   content="O valor do dolar está em 5,49." />
      </Head>

      <div className={styles.title}>
        <span className={styles.pokemonName}>{props.pokemonName}</span>
        <span className={styles.pokemonNumber}>N° {props.pokemonId}</span>
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
