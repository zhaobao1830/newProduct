/**
 * Created by zb on 2016/6/23.
 */

    $(function(){
        createCode()
    })

var code ; //在全局 定义验证码
function createCode() {
    code = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    var selectChar = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的
    for(var i=0;i<codeLength;i++)
    {
        var charIndex = Math.floor(Math.random()*26);
        code +=selectChar[charIndex];
    }
    if(checkCode)
    {
        checkCode.className="code";
        checkCode.innerHTML = code;
    }

}