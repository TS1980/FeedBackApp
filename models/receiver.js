const mongoose = require('mongoose');
const {Schema} = mongoose;

const receiverSchema = new Schema({
    email: String,
    voted: {type: Boolean, default: false}
});

module.exports = receiverSchema;