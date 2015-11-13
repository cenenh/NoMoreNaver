var mysql = require('mysql');
var async = require('async');

// Constructor
function db_instance(){
  this.dbConnection = null;
}
// Class methods
db_instance.prototype.connect = function(){
  this.dbConnection = mysql.createConnection({
    host: '165.194.35.165',
    port: 3306,
    user: 'root',
    password: 'bigdata01',
    database: 'bigdata'
  }); // Create DataBase Connection

  this.dbConnection.connect(function(err) {
    if (err) {
      console.log("DB Connectio Error");
      console.log(err);
    }
  });
}

db_instance.prototype.getConnection = function(){
  return this.dbConnection;
}

db_instance.prototype.disconnect = function(){
  this.dbConnection.end();
}

module.exports = db_instance;