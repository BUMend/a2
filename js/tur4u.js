$(document).ready(function() {
	$('.card img').click(function(){
	      var $this = $(this);
		var name = $this.attr("src");
		var serverTour = $('.server-tour');
		var serverTraffic = $('.server-traffic');
		var serverFun = $('.server-fun');
		var serverStay = $('.server-stay');
		if(name === "img/1.png"){
			$this.attr("src","img/c1.png");
			$this.parent().next().children().attr("src","img/c2.png");
			$this.parent().next().next().children().attr("src","img/c3.png");
			$this.parent().next().next().next().children().attr("src","img/c4.png");
			serverTraffic.hide();
			serverFun.hide();
			serverStay.hide();
			serverTour.show();
		}
		if(name === "img/c2.png"){
			$this.attr("src","img/2.png");
			$this.parent().prev().children().attr("src","img/1.png");
			$this.parent().next().children().attr("src","img/c3.png");
			$this.parent().next().next().children().attr("src","img/c4.png");
			serverTour.hide();
			serverFun.hide();
			serverStay.hide();
			serverTraffic.show();
		}
		if(name === "img/c3.png"){
			$this.attr("src","img/3.png");
			$this.parent().prev().prev().children().attr("src","img/1.png");
			$this.parent().prev().children().attr("src","img/c2.png");
			$this.parent().next().children().attr("src","img/c4.png");
			serverTour.hide();
			serverTraffic.hide();
			serverStay.hide();
			serverFun.show();
		}
		if(name === "img/c4.png"){
			$this.attr("src","img/4.png");
			$this.parent().prev().children().attr("src","img/c3.png");
			$this.parent().prev().prev().children().attr("src","img/c2.png");
			$this.parent().prev().prev().prev().children().attr("src","img/1.png");
			serverTour.hide();
			serverTraffic.hide();
			serverFun.hide();
			serverStay.show();
		}
	})
	var control = 0;
	$(window).scroll(function(){
		top = $(document).height();
		trigger = ($(window).scrollTop()<($('.feature h1').offset().top-$(window).height()))||($(window).scrollTop()>($('.feature h1').offset().top+$('.feature h1').outerHeight()))
		if(!trigger&&control == 0){
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
		if($(window).scrollTop()<1980){
			$('.special img').css({
				opacity : 0,
				top : "-170px",
				transform : "rotateY(80deg)"
			})				
			control = 0;
		}
	})
})