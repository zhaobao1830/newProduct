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
     $(".loginUserNameSpanY").removeClass("hide").addClass("show")
}
/*��¼�û���ʧȥ����*/
function checkLoginUsername1(){
    $(".loginUserNameSpanY").removeClass("show").addClass("hide")
}
/*��¼�����ý���*/
function checkPassword(){
    $(".passwordSpanN").removeClass("hide").addClass("show")
}
/*��¼����ʧȥ����*/
function checkPassword1(){
    $(".passwordSpanN").removeClass("show").addClass("hide")
    $(".repasswordSpanY").removeClass("show").addClass("hide")
}
/*�ظ���¼�����ȡ����*/
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

/*�ظ���¼����ʧȥ����*/
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
/*�û�����ȡ����*/
function checkUserName(){
    $(".userNamepanN").removeClass("hide").addClass("show")
}

/*�û���ʧȥ����*/
function checkUserName1(){
    $(".userNamepanN").removeClass("show").addClass("hide")
}

/*�ֻ���ȡ����*/
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
/*�ֻ�ʧȥ����*/
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
/*��������ȡ����*/
function checkEmail(){
    var emailValue
    emailValue=$(".email").val()
    if(emailValue){
        $(".emailSpanY").removeClass("show").addClass("hide")
    }else{
        $(".emailSpanY").removeClass("hide").addClass("show")
    }
}
/*ʧȥ����*/
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

/*�޸�ͬ���Ķ���css*/
function checkRegister(){
    if($(".registerSpan").hasClass("inputClick")){
        $(".registerSpan").removeClass("inputClick").addClass("inputNoClick")
        $("#register_check").removeAttr("checked")
    }else{
        $(".registerSpan").removeClass("inputNoClick").addClass("inputClick")
        $("#register_check").prop("checked",true)
    }
}


/*���ύ
* ���registerButton��registerNoButton���޷��ύ
* */
function formSubmit(){
    var flag=false
    //�жϵ�¼�û���
    var loginUserName=$(".loginUserName").val()
    //if()


    if($(".registerButton").hasClass("registerNoButton")){

    }else{
        $("#userForm").submit()
    }
}