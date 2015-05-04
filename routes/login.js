/**
 * Created by admin on 2015/4/30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登入' });
});
router.post('/ajax_login', function(req, res){
    //res.send('hello world');
    //res.render('index',{});
    if(req.body[0].username=='1')
    {
        res.json([{ res: '1' }]);
    }
    else
    {
        res.json([{ res: '0' }]);
    }



    //res.send('Post Over');



});
module.exports = router;
