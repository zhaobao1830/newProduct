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
    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*26);
        code +=selectChar[charIndex];
    }
    if(checkCode) {
        checkCode.className="code";
        checkCode.innerHTML = code;
    }

}

/*检测登录用户名*/
function checkUsername(){
    var userNameValue
    userNameValue=$(".username").val()
    if(userNameValue){
        $(".usernameSpanY").removeClass("hide").addClass("show")
        $(".usernameSpanN").removeClass("show").addClass("hide")
    }else{
        $(".usernameSpanY").removeClass("show").addClass("hide")
        $(".usernameSpanN").removeClass("hide").addClass("show")
    }
}

/*检测登录密码*/
function checkPassword(){
    var passwordValue
    passwordValue=$(".password").val()
    if(passwordValue){
        $(".passwordSpanN").removeClass("show").addClass("hide")
    }else{
        $(".passwordSpanN").removeClass("hide").addClass("show")
    }
}
/*检测重复登录密码*/
function checkRepassword(){
    var repasswordVal,passwordValue
    repasswordVal=$(".repassword")
    passwordValue=$(".password").val()
    if(repasswordVal){
        $(".repasswordSpanY").removeClass("show").addClass("hide")
        if(passwordValue==repasswordVal){
            $(".repasswordSpanN").removeClass("hide").addClass("show")
        }else{
            $(".repasswordSpanN").removeClass("show").addClass("hide")
        }
    }else{
        $(".repasswordSpanY").removeClass("hide").addClass("show")
    }


}
/*检测用户名*/
function checkName(){
   var nameValue
    nameValue=$(".NAME").val()
    if(nameValue){
        $(".NAMESpanN").removeClass("show").addClass("hide")
    }else{
        $(".NAMESpanN").removeClass("hide").addClass("show")
    }
}

/*检测手机*/
function checkPhone(){
    var phoneValue
    phoneValue=$(".PHONE").val()
    if(phoneValue){
        $(".PHONESpanN").removeClass("show").addClass("hide")
    }else{
        $(".PHONESpanN").removeClass("hide").addClass("show")
    }
}

/*检测邮箱*/
function checkEmail(){
    var emailValue
    emailValue=$(".EMAIL").val()
    if(emailValue){
        $(".EMAILSpanN").removeClass("show").addClass("hide")
    }else{
        $(".EMAILSpanN").removeClass("hide").addClass("show")
    }
}