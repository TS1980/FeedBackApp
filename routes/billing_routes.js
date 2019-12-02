const keys = require('../config/keys');
const stripe =  require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/app/stripe', (req, res) => {
        console.log(req.body);
    });
};