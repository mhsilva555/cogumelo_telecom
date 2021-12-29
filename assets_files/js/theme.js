;(function($) {
    "use strict";

    $(document).ready(function(){
		$(".main-nav a, a.btn-planos-slide").on('click', function(event) {
		    if (this.hash !== "") {
		    	event.preventDefault();

		    	var hash = this.hash;
		    	$('html, body').animate({
		        	scrollTop: $(hash).offset().top
		      	}, 800, function(){
		        	window.location.hash = hash;
		      	});
		    }
	  	});
	});
	
	function bootstrapAnimatedLayer() {
		function doAnimations(elems) {
			var animEndEv = 'webkitAnimationEnd animationend';

			elems.each(function() {
				var $this = $(this),
					$animationType = $this.data('animation');
				$this.addClass($animationType).one(animEndEv, function() {
					$this.removeClass($animationType);
				});
			});
		}

		var $myCarousel = $('#minimal-bootstrap-carousel'),
			$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

		$myCarousel.carousel({
			interval: 7000
		});

		doAnimations($firstAnimatingElems);

		$myCarousel.carousel('pause');

		$myCarousel.on('slide.bs.carousel', function(e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});
	}
	
	
	if ( $('#minimal-bootstrap-carousel').length ){
		bootstrapAnimatedLayer();
	}
    
	if ( $('.main-slider').length ){
		
		$('.main-slider').each(function(){
			$('.main-slider').owlCarousel({
				loop:true,
				margin:0,
				items:1,
				autoplay: true,
				nav: true,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				autoplayHoverPause: true
			})
		})
	}

    
	if ( $('.service-offer-carousel').length ){
		$('.service-offer-carousel').each(function(){
			$('.service-offer-carousel').owlCarousel({
				loop:true,
				margin:0,
				nav: false,
				dots: true,
				autoplay: true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					768: {
						items: 3
					},
					1200: {
						items: 4
					}
				}
			})
		})
	}
	
	if ( $('.pr-twenty20').length ){
		$('.pr-twenty20').twentytwenty();
	}
	
	
	if( $('.plumber-navbar').length ){
		
		if ( $(window).width() > 991 ){
			$(window).on('scroll', function(){
				var $topG = $('.plumber-navbar').offset().top;

				if ( $(window).scrollTop() > $topG + 66 ) {
					$('.plumber-navbar').addClass('affix-coming')
				}
				else {
					$('.plumber-navbar').removeClass('affix-coming')
				}

				$('.plumber-navbar').affix({
					offset: {
						top: $topG + 150
					}
				})
			})
		}
		
	}
    
})(jQuery)