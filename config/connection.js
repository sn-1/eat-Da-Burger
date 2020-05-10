
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'nawrinN123$', 
    database : 'burgers_db' 
  });
}

//Connection
module.exports = connection;