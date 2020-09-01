const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

const expressServer = app.listen(3001);
const io = socketio(expressServer);

const Game = require('./models/Game');
const QuotableAPI = require('./QuotableAPI');

mongoose.connect(
  'mongodb://localhost:27017/typeracer',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to database successfully');
  }
);

io.on('connect', (socket) => {
  socket.on('user-input', async ({ userInput, gameID }) => {
    try {
      let game = await Game.findById(gameID);
      if (!game.isOpen && !game.isOver) {
        let player = game.players.find(
          (player) => player.socketID === socket.id
        );
        let word = game.words[player.currentWordIndex];

        if (word === userInput) {
          player.currentWordIndex++;
          if (player.currentWordIndex !== game.words.length) {
            game = await game.save();
            io.to(gameID).emit('update-game', game);
          } else {
            let endTime = new Date.getTime();
            let { startTime } = game;
            player.WPM = calculateWPM(endTime, startTime);
            game = await game.save();
            socket.emit('done');
            io.to(gameID).emit('update-game', game);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  socket.on('timer', async ({ gameID, playerID }) => {
    let countDown = 5;
    let game = await Game.findById(gameID);
    let player = game.players.id(playerID);

    if (player.isPartyLeader) {
      let timerID = setInterval(async () => {
        if (countDown >= 0) {
          io.to(gameID).emit('timer', {
            countDown,
            msg: 'Starting Game...',
          });
          countDown--;
        } else {
          game.isOpen = false;
          game = await game.save();
          io.to(gameID).emit('updateGame', game);
          startGameClock(gameID);
          clearInterval(timerID);
        }
      }, 1000);
    }
  });

  socket.on('join-game', async ({ gameID: _id, nickName }) => {
    try {
      let game = await Game.findById(_id);

      // if game is created (which should be done)
      if (game.isOpen) {
        const gameID = game._id.toString();
        socket.join(gameID); // join player socket to the game (with id = Game ID)
        // now socket is within created game room

        let player = {
          socketID: socket.id,
          nickName,
        };

        game.players.push(player);
        game = await game.save();

        // let all socket know thi splayer has joined the game
        io.to(gameID).emit('update-game', game);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // returns back game
  socket.on('create-game', async (nickName) => {
    try {
      const quotableData = await QuotableAPI();
      let game = new Game();
      game.words = quotableData;

      let player = {
        socketID: socket.id,
        isPartyLeader: true,
        nickName,
      };
      game.players.push(player);
      game = await game.save();

      const gameID = game._id.toString();
      socket.join(gameID); // join player socket to the game (with id = Game ID)
      // now socket is within created game room

      io.to(gameID).emit('update-game', game); // hey i want to look at this room(gameID) which should be unique and i want emit the veent updateGame and pass-in game
    } catch (error) {
      console.log(error);
    }
  });
});

const startGameClock = async (gameID) => {
  let game = await Game.findById(gameID);
  game.startTime = new Date().getTime();

  game.startTime = new Date().getTime();
  game = await game.save();
  let time = 5;

  let timerID = setInterval(
    (function gameIntervalFunc() {
      if (time >= 0) {
        const formatTime = calculateTime(time);
        io.to(gameID).emit('timer', {
          countDown: formatTime,
          msg: 'Time Remaining',
        });
        time--;
      } else {
        (async () => {
          let endTime = new Date().getTime();
          let game = await Game.findById(gameID);
          let { startTime } = game;
          game.isOver = true;
          game.player.forEach((player, index) => {
            if (player.WPM === -1) {
              game.players[index].WPM = calculateWPM(
                endTime,
                startTime,
                player
              );
            }
          });
          game = await game.save();
          io.to(gameID).emit('update-game', game);
          clearInterval(timerID);
        })();
      }
      return gameIntervalFunc;
    })(),
    1000
  );
};

const calculateTime = (time) => {
  let minutes = Math.floor(time) / 60;
  let seconds = time % 60;

  return `${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`;
};

const calculateWPM = (endTime, startTime, player) => {
  let numofWords = player.currentWordIndex;
  let timeInSeconds = (endTime - startTime) / 1000;
  const timeInMinutes = timeInSeconds / 60;
  const WPM = Math.floor(numofWords / timeInMinutes);
  return WPM;
};
