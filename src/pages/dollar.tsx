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
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="google-site-verification" content={meta.google_verification} />
        <meta name="robots" />

        <meta property="og:image"         content={meta.og.image.url} />
        <meta property="og:image:type"    content={meta.og.image.type} />
        <meta property="og:image:width"   content={meta.og.image.width} />
        <meta property="og:image:height"  content={meta.og.image.height} />
        <meta property="og:image:alt"     content={meta.og.image.alt} />

        <meta property="og:description"   content={meta.og.description} />
        <meta property="og:url"           content={meta.og.url} />
        <meta property="og:type"          content={meta.og.type} />
        <meta property="og:title"         content={meta.og.title} />
        <meta property="og:locale"        content={meta.og.locale} />
        <meta property="og:site_name"     content={meta.og.site_name} />

        <meta name="twitter:description"  content={meta.twitter.description} />
        <meta name="twitter:title"        content={meta.twitter.title} />
        <meta name="twitter:image"        content={meta.twitter.image} />
        <meta name="twitter:card"         content={meta.twitter.card} />
        <meta name="twitter:site"         content={meta.twitter.author} />
        <meta name="twitter:creator"      content={meta.twitter.author} />
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
