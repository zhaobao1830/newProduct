/**
 * Created by zb on 2016/6/23.
 */


function login(){
    /*测试用数据*/
    var username=$("#username").val() //用户名
    var password=$("#password").val() //密码
    if(username=="aa"&&password=="123"){
        window.location.href="index.html"
    }else{
        //如果不正确,显示提示框
        LoginFailed()
    }

}

/*取消登录*/
function unLogin(){
    LoginSuccess()
    $("#loginForm")[0].reset()
}
/*登录失败，显示提示框*/
function LoginFailed(){
    $(".systemLogin").removeClass("show").addClass("hide")
    $(".loginError").removeClass("hide").addClass("show")
}

/*登录成功*/
function LoginSuccess(){
    $(".systemLogin").removeClass("hide").addClass("show")
    $(".loginError").removeClass("show").addClass("hide")
}

/*点击记住密码
默认情况下span有inputClick input 的checked为true
* 点击以后进行判断
* 如果span有inputClick，就换成inputNoClick，input 的checked为false
* 如果span有inputNoClick，就换成inputClick，input 的checked为true
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