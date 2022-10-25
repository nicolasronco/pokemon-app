import '../../styles/PokemonTile.css';
import { useNavigate } from 'react-router-dom';
import PokemonTileHeader from './PokemonTileHeader';

function PokemonTile({ pokemon }) {
  const navigate = useNavigate();
  const redirectToPokemon = () => {
    return navigate('/' + pokemon.id);
  };

  return (
    <div className="pokemon-tile" onClick={() => redirectToPokemon(pokemon.id)}>
      <PokemonTileHeader pokemon={pokemon}></PokemonTileHeader>
    </div>
  );
}

export default PokemonTile;