var app = angular.module('app', []);

app.controller("RecipeController", ['$scope', '$http', function($scope, $http) {
  $scope.recipes = [];

  var getRecipes = function(){
      return $http.get('/recipes').then(function(response){
        if(response.status !== 200){
          throw new Error('Failed to fetch recipes from the API');
        }
        $scope.recipes = response.data;
        return response.data;
      });
  };
  getRecipes();
}]);
