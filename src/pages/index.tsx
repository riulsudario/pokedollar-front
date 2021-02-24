import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { Overview } from '../components/Overview';
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

  return (
    <div>
      <Navbar />
      {
        isLoading ?
        (
          <Loading />
        ) : (
          <Overview
            pokemonId    = {pokemonDetails.id}
            pokemonName  = {pokemonDetails.name}
            pokemonImage = {pokemonDetails.photo}
            chartDetails = {pokemonDetails.chart}
            statsDetails = {pokemonDetails.chart.stats}
          />
        )}
    </div>
  )
}
