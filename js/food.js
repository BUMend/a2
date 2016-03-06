$(document).ready(function(){
      $(".food-arrow").css("left",$(window).width()/20*12);
  	if ( $(window).width() >768) {
	      if( $(".left-1").height() > $(".right-1").height() ) {
	        $(".right-1").css("height",$(".left-1").height()) 
	      }else{
	        $(".left-1").css("height",$(".right-1").height()) 
	      }
	}; 
	  if($(".left-3").height() > $(".right-3").height()){
	    $(".right-3").css("height",$(".left-3").height()) 
	  }else{
	    $(".left-3").css("height",$(".right-3").height()) 
	  }
	  var photoHeight=0;
	  photoHeight=$(".left-1").height()/2;
	  $(".left-4").css("height",photoHeight);
	  $(".right-4").css("height",photoHeight);
	  $(".left-5").css("height",photoHeight);
	  $(".right-5").css("height",photoHeight);  
	  photoHeight=$(window).width();
	  if( photoHeight<768 ) {
	    $(".mobile-photo").css("height",photoHeight/16*9);
	    $(".food-description").css("display","none");
	    $(".food-arrow").css("display","none");
	    $(".food-introduction").css("display","block");
	    $(".food-content ").css("padding","0");
	    $(".food-introduction").css("font-size","2.4rem");
	  }
})
