/**
 * Created by cwj on 2017/3/29.
 */
var addEvent = function(func){
    if(!func)return false;
    var currentFunc = window.onload;
    if(typeof window.onload!= 'function')window.onload = func;
    else{
        window.onload =function(){
            currentFunc();
            func();
        }
    }
    return true;
};
var exam = function(){
    var psw1 = document.getElementById('psw1').value;
    var psw2 = document.getElementById('psw2').value;
    var user = document.getElementById('user').value;
    if(psw1.length==0||psw1.length==0||user.length==0){
        alert('请全部填写');return;
    }
    if(user.length<6){
        alert('用户名长度请在6个字符以上!');
        return;
    }
    if(psw1===psw2){
        if(psw1.length<6){
            alert('密码长度不能少于6位!');
            return;
        }
        if(confirm('确定填写的资料正确吗？')){
            var form = document.getElementById("handle");
            var localhostPath=document.location.host;
            form.action = 'http://'+localhostPath+'/register';
            form.submit();
        }
    }
    else{
        alert('两次的密码不一致，请您检查');
    }
};
var clickEvent = function () {
    var submit = document.getElementById('submitButt');
    submit.onclick = exam;
};
addEvent(clickEvent);