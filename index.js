const express = require('express');
const passport = require('passport');
const google_oauth = require("passport-google-oauth20").Strategy;
const app = express();

passport.use(new google_oauth());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//node index.js
//localhost:5000
//https://console.developers.google.com