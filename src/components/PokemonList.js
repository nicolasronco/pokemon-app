import PokemonTile from './PokemonTile';
import '../styles/PokemonList.css';
import { useEffect } from 'react';

function PokemonList({ pokemons, inputValue }) {

  useEffect(() => {}, [inputValue]);

  const searchPokemon = (pokemon) => {
    let isFound = false;

    if (pokemon.name.toLowerCase().includes(inputValue.toLowerCase())) {
      isFound = true;
    } else {
      const types = pokemon.types.map(type => type.type.name);
      isFound = types.find(type => type.includes(inputValue));

      if(!isFound) {
        let moves = (pokemon.moves.length >= 4 ? pokemon.moves.slice(0, 4) : pokemon.moves)
          .map(move => move.move.name);;
        isFound = moves.find(move => move.includes(inputValue));
      }
    }

    return isFound;
  };

  return (
    <div className="pokemon-list">
      {pokemons
        .filter(pokemon => searchPokemon(pokemon))
        .map(pokemon => <PokemonTile key={pokemon.id} pokemon={pokemon}/>)
      }
    </div>
  );
}

export default PokemonList;