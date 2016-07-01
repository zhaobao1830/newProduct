/**
 * Created by zb on 2016/6/23.
 */

    $(function(){
        createCode()
    })

var code ; //��ȫ�� ������֤��
function createCode() {
    code = "";
    var codeLength = 4;//��֤��ĳ���
    var checkCode = document.getElementById("checkCode");
    var selectChar = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//���к�ѡ�����֤����ַ�����ȻҲ���������ĵ�
    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*26);
        code +=selectChar[charIndex];
    }
    if(checkCode) {
        checkCode.className="code";
        checkCode.innerHTML = code;
    }

}

/*��¼�û�����ȡ����*/
function checkLoginUsername(){
    $(".loginUserName").val("")
    $(".loginUserName").removeClass("errorInput").addClass("yesInput")
    $(".loginUserNameSpanN").removeClass("show").addClass("hide")
    $(".loginUserNameSpanY").removeClass("hide").addClass("show")
}
/*��¼�û���ʧȥ����*/
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
/*��¼�����ý���*/
function checkPassword(){
    $(".password").val("")
    $(".passwordSpanN").removeClass("hide").addClass("show")
}
/*��¼����ʧȥ����*/
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
/*�ظ���¼�����ȡ����*/
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

/*�ظ���¼����ʧȥ����*/
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
/*�û�����ȡ����*/
function checkUserName(){
    $(".userName").val("")
    $(".userNamepanN").removeClass("hide").addClass("show")
}

/*�û���ʧȥ����*/
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

/*�ֻ���ȡ����*/
function checkPhone(){
    $(".phone").val("")
    $(".phoneSpanN").removeClass("show").addClass("hide")
    $(".phone").removeClass("errorInput").addClass("yesInput")
    $(".phoneSpanY").removeClass("hide").addClass("show")
}
/*�ֻ�ʧȥ����*/
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
/*�����ȡ����*/
function checkEmail(){
    $(".email").val("")
    $(".email").removeClass("errorInput").addClass("yesInput")
    $(".emailSpanN").removeClass("show").addClass("hide")
    $(".emailSpanY").removeClass("hide").addClass("show")
}
/*����ʧȥ����*/
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

/*�û���ɫ��ȡ����*/
function checkUserRole(){
    $(".userRole").removeClass("errorInput").addClass("yesInput")
    $(".userRoleSpanY").removeClass("hide").addClass("show")
}
/*�û���ɫʧȥ����*/
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
/*�Ա��ȡ����*/
function checkGenderRole(){
    $(".gender").removeClass("errorInput").addClass("yesInput")
    $(".genderSpanY").removeClass("hide").addClass("show")
}
/*�Ա�ʧȥ����*/
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

/*��֤���ȡ����*/
function checkVerCode(){
    $(".verCode").val("")
    $(".verCode").removeClass("errorInput").addClass("yesInput")
    $(".verCodeSpanY").removeClass("hide").addClass("show")
    $(".verCodeSpanN").removeClass("show").addClass("hide")
}
/*��֤��ʧȥ����*/
function checkVerCode1(){
    var verCodeValue=$(".verCode").val()
    var codeValue=$(".code").text()
    $(".verCodeSpanY").removeClass("show").addClass("hide")
    if(verCodeValue){
        if(verCodeValue.toUpperCase()!=codeValue){
            $(".verCode").removeClass("yesInput").addClass("errorInput")
            $(".verCodeSpanN").removeClass("hide").addClass("show")
            return false
        }else{
            $(".verCodeSpanN").removeClass("show").addClass("hide")
            return true
        }
        return true
    }else{
        return false
    }
}
/*�޸�ͬ���Ķ���css*/
function checkRegister(){
    if($(".registerSpan").hasClass("inputClick")){
        $(".registerSpan").removeClass("inputClick").addClass("inputNoClick")
        $("#register_check").removeAttr("checked")
        $(".checkSpanY").removeClass("hide").addClass("show")
    }else{
        $(".registerSpan").removeClass("inputNoClick").addClass("inputClick")
        $("#register_check").prop("checked",true)
        $(".checkSpanY").removeClass("show").addClass("hide")
    }
}



/*���ύ
* ���registerButton��registerNoButton���޷��ύ
* */
function formSubmit(){
    var flag=true
    //�жϵ�¼�û���
    flag=checkLoginUsername1()
    if(flag==false){
        $(".loginUserName").focus()
    }
    //�ж�����
    if(flag){
        flag=checkPassword1()
        if(flag==false){
            $(".password").focus()
        }
    }
    //�ж��ظ�����
    if(flag){
        flag=checkRepassword1()
        if(flag==false){
            $(".repassword").focus()
        }
    }
    //�ж��û���
    if(flag){
        flag=checkUserName1()
        if(flag==false){
            $(".userName").focus()
        }
    }
    //�ж��ֻ�
    if(flag){
        flag=checkPhone1()
        if(flag==false){
            $(".phone").focus()
        }
    }

    //�ж�����
    if(flag){
        flag=checkEmail1()
        if(flag==false){
            $(".email").focus()
        }
    }

    //�ж��û���ɫ
    if(flag){
        flag=checkUserRole1()
        if(flag==false){
            $(".userRole").focus()
        }
    }

    //�ж��Ա�
    if(flag){
        flag=checkGenderRole1()
        if(flag==false){
            $(".gender").focus()
        }
    }
    /*�ж���֤��*/
    if(flag){
        flag=checkVerCode1()
        if(flag==false){
            $(".verCode").focus()
        }
    }

    /*�ж��Ķ�ͬ����û��ѡ��*/
    if(flag){
        var ifCheck=$("#register_check").prop("checked")
        if(ifCheck!=true){
            $(".checkSpanY").removeClass("hide").addClass("show")
        }
    }
    if(flag){
        $("#userForm").submit()
    }

}