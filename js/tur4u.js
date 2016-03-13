$(document).ready(function() {
	$('.server-msg a').click(function(){
	      var $this = $(this);
		var serverFootball = $('.server-football');
		var serverFood = $('.server-food');
		var serverTraffic = $('.server-traffic');
		var serverFun = $('.server-fun');
		var serverStay = $('.server-stay');
		var server = $('.server-content div');
		console.log(server);
		server.hide();
		$this
	})
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
	$('.fun-photo ul li,.left-2,.left-3,.right-3,.right-4,.left-5,.right-5').mouseover(function(){
		$(this).css({
			zIdex : 2,
			transform : 'scale(1.2,1.2)',
			transition : 'transform 1s'	
		});
	})
	$('.fun-photo ul li,.left-2,.left-3,.right-3,.right-4,.left-5,.right-5').mouseout(function(){
		$(this).css({
			zIdex : 1,
			transform : 'scale(1,1)',
			transition : 'transform 1s'	
		});
	})	
})