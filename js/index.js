/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){
    //��ʾʹ��
   $(".head_inforMana").css("background-position","-82px -82px")
   $(".head_inforMana").addClass("clickLi")
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