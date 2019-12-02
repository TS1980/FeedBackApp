const mongoose = require('mongoose');
const {Schema} = mongoose;

const user_Schema = new Schema({
    googleID: String,
    credits: {type: Number, default: 0}
});

mongoose.model('users', user_Schema);