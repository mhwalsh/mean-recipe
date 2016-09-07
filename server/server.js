var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var recipes = require('./routes/recipes');

//db
mongoose.connect('mongodb://localhost/recipe_app');

app.use(bodyParser.json());

app.use(express.static('./server/public'));

// routes
app.use('/', index);
app.use('/recipes', recipes);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port', port, 'nice work');
});
