// var express    = require("express");

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admini',
  database : 'nodesql'
});

// var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
}
});


var values=['Jack','jack999@mun.ca','999999'];

  connection.query('INSERT INTO registermentor SET mentor_name=?,mentor_email=?,password=?',values, function(err, results) {
  connection.end();
    if (!err)
      console.log('Register successful.'+results.insertId);
    else
      console.log('Error while performing register.'+err.message);
    });


// app.listen(3000);
