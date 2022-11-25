import * as mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  // name: String,
  // difficulty: Number,
  // description: String,
});

const Likes = mongoose.model("likes", LikeSchema);

export default Likes;
