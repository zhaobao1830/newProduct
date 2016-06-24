/**
 * Created by zb on 2016/6/23.
 */
$(function(){

})

function login(){
    //如果账号密码正确
    //$("#loginForm").submit()

    //如果不正确,显示提示框
    LoginFailed()

}

/*取消登录*/
function unLogin(){

}
/*登录失败，显示提示框*/
function LoginFailed(){
    $(".systemLogin").removeClass("show").addClass("hide")
    $(".loginError").removeClass("hide").addClass("show")

    loginFailMessage()
}

/*给登录失败后的提示信息添加click事件*/
function loginFailMessage(){
    $(".loginError").removeClass("show").addClass("hide")
    $(".systemLogin").removeClass("hide").addClass("show")
}