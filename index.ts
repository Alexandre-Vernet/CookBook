import { Request, Response } from 'express';
import express = require('express');

const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'pug');

// Connect to database
mongoose.connect('mongodb+srv://arnal:azerty31@cluster0.0ixho.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);


app.get('/', (req: Request, res: Response) => {
    // Get data from database cookbook and collection 'recipes'
    mongoose.connection.db.collection('recipes', (err: any, collection: any) => {
        collection.find().toArray((err: any, result: any) => {
            if (err) throw err;
            res.send(result);
        });
    })
});

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
});

