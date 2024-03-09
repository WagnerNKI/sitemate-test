const express = require('express');
const app = express();
const sampleJson = require('./sample')

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app
  .get('/', (req, res) => {
    res.status(200).json(sampleJson);
  })
  .post('/', (req, res) => {
    console.log(req.body);
    res.status(200);
  })
  .put('/:id', (req, res) => {
    console.log('Object updated:',req.body);
    res.status(200);
  })
  .delete('/:id', (req, res) => {
    console.log('Object deleted', req.body)
  })

