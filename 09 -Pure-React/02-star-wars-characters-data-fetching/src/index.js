import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './CharacterList';
import endpoint from './endpoint';
import './styles.scss';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        result: null,
        loading: true,
        error: null,
      };

    case 'RESPONSE_COMPLETE':
      return {
        result: action.payload.response,
        loading: false,
        error: null,
      };

    case 'ERROR':
      return {
        result: null,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {
    dispatch({
      type: 'LOADING',
    });
    async function fetchUrl() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({
          type: 'RESPONSE_COMPLETE',
          payload: {
            response: data,
          },
        });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          payload: { error },
        });
      }
    }
    fetchUrl();
  }, []);

  return [state.result, state.loading, state.error];
};



const Application = () => {
  const [response, loading, error] = useFetch(endpoint + '/characters');

  const characters = response?.characters || [];
  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? (
            <p>loading... </p>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p className="error">{error.message}</p>}
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
