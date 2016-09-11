$(document).ready(function(){
	var w = $('#logo').parent().outerWidth();
	window.addEventListener('keydown', function(event) {
		if ($(window).scrollTop()<350) {
		  switch (event.keyCode) {
			case 38: //up 
				if(document.getElementById("logo").clientWidth>=((3*w)/100) && document.getElementById("logo").clientWidth<=((13*w)/100))
						$('#logo').animate( {width:"+=2%", left:"-=1%", top:"+=3.6%"}, 0);
			break;
			case 40: //down
				if(document.getElementById("logo").clientWidth>=((5*w)/100) && document.getElementById("logo").clientWidth<=((16*w)/100))
						$('#logo').animate( {width:"-=2%", left:"+=1%", top:"-=3.6%"}, 0);
			break;
		  }
		}
		if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
			$("#logo").attr("src", "images/logo_black.png");
			$("#logo").css("top", "3%");
		} else {
			$("#logo").attr("src", "images/logo_black.png");
			$("#logo").css("top", "25%");
		}
		}, false);
		 $(window).bind('mousewheel DOMMouseScroll', function(e){
				 if(e.originalEvent.wheelDelta < 0) {
					if(document.getElementById("logo").clientWidth>=((5*w)/100) && document.getElementById("logo").clientWidth<=((16*w)/100))
						$('#logo').animate( {width:"-=2%", left:"+=1%", top:"-=3.6%"}, 0);
				 }else {
					 //scroll up
					 if ($(window).scrollTop()<350) {
					if(document.getElementById("logo").clientWidth>=((3*w)/100) && document.getElementById("logo").clientWidth<=((13*w)/100))
						$('#logo').animate( {width:"+=2%", left:"-=1%", top:"+=3.6%"}, 0);
					 }
				 }
				 
		 if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
			$("#logo").attr("src", "images/logo_black.png");
			$("#logo").css("top", "3%");
		} else {
			$("#logo").attr("src", "images/logo_black.png");
			$("#logo").css("top", "25%");
		}
		});
});
