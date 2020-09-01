import React from 'react';
import socket from '../socketConfig';

const JoinGame = () => {
  const [userInput, setUserInput] = React.useState({
    gameID: '',
    nickName: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    socket.emit('join-game', userInput);
  };

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-8">
          <h1 className="text-center">Join Game</h1>

          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="gameID">Enter Game ID</label>
              <input
                type="text"
                name="gameID"
                value={userInput.gameID}
                onChange={handleChange}
                placeholder="Enter game ID"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nickName">Enter Nick Name</label>
              <input
                type="text"
                name="nickName"
                value={userInput.nickName}
                onChange={handleChange}
                placeholder="Enter nick name"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </>
  );
};

export default JoinGame;
