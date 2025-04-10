$(function(){
	/* tabmenu	 */
	var tab = $('.tab li')
	var content = $('.tab_content div');
	content.hide();
	content.eq(0).show();
	
	tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block')
		return false;
	});
	
	/* $('#calendar table .dot').hover(
		function(){
			$(this).find('.schedule').show().css("display","block");
		},
		function(){
			$(this).find('.schedule').hide();
		}
	); */
	
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
		td.find('span.dot').css('display','none');
		//이전달 생성
		m -=1;
		if(m!=8){td.find('span.dot').css('display','none');}else{td.find('span.dot').css('display','block');};
		if(m==-1){y-=1; m=11;};
		firstday = new Date(y,m,1).getDay();
		lastdate = new Date(y,m+1,0).getDate();
		calendarMake();
		return false;
	});
	$('.mNext').click(function(){
		//달력 지우기
		td.find('p').text('');
		td.find('p').removeClass('today');
		td.find('span.dot').css('display','none');
		//다음달 생성
		m +=1;
		if(m!=8){td.find('span.dot').css('display','none');}else{td.find('span.dot').css('display','block');};
		if(m==12){y+=1; m=0;};
		firstday = new Date(y,m,1).getDay();
		lastdate = new Date(y,m+1,0).getDate();
		calendarMake();
		var a=$('#calendar .month').text();
		return false;
	});	
});