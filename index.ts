import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as mongoose from "mongoose";
import Recipes from "./schemas/Recipes";
import "./config/passport";
import passport from "passport";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.set("view engine", "pug");

mongoose
  .connect(`${process.env.MONGO_DB_URI}`, { dbName: "cookbook" })
  .then(async () => {
    app.listen(port, () => {
      console.info(`Server started on port ${port}`);
    });
  })
  .catch(console.error);

app.get("/", async (req: Request, res: Response) => {
  // Get data from table recipes and pass it to the view
  const recipes = await Recipes.find({});
  res.render("index", { recipes: recipes });
});

app.get("/auth", async (req: Request, res: Response) => {
  res.send('<a href="/google">Authenticate with Google</a>');
});

app.get("/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("This is the callback route");
});


app.get("/protected", async (req: Request, res: Response) => {
  res.send('Hello !');
});
