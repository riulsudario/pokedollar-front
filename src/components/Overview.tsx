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
  const url         = 'http:/pokedollar.herokuapp.com/';
  const title       = 'Pokedollar, veja o valor do dólar representado por um Pokémon!';
  const description = 'O valor do dólar está equivalente a um ' + props.pokemonName + '!';

  return(
    <div className={styles.overviewContainer}>
      <Head>
        <meta property="og:image" content={props.pokemonImage} />
        <meta property="og:url"           content={url} />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content={title} />
        <meta property="og:description"   content={description} />

        <meta name="twitter:title"        content={title} />
        <meta name="twitter:description"  content={description} />
        <meta name="twitter:image"        content={props.pokemonImage} />
        <meta name="twitter:card"         content="summary_large_image"/>

        <meta name="description" content={title} />
        <meta name="robots" content="all" />
      </Head>

      <div className={styles.title}>
        <h1 className={styles.pokemonName}>{props.pokemonName}</h1>
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
