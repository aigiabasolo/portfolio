$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.nav_toggle_button'),
				toggle_primary_icon = $('.nav_toggle_button i'),
				toggle_secondary_button = $('.page_nav li span'),
				primary_menu = $('.page_nav'),
				secondary_menu = $('.page_nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width();

	// Add class to tab having drop down
	$( ".page_nav li:has(ul)").find('span i').addClass("fa-caret-down");

	//Disable Right Click
	document.addEventListener("contextmenu", function(e){
	    e.preventDefault();
	}, false);

	//Multi-line Tab
	toggle_secondary_button.click(function(){
		$(this).parent('li').siblings('li').children('ul').slideUp(400, function() {
			$(this).removeAttr('style');
		});

		$(this).parent('li').siblings('li').find('.fa').removeClass("fa-caret-up").addClass("fa-caret-down");

		$(this).parent('li').children('ul').slideToggle();
		$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
	});

	// Basic functionality for nav_toggle

	var hamburger = $(".hamburger");

	hamburger.click(function(){
		primary_menu.addClass('toggle_right_style');
		$('.toggle_right_nav').addClass('toggle_right_cont');
		$(".nav_toggle_button").toggleClass('active');
		$(".hamburger").toggleClass("is-active");
	});

	$('.toggle_nav_close, .menu_slide_right .hamburger,.page_nav ul li a').click(function(){
		primary_menu.removeClass('toggle_right_style');
		secondary_menu.removeAttr('style');
		toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
		$('.toggle_right_nav').removeClass('toggle_right_cont');
		$(".nav_toggle_button").removeClass('active');
		$(".hamburger").removeClass("is-active");
	});

	// Swap Elements
	function swap_this(){
		if(window_width <= 800){
			$('.main_logo').insertAfter('.logo_wrap');
			$('#nav_area').insertBefore('header');
			$('.social_media').insertAfter('.nav_wrap');
		} else {
			$('.main_logo').insertBefore('.head_info');
			$('#nav_area').insertAfter('header');
			$('.social_media').insertBefore('#particles-js');
		}
		// if(window_width > 1000){
		// 	$('.social_media').insertBefore('#particles-js');
		// }
	}

	swap_this();

	// Reset all configs when width > 800
	$(window).resize(function(){
		window_width = $(this).width();

		swap_this();

		if(window_width > 800) {
			$(".nav_toggle_button").removeClass('active');
			$(".hamburger").removeClass("is-active");
			primary_menu.removeClass('toggle_right_style');
			$('.toggle_right_nav').removeClass('toggle_right_cont');
			$('body').removeClass('active');
		}
		else{
			secondary_menu.removeAttr('style');
			toggle_secondary_button.children().removeClass("fa-caret-up").addClass("fa-caret-down");
		}
	});

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$('.main_logo,.logo_slide_right,.footer_logo').click(function () { // back to top
		$("html, body").stop().animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	// pop-up
	$(".bnr_btn a").click(function() {
		$('.pop_cont').show();
		$('body').addClass('active');
	});
	$(".close").click(function() {
		$(".pop_cont").hide();
		$('body').removeClass('active');
	});


	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		// history.pushState("", document.title, window.location.pathname + window.location.search);

		var headerHeight = $('.header_nav').height();
		if(windowScroll >= headerHeight){
			$('.header_nav').addClass('fixed');
		} else{
			$('.header_nav').removeClass('fixed');
		}

		$(".scroll_wrapper.scrollActive").removeClass("scrollActive");
		$(".page_nav .nav_wrap ul li.current_page_item").removeClass("current_page_item");

		$(".scroll_wrapper").each(function () {
				var dis = $(this);
				if ((dis.offset().top + dis.height()) - 86 >= windowScroll && windowScroll >= $(".scroll_wrapper:first").offset().top - 86) {
					dis.addClass("scrollActive");
					var disId = dis.attr('id');

						// get nav a
						var navEl = $('.page_nav .nav_wrap ul li a[href="#' + disId + '"]').parent('li').addClass('current_page_item');

						return false;
				}
		});
		/*BACK TO TOP*/
		if (windowScroll > (webHeight * 0.2)) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};
	});

	$('.page_nav ul li a, .workBtn a').click(function(event) {
		var id = $(this).attr("href").split('#'),
		id = '#'+id[1];

		var target = $(id).offset().top -84;

			// if(window_width <= 800){
			// 	var target = $(id).offset().top -84;
			// } else {
			// 	var target = $(id).offset().top -84;
			// }

		$('html, body').stop().animate({scrollTop:target}, 1000);
		event.preventDefault();
	});

	$('.timeline_info').click(function(){
		$('.timeline li').removeClass('active');
	  $(this).parent().toggleClass('active');
	  // $('.timeline li').removeClass('active');
	  // $(this).parent().toggleClass('active').children('.timeline_details').stop().slideToggle();
	});

		$('.portfolioContainer').slick({
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: true,
			infinite:true,
			dots: true,
      speed: 500,
			autoplay: true,
  		autoplaySpeed: 5000,
			draggable:false,
      prevArrow: $('.fprev'),
      nextArrow: $('.fnext'),
			responsive: [
	    {
	      breakpoint: 801,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
					draggable:true
	      }
			},
			{
				breakpoint: 601,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
					draggable:true
	      }
	    }
		]
    });

		$('.testi_list').owlCarousel({
				items:3,
				loop: true,
				nav:true,
				dots: false,
			  autoplay: true,
				autoheight: false,
			  center: true,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
				responsive:{
	        0:{
	            items:1
	        },
	        1000:{
	            items:1,
	        },
					1001:{
	            items:2
	        },
	        1201:{
	            items:3
	        }
	    }
		});

	new WOW().init();
});
