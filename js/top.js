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

    /*给左边的Li添加click事件
     * 点击以后，先remove兄弟类的liClick，添加liNoClick
     * 点击的Li添加添加liNoClick，remove liClick
     * 修改img的src值
     * */
    $(".realTimeLi ul li").on("click",function(){
        $(this).siblings().removeClass("liClick").addClass("liNoClick")
        $(this).siblings().find("img").attr("src","../images/left_5.png")
        $(this).removeClass("liNoClick").addClass("liClick")
        $(this).find("img").attr("src","../images/left_6.png")
    })

    /*给contractOrder_title绑定click事件*/
    $(".realTimeDiv").on("click",function(){
        var fc //获取最左边的class值
        fc=$(this).attr("class").split(" ")[0]
        if($("."+fc+"_ul").hasClass("show")){
            $("."+fc).removeClass("ulClick").addClass("ulNoClick")
            $("."+fc).find("img").attr("src","../images/"+fc+"_n.png")
            $("."+fc+"_ul").removeClass("show").addClass("hide")
        }else{
            operRealTimeLi()
            $("."+fc).removeClass("ulNoClick").addClass("ulClick")
            $("."+fc).find("img").attr("src","../images/"+fc+"_y.png")
            $("."+fc+"_ul").removeClass("hide").addClass("show")
        }
    })
})


/*遍历realTimeLi，判断里面的div是否有ulNoClick，如果有，就移除，添加ulClick*/
function operRealTimeLi(){
    var divClass //获取div
    var firstClass  //获取div里面的第一个class
    for(var i= 0;i<$(".realTimeLi").length;i++){
        divClass=$(".realTimeLi").eq(i).find("div")
        if(divClass.hasClass("ulClick")){
            firstClass=$(".realTimeLi").eq(i).find("div").attr("class").split(" ")[0]
            divClass.removeClass("ulClick").addClass("ulNoClick")
            divClass.find("img").attr("src","../images/"+firstClass+"_n.png")
            $("."+firstClass+"_ul").removeClass("show").addClass("hide")
        }
    }
}
