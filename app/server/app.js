var express         = require('express');
var app             = express();
var api             = require('../controllers/api.js');
var bodyParser      = require('body-parser');
var ejs             = require('ejs');
var path = require('path');
//===================================================
//Dependancies=======================================
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use('/api', api);

app.get('/', function (req, res){
  res.redirect('/api');
});
//===================================================
//Server=============================================
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

