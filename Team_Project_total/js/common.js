$(function(){
	var menu=$('.gnb');
	var menu_bg=$('.gnb_bg');
	menu.hover(
		function(){
			$('.gnb ul').show();
			$('.gnb_bg').show();
		},
		function(){
			$('.gnb ul').hide();
			$('.gnb_bg').hide();
		}
	);
	menu_bg.hover(
		function(){
			$('.gnb ul').show();
			$('.gnb_bg').show();
		},
		function(){
			$('.gnb ul').hide();
			$('.gnb_bg').hide();
		}
	);
	
	//login_close_btn
	$('.login_wrap a').click(function(){
		$('#login').show();
	});
	$('.login_close_btn').click(function(){
		$('#login').hide();
	});
	
	//quick_menu
	var defaultTop = parseInt($('#quick_menu').css('top'));
	//top값을 불러옴
	//parseInt문자를 숫자로 바꿈
	$(window).scroll(function(){//스크롤이 되면 기능하라
		var scv = $(window).scrollTop();
		if(scv < 350){ //465이전에는 움직이지 않음
			scv = 350;
		};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
		
		/* var scrollValue = $(window).scrollTop();
		console.log(scrollValue); */
	});
	$('#quick_menu').css('top','600px');
});