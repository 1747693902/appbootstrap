$(function(){
	
	$(".backcolor>button").click(function(){
		$(this).addClass("buttonBorder")

//		console.log(222);
	})
	
	$(document).click(function(){
		$(".backcolor>button").removeClass("buttonBorder");
//			
		
		console.log(222);
	})
	
	$('.backcolor>button').click(function(){
		$("#show").animate({"left":0},500);	 
		
	})
	$('#show').mouseleave(function(){
		$("#show").animate({"left":-200},500);	 
		
	})
})



//回顶
/*
* @Author: PC
* @Date:   2019-03-12 15:34:46
* @Last Modified by:   PC
* @Last Modified time: 2019-03-12 16:11:11
*/

'use strict';

// <!--start 返回顶部-->

  $(function() {
    	// 首先让回顶图标隐藏
        $(".gotop").hide();
        // bind捆绑方法
        $(window).bind('scroll',function(){
        // 顶部滚动卷去的高度
            if($(window).scrollTop()<=300){
            // 小于判断高度隐藏
                $(".gotop").hide();
           	}else{
           	// 大于高度显示
                $(".gotop").show();
            }
        });
        // 点击显示的回顶图标
        $(".gotop").bind("click",function(){
        	// 动画回顶，卷去的高度为0；执行时间为300ms;
        	
            $('html, body').animate({scrollTop: 0},300);
        });
   });

// <!--end 返回顶部-->