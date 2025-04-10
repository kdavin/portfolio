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
	var pageTop = parseInt($('#section').css('height'));
	var scroll750;
	//top값을 불러옴
	//parseInt문자를 숫자로 바꿈
	$(window).scroll(function(){//스크롤이 되면 기능하라
		var scv = $(window).scrollTop();
		
		if(pageTop==1950){
			if(scv < 420){ //465이전에는 움직이지 않음
			scv = 420;
			};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
		}else{
			if(scv < 0){ //465이전에는 움직이지 않음
				scv = 0;
			}else if(scv>20){
				scv = 130;
			}else{scv = -35;};
				$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
		};
		/* var scrollValue = $(window).scrollTop();
		console.log(scrollValue); */
	});
	if(pageTop==1950){
		$('#quick_menu').css('top','820px');
	}else{$('#quick_menu').css('top','235px');};
	
});