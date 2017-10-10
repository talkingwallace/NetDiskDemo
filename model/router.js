/**
 * Created by cwj on 2017/3/30.
 */
var path = require('path');
var bodyParser = require('body-parser');
var optdbs = require('./optdbs');
var multer  = require('multer');
module.exports={
  setRouter:function(app){
      app.use(bodyParser.urlencoded({extended:false}));
      app.use(multer({ dest: '/tmp/'}).array('image'));
      app.get('/',function(req,res){
          res.sendFile(path.resolve(__dirname, '../html/login.html'));
          console.log('set to the loginpage');
      });
      app.post('/login',function(req,res){
            console.log();
            var user = req.body.user;
            var psw = req.body.psw;
            var register = req.body.register;
           if(register == '注册'){
                res.redirect('/register');
            }
           else {
               console.log(user+psw);
               var filter = {"user":user,"psw":psw};
               optdbs.findDocWithFilter(optdbs.mainDB,'user',filter,function(docs){
                   console.log(docs);
                   if(docs.length==1){
                       if(docs[0].user===user&&docs[0].psw===psw){
                           res.redirect('./getHTML/mainpage');
                       }
                   }else{
                       console.log("failed");
                   }
               });
           }
      });
      app.get('/register',function(req,res){
          res.sendFile(path.resolve(__dirname, '../html/register.html'));
      });
      app.post('/register',function(req,res){
            var user = req.body.Nuser;
            var psw = req.body.Npsw;
            var filter = {"user":user};
            optdbs.findDocWithFilter(optdbs.mainDB,'user',filter,function(docs){
               console.log(user+" "+psw);
                if(docs.length>=1){
                    res.redirect('./html/registerfailed.html');
                }
                else{
                    var data = {"user":user,"psw":psw};
                    function recall(){
                        optdbs.createUserSpace(user);
                    }
                    optdbs.insertData(optdbs.mainDB,'user',data,recall);
                    res.redirect('./html/transition.html');
                }
            });
      });
      app.post('/file_upload', function (req, res) {

          console.log(req.files);  // 上传的文件信息
          console.log(req.files.length);
          console.log(req.files.files[0]);
      });
      app.get('/mainpage',function(req,res){  //测试中
            console.log('hi');
            optdbs.findDocWithFilter('cwj','file',{},function(docs){
                var info;
                info = docs[0].toString();
                console.log(info);
                console.log(typeof info);
                res.send(info.cwj);
                console.log(docs);
            });
      });
  }
};