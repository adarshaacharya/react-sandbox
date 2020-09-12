import axios from 'axios';
import { Dispatch } from 'redux';
import {
  PokemonActions,
  FETCH_POKEMON_FAIL,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from './pokemon.types';

export const getPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonActions>
) => {
  try {
    dispatch({
      type: FETCH_POKEMON_REQUEST,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: FETCH_POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POKEMON_FAIL,
    });
  }
};
