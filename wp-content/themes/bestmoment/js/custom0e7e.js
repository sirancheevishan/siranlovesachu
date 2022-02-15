jQuery(document).ready(function(){

// PAGE LOADER
    setTimeout(function() {
        jQuery('body').addClass('loaded');
        	new WOW().init();  
        	jQuery('.navbar.navbar-default').affix({ 
        		offset: {top: 0}
        	});

    }, 3000);
	
	jQuery(".wedding-location").closest(".container").addClass('container-fluid').removeClass('container');
	jQuery(".bestmomentadd").each(function() {
		var className = jQuery(this).attr('class');
		jQuery(this).closest(".bestmoment_addclass").addClass(className);
		jQuery(this).removeAttr('class').addClass('bestmomentadd');
		jQuery(this).removeClass('bestmomentadd');
	});

	
	jQuery(".bestmoment_outer").each(function() {
		var a = jQuery(this).html();
		jQuery(this).closest(".bestmoment_addclass").after(a);
		jQuery(this).empty();
	});
	
	jQuery(".li-right").each(function() {
		jQuery(this).closest(".menu-item").addClass('li-right');
	});
	
	jQuery(".testimonial").find(".item").first().addClass("active");
	var c;
	var b = jQuery(".testimonial").find(".item").length;
	for(c = 0; c < b; c++){
		if(c == 0){
			jQuery(".carousel-indicators").append('<li class="active" data-target="#testimonial-carousel" data-slide-to="'+c+'"></li>');
		}
		else{
			jQuery(".carousel-indicators").append('<li data-target="#testimonial-carousel" data-slide-to="'+c+'"></li>');
		}
	}
	
	jQuery( '.navbar' ).on( 'affix.bs.affix', function(){
	    if( !jQuery( window ).scrollTop() ) return false;
	});

    new WOW().init(); 
	
	//On click collapsible Nav Menu
	jQuery(".navbar-collapse .navbar-nav>li>a").click(function(){
		jQuery('.navbar-collapse').removeClass('in');
	});
	jQuery(".navbar-nav>li>a").first().attr('href', '#');
	
	
	//Slide Set Carousel is used @ section = #gift-registration 
	//Slick carouasel
	//http://kenwheeler.github.io/slick/
	//or, https://github.com/kenwheeler/slick/
	
	jQuery('.gift-reg-slideset').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	
	
	
	
	// Smooth Scroll
	//=======================================================================
	
	jQuery('#wedding-nav a[href^="#"], .link-smooth-scroll').on('click', function(event) {
		
		var target = jQuery(this.getAttribute('href'));
		
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
		
	});
	
	
	//  Count Down @ big-day section
	//  http://www.jqueryscript.net/time-clock/Minimalist-jQuery-Countdown-Timer-Plugin-countdown-js.html
	//=======================================================================
	
	// jQuery('#countdown').countdown({
		
		// date: '1 December 2016 00:00'
		
	// });
	
	//	Image Lightbox
	// 	http://www.jqueryscript.net/lightbox/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin.html
	// 	Demo Here : http://www.jqueryscript.net/demo/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin/
	
	jQuery('#photos a').simpleLightbox({
		closeText:    'X',
		navText:    ['&lsaquo;','&rsaquo;']
		
	});
	
	
	
	
	//  Form Field Focus effect
	//=======================================================================
	
	jQuery(".form-control").focus(function(){
		$(this).closest(".input-group").addClass("input-group-focus");
		}).blur(function(){
		$(this).closest(".input-group").removeClass("input-group-focus");
	});	
	
	
	//  Google Map API
	//========================================================================
	
	
	//  Select Dropdown 
	//=======================================================================
	//  Used inside <form> to style the dropdown comes by default with <select> element
	//  http://silviomoreto.github.io/bootstrap-select/
	// $('.selectpicker').selectpicker({});
	jQuery(".btn").focus(function(){
		jQuery(this).closest(".input-group").addClass("input-group-focus");
		}).blur(function(){
		jQuery(this).closest(".input-group").removeClass("input-group-focus");
	});	
	
	
	
/* 		jQuery('body.blog>.cover-background').removeClass('home-header');
		jQuery('body.blog>.cover-background').addClass('blog-header');
		jQuery('body.page>.cover-background').addClass('blog-header');
		jQuery('body.blog>.cover-background').addClass('blog-height');
		jQuery('body.page>.cover-background').addClass('blog-height'); */
});    //document,ready() function closed
