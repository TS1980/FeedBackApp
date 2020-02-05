const mongoose = require('mongoose');
const {Schema} = mongoose;

const receiver_Schema = new Schema({
    email: String,
    voted: {type: Boolean, default: false}
});

module.exports = receiver_Schema;