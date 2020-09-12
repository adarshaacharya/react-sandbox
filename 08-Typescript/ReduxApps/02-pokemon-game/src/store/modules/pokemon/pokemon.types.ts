
export const FETCH_POKEMON_REQUEST = '@@/pokemon/FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_FAIL = '@@/pokemon/FETCH_POKEMON_FAIL;';
export const FETCH_POKEMON_SUCCESS = '@@/pokemon/FETCH_POKEMON_SUCCESS';


export interface PokemonState {
  loading: boolean;
  pokemon?: PokemonType;
}

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};


export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

interface PokemonActionType<T, P> {
  readonly type: T;
  payload?: P;
}

export type PokemonActions =
  | PokemonActionType<typeof FETCH_POKEMON_REQUEST, null>
  | PokemonActionType<typeof FETCH_POKEMON_FAIL, null>
  | PokemonActionType<typeof FETCH_POKEMON_SUCCESS, PokemonType>;
