/**
 * Created by zb on 2016/6/23.
 */


function login(){
    /*����������*/
    var username=$("#username").val() //�û���
    var password=$("#password").val() //����
    if(username=="aa"&&password=="123"){
        window.location.href="index.html"
    }else{
        //�������ȷ,��ʾ��ʾ��
        LoginFailed()
    }

}

/*ȡ����¼*/
function unLogin(){
    LoginSuccess()
    $("#loginForm")[0].reset()
}
/*��¼ʧ�ܣ���ʾ��ʾ��*/
function LoginFailed(){
    $(".systemLogin").removeClass("show").addClass("hide")
    $(".loginError").removeClass("hide").addClass("show")
}

/*��¼�ɹ�*/
function LoginSuccess(){
    $(".systemLogin").removeClass("hide").addClass("show")
    $(".loginError").removeClass("show").addClass("hide")
}

/*�����ס����
Ĭ�������span��inputClick input ��checkedΪtrue
* ����Ժ�����ж�
* ���span��inputClick���ͻ���inputNoClick��input ��checkedΪfalse
* ���span��inputNoClick���ͻ���inputClick��input ��checkedΪtrue
* */
function savePass(){
    if($(".savePasswordSpan").hasClass("inputClick")){
        $(".savePasswordSpan").removeClass("inputClick").addClass("inputNoClick")
        $("#savePassword").removeAttr("checked")
    }else{
        $(".savePasswordSpan").removeClass("inputNoClick").addClass("inputClick")
        $("#savePassword").prop("checked",true)
    }
}