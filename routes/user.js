var express = require('express');
//这是一个工厂函数 返回一个路由容器实例
var router = express.Router();


//注册
router.get('/signup',function (req,res){
    res.send('注册');
});
router.post('/signup',function (req,res){

});

//登录
router.get('/signin',function (req,res){
    res.send('登录');
});
router.post('/signin',function (req,res){

});


module.exports = router;