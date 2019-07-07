const express = require('express');
const passport = require('passport');
const google_oauth = require("passport-google-oauth20").Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
        new google_oauth({
            clientID: keys.googleclientID,
            clientSecret: keys.googleclientSecret,
            callbackURL: '/auth/google/callback'
    }, 
        accessToken => {
            console.log(accessToken);
    })
);

app.get(
    '/auth/google/', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//node index.js
//localhost:5000
//https://console.developers.google.com