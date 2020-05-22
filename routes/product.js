var express = require('express');
var router = express.Router();
var db = require('../dbconfig');

/**
 * This function comment is parsed by doctrine
 * @group Client - Client related API
 * @route GET /product
 * @param {string} category.query.required - User's Selected Category - eg: 'Men'
 * @param {string} categorytype.query.notrequired - User's Selected Category Type - eg: 'Clothing'
 * @param {string} categorysubtype.query.notrequired - User's Selected Category SubType - eg: 'Top Wear'
 * @returns {object} 200
 */
router.get('/', function(req, res, next) {
    let query = {};
    const category = req.query.category ? req.query.category : '';
    category ? query['category'] = category : '';
    const categorytype = req.query.categorytype ? req.query.categorytype : '';
    categorytype ? query['categorytype'] = categorytype : '';
    const categorysubtype = req.query.categorysubtype ? req.query.categorysubtype : '';
    categorysubtype ? query['categorysubtype'] = categorysubtype : '';
    if (category) {
        db.get().collection('product')
        .find(query)
        .toArray(function (err, result) {
          if (err) callback(err);
          res.send(result);
        });
    } else {
        res.status(400).send({
            status: 'error',
            message: 'category is missing'
        });
    }
});

module.exports = router;
