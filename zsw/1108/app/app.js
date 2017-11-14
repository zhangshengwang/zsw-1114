var express = require('express');
var path = require('path');
var favicon = require('server-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');

var app = express();

//设置模板的存放目录
app.set('views',path.join(__dirname,'views'));

//设置页面的模板引擎，设置为ejs模板引擎
app.set('view engine','ejs');

//添加标签页的favicon.ico
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

//业务逻辑





app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(fucntion(err,req,res,next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'davelopment' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
