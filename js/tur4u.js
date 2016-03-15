window.onload = function() {

	//改变服务四大模块的图片布局
      var ChangePhoto = function() {
          $('#ft-sl').height($('#ft-sl').width()*2);                
          $('#fo-sl').height($('#fo-sl').width()*2);
          $('#tf-sl').height($('#tf-sl').width()*2);
          $('#fun-sl').height($('#fun-sl').width()*2);       
          $('#st-sl').height($('#st-sl').width()/0.648);  
          $('#ft-sr').height($('#ft-sl').height());
          $('#fo-sr').height($('#fo-sl').height());
          $('#tf-sr').height($('#tf-sl').height());
          $('#fun-sr').height($('#fun-sl').height());
          $('#st-sr').height($('#st-sl').height());
          $('#st-ct').height($('#st-sl').height());
      }
      ChangePhoto();
      $(window).on('resize',function() {
          ChangePhoto();
      });

      //切换选项卡
	$('.server-msg a').on("click",function(){
		var $this = $(this);
        	var server = $('.server-tab');
        	server.hide();
        	var name = ".ser"+$this.attr("class").toString();
        	$(name).show();
        	ChangePhoto();
        	if(name === ".server-football"){
	            $('.triangle').css("left","23.48%");
	            $('.ver-football').css("color","#fff");
	            $('.ver-food').css("color","#b2b2b2");
	            $('.ver-fun').css("color","#b2b2b2");
	            $('.ver-traffic').css("color","#b2b2b2");
	            $('.ver-stay').css("color","#b2b2b2");
	            $('.ver-football').css("background","#fc3e4c");
        	}
       	 if(name === ".server-food" ){
	            $('.triangle').css("left","36.38%");
	            $('.ver-food').css("color","#fff");
	            $('.ver-football').css("color","#b2b2b2");
	            $('.ver-fun').css("color","#b2b2b2");
	            $('.ver-traffic').css("color","#b2b2b2");
	            $('.ver-stay').css("color","#b2b2b2");
	            $('.ver-food').css("background","#fc3e4c");
        	}
        	if(name === ".server-fun"){
	            $('.triangle').css("left","49.28%");
	            $('.ver-food').css("color","#b2b2b2");
	            $('.ver-football').css("color","#b2b2b2");
	            $('.ver-traffic').css("color","#b2b2b2");
	            $('.ver-stay').css("color","#b2b2b2");
	            $('.ver-fun').css("color","#fff");
	            $('.ver-fun').css("background","#fc3e4c");
        	}
        	if(name===".server-traffic"){
	            $('.triangle').css("left","62.18%");
	            $('.ver-traffic').css("color","#fff");
	            $('.ver-food').css("color","#b2b2b2");
	            $('.ver-football').css("color","#b2b2b2");
	            $('.ver-fun').css("color","#b2b2b2");
	            $('.ver-stay').css("color","#b2b2b2");
	            $('.ver-traffic').css("background","#fc3e4c");
        	}
        	if(name === ".server-stay"){
	            $(".triangle").css("left","75.08%");
	            $('.ver-stay').css("color","#fff");
	            $('.ver-food').css("color","#b2b2b2");
	            $('.ver-football').css("color","#b2b2b2");
	            $('.ver-traffic').css("color","#b2b2b2");
	            $('.ver-fun').css("color","#b2b2b2");
	            $('.ver-stay').css("background","#fc3e4c");
       	 }
        $('.ver-football').on("mouseover",function() {
            $(".ver-football").css("background-color","#fc3e4c");
            // $(".ver-food").css("background-color","#fff2eb");
            // $(".ver-fun").css("background-color","#fff2eb");
            // $(".ver-traffic").css("background-color","#fff2eb");
            // $(".ver-stay").css("background-color","#fff2eb");
        });
        $('.ver-football').on("mouseover",function() {
            $(".ver-football").css("background-color","#fff2eb");
            $(".ver-football").css("background-color","#fff2eb");
            $(".ver-football").css("background-color","#fff2eb");
            $(".ver-football").css("background-color","#fff2eb");
            $(".ver-football").css("background-color","#fff2eb");
        });
        $('.ver-food').on("mouseover",function() {
            $(".ver-food").css("background-color","#ffca76");
        });
        $('.ver-fun').on("mouseover",function() {
            $(".ver-fun").css("background-color","#ffe57e");
        });
        $('.ver-traffic').on("mouseover",function() {
            $(".ver-traffic").css("background-color","#a4dbff");
        });
        $('.ver-stay').on("mouseover",function() {
            $(".ver-stay").css("background-color","#decdff");
        });
})
	$('.lb, .rt , .rtl, .rtr, #st-sl, .st-br, .st-tr, .st-bl,.st-tl').mouseover(function() {
		$(this).find('img').css({
			zIndex : 2,
			transform : 'scale(1.23,1.23)',
			transition : 'transform 1s'	

		});
		$(this).find('.mask').css({
			zIndex : 3

		})
	})
	$('.lb, .rt , .rtl, .rtr, #st-sl, .st-br, .st-tr, .st-bl,.st-tl').mouseout(function() {
		$(this).find('img').css({
			zIndex : 1,
			transform : 'scale(1.0,1.0)',
			transition : 'transform 1s'	
		});

		$(this).find('.mask').css({
			zIndex : 0
		});	
	})
}

	//导航栏
	$(window.document).scroll(function() {
		$(".navbar").addClass("scroll");
		if($(this).scrollTop() == 0) {
			$(".navbar").removeClass("scroll");
			$(".navbar").removeClass("scrollDeepColor");
		} 
		if($(this).scrollTop() >= 600) {
			$(".navbar").removeClass("scroll");
			$(".navbar").addClass("scrollDeepColor");
		}
	});       