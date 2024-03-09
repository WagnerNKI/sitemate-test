const express = require('express');
const cors = require('cors');
const app = express();
const sampleJson = require('./sample');
const bodyParser = require('body-parser');

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app
  .use(cors())
  .use(bodyParser.json());

app
  .get('/', (req, res) => {
    res.status(200).json(sampleJson);
  })
  .post('/', (req, res) => {
    console.log('Object created', req.body);
    res.status(200);
  })
  .put('/:id', (req, res) => {
    console.log('Object updated:', req.body);
    res.status(200);
  })
  .delete('/:id', (req, res) => {
    console.log('Object deleted', req.params.id)
  })

