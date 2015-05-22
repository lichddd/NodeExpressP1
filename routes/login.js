/**
 * Created by admin on 2015/4/30.
 */
var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登入' });
});
router.post('/ajax_login', function(req, res){
    //res.send('hello world');
    //res.render('index',{});
    var data = JSON.stringify(req.body);

    var postheaders = {
        'Content-Type' : 'application/json',
        'Content-Length' : data.length
    };

    // the post options
    var optionspost = {
        host : '192.168.16.245',
        port : '80',
        path : '/St1/ajax_login',
        method : 'POST',
        headers : postheaders
    };



    //// do the POST call
    //// 服务器端发送REST请求
    //var reqPost = http.request(optionspost, function(resPost) {
    //    var body='';
    //    resPost.on('data', function (data) { console.log(data);body += data; })
    //        .on('end', function () {
    //            console.log(JSON.parse(body));
    //            JSON.parse(body);
    //            //res.send(200, body);
    //            res.json(JSON.parse(body));
    //        });
    //    //console.log(d);
    //    //    res.json(d);
    //        //res.send(d);
    //    //});
    //});
    //reqPost.write(data+'\n');
    //
    //reqPost.end();
    //
    //reqPost.on('error', function(e) {
    //    console.error(e);
    //    res.json([{ res: '0' }]);
    //});













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
