import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';
import InforBar from '../InfoBar/InforBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const END_POINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(END_POINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [END_POINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  // function to send message
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InforBar room={room} />
        <Messages messages={messages} name={name} />

        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
