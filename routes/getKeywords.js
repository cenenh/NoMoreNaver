var express = require('express');
var router = express.Router();
var moment = require('moment');
var database = require('../database/db_instance');
var async = require('async');

/* GET keywords. */
router.post('/', function(request, response){
  response.status(200).json({
    req_method: request.method,
    code : 200,
    data : "The API for get key words"
  });
});

router.get('/', function(request, response){
  var query_date = {
    from : moment().format("YYYY-MM-DD"),
    until : moment().format("YYYY-MM-DD"),
  };
  var db = new database();
  async.waterfall([ function(callback){
    console.log("create db-connection");
    db.connect();
    callback(null, db);
  },
  function(db, callback){
    console.log("get db-connection");
    var conn = db.getConnection();
    callback(null, conn);
  },
  function(conn, callback){
    console.log("do query!");
    var query = "select * from count where tf1 > 15 and tf2 > 15 and tf3 > 15;";
    conn.query(query, function(query_error, rows){
      if(!query_error){
        console.log("got rows!")
        callback(null, rows);
      }
      else {
        console.log(query_error);
        callback(query_error, rows);
      } // if error
    });//conn.query
  }],
  function(async_waterfall_error, result){
    var res = {};
    if(!async_waterfall_error){
      res.code = 200,
      res.data = result;
    }
    else{
      res.code = 400;
      res.data = async_waterfall_error;
    }
    response.json(res);
    db.disconnect();
  }); //async.waterfall
}); //router.get

module.exports = router;
