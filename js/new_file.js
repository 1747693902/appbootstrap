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


//触发简体中文转换英文
$(".self-transition-ch>p").mouseenter(function(){
	console.log(1111);
	$(this).siblings('span').fadeIn();
})


$(".self-transition-ch").mouseleave(function(){
	console.log(1111);
	$(".self-transition-ch>span").fadeOut();
})




//左右图片出现
    	// 首先让回顶图标隐藏
        $(".two_pic").hide();
        $(".weishi").hide();
        // bind捆绑方法
        $(window).bind('scroll',function(){
        // 顶部滚动卷去的高度
            if($(window).scrollTop()>400){
            // 小于判断高度隐藏
                $(".two_pic").show();
       			 $(".weishi").show();          		
           	// 大于高度显示
                $(".two_pic").animate({"left":0},500);
                 $(".weishi").animate({"left":0},1000);
                $(".self-img-one").css({"left":"145px","transform": "rotate(0deg)","transition":"2s"});
                              
            }
        });


//		第二轮
	 $(".self-there-pic").hide();
	  $(".weishi-two").hide();
		$(window).bind('scroll',function(){
			
			 if($(window).scrollTop()>800){
			 	
				$(".self-there-pic").show();
				$(".weishi-two").show();
				$(".weishi-two").animate({"left":0},1000);
				$(".self-there-pic").animate({"left":0},1000);
// 			$(".self-there-pic").css({"transform":"translate(0,50px)"});
// 			$(".self-there-pic").css({"transition":"2s"});
   			
				$(".self-zm-one").delay(1000).css({
					"transform": "translate(-30px,75px)",
					"transition": "2s"
				});
			
				$(".self-zm-two").delay(1000).css({
					"transform": "translate(-34px,127px)",
					"transition": "2s",
				});
				
				$(".self-zm-there").delay(1000).css({
					"transform": "translate(105px,-270px)",
					"transition": "2s"
				});
			}


		})



        $(".self-zhuti").hide();
        // bind捆绑方法
        $(window).bind('scroll',function(){
        // 顶部滚动卷去的高度
            if($(window).scrollTop()>1300){
            // 小于判断高度隐藏
       			 $(".self-zhuti").show();          		
           	// 大于高度显示
                 $(".self-zhuti").animate({"left":0},1000);    
            }
        });



        // bind捆绑方法
        $(window).bind('scroll',function(){
        // 顶部滚动卷去的高度
            if($(window).scrollTop()>1400){
            // 小于判断高度隐藏       		
                 $('.self-lunbo>li').css({
                 	"animation": "gif_pic 1s  ",
                 	"animation-fill-mode":"forwards",
                 });
                   $('.self-gif-pic-tow>img').animate();
                 
                  $('.self-gif-pic-tow>img').delay(4000).css({
//                	"height":"300px",
//                	"top":"-200px"
                  })
            }
        });








})