function PokemonTile(props) {

  const pokemon = props.pokemon;

  return (
    <li className="pokemon-tile">
      <h3>{pokemon.name}</h3>
      <div className="pokemon-tile-desc">
        {pokemon.description}
      </div>
    </li>
  );
}

export default PokemonTile;