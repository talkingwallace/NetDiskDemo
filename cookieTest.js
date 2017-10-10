var express = require('express');
// 首先引入 express-session 这个模块
var session = require('express-session');

var app = express();
app.listen(5000);

// 按照上面的解释，设置 session 的可选参数
app.use(session({
    secret: "this is my special secret string",
    cookie: { maxAge: 3600 * 1000 }
}));

app.use(function(req,res,next){
    if (!req.session.user) {
        if(req.url=="/login"){
            next();//如果请求的地址是登录则通过，进行下一个请求
        }
        else
        {
            res.redirect('/login');
        }
    } else if (req.session.user) {
        next();
    }
});

app.get('/isOk',function(req,res){
    res.send('what s up??');
})

app.get('/login', function (req, res) {

    if(req.session.user) {//这个到底是不是从内存里提出检查的???
            res.send('<p>第 ' + req.session.user.username + '次来此页面</p>');
    } else {
        req.session.user = {username:"hello"};
        res.send("欢迎第一次来这里");
        console.log(req.session);
    }
});