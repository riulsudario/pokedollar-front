import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Overview } from '../components/Overview';
import api from './api/api';

export default function Home() {
  const [pokemonDetails, setPokemonDetails] = useState<any | {}>({})

  useEffect(() => {
    api.get('/api/v1/currency').then(response => { setPokemonDetails(response.data) })
  }, []);

  return (
    <div>
      <Navbar />
      <Overview
        pokemonName={pokemonDetails.name}
        pokemonImage={pokemonDetails.photo}
      />
    </div>
  )
}
