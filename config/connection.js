var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'us-cdbr-east-06.cleardb.net',
    user     : 'bbd7d617719502',
    password : 'c8995f87', 
    database : 'heroku_ac1a9c6c68e1175' 
  });
}


//Connection
module.exports = connection;