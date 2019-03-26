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
