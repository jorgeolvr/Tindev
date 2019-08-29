const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();
server.use(cors());

// Conexão com o MongoDB Atlas
mongoose.connect(
  'mongodb+srv://jorgeolvr:tindev@cluster0-cmkt2.mongodb.net/tindev-database?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

server.use(express.json());
server.use(routes);

server.listen(3333);