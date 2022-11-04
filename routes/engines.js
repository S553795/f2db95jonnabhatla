var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('engines', { title: 'Search Results Engines' });
});

module.exports = router;
