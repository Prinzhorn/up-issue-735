const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
  res.send('Howdy');
});

app.listen(process.env.PORT);
