const express = require('express');
const users = require('./data');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

const chunks = [];
let tempId = 0;

app.listen(port, () => {
  console.log('Сервер запущен на порту ' + port);
});

app.get('/chunks', (req, res) => {
  res.send(chunks);
});

app.post('/chunks', (req, res) => {
  const newChunk = req.body;
  newChunk._id = tempId++;
  chunks.push(newChunk);
});
