var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express8888',content:'我是路由设置过来的！' });
});

module.exports = router;
