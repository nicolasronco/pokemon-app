import { useEffect, useState } from 'react';

import Banner from './Banner';
import PokemonList from './PokemonList';
import SearchInput from './SearchInput';

function App() {
  const [pokemons, updatePokemons] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=60')
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
      <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
      <PokemonList pokemons={pokemons} inputValue={inputValue}/>
    </div>
  );
}

export default App;