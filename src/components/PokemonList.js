import PokemonTile from "./PokemonTile";

function PokemonList() {
  const pokemonList = [
    {name: 'Pikachu', description: 'Desc1'},
    {name: 'Bulbizarre', description: 'Desc2'},
    {name: 'Salameche', description: 'Desc3'},
    {name: 'Carapuce', description: 'Desc4'}
  ];

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon, idx) => {
          return <PokemonTile key={idx + pokemon.name} pokemon={pokemon}/>;
        })}
      </ul>
    </div>
  );
}

export default PokemonList;