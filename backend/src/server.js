const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {

};

// Permite transmissão de mensagens entre backend e frontend real-time
io.on('connection', socket => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id
});

// Conexão com o MongoDB Atlas
mongoose.connect(
  'mongodb+srv://jorgeolvr:tindev@cluster0-cmkt2.mongodb.net/tindev-database?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);