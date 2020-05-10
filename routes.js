var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var body = require('./routes/body');

// Linking all the routes
app.use('/', index);
app.use('/body', body);

module.exports = app;
