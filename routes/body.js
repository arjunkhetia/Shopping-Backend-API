var express = require('express');
var router = express.Router();
var db = require('../dbconfig');
var async = require('async');

/**
 * This function comment is parsed by doctrine
 * @group body - Operations about body
 * @route GET /body
 * @param {string} lang.query.notrequired - User's Language - eg: 'en'
 * @returns {object} 200
 */
router.get('/', async (req, res, next) => {
  let finalResult = [];
  let lang = req.query.lang ? req.query.lang : 'en';
  async.waterfall([
    function (callback) {
      db.get().collection('offer')
        .find({})
        .toArray(function (err, result) {
          if (err) callback(err);
          result[0]['title'] = result[0]['title'][lang];
          finalResult.push({"offer": result});
          callback(null, finalResult);
        });
    },
    function (finalResult, callback) {
      db.get().collection('slider')
        .find({})
        .toArray(function (err, result) {
          if (err) callback(err);
          finalResult.push({"slider": result});
          callback(null, finalResult);
        });
    },
    function (finalResult, callback) {
      db.get().collection('advertise')
        .find({})
        .toArray(function (err, result) {
          if (err) callback(err);
          finalResult.push({"advertise": result});
          callback(null, finalResult);
        });
    }
  ], function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
