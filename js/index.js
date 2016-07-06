/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){
   //设置头部样式
   $(".head_inforMana").css("background-position","-82px -82px")
   $(".head_inforMana").addClass("clickLi")


   $(".head").css("min-width","1363px")
   $(".register_bottom").css("min-width","1363px")
   /*给左边的Li添加click事件
    * 点击以后，先remove兄弟类的liClick，添加liNoClick
    * 点击的Li添加添加liNoClick，remove liClick
    * 修改img的src值
    * */
   var ulText  //当前点击的ul的text,用来给title_ul赋值
   var liText //当前点击的li的text,用来给title_li赋值
   $(".realTimeLi ul li").on("click",function(){
      $(this).siblings().removeClass("liClick").addClass("liNoClick")
      $(this).siblings().find("img").attr("src","../images/index_left/left_5.png")
      $(this).removeClass("liNoClick").addClass("liClick")
      $(this).find("img").attr("src","../images/index_left/left_6.png")
      ulText=$(".ulClick").text()
      $(".title_ul").text(ulText)
      liText=$(this).text()
      $(".title_li").text(liText)
   })

   /*给contractOrder_title绑定click事件*/
   var fc //获取最左边的class值
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

   /*给body力的P添加click方法
   * 如果有thead_p_noClick，代表现在是未选中，点击以后，移除thead_p_noClick，添加tbody_p_click
   * 背景设置为eaf3f8
   * 如果有tbody_p_click，代表现在是选中，点击以后，移除tbody_p_click，添加thead_p_noClick
   * 背景设置为白色
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

   //初始化bootstrap开关控件
   $("input[type=\"checkbox\"], input[type=\"radio\"]").not("[data-switch-no-init]").bootstrapSwitch({'onColor':"info",'size':"mini",'handleWidth':"28px","labelWidth":"30px"});
  $(".bootstrap-switch").css("border-radius","4px")

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
         divClass.find("img").attr("src","../images/index_left/"+firstClass+"_n.png")
         $("."+firstClass+"_ul").removeClass("show").addClass("hide")
      }
   }
}


/*表格头部点击
* 判断有没有thead_p_click，有则去掉thead_p_click，添加thead_p_noClick,代表全不选  img src改为yesSelect.png
* body里面的所有第一栏，设置为不选
* 背景设置为白色
* 没有则添加thead_p_click，去掉thead_p_noClick,代表全选 img src改为allNoSelect.png
*body里面的所有第一栏，设置为选中
* 背景设置为eaf3f8
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
      $(".thead_p").find("img").attr("src","../images/index_right/allYesSelect.png")
      $(".tbody_p").each(function(){
         $(this).removeClass("tbody_p_noClick").addClass("tbody_p_click")
         $(this).find("img").attr("src","../images/index_right/yesSelect.png")
         $(this).parent().parent().removeClass("tdNoClick").addClass("tdClick")
      })
   }
}


/*获取页面的高度*/
function setIndexHeight(){
   var windowHeight
   windowHeight=$(window).height() //浏览器可视高度
   var rightConentContentHeight
   //rightConentContentHeight =$(".right_content_content").height() //右边内容的高度
   rightConentContentHeight =499
   var minBodyHright
   minBodyHright=rightConentContentHeight+354 //所需要页面的最小高度

   var rightConentHeight //rightConent高度
   var containHeight //内容高度
   if(windowHeight<=minBodyHright){
      rightConentHeight=rightConentContentHeight+110
      containHeight=rightConentHeight+110
   }else{
      rightConentHeight=windowHeight-244
      containHeight=rightConentHeight+84
   }
   $(".index_right_content").height(rightConentHeight)
   $("#main-container").height(containHeight)
   $(".sidebar").height(containHeight)
   $(".index_right").height(containHeight)
}

/*添加新增订单信息*/
function addNoi(){
   $(".nor_body").removeClass("hide").addClass("show")

   var windowHeight=$(document).height() //浏览器可视高度
   var norHeight=$(".nor").height() //nor高度
   var necTop //nci距离头部的距离
   if(norHeight<=windowHeight){
      $(".nor_body").height(windowHeight)  //设置nor_body的高度
      necTop=(windowHeight-norHeight)/2
      $(".nor").css("margin-top",necTop)
   }else{
      $(".nor").css("margin-top","100px")
   }


}