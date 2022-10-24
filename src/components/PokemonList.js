import PokemonTile from './PokemonTile';
import '../styles/PokemonList.css';
import { useEffect } from 'react';

function PokemonList({ pokemons, inputValue }) {

  useEffect(() => {}, [inputValue]);

  return (
    <div className="pokemon-list">
      {pokemons
        .filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))
        .map(pokemon => <PokemonTile key={pokemon.id} pokemon={pokemon}/>)
      }
    </div>
  );
}

export default PokemonList;