var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var app = express();

var db = require('./models/index');

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/api/', api);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// db.sequelize.sync({
//     force:true
// });

module.exports = app;