/**
 * Created by zb on 2016/6/24.
 */
$(function(){
    //给head_choice li绑定click事件，点击的时候，通过clickLi获取到上一个点击的background-position值
    //如果有，则改变它的background-position值
    //修改点击的当前li的background-position值，并且添加clickLi

    var oldPostionLeft //点击以前的background-position left值
    var clickLiPostion  //上一个点击的background-position值
    var clickLiPostionLeft  //上一个点击的background-position left值
    $(".head_choice li").on("click",function(){
        clickLiPostion=$(".clickLi").css("background-position")
        if(clickLiPostion){
            clickLiPostionLeft=clickLiPostion.split(" ")[0]
        }

        $(".clickLi").css("background-position",oldPostionLeft+" 0px")

        oldPostionLeft=$(this).css("background-position").split(" ")[0]
        $(this).css("background-position",oldPostionLeft+" -82px")
        $(this).siblings().removeClass("clickLi")
        $(this).addClass("clickLi")
    })

})