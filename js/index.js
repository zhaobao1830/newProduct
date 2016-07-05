/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){

   /*给左边的Li添加click事件
    * 点击以后，先remove兄弟类的liClick，添加liNoClick
    * 点击的Li添加添加liNoClick，remove liClick
    * 修改img的src值
    * */
   $(".realTimeLi ul li").on("click",function(){
      $(this).siblings().removeClass("liClick").addClass("liNoClick")
      $(this).siblings().find("img").attr("src","../images/left/left_5.png")
      $(this).removeClass("liNoClick").addClass("liClick")
      $(this).find("img").attr("src","../images/left/left_6.png")
   })

   /*给contractOrder_title绑定click事件*/
   var fc //获取最左边的class值
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



/*遍历realTimeLi，判断里面的div是否有ulNoClick，如果有，就移除，添加ulClick*/
function operRealTimeLi(){
   var divClass //获取div
   var firstClass  //获取div里面的第一个class
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
