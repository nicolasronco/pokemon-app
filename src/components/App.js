import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './Banner';
import PokemonList from './PokemonList';
import PokemonDetailedTile from './PokemonDetailedTile';
import SearchInput from './SearchInput';

function App() {
  const [pokemons, updatePokemons] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let offset = 0;

  const fetchPokemons = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + offset);
      const jsonObj = await res.json();
      const responses = await Promise.all(jsonObj.results.map(r => fetch(r.url)));
      const fetchedPokemons = await Promise.all(responses.map(res => res.json()));
      updatePokemons(previousPokemon => {
        const newPokemons = [...previousPokemon, ...fetchedPokemons];
        return newPokemons.sort((a, b) => a.id - b.id);
      });
    } catch (error) { console.error(error); }
  };

  const fetchPokemonById = async ({ params }) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + params.id);
    const jsonObj = await res.json();
    return jsonObj;
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeight = e.target.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollTop + windowHeight + 1 >= scrollHeight) {
      offset += 10;
      fetchPokemons();
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <div>Sorry not found !</div>,
      element: <React.Fragment>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
        <PokemonList pokemons={pokemons} inputValue={inputValue}/>
      </React.Fragment>
    }, {
      path: '/:id',
      element: <PokemonDetailedTile/>,
      errorElement: <div>Sorry not found !</div>,
      loader: fetchPokemonById
    }
  ]);

  useEffect(() => {
    fetchPokemons();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Banner />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;