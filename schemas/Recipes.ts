const mongoose = require('mongoose');

const RecipesSchema = new mongoose.Schema({
    name: String,
    difficulty: Number,
    description: String,
});

const Recipes = mongoose.model('recipes', RecipesSchema);

module.exports = Recipes;
