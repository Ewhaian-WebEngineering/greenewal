var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index',{ title:'Express'});
});

router.use('/feedback', require('./feedback'));

module.exports = router;