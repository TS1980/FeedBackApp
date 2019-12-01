const express = require('express');
const mongoose = require('mongoose');
const cookie_session = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user'); //in this order
require('./services/passport');

mongoose.connect(keys.mongoUri);
const app = express();

app.use(bodyParser.json());
app.use(
    cookie_session({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth_routes')(app);
require('./routes/billing_routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);