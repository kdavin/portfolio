$(function(){
	//banner_slide
	/* var index=0;
	var slideSize=$('.slide li').size();
	function moveSlide(index){
		var move=-(index*1600);
		$('.slide_banner').animate({left:move},700);
		index=this.index;
	};
	
	var	setIntervalId
	function timer(){
	setIntervalId = setInterval(function(){
			index++;
			if(index==slideSize){
			index=0;
			}
			moveSlide(index);
		},2000);
	};
	timer();
	$('.prev').click(function(){
		
	});
	$('.next').click(function(){
		index++;
		if(index==slideSize){
			index=0;
		}
		moveSlide(index);
	}); */
	var visual = $('.slide_banner>ul>li');
	var button = $('.control_panel>div');
	var current = 0;
	var setIntervalId;
	button.click(function(){
		var tg = $(this);
		var i = tg.index();
		button.removeClass('on');
		tg.addClass('on');
		if(current>i){
			movePrev(i);
		}else{move(i)};
		return false;
	});
	//1.자동넘김
	timer();
	//2.호버 일시정지
	$('.slide_wrap').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current +1;
			//if(n==visual.size()){n=0};
			
			if(current==visual.size()-1){
				move(0);
				button.removeClass('on');
				button.eq(0).addClass('on');
			}else{
				button.eq(n).trigger('click');
			};
		},1500);
	}; //비주얼 이미지 자동넘김
	function move(i){
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		var currentTxt=$('.slider_text').eq(current);
		var nextTxt=$('.slider_text').eq(i);
		currentEl.css('left','0%').stop().animate({left:'-100%'},800);
		nextEl.css('left','100%').stop().animate({left:'0%'},800);
		//text
		$('.slider_text').eq(i).show().animate({top:'20px'},800);
		$('.slider_text').eq(current).hide().animate({top:'0px'},800);
		
		current=i;
	};
	function movePrev(i){
		var currentEl = visual.eq(current);
		var prevEl = visual.eq(i);
		currentEl.css('left','0%').stop().animate({left:'100%'},800);
		prevEl.css('left','-100%').stop().animate({left:'0%'},800);
		$('.slider_text').eq(i).show().animate({top:'20px'},800);
		$('.slider_text').eq(current).hide().animate({top:'0px'},800);
		current=i;
	};
	
	//arrow button
	$('.next').click(function(){
		var n =current+1;
		if(n==visual.size()){n=0};
		if(current==visual.size()-1){
				move(0);
				button.removeClass('on');
				button.eq(0).addClass('on');
			}else{
				button.eq(n).trigger('click');
			};
	});
	$('.prev').click(function(){
		var n =current-1;
		if(n<0){n=visual.size()-1};
		if(current==0){
				movePrev(visual.size()-1);
				button.removeClass('on');
				button.eq(visual.size()-1).addClass('on');
			}else{
				button.eq(n).trigger('click');
			};
	});
	//best_item
	var mySlider = $('.best_item ul').bxSlider({
		mode:'horizontal',
		speed:300,
		pager:false,//슬라이드 페이지 보이게 true
		moveSlides:1, //1개씩 움직임
		slideWidth:170,//책하나 넓이값
		minSlides:5,//슬라이드 노출갯수
		maxSlides:5, //슬라이드 노출갯수
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
	if($.cookie('pop')!='no'){$('#pop_wrap').show()};
	//pop 쿠키의 값이 no가 저장되어 있지 않으면 숨겨져있던 팝업을 노출
	$('#pop_wrap').css('cursor','move').draggable();
	//드래그 가능하게
	$('#pop_wrap area:eq(0)').click(function(){
		$('#pop_wrap').fadeOut();
		return false;
	});
	$('#pop_wrap area:eq(1)').click(function(){
		$.cookie('pop','no',{expires:1});
		//expires : 1 하루동안 쿠키를 보관
		$('#pop_wrap').fadeOut();
		return false;
	});	
	//d-day
	var t = new Date();
	var y = t.getFullYear(); //=2021 년
	var m = t.getMonth(); //월 //0~11
	var d = t.getDate();//일
	var day = t.getDay();//요일
	var td = $('#calendar td');
	var firstday = new Date(y,m,1).getDay();//1일의 요일
	var currentM = new Date(y,m,1).getMonth();
	var lastdate = new Date(y,m+1,0).getDate();
	var currentY = new Date(y,m,1).getFullYear();
	
	$('#calendar td p').removeClass('today');
	function calendarMake(){
		$('#calendar .year').text(y);
		$('#calendar .month').text(m+1); 
		
		td.each(function(index){
			//이번달 첫째날 찾기
			//요일의 index:일(0)~토(6)
			if(firstday==index){//1의요일과 td의 index값이 같으면 text:1
				$(this).find('p').text(1);
			};
			//날짜 나열하기
			if(index<lastdate){//30일이 마지막 날이면 index는 29까지
				
				td.eq(index+firstday).find('p').text(index+1);
				};
			//오늘 표시
			if(y==currentY&&m==currentM&&d==$(this).text()){
				$(this).find('p').addClass('today');
				
			};
		});
		if(td.eq(35).text()==''){
			td.eq(35).parent().hide();			
		}else{td.eq(35).parent().show();};
	};
	calendarMake();
	$('.mPrev').click(function(){
		td.find('p').text('');
		td.find('p').removeClass('today');
		
		//이전달 생성
		m -=1;
		if(m!=8){td.find('span').css('display','none');}else{td.find('span').css('display','block');};
		if(m==-1){y-=1; m=11;};
		firstday = new Date(y,m,1).getDay();
		lastdate = new Date(y,m+1,0).getDate();
		calendarMake();
	});
	$('.mNext').click(function(){
		//달력 지우기
		td.find('p').text('');
		td.find('p').removeClass('today');
		
		//다음달 생성
		m +=1;
		if(m!=8){td.find('span').css('display','none');}else{td.find('span').css('display','block');};
		if(m==12){y+=1; m=0;};
		firstday = new Date(y,m,1).getDay();
		lastdate = new Date(y,m+1,0).getDate();
		calendarMake();
		var a=$('#calendar .month').text();
	});
	/* function today(){
		var a=$('#calendar td').eq(17).text();
		alert(a);
		$('#calendar td p').removeClass('today');
		if(d==$('#calendar td').eq(17).text()){
			$('#calendar td').eq(17).find('p').addClass('today');
		};
		alert('false');
	}; */
	/* today(); */
});