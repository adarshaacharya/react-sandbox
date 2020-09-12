import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combineReducers';
import { getPokemon } from 'store/modules/pokemon/pokemon.action';

const Pokemon = () => {
  const dispatch = useDispatch()
  const pokemonState = useSelector((state: RootState) => state.pokemon);

  const [pokemonName, setPokemonName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = () => dispatch(getPokemon(pokemonName));

  return (
    <div>
      <div className="App">
        <input type="text" onChange={handleChange} value={pokemonName} />

        <button onClick={handleSubmit}>Search</button>
      </div>

      {pokemonState.loading && <p>Loading pokemons..</p>}

      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
