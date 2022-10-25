import '../../styles/PokemonTile.css';

function PokemonTileBody({ pokemon }) {
  return (
    <div className="pokemon-tile-body">
      <div className="pokemon-tile-body-title">MOVES</div>
      <div className="pokemon-moves">
        <div className="moves">
          {pokemon.moves && pokemon.moves.length >= 1 && <div>{pokemon.moves[0].move.name.toUpperCase()}</div>}
          {pokemon.moves && pokemon.moves.length >= 2 && <div>{pokemon.moves[1].move.name.toUpperCase()}</div>}
        </div>
        <div className="moves">
          {pokemon.moves && pokemon.moves.length >= 3 && <div>{pokemon.moves[2].move.name.toUpperCase()}</div>}
          {pokemon.moves && pokemon.moves.length >= 4 && <div>{pokemon.moves[3].move.name.toUpperCase()}</div>}
        </div>
      </div>
    </div>
  );
}

export default PokemonTileBody;