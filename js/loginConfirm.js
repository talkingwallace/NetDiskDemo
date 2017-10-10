/**
 * Created by cwj on 2017/3/30.
 */
var exam = function(){

    var user = document.getElementsByName('user')[0].value;
    var psw = document.getElementsByName('psw')[0].value;
    if(!user){
        alert('请输入用户名!');
        return ;
    }
    if(!psw){
        alert('请输入密码!');
        return ;
    }
    document.getElementById('list').submit();
};

window.onload=function(){
    document.getElementsByName('handle')[0].onclick=exam;
};