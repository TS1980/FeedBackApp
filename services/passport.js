const passport = require('passport');
const google_oauth = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const user = mongoose.model('users');

passport.serializeUser((User, done) => {
    done(null, User.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id).then(User => {
        done(null, User);
    });
});

passport.use(
    new google_oauth({
        clientID: keys.googleclientID,
        clientSecret: keys.googleclientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => {
        user.findOne({googleID: profile.id})
            .then((existingUser) => {
                if(existingUser) {
                    done(null, existingUser);
                }
                else {
                    new user ({googleID: profile.id}).save()
                        .then(user => done(null, user));
                }
            });
    }
));