window.onload = function() {
	
		var index = 0;
		function collHeader() {
			index ++;
			index == 4 && (index = 1);
			var path = "img/header" + index + ".jpg";
			console.log(path);
			$(".header").css("background", "url(" + path + ") no-repeat 50% 50%");
			$(".header").css("background-size", "100% 150%");
			setTimeout(collHeader, 5000);
		}
		collHeader();

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
            $('#tab-list a').on("click",function (e) { 
	  e.preventDefault();
	  $(this).tab("show");
	  ChangePhoto();
	  if($("#football-tab").css("display")==="block"){
	  	$(".server").css("background","url(img/zq.jpg) no-repeat");
	  	$(".server").css("background-size","cover")
	  	$("#triangle-fb").css("display","block");
	  	console.log($("#triangle-fb").css("display"));
	  }else{
	  	$("#triangle-fb").css("display","none");
	  }	  	
	  if($("#food-tab").css("display")==="block"){
	  	$(".server").css("background","url(img/foodbg.jpg) no-repeat");
	  	$(".server").css("background-size","cover")
	  	$("#triangle-fo").css("display","block");
	  }else{
	  	$("#triangle-fo").css("display","none");
	  }	
	  if($("#fun-tab").css("display")==="block"){
	  	$(".server").css("background","url(img/bg-fun.jpg) no-repeat");
	  	$(".server").css("background-size","cover")
	  	$("#triangle-fn").css("display","block");
	  }else{
	  	$("#triangle-fn").css("display","none");
	  }	
	  if($("#traffic-tab").css("display")==="block"){
	  	$(".server").css("background","url(img/tf-bg.jpg) no-repeat");
	  	$(".server").css("background-size","cover")
	  	$("#triangle-tf").css("display","block");
	  }else{
	  	$("#triangle-tf").css("display","none");
	  }	
	  if($("#stay-tab").css("display")==="block"){
	  	$(".server").css("background","url(img/bg-st.jpg) no-repeat");
	  	$(".server").css("background-size","cover")
	  	$("#triangle-st").css("display","block");
	  }else{
	  	$("#triangle-st").css("display","none");
	  }	
             }) ;

	var control = 0;
	$(window).scroll(function(){
		height = $(window).height();
		trigger = document.getElementById('trigger').getBoundingClientRect().top < (height*2/3);
		if(trigger&&control == 0){
			$('.special img').animate({
				top: '0'		
			},1000);
			$('.special img').css({
				transform : "rotateY(10deg)",
				opacity : 1,
				transition : "transform 2s,opacity 1s"
			})			
			jQuery.fn.shake = function(intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
			    this.each(function() {
			        var jqNode = $(this);
			        jqNode.css({position: 'relative'});
			        for (var x=1; x<=intShakes; x++) {
			            jqNode.animate({ top: (intDistance * -1) },(((intDuration / intShakes) / 4)))
			            //.animate({ top: intDistance },((intDuration/intShakes)/2))
			            .animate({ top: 0 },(((intDuration/intShakes)/4)));
			        }
			    });
			    return this;
			}	
			$('.special img').shake(1,12,1000);
			control = 1;
		}
		if(document.getElementById('trigger').getBoundingClientRect().top>=1.2*height){
			$('.special img').css({
				opacity : 0,
				top : "-170px",
				transform : "rotateY(80deg)"
			})				
			control = 0;
		}
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


