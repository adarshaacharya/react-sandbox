import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import CreateGame from './components/CreateGame';
import GameMenu from './components/GameMenu';
import history from './history';
import socket from './socketConfig';
import JoinGame from './components/JoinGame';
import TypeRacer from './components/TypeRacer';

function App() {
  const [gameState, setGameState] = React.useState({
    _id: '',
    isOpen: '',
    players: [],
    words: [],
  });

  React.useEffect(() => {
    // get game from server
    socket.on('update-game', (game) => {
      console.log(game);
      setGameState(game);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== '') {
      history.push(`/game/${gameState._id}`);
    }
  }, [gameState._id]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={GameMenu} />
          <Route exact path="/game/create" component={CreateGame} />
          <Route exact path="/game/join" component={JoinGame} />
          <Route
            path="/game/:gameID"
            render={(props) => <TypeRacer {...props} gameState={gameState} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
