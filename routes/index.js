var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sam = 'Why so Serious'
  res.status(200).send(sam);
});

module.exports = router;

