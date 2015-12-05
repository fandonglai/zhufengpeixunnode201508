var express = require('express');
var router = express.Router();

//当用户访问 ／add的时候  渲染此模版
router.get('/add', function(req, res, next) {
    res.render('article/add', { title: '发表文章' });
});
router.get('/add', function(req, res, next) {
    res.render('index', { title: '发表文章' });
});

module.exports = router;
