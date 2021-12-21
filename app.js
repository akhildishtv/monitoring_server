// if(process.env.NODE_ENV !== "production") {
//   require('dotenv').config();
// }
"use strict";
var http = require("http");
var debug = require("debug");
var cron = require("./controller/cron.controller")
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var Config = require("./config/default");

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
// const dbUrl = process.env.DB_URL

mongoose.connect(Config.ENV.database.url, Config.ENV.database.options);
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

/**
 * Get port from environment and store in Express.
 */

 var port = normalizePort(process.env.PORT || Config.ENV.port);
 app.set("port", port);
 
 /**
  * Create HTTP server.
  */
 
 var server = http.createServer(app);
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port, function () {
   console.log("The Server Has Started on PORT:", port);
 });
 server.on("error", onError);
 server.on("listening", onListening);
 
 server.timeout = 20 * 60 * 1000;
//  socketService(server)
 
 /**
  * Normalize a port into a number, string, or false.
  */
 
 function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 
 /**
  * Event listener for HTTP server "error" event.
  */
 
 function onError(error) {
   if (error.syscall !== "listen") {
     throw error;
   }
 
   var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
 
   // handle specific listen errors with friendly messages
   switch (error.code) {
     case "EACCES":
       console.error(bind + " requires elevated privileges");
       process.exit(1);
       break;
     case "EADDRINUSE":
       console.error(bind + " is already in use");
       process.exit(1);
       break;
     default:
       throw error;
   }
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
   var addr = server.address();
   var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
   debug("Listening on " + bind);
 }

module.exports = app;
