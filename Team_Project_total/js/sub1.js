$(function(){
	var visual = $('.company_img>ul>li');
	var current = 0;
	var setIntervalId;
	//1.이미지 자동넘김이 되게 만들어쥬세요
	timer();
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current +1;
			if(n==visual.size()){n=0};
			move(n);
			},1500);
	};//비주얼 이미지 자동넘김
	function move(i){
      var currentEl = visual.eq(current);
      var nextEl = visual.eq(i);
      currentEl.css('left','0%').stop().animate({left:'-100%'},1000);
      nextEl.css('left','100%').stop().animate({left:'0%'},1000);
      current = i;
   };
   // 텝메뉴
   var tab=$('.tab>li');
	var content=$('.tab_con>div');
	content.hide();
	content.eq(0).show();
	
	tab.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		tab.removeClass('active'); /* 클래스를 받는 함수로 .을 찍지 않음 */
		tg.addClass('active');
		
		content.css('display','none');
		content.eq(i).css('display','block');
		if(i==1){$(".content").css("height","2800px");};
		if(i==2){$(".content").css("height","1700px");};
	});
});