/**
 * Created by Administrator on 2016/7/3.
 */
$(function(){
    alert($(".inforPer_right").height())
    $(".ipr").height(580)
})


/*登录用户名获取焦点*/
function checkLoginUsername(){
    $(".loginUserName").val("")
    $(".loginUserName").removeClass("errorInput").addClass("yesInput")
    $(".loginUserNameSpanN").removeClass("show").addClass("hide")
    $(".loginUserNameSpanY").removeClass("hide").addClass("show")
}
/*登录用户名失去焦点*/
function checkLoginUsername1(){
    var loginUserNameVal=$(".loginUserName").val()
    var format=/^[\x21-\x7E]{6,20}$/
    $(".loginUserNameSpanY").removeClass("show").addClass("hide")
    if(loginUserNameVal){
        if(!format.test(loginUserNameVal)){
            $(".loginUserName").removeClass("yesInput").addClass("errorInput")
            $(".loginUserNameSpanN").removeClass("hide").addClass("show")
            return false
        }else{
            return true
        }
        return true
    }else{
        return false
    }
}
/*登录密码获得焦点*/
function checkPassword(){
    $(".password").val("")
    $(".passwordSpanN").removeClass("hide").addClass("show")
}
/*登录密码失去焦点*/
function checkPassword1(){
    var passwordVal
    passwordVal=$(".password").val()
    $(".passwordSpanN").removeClass("show").addClass("hide")
    $(".repasswordSpanY").removeClass("show").addClass("hide")
    if(passwordVal){
        return true
    }else{
        return false
    }
}
/*重复登录密码获取焦点*/
function checkRepassword(){
    var passwordValue
    passwordValue=$(".password").val()
    $(".repassword").removeClass("errorInput").addClass("yesInput")
    if(passwordValue){
        $(".repassword").val("")
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
    $(".repasswordSpanY").removeClass("show").addClass("hide")
    if(passwordValue){
        if(repasswordVal){
            $(".repasswordSpanY").removeClass("show").addClass("hide")
            if(passwordValue==repasswordVal){
                $(".repasswordSpanN").removeClass("show").addClass("hide")
                return true
            }else{
                $(".repassword").removeClass("yesInput").addClass("errorInput")
                $(".repasswordSpanN").removeClass("hide").addClass("show")
                return false
            }
            return true
        }else{
            return false
        }
        return true
    }else{
        return false
    }
}
/*用户名获取焦点*/
function checkUserName(){
    $(".userName").val("")
    $(".userNamepanN").removeClass("hide").addClass("show")
}

/*用户名失去焦点*/
function checkUserName1(){
    $(".userNamepanN").removeClass("show").addClass("hide")
    var userNameVal
    userNameVal=$(".userName").val()
    if(userNameVal){
        return true
    }else{
        return false
    }
}

/*手机获取焦点*/
function checkPhone(){
    $(".phone").val("")
    $(".phoneSpanN").removeClass("show").addClass("hide")
    $(".phone").removeClass("errorInput").addClass("yesInput")
    $(".phoneSpanY").removeClass("hide").addClass("show")
}
/*手机失去焦点*/
function checkPhone1(){
    $(".phoneSpanY").removeClass("show").addClass("hide")
    var phoneValue
    phoneValue=$(".phone").val()
    if(phoneValue){
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(phoneValue))) {
            $(".phoneSpanN").removeClass("hide").addClass("show")
            $(".phone").removeClass("yesInput").addClass("errorInput")
            return false
        }else{
            $(".phoneSpanN").removeClass("show").addClass("hide")
            return true
        }
        return true
    }else{
        return false
    }
}
/*邮箱获取焦点*/
function checkEmail(){
    $(".email").val("")
    $(".email").removeClass("errorInput").addClass("yesInput")
    $(".emailSpanN").removeClass("show").addClass("hide")
    $(".emailSpanY").removeClass("hide").addClass("show")
}
/*邮箱失去焦点*/
function checkEmail1(){
    $(".emailSpanY").removeClass("show").addClass("hide")
    var emailValue
    emailValue=$(".email").val()
    var format=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;][,;\s]*(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*)*$/;
    if(emailValue){
        if(!(format.test(emailValue))){
            $(".email").removeClass("yesInput").addClass("errorInput")
            $(".emailSpanN").removeClass("hide").addClass("show")
            return false
        }else{
            $(".emailSpanN").removeClass("show").addClass("hide")
            return true
        }
        return true
    }else{
        return false
    }
}

/*用户角色获取焦点*/
function checkUserRole(){
    $(".userRole").removeClass("errorInput").addClass("yesInput")
    $(".userRoleSpanY").removeClass("hide").addClass("show")
}
/*用户角色失去焦点*/
function checkUserRole1(){
    var userRoleValue
    userRoleValue=$(".userRole option:selected").val()
    $(".userRoleSpanY").removeClass("show").addClass("hide")
    if(userRoleValue){
        return true
    }else{
        return false
    }
}
/*性别获取焦点*/
function checkGenderRole(){
    $(".gender").removeClass("errorInput").addClass("yesInput")
    $(".genderSpanY").removeClass("hide").addClass("show")
}
/*性别失去焦点*/
function checkGenderRole1(){
    var genderValue
    genderValue=$(".gender option:selected").val()
    $(".genderSpanY").removeClass("show").addClass("hide")
    if(genderValue){
        return true
    }else{
        return false
    }
}



/*表单提交
 * 如果registerButton有registerNoButton，无法提交
 * */
function formSubmit(){
    var flag=true
    //判断登录用户名
    flag=checkLoginUsername1()
    if(flag==false){
        $(".loginUserName").focus()
    }
    //判断密码
    if(flag){
        flag=checkPassword1()
        if(flag==false){
            $(".password").focus()
        }
    }
    //判断重复密码
    if(flag){
        flag=checkRepassword1()
        if(flag==false){
            $(".repassword").focus()
        }
    }
    //判断用户名
    if(flag){
        flag=checkUserName1()
        if(flag==false){
            $(".userName").focus()
        }
    }
    //判断手机
    if(flag){
        flag=checkPhone1()
        if(flag==false){
            $(".phone").focus()
        }
    }

    //判断邮箱
    if(flag){
        flag=checkEmail1()
        if(flag==false){
            $(".email").focus()
        }
    }

    //判断用户角色
    if(flag){
        flag=checkUserRole1()
        if(flag==false){
            $(".userRole").focus()
        }
    }

    //判断性别
    if(flag){
        flag=checkGenderRole1()
        if(flag==false){
            $(".gender").focus()
        }
    }

    if(flag){
        $("#userForm")[0].submit()
    }
}

/*取消*/
function formReset(){
    $("#userForm")[0].reset()
}

