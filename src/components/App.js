import { useEffect, useState } from 'react';

import Banner from './Banner';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, updatePokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(res => res.json())
      .then(jsonObj => Promise.all(jsonObj.results.map(r => fetch(r.url))))
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(fetchedPokemons => {
        return updatePokemons(fetchedPokemons);
      });
  }, []);

  return (
    <div className="App">
      <Banner />
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;