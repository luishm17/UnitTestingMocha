const express = require('express');
const app = express();

const functionClass = require('./functions');

const hostname = '0.0.0.0';
const port = 8080;

app.get('/functions/even/:number', (req, res) => {

  console.log('Looking for ' + req.params.number);
  //console.log(postalCodesArray);

  const functions = new functionClass();
  let resultFunction = functions.isEven();

  let postalCodeObject = { result: resultFunction};

  res.send(postalCodeObject);
});

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});