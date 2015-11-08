var express   = require('express');
var router    = express.Router();
var request   = require('request');
var googleApiKey = process.env.gglKey;

router.get('/', function (req, res){
  res.render('index', { title: "hello world"});
});

//youtube routes for google youtube api

router.get('/youtube/search', function (req, res){
  request.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      key: googleApiKey,
      order: 'relevance',
      q: 'crossing field lyrics',
      part: 'snippet',
      type: 'video'
    }
  }, function(err, response, body){
    if(err){
      return res.json(err);
    }
    console.log('body',body);
    res.json(body);
  });
});

//twitter api endpoint
router.get('/twitter/trends', function (req, res){
  request.get({
    url: 'http://api.whatthetrend.com/api/v2/trends.json',
    qs: {
      api_key : 'd769696ab7882728ecbd4fe1b5bd7ca68918c28d',
      woeid : '1'
    }
  }, function(err, response, body){
    if(err){
      return res.json(err);
    }
    console.log(body)
    res.json(body);
  });
});






module.exports = router;