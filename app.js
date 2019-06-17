var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var db = require('./models/index');
var cors = require('cors');
require('dotenv').config();

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

// Config passport
app.use(passport.initialize());
require('./middleware/client')(passport);

app.use('/etc/', require('./routes/etc'));
app.use('/api/', require('./routes/api'));
app.use('/api/', passport.authenticate('client', { session: false }), require('./routes/apiClient'));
app.use('/api/', require('./routes/apiAdmin'));


// db.sequelize.sync({
//     force: true,
// });



module.exports = app;