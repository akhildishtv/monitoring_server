if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var app = express();
// const { TextEncoder, TextDecoder } = require("util");
app.options("*", cors());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type,authorization,secret_token"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    console.log(
      "Router Log | Request Recived | " +
        req.protocol +
        "://" +
        req.get("host") +
        req.originalUrl
    );
    next();
  });
//Database Connection
var mongoose = require('mongoose');
const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open",() =>{
    console.log("Database connected");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/API/', indexRouter);
// app.use('/users', usersRouter);
// DB.connection()
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
