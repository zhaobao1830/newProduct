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

/*登录用户名获取焦点*/
function checkLoginUsername(){
     $(".loginUserNameSpanY").removeClass("hide").addClass("show")
}
/*登录用户名失去焦点*/
function checkLoginUsername1(){
    $(".loginUserNameSpanY").removeClass("show").addClass("hide")
}
/*登录密码获得焦点*/
function checkPassword(){
    $(".passwordSpanN").removeClass("hide").addClass("show")
}
/*登录密码失去焦点*/
function checkPassword1(){
    $(".passwordSpanN").removeClass("show").addClass("hide")
    $(".repasswordSpanY").removeClass("show").addClass("hide")
}
/*重复登录密码获取焦点*/
function checkRepassword(){
    var passwordValue,repasswordVal
    passwordValue=$(".password").val()
    repasswordVal=$(".repassword").val()
    if(passwordValue){
        $(".repasswordSpanN").removeClass("show").addClass("hide")
        $(".repasswordSpanY").removeClass("hide").addClass("show")
    }else{
        $(".repasswordSpanY").removeClass("show").addClass("hide")
    }
}

/*重复登录密码失去焦点*/
function checkRepassword1(){
    var passwordValue,repasswordVal
    passwordValue=$(".password").val()
    repasswordVal=$(".repassword").val()
    if(passwordValue){
        if(repasswordVal){
            $(".repasswordSpanY").removeClass("show").addClass("hide")
            if(passwordValue==repasswordVal){
                $(".repasswordSpanN").removeClass("show").addClass("hide")
            }else{
                $(".repasswordSpanN").removeClass("hide").addClass("show")
            }
        }else{
            $(".repasswordSpanY").removeClass("hide").addClass("show")
        }
    }
}
/*用户名获取焦点*/
function checkUserName(){
    $(".userNamepanN").removeClass("hide").addClass("show")
}

/*用户名失去焦点*/
function checkUserName1(){
    $(".userNamepanN").removeClass("show").addClass("hide")
}

/*手机获取焦点*/
function checkPhone(){
    var phoneValue
    phoneValue=$(".phone").val()
    $(".phoneSpanN").removeClass("show").addClass("hide")
    if(phoneValue){
        $(".phoneSpanY").removeClass("show").addClass("hide")
    }else{
        $(".phoneSpanY").removeClass("hide").addClass("show")
    }
}
/*手机失去焦点*/
function checkPhone1(){
    $(".phoneSpanY").removeClass("show").addClass("hide")
    var phoneValue
    phoneValue=$(".phone").val()
    if(phoneValue){
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phoneValue))) {
            $(".phoneSpanN").removeClass("hide").addClass("show")
        }else{
            $(".phoneSpanN").removeClass("show").addClass("hide")
        }
     }
}
/*检测邮箱获取焦点*/
function checkEmail(){
    var emailValue
    emailValue=$(".email").val()
    if(emailValue){
        $(".emailSpanY").removeClass("show").addClass("hide")
    }else{
        $(".emailSpanY").removeClass("hide").addClass("show")
    }
}
/*失去焦点*/
function checkEmail1(){
    $(".emailSpanY").removeClass("show").addClass("hide")
    var emailValue
    emailValue=$(".email").val()
    var format=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;][,;\s]*(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*)*$/;
    if(emailValue){
        if(!(format.test(emailValue))){
            $(".emailSpanN").removeClass("hide").addClass("show")
        }else{
            $(".emailSpanN").removeClass("show").addClass("hide")
        }
    }
}

/*修改同意阅读的css*/
function checkRegister(){
    if($(".registerSpan").hasClass("inputClick")){
        $(".registerSpan").removeClass("inputClick").addClass("inputNoClick")
        $("#register_check").removeAttr("checked")
    }else{
        $(".registerSpan").removeClass("inputNoClick").addClass("inputClick")
        $("#register_check").prop("checked",true)
    }
}


/*表单提交
* 如果registerButton有registerNoButton，无法提交
* */
function formSubmit(){
    var flag=false
    //判断登录用户名
    var loginUserName=$(".loginUserName").val()
    //if()


    if($(".registerButton").hasClass("registerNoButton")){

    }else{
        $("#userForm").submit()
    }
}