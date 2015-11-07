var express = require('express');
var app = express();
var api = require('./controllers/api');
var bodyParser = require('body-parser');
//===================================================
//Dependancies=======================================
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/api', api);

//===================================================
//Server=============================================
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});