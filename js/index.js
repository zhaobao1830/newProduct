/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){

   $(".head").css("min-width","1363px")
   $(".register_bottom").css("min-width","1363px")
   /*����ߵ�Li���click�¼�
    * ����Ժ���remove�ֵ����liClick�����liNoClick
    * �����Li������liNoClick��remove liClick
    * �޸�img��srcֵ
    * */
   $(".realTimeLi ul li").on("click",function(){
      $(this).siblings().removeClass("liClick").addClass("liNoClick")
      $(this).siblings().find("img").attr("src","../images/index_left/left_5.png")
      $(this).removeClass("liNoClick").addClass("liClick")
      $(this).find("img").attr("src","../images/index_left/left_6.png")
   })

   /*��contractOrder_title��click�¼�*/
   var fc //��ȡ����ߵ�classֵ
   $(".realTimeDiv").on("click",function(){
      fc=$(this).attr("class").split(" ")[0]
      if($("."+fc+"_ul").hasClass("show")){
         $("."+fc).removeClass("ulClick").addClass("ulNoClick")
         $("."+fc).find("img").attr("src","../images/index_left/"+fc+"_n.png")
         $("."+fc+"_ul").removeClass("show").addClass("hide")
      }else{
         operRealTimeLi()
         $("."+fc).removeClass("ulNoClick").addClass("ulClick")
         $("."+fc).find("img").attr("src","../images/index_left/"+fc+"_y.png")
         $("."+fc+"_ul").removeClass("hide").addClass("show")
      }
   })

   /*��body����P���click����
   * �����thead_p_noClick������������δѡ�У�����Ժ��Ƴ�thead_p_noClick�����tbody_p_click
   * ��������Ϊeaf3f8
   * �����tbody_p_click������������ѡ�У�����Ժ��Ƴ�tbody_p_click�����thead_p_noClick
   * ��������Ϊ��ɫ
   * */
    $(".tbody_p").on("click",function(){
       if($(this).hasClass("tbody_p_noClick")){
          $(this).removeClass("tbody_p_noClick").addClass("tbody_p_click")
          $(this).find("img").attr("src","../images/index_right/yesSelect.png")
          $(this).parent().parent().removeClass("tdNoClick").addClass("tdClick")
       }else{
          $(this).removeClass("tbody_p_click").addClass("tbody_p_noClick")
          $(this).find("img").attr("src","../images/index_right/noSelect.png")
          $(this).parent().parent().removeClass("tdClick").addClass("tdNoClick")
       }
    })

   setIndexHeight()
})



/*����realTimeLi���ж������div�Ƿ���ulNoClick������У����Ƴ������ulClick*/
function operRealTimeLi(){
   var divClass //��ȡdiv
   var firstClass  //��ȡdiv����ĵ�һ��class
   for(var i= 0;i<$(".realTimeLi").length;i++){
      divClass=$(".realTimeLi").eq(i).find("div")
      if(divClass.hasClass("ulClick")){
         firstClass=$(".realTimeLi").eq(i).find("div").attr("class").split(" ")[0]
         divClass.removeClass("ulClick").addClass("ulNoClick")
         divClass.find("img").attr("src","../images/index_left/"+firstClass+"_n.png")
         $("."+firstClass+"_ul").removeClass("show").addClass("hide")
      }
   }
}


/*���ͷ�����
* �ж���û��thead_p_click������ȥ��thead_p_click�����thead_p_noClick,����ȫ��ѡ  img src��ΪyesSelect.png
* body��������е�һ��������Ϊ��ѡ
* ��������Ϊ��ɫ
* û�������thead_p_click��ȥ��thead_p_noClick,����ȫѡ img src��ΪallNoSelect.png
*body��������е�һ��������Ϊѡ��
* ��������Ϊeaf3f8
* */
function thead_p(){
   if($(".thead_p").hasClass("thead_p_click")){
      $(".thead_p").removeClass("thead_p_click").addClass("thead_p_noClick")
      $(".thead_p").find("img").attr("src","../images/index_right/allNoSelect.png")
      $(".tbody_p").each(function(){
         $(this).removeClass("tbody_p_click").addClass("tbody_p_noClick")
         $(this).find("img").attr("src","../images/index_right/noSelect.png")
         $(this).parent().parent().removeClass("tdClick").addClass("tdNoClick")
      })
   }else{
      $(".thead_p").removeClass("thead_p_noClick").addClass("thead_p_click")
      $(".thead_p").find("img").attr("src","../images/index_right/yesSelect.png")
      $(".tbody_p").each(function(){
         $(this).removeClass("tbody_p_noClick").addClass("tbody_p_click")
         $(this).find("img").attr("src","../images/index_right/yesSelect.png")
         $(this).parent().parent().removeClass("tdNoClick").addClass("tdClick")
      })
   }
}


/*��ȡҳ��ĸ߶�*/
function setIndexHeight(){
   var windowHeight
   windowHeight=$(window).height() //��������Ӹ߶�
   var rightConentContentHeight
   //rightConentContentHeight =$(".right_content_content").height() //�ұ����ݵĸ߶�
   rightConentContentHeight =499
   var minBodyHright
   minBodyHright=rightConentContentHeight+354 //����Ҫҳ�����С�߶�

   var rightConentHeight //rightConent�߶�
   var containHeight //���ݸ߶�
   if(windowHeight<=minBodyHright){
      rightConentHeight=rightConentContentHeight+110
      containHeight=rightConentHeight+130
   }else{
      rightConentHeight=windowHeight-244
      containHeight=rightConentHeight+104
   }
   $(".index_right_content").height(rightConentHeight)
   $("#main-container").height(containHeight)
   $(".sidebar").height(containHeight)
   $(".index_right").height(containHeight)
}