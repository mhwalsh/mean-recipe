var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  name: {type: String, unique: true},
  note: String,
  url: {type: String, unique: true}
});

var Recipes = mongoose.model('recipes', recipeSchema);
module.exports = Recipes;
