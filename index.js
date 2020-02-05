const express = require('express');
const mongoose = require('mongoose');
const cookie_session = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./models/blank'); //in this order
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
require('./routes/blank_routes')(app);

if (process.env.NODE_ENV === 'production') {
    //prodution assets как main.js
    //найти файл, подходящий к запросу
    app.use(express.static('client/build'));
    //index.html, если не найдёт
    //если кто-то делает не известный нам запрос, просто фигачь html по дефолту
    const path = require('path');
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);