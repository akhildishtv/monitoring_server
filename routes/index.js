var express = require('express');
var app = express()
var userRoute = require('./users')
/* GET home page. */
app.use('/users', userRoute);

module.exports = app;
