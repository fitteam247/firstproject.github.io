


$(document).ready(function(){	
	
/* Slide Show */	

	var width = 100+'%';
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 1;
	
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	
	setInterval(function(){
		
			$slideContainer.animate({'margin-left': '-=' +width, opacity: 0.4} , animationSpeed, function(){
				currentSlide++;
				if (currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left','0%');
					$slideContainer.fadeIn('slow');
				};
				 $slideContainer.css('opacity',1);
			});
		
	}, pause);
	

});