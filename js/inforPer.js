
/**
 * Created by zb on 2016/6/30.
 */

$(function(){
    //��ʾʹ��
    $(".head_systeMana").css("background-position","-328px -82px")
    $(".head_systeMana").addClass("clickLi")

    /*����ߵ�Li��click�¼�*/
    var fc //��ȡ����ߵ�classֵ
    $(".inforPer_left ul li").on("click",function(){
        fc=$(this).attr("class").split(" ")[0]
        $(this).siblings().removeClass("liClick").addClass("liNoClick")
        $(this).removeClass("liNoClick").addClass("liClick")
        //�����е�Li��ȥ��infor_Click�����infor_NoClick
        $(".ei_div").removeClass("infor_Click").addClass("infor_NoClick")
        $(".pi_div").removeClass("infor_Click").addClass("infor_NoClick")
        //�����е�Li�����img��src����Ϊû�е��ʱ������
        $(".ei_div").find("img").attr("src","../images/inforPer/ei_n.png")
        $(".pi_div").find("img").attr("src","../images/inforPer/pi_n.png")

        //����ǵ�Li���infor_Click����img��src����Ϊ���ʱ������
        $("."+fc+"_div").removeClass("infor_NoClick").addClass("infor_Click")
        $("."+fc+"_div").find("img").attr("src","../images/inforPer/"+fc+"_y.png")
    })
})