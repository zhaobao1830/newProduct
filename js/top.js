/**
 * Created by zb on 2016/6/24.
 */
$(function(){
    //��head_choice li��click�¼��������ʱ��ͨ��clickLi��ȡ����һ�������background-positionֵ
    //����У���ı�����background-positionֵ
    //�޸ĵ���ĵ�ǰli��background-positionֵ���������clickLi

    var oldPostionLeft //�����ǰ��background-position leftֵ
    var clickLiPostion  //��һ�������background-positionֵ
    var clickLiPostionLeft  //��һ�������background-position leftֵ
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