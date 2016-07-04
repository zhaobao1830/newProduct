/**
 * Created by Administrator on 2016/7/3.
 */


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



/*个人信息表单提交* */
function personFormSubmit(){
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

/*个人表单取消*/
function personFormReset(){
    $("#userForm")[0].reset()
}

/*所属企业信息*/

//是否已录入获取焦点
function checkIfEnter(){
    $(".ifEnter").removeClass("errorInput").addClass("yesInput")
    $(".ifEnterSpanY").removeClass("hide").addClass("show")
}

//是否已录入失去焦点
function checkIfEnter1(){
    var ifEnterValue
    ifEnterValue=$(".ifEnter option:selected").val()
    $(".ifEnterSpanY").removeClass("show").addClass("hide")
    if(ifEnterValue){
        return true
    }else{
        return false
    }
}

/*商家编码获取焦点*/
function checkMercode(){
    $(".mercode").val("")
    $(".mercodeSpanY").removeClass("hide").addClass("show")
}
/*商家编码失去焦点*/
function checkMercode1(){
    $(".mercodeSpanY").removeClass("show").addClass("hide")
    var mercodeVal
    mercodeVal=$(".mercode").val()
    if(mercodeVal){
        return true
    }else{
        return false
    }
}
/*组织机构代码获取焦点*/
function checkorgcode(){
    $(".orgcode").val("")
    $(".orgcodeSpanY").removeClass("hide").addClass("show")
}
/*组织机构代码失去焦点*/
function checkorgcode1(){
    $(".orgcodeSpanY").removeClass("show").addClass("hide")
    var orgcodeVal
    orgcodeVal=$(".orgcode").val()
    if(orgcodeVal){
        return true
    }else{
        return false
    }
}
/*公司名称获取焦点*/
function checkCompanyName(){
    $(".companyName").val("")
    $(".companyNameSpanY").removeClass("hide").addClass("show")
}
/*公司名称失去焦点*/
function checkCompanyName1(){
    $(".companyNameSpanY").removeClass("show").addClass("hide")
    var companyNameVal
    companyNameVal=$(".companyName").val()
    if(companyNameVal){
        return true
    }else{
        return false
    }
}

/*注册日期失去焦点*/
function checkRegisDate1(){
    $(".regisDateSpanY").removeClass("show").addClass("hide")
    var regisDateVal
    regisDateVal=$(".regisDate").val()
    if(regisDateVal){
        return true
    }else{
        return false
    }
}

/*注册资金获取焦点*/
function checkRegisCapital(){
    $(".regisCapital").val("")
    $(".regisCapitalSpanY").removeClass("hide").addClass("show")
}
/*注册资金失去焦点*/
function checkRegisCapital1(){
    $(".regisCapitalSpanY").removeClass("show").addClass("hide")
    var regisCapitalVal
    regisCapitalVal=$(".regisCapital").val()
    if(regisCapitalVal){
        return true
    }else{
        return false
    }
}

/*联系人获取焦点*/
function checkContacts(){
    $(".contacts").val("")
    $(".contactsSpanY").removeClass("hide").addClass("show")
}
/*联系人失去焦点*/
function checkContacts1(){
    $(".contactsSpanY").removeClass("show").addClass("hide")
    var contactsVal
    contactsVal=$(".contacts").val()
    if(contactsVal){
        return true
    }else{
        return false
    }
}

/*联系电话获取焦点*/
function checkContactNumber(){
    $(".contactNumber").val("")
    $(".contactNumber").removeClass("errorInput").addClass("yesInput")
    $(".contactNumberSpanY").removeClass("hide").addClass("show")
    $(".contactNumberSpanN").removeClass("show").addClass("hide")
}
/*联系电话失去焦点*/
function checkContactNumber1(){
    $(".contactNumberSpanY").removeClass("show").addClass("hide")
    var contactNumberValue
    contactNumberValue=$(".contactNumber").val()
    if(contactNumberValue){
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(contactNumberValue))) {
            $(".contactNumberSpanN").removeClass("hide").addClass("show")
            $(".contactNumber").removeClass("yesInput").addClass("errorInput")
            return false
        }else{
            $(".contactNumberSpanN").removeClass("show").addClass("hide")
            return true
        }
        return true
    }else{
        return false
    }
}

/*公司地址获取焦点*/
function checkComAddress(){
    $(".comAddress").val("")
    $(".comAddressSpanY").removeClass("hide").addClass("show")
}
/*公司地址失去焦点*/
function checkComAddress1(){
    $(".comAddressSpanY").removeClass("show").addClass("hide")
    var comAddressVal
    comAddressVal=$(".comAddress").val()
    if(comAddressVal){
        return true
    }else{
        return false
    }
}


/*所属企业表单提交*/
function enterFormSubmit(){
    //判断是否已录入
    var flag=true
    //判断登录用户名
    flag=checkIfEnter1()
    if(flag==false){
        $(".ifEnter").focus()
    }
    //判断商家编码
    if(flag){
        flag=checkMercode1()
        if(flag==false){
            $(".mercode").focus()
        }
    }
    //判断组织机构代码
    if(flag){
        flag=checkorgcode1()
        if(flag==false){
            $(".orgcode").focus()
        }
    }
    //判断公司名称
    if(flag){
        flag=checkCompanyName1()
        if(flag==false){
            $(".companyName").focus()
        }
    }
    //判断注册时间
    if(flag){
        flag=checkRegisDate1()
        if(flag==false){
            //$(".regisDate").focus()
            $('.regisDateSpanY').removeClass('hide').addClass('show')
        }
    }
    //判断注册资金
    if(flag){
        flag=checkRegisCapital1()
        if(flag==false){
            $(".regisCapital").focus()
        }
    }

    //判断联系人
    if(flag){
        flag=checkContacts1()
        if(flag==false){
            $(".contacts").focus()
        }
    }
   //判断联系电话
    if(flag){
        flag=checkContactNumber1()
        if(flag==false){
            $(".contactNumber").focus()
        }
    }
   //判断公司地址
    if(flag){
        flag=checkComAddress1()
        if(flag==false){
            $(".comAddress").focus()
        }
    }
    if(flag){
        $("#enterForm")[0].submit()
    }
}

/*所属企业表单取消*/
function enterFormReset(){
    $("#enterForm")[0].reset()
}
