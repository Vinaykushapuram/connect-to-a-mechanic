var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var Mechanics=require('./models/mechanicschema');
var cors=require('cors');

var mechanicrouter = require('./routes/mechanicroute.js');

var mechanicbylocation=require('./routes/mechanicbylocation.js');

var url='mongodb://127.0.0.1:27017/mechanicsdb1';
var connect=mongoose.connect(url);
connect.then((db)=>
{
  console.log('connected to the server');
},(err)=>{console.log(err);});

var app = express();
//handling cors
app.use(cors());

//connecting to mongodb


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',mechanicbylocation);
app.use('/mechanics',mechanicrouter );


// catch 404 and forward to error handler
app.use(function(req, res, next) {

  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
