import '../styles/SearchInput.css';

function SearchInput({ inputValue, setInputValue }) {

  return (
    <div className="pokemon-search">
      <input
        type= 'text'
        name= 'pokemon_search'
        value= {inputValue}
        placeholder= 'Search a Pokemon'
        onChange= {(e) => setInputValue(e.target.value)}
      >
      </input>
    </div>
  );
}

export default SearchInput;