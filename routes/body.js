var express = require('express');
var router = express.Router();
var db = require('../dbconfig');

/**
 * This function comment is parsed by doctrine
 * @group body - Operations about body
 * @route GET /body
 * @param {string} lang.query.notrequired - User's Language - eg: 'en'
 * @returns {object} 200
 */
router.get('/', function(req, res, next) {
  let lang = req.query.lang ? req.query.lang : 'en';
  db.get().collection('offer')
  .find({})
  .toArray(function(err, result) {
      if(err) throw err;
      result[0]['title'] = result[0]['title'][lang];
      res.send(result);
  });
});

module.exports = router;
