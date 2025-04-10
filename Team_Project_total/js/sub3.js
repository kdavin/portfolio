$(function(){
	//상단 이미지 슬라이드	
	var banner = $('.slide>img');
	var current = 0;
	var movement;
	
	function slider(tg,start,end){
		tg.css('opacity',start).stop().animate({'opacity':end},5000);	
	};
	
	function gogo(){
		movement = setInterval(function(){
			var prev = banner.eq(current);
			slider(prev,'1','0');
			current++;
			if(current==banner.size()){current=0};
			var next = banner.eq(current);
			slider(next,'0','1');
		},4000);
	};	
	gogo();
	banner.hover(
		function(){
			clearInterval(movement);
		},
		function(){
			gogo();
		}
	);	
	// 버튼 텍스트 가이드
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	
	function updateBalloonPosition(x,y){
		balloon.css({center:x, top:y});
	};
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				updateBalloonPosition(event.pageX,event.pageY);
				balloon.show();
			},
			function(){
				balloon.hide();
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
	
	//프로그램 방향키 클릭 슬라이드
	
	var index = 0;
	var panel_width = $('.flexslider li').width();
	var ul_width=$('ul li').size()*panel_width;
	$('.flexslider ul').css('width',ul_width);
	
	function moveSlider1(index){
		var willMoveLeft = -(index*panel_width);
		$('.slides1').stop().animate({left:willMoveLeft},500);
		
	};
	function moveSlider2(index){
		var willMoveLeft = -(index*panel_width);
		$('.slides2').stop().animate({left:willMoveLeft},500);
		
	};
	function moveSlider3(index){
		var willMoveLeft = -(index*panel_width);
		$('.slides3').stop().animate({left:willMoveLeft},500);
		
	};
	
	
	$('.prev_btn1').click(function(){
		index--;
		if(index<0){index=$('.slides1 li').size()-1;}
		moveSlider1(index);
		return false;
	});
	var a=$('.slides1 li').size();
	$('.next_btn1').click(function(){
		index++;
		if(index==$('.slides1 li').size()){index=0;}
		moveSlider1(index);

		return false;
	});
	
	$('.prev_btn2').click(function(){
		index--;
		if(index<0){index=$('.slides2 li').size()-1;}
		moveSlider2(index);
		return false;
	});
	var a=$('.slides2 li').size();
	$('.next_btn2').click(function(){
		index++;
		if(index==$('.slides2 li').size()){index=0;}
		moveSlider2(index);

		return false;
	});

	$('.prev_btn3').click(function(){
		index--;
		if(index<0){index=$('.slides3 li').size()-1;}
		moveSlider3(index);
		return false;
	});
	var a=$('.slides3 li').size();
	$('.next_btn3').click(function(){
		index++;
		if(index==$('.slides3 li').size()){index=0;}
		moveSlider3(index);

		return false;
	});

});