
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


connection.query('SELECT * from registermentor ;', function(err,rows, fields) {
connection.end();
  if (!err)
    console.log('Register successful.',rows);
  else
    console.log('Error while performing register.');
  });


// app.listen(3000);
