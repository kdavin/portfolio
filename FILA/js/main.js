$(function(){
	// md_item
	var mySlider = $('.md_item ul').bxSlider({
		mode:'horizontal',
		speed:300,
		pager:false,//슬라이드 페이지 보이게 true
		moveSlides:1, //1개씩 움직임
		slideWidth:369,//책하나 넓이값
		minSlides:5,//슬라이드 노출갯수
		maxSlides:6, //슬라이드 노출갯수
		slideMargin:40, //슬라이드 간격
		auto:true, //자동슬라이드
		autoHover:true,//호버하면 정지
		controls:false		
	});
	
	$('.prev_btn').click(function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next_btn').click(function(){
		mySlider.goToNextSlide();
		return false;
	});
});