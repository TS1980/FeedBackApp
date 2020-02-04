const mongoose = require('mongoose');
const {Schema} = mongoose;
const receiverSchema = require('./receiver');

const blankSchema = new Schema({
    title: String,
    body: String,
    subject: String,
    receivers: [receiverSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    dateSent: Date,
    lastResponde: Date,
    _user: {type: Schema.Types.ObjectId, ref: 'user'}
});

mongoose.model('blanks', blankSchema);