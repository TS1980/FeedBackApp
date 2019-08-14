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
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await user.findOne({googleID: profile.id})
            if(existingUser) {
                return done(null, existingUser);
            }
            
        const user = await new user ({googleID: profile.id}).save();
        done(null, user);
    }
));