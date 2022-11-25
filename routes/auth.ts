import {Callback} from "mongoose";

var express = require('express');

import {Request, Response} from 'express';

const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
import Users from '../schemas/Users';

var router = express.Router();

router.get('/login', function(req: Request, res: Response, next: Callback) {
    res.render('login');
});

router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

passport.use(new LocalStrategy(function verify(email: string, password: string, cb: Function) {
    const user: any = Users.findOne({email});

    crypto.pbkdf2(password, '4=K1Ho,5?@vXhB>E:W*q#LqwpTM#BB37y-> KsZ8+{Ul%=qHdSkXTPQW`+PQ0M<t', 310000, 32, 'sha256', function(err: Error, hashedPassword: string) {
        console.log('coucou')
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
    });
}));

module.exports = router;