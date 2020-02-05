const mongoose = require('mongoose');
const {Schema} = mongoose;
const receiver_Schema = require('./receiver');

const blank_Schema = new Schema({
    title: String,
    body: String,
    subject: String,
    receivers: [receiver_Schema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    dateSent: Date,
    lastResponde: Date,
    _user: {type: Schema.Types.ObjectId, ref: 'user'}
});

mongoose.model('blanks', blank_Schema);