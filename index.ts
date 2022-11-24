import { Request, Response } from "express";

const express = require("express");
const mongoose = require("mongoose");
const Recipes = require("./schemas/Recipes");
require("dotenv").config();
const app = express();

app.set("view engine", "pug");

mongoose
  .connect(process.env.MONGO_DB_URI, { dbName: "cookbook" })
  .then(async () => {
    app.listen(3000, () => {
      console.info("Server started on port 3000");
    });
  })
  .catch(console.error);

app.get("/", async (req: Request, res: Response) => {
  // Get data from table recipes and pass it to the view
  const recipes = await Recipes.find({});
  console.log(recipes);
  res.render("index", { recipes: recipes });
});
