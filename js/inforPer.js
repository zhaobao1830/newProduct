
/**
 * Created by zb on 2016/6/30.
 */

$(function(){
    //��ʾʹ��
    $(".head_userMana").css("background-position","-328px -82px")
    $(".head_userMana").addClass("clickLi")

    /*ȷ��mainFrame��inforPer_left,inforPer_right�ĸ߶�*/
    var bodyHeight //ҳ��������߶�
    bodyHeight=getViewSizeWithScrollbar().height
    //$(".inforPerContain").height(bodyHeight-100)
    //$("#mainFrame").height(bodyHeight-150);
    //$(".inforPer_left").height(bodyHeight-100)
    //$(".inforPer_right").height(bodyHeight-100)

    $(".inforPerContain").height(685)
    $("#mainFrame").height(600);
    $(".inforPer_left").height(685)
    $(".inforPer_right").height(685)


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

        //����p������
        $(".ei_rt").removeClass("show").addClass("hide")
        $(".pi_rt").removeClass("show").addClass("hide")
        //����Ӧ��p�����ʽ
        $("."+fc+"_rt").removeClass("hide").addClass("show")

        /*
        * $(".inforPer_right")����İ���һ��iframe
        * iframe��src�Ƕ�̬�ı��
        * �����������Ϣ��ʱ��iframe��srcΪiprPerson.html
        * �����������ҵ��Ϣ��ʱ��iframe��srcΪiprEnterprise.html
        * */
        if($(".ei_rt").hasClass("show")){
            $("#mainFrame").attr("src","iprPerson.html")
        }else{
            $("#mainFrame").attr("src","iprEnterprise.html")
        }
    })
})

/*��ȡҳ��ĸ߶�*/
function getViewSizeWithScrollbar(){//����������
    if(window.innerWidth){
        return {
            width : window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.documentElement.offsetWidth == document.documentElement.clientWidth){
        return {
            width : document.documentElement.offsetWidth,
            height: document.documentElement.offsetHeight
        }
    }else{
        return {
            width : document.documentElement.clientWidth + getScrollWith(),
            height: document.documentElement.clientHeight + getScrollWith()
        }
    }
}