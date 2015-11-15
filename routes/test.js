var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '[CAUCSE] No More Naver' });
});

module.exports = router;
