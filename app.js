var express = require('express');
var app = express();

var user = require('./routes/user');
var article = require('./routes/article');


//当路由是以/user开头的话 会交由路由中间件来处理
app.use('/user',user);
app.use('/article',article);


app.listen(8080);
