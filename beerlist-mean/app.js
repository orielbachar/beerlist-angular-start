var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));


// console.log(express.static('public'));
app.use(express.static('public')); //transfer our Angular files to our Express app
app.use(express.static('node_modules'));

app.get('/', function(req, res){ // Not sure just yet!
  res.sendFile(__dirname + "/index.html");
})

app.get('/beers', function (req, res) {
  Beer.find(function (error, beers) {
    res.send(beers);
  });
});

  app.post('/beers', function (req, res, next) {
// console.log(req.body);
  var beer = new Beer(req.body);
  beer.save(function(err, beer) {
    if (err) { return next(err); }
    res.json(beer);
  });
});

  app.delete('/beers/:id', function(req, res){    //no friking idea if this works
    // console.log(req.params.id);
    Beer.findByIdAndRemove(req.params.id, function(err,data) {
    if (err) throw err;
    res.send(data);

  });
});

app.listen(8000);
