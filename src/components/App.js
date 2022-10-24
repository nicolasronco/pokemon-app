import { useEffect, useState } from 'react';

import Banner from './Banner';
import PokemonList from './PokemonList';
import SearchInput from './SearchInput';

function App() {
  const [pokemons, updatePokemons] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let offset = 0;

  const fetchPokemons = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + offset);
      const jsonObj = await res.json();
      const responses = await Promise.all(jsonObj.results.map(r => fetch(r.url)));
      const fetchedPokemons = await Promise.all(responses.map(res => res.json()));
      updatePokemons(previousPokemon => {
        const newPokemons = [...previousPokemon, ...fetchedPokemons];
        return newPokemons.sort((a, b) => a.id - b.id);
      });
    } catch (e) { console.error(e); }
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollTop + windowHeight + 1 >= scrollHeight) {
      offset += 10;
      fetchPokemons();
    }
  };

  useEffect(() => {
    fetchPokemons();
    window.addEventListener('scroll', handleScroll);
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