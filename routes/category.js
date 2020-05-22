var express = require('express');
var router = express.Router();
var db = require('../dbconfig');

/**
 * This function comment is parsed by doctrine
 * @group Admin - Admin related API
 * @route GET /category
 * @returns {object} 200
 */
router.get('/', function (req, res, next) {
  db.get().collection('product-category')
    .find({})
    .toArray(function (err, result) {
      if (err) callback(err);
      res.send(result);
    });
});

module.exports = router;
