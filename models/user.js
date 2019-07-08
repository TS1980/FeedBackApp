const mongoose = require('mongoose');
const {Schema} = mongoose;

const user_Schema = new Schema({
    googleID: String
});

mongoose.model('users', user_Schema);