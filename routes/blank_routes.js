const mongoose = require('mongoose');
const requireLogin = require('../middlewares/loginCheck');
const requireCredit = require('../middlewares/creditCheck');

const Blank = mongoose.model('blanks');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredit, (req, res) => {
        const {title, subject, body, receivers} = req.body;
        const blanks = new Blank({
            title,
            subject, 
            body,
            receivers: receivers.split(',').map(email => ({email}))
        });
    });
};