import '../styles/PokemonTile.css';

function PokemonTile({ pokemon }) {

  return (
    <div className="pokemon-tile">

      <div className="pokemon-tile-header">

        <div className="pokemon-tile-header-left">
          <div className="pokemon-name">
            {pokemon.name.toUpperCase()}
            <span> (No. {pokemon.id}) </span>
          </div>

          <div className="pokemon-height">Height: {pokemon.height / 10}m</div>
          <div className="pokemon-weight">Weight: {pokemon.weight / 10}kg</div>

          <div className="pokemon-type">
            Types: [ {pokemon.types.map((type, idx) => idx === 0 ? type.type.name.toUpperCase() : ', ' + type.type.name.toUpperCase())} ]
          </div>
        </div>

        <div className="pokemon-tile-header-right">
          <img className="pokemon-img" src={pokemon.sprites['front_default']} alt={pokemon.name + '-front-img'}></img>
        </div>

      </div>

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
    </div>
  );
}

export default PokemonTile;