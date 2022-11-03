import {Request, Response} from 'express';
import express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/form', (req, res) => {
    /*    const recipeData = new recipeModel({
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
});

