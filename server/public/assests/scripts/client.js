(function() {
  var app = angular.module('app', []);

  app.controller("RecipeController", function($http){
    var self = this;
    this.recipes = [];

    var getRecipes = function(){
      console.log('called getRecipes');

      $http.get('/recipes').then(angular.bind(self, function(response){
        if(response.status !== 200){
          throw new Error('Failed to fetch recipes from the API');
        }
        this.recipes = response.data;
      }));
    };

    getRecipes();

    this.createRecipe = function(name, url, note){
      console.log('called createRecipe');

      var dataToSend = {
        name: name,
        url: url,
        note: note
      };
      console.log('dataToSend=', dataToSend);

      $http.post('/recipes', dataToSend).then(function(response) {
        console.log(response);
        getRecipes();


      });
    };
  });
}());
