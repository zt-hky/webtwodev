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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api/', api);


// db.sequelize.sync({
//     force:false
// });

module.exports = app;