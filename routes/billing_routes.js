const keys = require('../config/keys');
const stripe =  require('stripe')(keys.stripeSecretKey);
const loginCheck = require('../middlewares/loginCheck');

module.exports = app => {
    app.post('/api/stripe', loginCheck,
        async (req, res) => {
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                description: '5$ = 5 credit',
                source: req.body.id
            });

            req.user.credits += 5;
            const User = await req.user.save();
            res.send(User);
        });
};