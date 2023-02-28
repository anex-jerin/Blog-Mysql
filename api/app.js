const express = require('express');

const app = express();

const Port = 3500;

app.use(express.json());
// app.use(express.urlencoded());

app.listen(Port, () => {
  console.log(`Connected to Port: ${Port}`);
});
