const passport = require('passport');
const google_oauth = require("passport-google-oauth20").Strategy;
const keys = require('../config/keys');

passport.use(
    new google_oauth({
        clientID: keys.googleclientID,
        clientSecret: keys.googleclientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    }
));