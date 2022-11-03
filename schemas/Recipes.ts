const mongoose = require('mongoose');

const RecipesSchema = new mongoose.Schema({
    name: String,
    difficulty: Number,
    description: String,
});

const Product = mongoose.model('recipes', RecipesSchema);

module.exports = Product;
