var express = require('express');
var router  = express.Router();

app.get('/hello_world', function (req, res){
  res.send('hello_world')
});