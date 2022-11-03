// const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    lastName : { type: String },
    firstName : { type: String, unique: true, required: true}, 
    mail : { type: String },
    password : { type: String },
    recipes  : {type: mongoose.Schema.Types.ObjectId, ref: "recipes"},
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
