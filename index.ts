import { Request, Response } from 'express';
import express = require('express');

const app = express();

app.set('view engine', 'pug');


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
});

