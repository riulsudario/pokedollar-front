import styles from '../styles/components/Overview.module.scss';

interface pokemonDetails {
  pokemonName: string,
  pokemonImage: string,
}

export function Overview(props: pokemonDetails){
  return(
    <div className={styles.overviewContainer}>
      <div className={styles.title}>
        <span className={styles.pokemonName}>{props.pokemonName}</span>
        <span className={styles.pokemonNumber}>N° 547</span>
      </div>

      <section>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <img src={props.pokemonImage} alt=""/>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <span>Estatísticas de habilidade</span>
          {/* TODO add chart with pokemon stats */}
        </div>
      </section>
    </div>
  );
}
