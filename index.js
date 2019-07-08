const express = require('express');
require('./services/passport');

const app = express();

require('./routes/auth_routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//node index.js
//localhost:5000
//https://console.developers.google.com