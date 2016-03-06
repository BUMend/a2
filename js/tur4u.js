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
})