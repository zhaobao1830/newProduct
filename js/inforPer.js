
/**
 * Created by zb on 2016/6/30.
 */

$(function(){
    //演示使用
    $(".head_systeMana").css("background-position","-328px -82px")
    $(".head_systeMana").addClass("clickLi")

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
    })
})