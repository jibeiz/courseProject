var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'G-help' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'G-help' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'G-help' });
});
router.get('/fail', function(req, res, next) {
  res.render('fail', { title: 'G-help' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'G-help' });
});
router.get('/administration', function(req, res, next) {
  res.render('administration', { title: 'G-help' });
});

router.get('/mentor', function(req, res, next) {
  res.render('mentor', { title: 'G-help' });
});

router.get('/hostfamily', function(req, res, next) {
  res.render('hostfamily', { title: 'G-help' });
});
module.exports = router;
