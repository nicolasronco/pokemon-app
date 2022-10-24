import PokemonTile from "./PokemonTile";
import '../styles/PokemonList.css';

function PokemonList({ pokemons }) {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, idx) => {
        return <PokemonTile key={pokemon.id} pokemon={pokemon}/>;
      })}
    </div>
  );
}

export default PokemonList;