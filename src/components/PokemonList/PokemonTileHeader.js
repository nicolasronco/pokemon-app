import '../../styles/PokemonTile.css';

function PokemonTileHeader({ pokemon }) {
  return (
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
  );
}

export default PokemonTileHeader;