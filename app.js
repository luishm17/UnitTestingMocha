const express = require('express');
const app = express();

const functionClass = require('./functions');

const hostname = '0.0.0.0';
const port = 8080;

app.get('/functions/even/:number', (req, res) => {

  console.log('Looking for ' + req.params.number);

  let evaluatedNumber = parseInt(req.params.number);

  const functions = new functionClass();
  let resultFunction = functions.isEven(evaluatedNumber);

  let response = { result: resultFunction};

  res.send(response);
});

app.get('/functions/string/:paramString', (req, res) => {

  let evaluatedString = req.params.paramString;

  console.log('Looking for ' + evaluatedString);

  const functions = new functionClass();
  let resultFunction = functions.getStringLength(evaluatedString);

  let response = { result: resultFunction};

  res.send(response);
});

app.get('/functions/number-month/:number', (req, res) => {

  let evaluatedNumber = parseInt(req.params.number);

  console.log('Looking for ' + evaluatedNumber);

  const functions = new functionClass();
  let resultFunction = functions.numberMonth(evaluatedNumber);

  let response = { result: resultFunction};

  res.send(response);
});

app.get('/functions/get-hour/', (req, res) => {

  const functions = new functionClass();
  let resultFunction = functions.getHour();

  let response = { result: resultFunction};

  res.send(response);
});

app.get('/functions/upper-case/:paramString', (req, res) => {

  let evaluatedString = req.params.paramString;

  console.log('Looking for ' + evaluatedString);

  const functions = new functionClass();
  let resultFunction = functions.upperCase(evaluatedString);

  let response = { result: resultFunction};

  res.send(response);
});

app.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});