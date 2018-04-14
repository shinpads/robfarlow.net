var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});
router.get('/index.html', function(req, res, next)) {
  res.redirect('/index.html');
}
module.exports = router;
