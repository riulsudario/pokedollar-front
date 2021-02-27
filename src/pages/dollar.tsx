import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Overview } from '../components/Overview';
import { ShareButton } from '../components/ShareButton';

import api from './api/api';
import meta from '../data/meta';

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

export default function Dollar() {
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

  return (
    <div>
      <Head>
        <title>{meta.dollar.title}</title>
        <meta name="description" content={meta.dollar.description} />
        <meta name="google-site-verification" content={meta.dollar.google_verification} />
        <meta name="robots" />

        <meta property="og:image"         content={meta.dollar.og.image.url} />
        <meta property="og:image:type"    content={meta.dollar.og.image.type} />
        <meta property="og:image:width"   content={meta.dollar.og.image.width} />
        <meta property="og:image:height"  content={meta.dollar.og.image.height} />
        <meta property="og:image:alt"     content={meta.dollar.og.image.alt} />

        <meta property="og:description"   content={meta.dollar.og.description} />
        <meta property="og:url"           content={meta.dollar.og.url} />
        <meta property="og:type"          content={meta.dollar.og.type} />
        <meta property="og:title"         content={meta.dollar.og.title} />
        <meta property="og:locale"        content={meta.dollar.og.locale} />
        <meta property="og:site_name"     content={meta.dollar.og.site_name} />

        <meta name="twitter:description"  content={meta.dollar.twitter.description} />
        <meta name="twitter:title"        content={meta.dollar.twitter.title} />
        <meta name="twitter:image"        content={meta.dollar.twitter.image} />
        <meta name="twitter:card"         content={meta.dollar.twitter.card} />
        <meta name="twitter:site"         content={meta.dollar.twitter.author} />
        <meta name="twitter:creator"      content={meta.dollar.twitter.author} />
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
