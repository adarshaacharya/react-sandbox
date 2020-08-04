import isFunction from 'lodash/isFunction';
import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterView from './CharacterView';
import endpoint from './endpoint';
import './styles.scss';

const reducer = (state, action) => {
  if (action.type === 'FETCHING') {
    return {
      characters: [],
      loading: true,
      error: null,
    };
  }

  if (action.type === 'RESPONSE_COMPLETE') {
    return {
      characters: action.payload.characters,
      loading: false,
      error: null,
    };
  }

  if (action.type === 'ERROR') {
    return {
      characters: [],
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

// spearate function to fetch characters
const fetchCharacters = (dispatch) => {
  dispatch({
    type: 'LOADING',
  });
  fetch(endpoint + '/characters')
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: 'RESPONSE_COMPLETE',
        payload: {
          characters: response.characters,
        },
      }),
    )
    .catch((error) =>
      dispatch({
        type: 'ERROR',
        payload: {
          error,
        },
      }),
    );
};

// initial srare
const initialState = {
  error: null,
  loading: false,
  characters: [],
};

// middleware
const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState); // copy of dispatch

  const enchancedDispatch = (action) => {
    // dispatch(fetchCharacters -> action)
    if (isFunction(action)) {
      action(dispatch); // fetchCharacters(copy of dispatch)
    } else {
      dispatch(action);
    }
  };

  return [state, enchancedDispatch];
};

const Application = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState); // call thunk reducer with main reducer
  const { characters } = state;

  // on first load render nothing
  useEffect(() => {
    dispatch(() => {});
  }, []);

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          <button
            onClick={() => {
              dispatch(fetchCharacters); // goes to thunk reducer as type function
            }}
          >
            Fetch Characters
          </button>
          <CharacterList characters={characters} />
        </section>
        <section className="CharacterView">
          <Route path="/characters/:id" component={CharacterView} />
        </section>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  rootElement,
);
