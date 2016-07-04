/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){
    //演示使用
   $(".head_inforMana").css("background-position","-82px -82px")
   $(".head_inforMana").addClass("clickLi")
})


/*获取页面的高度*/
function getViewSizeWithScrollbar(){//包含滚动条
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