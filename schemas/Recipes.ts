const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  difficulty: Number,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  categories: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  created_at: { type: Date },
  modified_at: { type: Date },
  ingredients: [String],
  comments: [String],
  likes: [Number],
});

const Recipes = mongoose.model("recipes", RecipeSchema);

module.exports = Recipes;
