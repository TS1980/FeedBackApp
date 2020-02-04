const mongoose = require('mongoose');
const requireLogin = require('../middlewares/loginCheck');
const requireCredit = require('../middlewares/creditCheck');
const Mailer = require('../services/Mailer');
const blankTemplate = require('../services/emailTemplates/blankTemplate');
const Blank = mongoose.model('blanks');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredit, (req, res) => {
        const {title, subject, body, receivers} = req.body;
        const blanks = new Blank({
            title,
            subject, 
            body,
            receivers: receivers.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mailer = new Mailer(blanks, blankTemplate(blanks));
    });
};