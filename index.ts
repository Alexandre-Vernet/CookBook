import { Request, Response } from 'express';
const express = require('express');
const mongoose = require('mongoose');
const Recipes = require('./schemas/Recipes');
require('dotenv').config();
const app = express();

app.set('view engine', 'pug');

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Connected to database');

        // Get data from table recipes
        Recipes.find({})
            .then((result: any) => {
                    console.log(result);
                }
            );
        app.listen(3000, () => {
            console.info('Server started on port 3000');
        });
    })
    .catch(console.error);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});
