var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //设置模版存放的路径，当前文件夹下的view文件夹
app.set('view engine', 'ejs');//设置模版引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));  //日志输出中间件
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//处理cookie
app.use(express.static(path.join(__dirname, 'public')));
require('./db');

app.use('/', routes);   //根据用户请求的路径不同，调用不同的函数
app.use('/users', users);
app.use('/articles',articles);
app.use('/banana',function(req,res){
  res.ens('banana');
});
// catch 404 and forward to error handler   捕捉404错误 并发送至错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);  //next里如果传了参数意味出错了，并交由错误处理中间件来进行处理
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
