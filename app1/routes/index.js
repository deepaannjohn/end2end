var express = require('express');
var router = express.Router();
var insertData = require('../data/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  insertData();
  res.render('index', { title: 'Express App1' });
});

module.exports = router;
