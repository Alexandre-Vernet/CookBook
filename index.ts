import { Request, Response } from 'express';

const express = require('express');
const mongoose = require('mongoose');
const Recipes = require('./schemas/Recipes');
require('dotenv').config();
const app = express();

app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response) => {

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/form', (req, res) => {
   const recipeData = new recipeModel({
      name: req.body.name,
      categories: req.body.categories,
      time: req.body.time,
      difficulty: req.body.difficulty,
      description: req.body.description,
      ingredients: req.body.ingredients
    })
    recipeData.save().then(data => {
        res.render('/');
    }).catch(err => {
        res.render('/form', );
    });
    res.render('/form')*/
})

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
    // Get data from table recipes and pass it to the view
    
    Recipes.find({})
        .then((result: any) => {
                res.render('index', { recipes: result });
            }
        );
});
