var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('sobre-nosotros', { title: 'Sobre nosotros' });
});

module.exports = router;
