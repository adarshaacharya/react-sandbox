import React from 'react';
import socket from '../socketConfig';

const CreateGame = () => {
  const [nickName, setNickName] = React.useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    socket.emit('create-game', nickName);
  };

  const handleChange = (e) => setNickName(e.target.value);
  return (
    <>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-8">
          <h1 className="text-center">Create Game</h1>
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="nickname">Enter Nick Name</label>
              <input
                type="text"
                name="nickname"
                value={nickName}
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

export default CreateGame;
