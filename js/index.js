/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){

   /*����ߵ�Li���click�¼�
    * ����Ժ���remove�ֵ����liClick�����liNoClick
    * �����Li������liNoClick��remove liClick
    * �޸�img��srcֵ
    * */
   $(".realTimeLi ul li").on("click",function(){
      $(this).siblings().removeClass("liClick").addClass("liNoClick")
      $(this).siblings().find("img").attr("src","../images/left/left_5.png")
      $(this).removeClass("liNoClick").addClass("liClick")
      $(this).find("img").attr("src","../images/left/left_6.png")
   })

   /*��contractOrder_title��click�¼�*/
   var fc //��ȡ����ߵ�classֵ
   $(".realTimeDiv").on("click",function(){
      fc=$(this).attr("class").split(" ")[0]
      if($("."+fc+"_ul").hasClass("show")){
         $("."+fc).removeClass("ulClick").addClass("ulNoClick")
         $("."+fc).find("img").attr("src","../images/left/"+fc+"_n.png")
         $("."+fc+"_ul").removeClass("show").addClass("hide")
      }else{
         operRealTimeLi()
         $("."+fc).removeClass("ulNoClick").addClass("ulClick")
         $("."+fc).find("img").attr("src","../images/left/"+fc+"_y.png")
         $("."+fc+"_ul").removeClass("hide").addClass("show")
      }
   })

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
         divClass.find("img").attr("src","../images/left/"+firstClass+"_n.png")
         $("."+firstClass+"_ul").removeClass("show").addClass("hide")
      }
   }
}
