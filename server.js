const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const chunks = [];

app.listen(port, () => {
  console.log('Сервер запущен на порту ' + port);
});

app.get('/chunks', (req, res) => {
  res.send(chunks);
});

app.post('/chunks', (req, res) => {
  const newChunk = req.body;
  newChunk._id = Date.now();
  chunks.push(newChunk);
  res.send(newChunk);
});
