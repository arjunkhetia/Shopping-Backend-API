var express = require('express');
var router = express.Router();
var db = require('../dbconfig');
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Shopping Server API');
});

module.exports = router;
