
/**
 * Created by zb on 2016/6/30.
 */

$(function(){
    //��ʾʹ��
    $(".head_userMana").css("background-position","-246px -82px")
    $(".head_userMana").addClass("clickLi")

    setHeight("ei_inf")

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

        /*��ʾ��Ӧ��ҳ�棬�����Ӧ�ĸ߶�*/
        $(".ei_inf").removeClass("show").addClass("hide")
        $(".pi_inf").removeClass("show").addClass("hide")
        $("."+fc+"_inf").removeClass("hide").addClass("show")
        setHeight(fc+"_inf")
    })
})

/*��ȡҳ��ĸ߶�*/
function setHeight(str){
    var windowHeight
    windowHeight=$(window).height() //��������Ӹ߶�
    var informationHeight
    informationHeight =$("."+str).height() //�ұ����ݵĸ߶�
    var minBodyHright
    minBodyHright=informationHeight+264 //����Ҫҳ�����С�߶�

    var iprHeight //ipr�ĸ߶�
    var containHeight //���ݸ߶�
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