window.onload = function() {
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
		
            // $("li.active").find("")

// 	$('.server-msg a').on("click",function(){
// 		// var $this = $(this);
// 		// var server = $('.server-tab');
// 		// var tag = $('.server-msg')[0].getElementsByTagName("a");
// 		// server.hide();
// 		// var name = ".ser"+$this.attr("class").toString();
// 		// $(name).show();
// 		// ChangePhoto();
// 		// if(name === ".server-football"){
//   //           			$('.triangle').css("left","23.48%");
// 	 //            		for(var i = 0, len = tag.length; i < len; i++){
// 		// 		tag[i].classList.remove("fb-active");
// 		//       		tag[i].classList.remove("fn-active");
// 		//       		tag[i].classList.remove("tf-active");
// 		//       		tag[i].classList.remove("st-active");
// 		// 	}
// 		// 	this.classList.add("fo-active");
//   //           		}
//   //           		if(name === ".server-food" ){
//   //           			$('.triangle').css("left","36.38%");
//   //           			for(var i = 0, len = tag.length; i < len; i++){
// 		// 		tag[i].classList.remove("fb-active");
// 		//       		tag[i].classList.remove("fn-active");
// 		//       		tag[i].classList.remove("tf-active");
// 		//       		tag[i].classList.remove("st-active");

// 		// 	}
// 		// 	this.classList.add("fo-active");
// 		// }
// 		// if(name === ".server-fun"){
// 		//             $('.triangle').css("left","49.28%");
// 		//             	for(var i = 0, len = tag.length; i < len; i++){
// 		// 		tag[i].classList.remove("fb-active");
// 		//       		tag[i].classList.remove("fo-active");
// 		//       		tag[i].classList.remove("tf-active");
// 		//       		tag[i].classList.remove("st-active");

// 		// 	}
// 		// 	this.classList.add("fn-active");
// 		// }
// 		//  if(name===".server-traffic"){	
//   //           			$('.triangle').css("left","62.18%");
//   //           			for(var i = 0, len = tag.length; i < len; i++){
// 		// 		tag[i].classList.remove("fb-active");
// 		//       		tag[i].classList.remove("fo-active");
// 		//       		tag[i].classList.remove("fn-active");
// 		//       		tag[i].classList.remove("tf-active");

// 		// 	}
// 		// 	this.classList.add("st-active");	
// 		// }
// 		// if(name === ".server-stay"){
//   //           			$(".triangle").css("left","75.08%");
//   //           			console.log($(".triangle").css("left"));
//   //           			for(var i = 0, len = tag.length; i < len; i++){
// 		// 		tag[i].classList.remove("fb-active");
// 		//       		tag[i].classList.remove("fo-active");
// 		//       		tag[i].classList.remove("fn-active");
// 		//       		tag[i].classList.remove("tf-active");
// 		//       		tag[i].classList.remove("st-active");

// 		// 	}
// 		// 	this.classList.add("active");
// 		// }
		// for(var i = 0, len = tag.length; i < len; i++){
		// 	tag[i].classList.remove("fb-active");
		// 	tag[i].classList.remove("fo-active");
		// 	tag[i].classList.remove("fn-active");
		// 	tag[i].classList.remove("tf-active");
		// 	tag[i].parent().classList.remove("active");

		// }
		// this.classList.add("st-active");	
		// this.parent().classList.add("active");
// 	var $this = $(this);
//         var server = $('.server-tab');
//         server.hide();
//         var name = ".ser"+$this.attr("class").toString();
//         $(name).show();
//         ChangePhoto();
//         if(name === ".server-football"){
//             $('.triangle').css("left","23.48%");
//             $('.ver-football').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-football').css("background","#fc3e4c");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//             // $('.server').css("background","");
//         }
//         if(name === ".server-food" ){
//             $('.triangle').css("left","36.38%");
//             $('.ver-food').css("color","#fff");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-food').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name === ".server-fun"){
//             $('.triangle').css("left","49.28%");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#fff");
//             $('.ver-fun').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name===".server-traffic"){
//             $('.triangle').css("left","62.18%");
//             $('.ver-traffic').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-stay').css("color","#b2b2b2");
//             $('.ver-traffic').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//             // $('.ver-stay').css("background","#fff2eb");
//         }
//         if(name === ".server-stay"){
//             $(".triangle").css("left","75.08%");
//             $('.ver-stay').css("color","#fff");
//             $('.ver-food').css("color","#b2b2b2");
//             $('.ver-football').css("color","#b2b2b2");
//             $('.ver-traffic').css("color","#b2b2b2");
//             $('.ver-fun').css("color","#b2b2b2");
//             $('.ver-stay').css("background","#fc3e4c");
//             // $('.ver-football').css("background","#fff2eb");
//             // $('.ver-food').css("background","#fff2eb");
//             // $('.ver-traffic').css("background","#fff2eb");
//             // $('.ver-fun').css("background","#fff2eb");
//         }
//         $('.ver-football').on("mouseover",function() {
//             $(".ver-football").css("background-color","#fc3e4c");
//             // $(".ver-food").css("background-color","#fff2eb");
//             // $(".ver-fun").css("background-color","#fff2eb");
//             // $(".ver-traffic").css("background-color","#fff2eb");
//             // $(".ver-stay").css("background-color","#fff2eb");
//         });
//         $('.ver-football').on("mouseover",function() {
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//             $(".ver-football").css("background-color","#fff2eb");
//         });
//         $('.ver-food').on("mouseover",function() {
//             $(".ver-food").css("background-color","#ffca76");
//         });
//         $('.ver-fun').on("mouseover",function() {
//             $(".ver-fun").css("background-color","#ffe57e");
//         });
//         $('.ver-traffic').on("mouseover",function() {
//             $(".ver-traffic").css("background-color","#a4dbff");
//         });
//         $('.ver-stay').on("mouseover",function() {
//             $(".ver-stay").css("background-color","#decdff");
//         });
// })

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
	//导航栏
	$(window.document).scroll(function() {
		$(".navbar").addClass("scroll");
		if($(this).scrollTop() == 0){
			$(".navbar").removeClass("scroll");
		}
	});       


	
}
