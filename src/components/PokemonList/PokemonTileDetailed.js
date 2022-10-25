import '../../styles/PokemonTile.css';
import PokemonTileHeader from './PokemonTileHeader';
import PokemonTileBody from './PokemonTileBody';
import { useLoaderData } from 'react-router-dom';

function PokemonTileDetailed() {
  const pokemon = useLoaderData();

  return (
    <div className="pokemon-tile-detailed">
      <PokemonTileHeader pokemon={pokemon}></PokemonTileHeader>
      <PokemonTileBody pokemon={pokemon}></PokemonTileBody>      
    </div>
  );
}

export default PokemonTileDetailed;