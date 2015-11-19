var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//mysql connection
var connection = mysql.createConnection({
  host:'db4free.net',
  user:'team',
  password:'cs6905',
  database:'ghelp'
})

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.post('/',function(request,response){

  connection.connect(function(err){
    if(err){
      console.log('Error connecting to db');
      return;
    }
    console.log('Connection established');
  });

  var group = request.body.group;
  var username =request.body.username;
  var password =request.body.password;
  var table;

  switch (group) {
    case 1:
    table='newStudent';

      break;
    case 2:
    table='mentor';
      break;
    case 3:
    table='hostFamily';
      break;

    default:

  }
  console.log(username);


//   connection.query('SELECT * FROM 'table' WHERE name=? AND password=?',["username","password"],function(err,rows){
//     if(err) throw err;
//     console.log('the result is ', rows[0],solution);
//   }
// );
// connection.query('SELECT * FROM newStudent WHERE name=? AND password=?',["username","password"],function(err,rows){
//   console.log('the result is ', rows[0],solution);
// });

connection.query('SELECT * FROM newStudent WHERE name=? AND password=?  ',[username,password],function(err,rows){
  if(err) throw err;
  console.log('the result is ', rows[0]);
  if (rows[0] !=null) {
    return response.redirect("/login");

  }else{
    return response.redirect("/fail");
  }


});


  connection.end();

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(3000);
module.exports = app;
