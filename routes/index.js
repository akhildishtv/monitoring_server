var express = require('express');
var app = express()
var userRoute = require('./api')
/* GET home page. */
app.use('/', userRoute);

module.exports = app;
