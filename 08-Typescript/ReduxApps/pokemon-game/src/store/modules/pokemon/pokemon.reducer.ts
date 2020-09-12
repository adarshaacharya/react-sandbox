import {
  PokemonType,
  PokemonDispatchTypes,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_LOADING,
} from './pokemon.types';


interface IDefaultState {
    loading: boolean;
    pokemon?: PokemonType;
}

// in the state
const defaultState: IDefaultState = {
  loading: false,
};

export const pokemonReducer = (
  state: IDefaultState = defaultState,
  action: PokemonDispatchTypes
): IDefaultState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
