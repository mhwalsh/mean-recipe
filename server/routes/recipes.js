var router = require('express').Router();
var Recipes = require('../../models/recipes');

router.get('/', function(request, response){
  Recipes.find({}, function(err, recipes){
    if(err){
      console.log('error getting recipes from db');
      response.sendStatus(500);
    }else{
      response.send(recipes);
    }
  });
});

router.post('/', function(request, response){

  var newRecipe = Recipes(request.body);

  newRecipe.save(function(err){
      if(err){
        console.log('error saving to db!!');
        response.sendStatus(500);
      }else{
        console.log('successful save!');
        response.sendStatus(200);
      }
  });
});

module.exports = router;
