/**
 * Created by zb on 2016/6/23.
 */
$(function(){

})

function login(){
    //����˺�������ȷ
    //$("#loginForm").submit()

    //�������ȷ,��ʾ��ʾ��
    LoginFailed()

}

/*ȡ����¼*/
function unLogin(){

}
/*��¼ʧ�ܣ���ʾ��ʾ��*/
function LoginFailed(){
    $(".systemLogin").removeClass("show").addClass("hide")
    $(".loginError").removeClass("hide").addClass("show")

    loginFailMessage()
}

/*����¼ʧ�ܺ����ʾ��Ϣ���click�¼�*/
function loginFailMessage(){
    $(".loginError").removeClass("show").addClass("hide")
    $(".systemLogin").removeClass("hide").addClass("show")
}