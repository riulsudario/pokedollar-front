import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Overview } from '../components/Overview';
import { ShareButton } from '../components/ShareButton';
import api from './api/api';

interface pokemonDetails {
  id: number,
  name: string,
  photo: string,
  abilities: [
    {
      name: string,
      url: string,
      hidden: boolean,
      slot: number,
    }
  ],
  chart: {
    stats: [
      {
        name: string,
        base_stat: number,
      }
    ],
    max_base_stat: number,
    step_size: number
  }
}

export default function Home() {
  const [pokemonDetails, setPokemonDetails] = useState<pokemonDetails>({
                                                                        id: null,
                                                                        name: null,
                                                                        photo: null,
                                                                        abilities: [
                                                                          {
                                                                            name: null,
                                                                            url: null,
                                                                            hidden: null,
                                                                            slot: null,
                                                                          }
                                                                        ],
                                                                        chart: {
                                                                          stats: [
                                                                            {
                                                                              name: null,
                                                                              base_stat: null,
                                                                            }
                                                                          ],
                                                                          max_base_stat: null,
                                                                          step_size: null
                                                                        }
                                                                      });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    api.get('/api/v1/currency')
       .then(response => { setPokemonDetails(response.data), setIsLoading(false) })
  }, []);

  const url         = 'http:/pokedollar.herokuapp.com/';
  const title       = 'Pokedollar, veja o valor do dólar representado por um Pokémon!';
  const description = 'Qual Pokémon vale um dólar convertido em real?';

  return (
    <div>
      <Head>
        <title>Pokedollar | Veja o valor do dólar em Pokémon!</title>

        <meta property="og:image"         content="http://pokedollar.herokuapp.com/pokedollar.png" />
        <meta property="og:image:type"    content="image/png" />
        <meta property="og:image:width"   content="1920" />
        <meta property="og:image:height"  content="1080" />
        <meta property="og:image:alt"     content="Pokedollar" />
        <meta property="og:description"   content={description} />

        <meta property="og:url"           content={url} />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content={title} />
        <meta property="og:locale"        content="pt_BR" />
        <meta property="og:site_name"     content="Pokédollar"></meta>
        <meta name="twitter:description"  content={description} />

        <meta name="twitter:title"        content={title} />
        <meta name="twitter:image"        content="http://pokedollar.herokuapp.com/pokedollar.png" />
        <meta name="twitter:card"         content="summary_large_image"/>

        <meta name="description" content={title} />
        <meta name="robots" content="all" />
      </Head>

      <Navbar />
      {
        isLoading ?
        (
          <Loading />
        ) : (
          <div>
            <Overview
              pokemonId    = {pokemonDetails.id}
              pokemonName  = {pokemonDetails.name}
              pokemonImage = {pokemonDetails.photo}
              chartDetails = {pokemonDetails.chart}
              statsDetails = {pokemonDetails.chart.stats}
            />
            <ShareButton />
          </div>
        )}
    </div>
  )
}
