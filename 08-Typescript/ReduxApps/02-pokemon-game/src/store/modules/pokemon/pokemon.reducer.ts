import {
  FETCH_POKEMON_FAIL,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  PokemonActions,
  PokemonState,
} from './pokemon.types';

// in the state
const initialState: PokemonState = {
  loading: false,
};

export const pokemonReducer = (
  state: PokemonState = initialState,
  action: PokemonActions
): PokemonState => {
  switch (action.type) {
    case FETCH_POKEMON_FAIL:
      return {
        loading: false,
      };
    case FETCH_POKEMON_REQUEST:
      return {
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
