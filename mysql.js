var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'www.db4free.net',
  user:'team',
  password:'cs6905',
  database:'ghelp'
})

connection.connect(function(err){
  if(err){
    console.log('Error connecting to db');
    return;
  }
  console.log('Connection established');
});

connection.end();
