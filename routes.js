var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var body = require('./routes/body');
var product = require('./routes/product');
var category = require('./routes/category');

// Linking all the routes
app.use('/', index);
app.use('/body', body);
app.use('/product', product);
app.use('/category', category);

module.exports = app;
