var express = require('express');
//这是一个工厂函数 返回一个路由容器实例
var router = express.Router();


//发表文章
router.get('/add',function (req,res){
    res.send('发表文章');
});
router.post('/add',function (req,res){

});

module.exports = router;
