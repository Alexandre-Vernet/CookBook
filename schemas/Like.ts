// const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  // name: String,
  // difficulty: Number,
  // description: String,
});

const Likes = mongoose.model("likes", LikeSchema);

module.exports = Recipes;
