const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());
app.use('/', require('./router'));

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('a new connection');

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    // welcomes user to room
    socket.emit('message', {
      user: 'admin',
      text: `${user.name} Welcome to room`,
    });

    // besides user let everyone know that user has joined the room
    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name} has joined`,
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback(); // call everytime but display if there is error
  });

  // listen send msg event
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');

    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        text: `${user.name} has left.`,
      });

      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => {
  console.log('Server running on port 5000');
});
