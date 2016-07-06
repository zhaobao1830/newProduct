
/**
 * Created by zb on 2016/6/30.
 */

$(function(){
    //演示使用
    $(".head_userMana").css("background-position","-246px -82px")
    $(".head_userMana").addClass("clickLi")

    setHeight("ei_inf")

    /*给左边的Li绑定click事件*/
    var fc //获取最左边的class值
    $(".inforPer_left ul li").on("click",function(){
        fc=$(this).attr("class").split(" ")[0]
        $(this).siblings().removeClass("liClick").addClass("liNoClick")
        $(this).removeClass("liNoClick").addClass("liClick")
        //把所有的Li都去掉infor_Click，添加infor_NoClick
        $(".ei_div").removeClass("infor_Click").addClass("infor_NoClick")
        $(".pi_div").removeClass("infor_Click").addClass("infor_NoClick")
        //把所有的Li下面的img的src设置为没有点击时的样子
        $(".ei_div").find("img").attr("src","../images/inforPer/ei_n.png")
        $(".pi_div").find("img").attr("src","../images/inforPer/pi_n.png")

        //给点记得Li添加infor_Click，给img的src设置为点击时的样子
        $("."+fc+"_div").removeClass("infor_NoClick").addClass("infor_Click")
        $("."+fc+"_div").find("img").attr("src","../images/inforPer/"+fc+"_y.png")


        //先让p都隐藏
        $(".ei_rt").removeClass("show").addClass("hide")
        $(".pi_rt").removeClass("show").addClass("hide")
        //给相应的p添加样式
        $("."+fc+"_rt").removeClass("hide").addClass("show")

        /*显示相应的页面，设计相应的高度*/
        $(".ei_inf").removeClass("show").addClass("hide")
        $(".pi_inf").removeClass("show").addClass("hide")
        $("."+fc+"_inf").removeClass("hide").addClass("show")
        setHeight(fc+"_inf")
    })
})

/*获取页面的高度*/
function setHeight(str){
    var windowHeight
    windowHeight=$(window).height() //浏览器可视高度
    var informationHeight
    informationHeight =$("."+str).height() //右边内容的高度
    var minBodyHright
    minBodyHright=informationHeight+264 //所需要页面的最小高度

    var iprHeight //ipr的高度
    var containHeight //内容高度
    if(windowHeight<=minBodyHright){
        iprHeight=informationHeight+80
        containHeight=informationHeight+194
    }else{
        informationHeight=windowHeight-285
        iprHeight=informationHeight+40
        containHeight=informationHeight+194
    }
    $(".ipr").height(iprHeight)
    $(".inforPerContain").height(containHeight)
    $(".inforPer_left").height(containHeight)
    $(".inforPer_right").height(containHeight)
}