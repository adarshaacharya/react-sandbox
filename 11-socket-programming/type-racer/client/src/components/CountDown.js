import React, { useEffect, useState } from 'react';
import socket from '../socketConfig';

const CountDown = (props) => {
  const [timer, setTimer] = useState({
    countDown: '',
    msg: '',
  });

  useEffect(() => {
    socket.on('timer', (data) => {
      setTimer(data);
    });

    socket.on('done', () => {
      socket.removeListener('timer');
    });
  }, []);

  const { countDown, msg } = timer;

  return (
    <div>
      <h1>{countDown}</h1>
      <h3>{msg}</h3>
    </div>
  );
};

export default CountDown;
