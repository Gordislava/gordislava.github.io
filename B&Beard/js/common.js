$(function() {

	$('#my-menu').mmenu({
		extensions: [
			"theme-black", 
			"position-right", 
			"pagedim-black",
			"fx-listitems-slide",
			"border-none"],
		navbar: {
			title: "<img src='img/logob-1.svg'>"
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	

	$('.services__carousel').on('changed.owl.carousel', function(){
		setTimeout(function(){
			carouselService()
		}, 100);
	});

	
	
	$('.services__carousel').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		dots: false,
		smartSpeed: 700,
		// navText: ["<img src='img/double-arrow-right.svg'>", "<img src='img/double-arrow-right.svg'>"] стрелки: нет в последней версии, 
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}

	});

	function onResize() {
		$('.services__text').equalHeights();
	} onResize()
	window.onresize = function () { onResize() };

	function carouselService() {
		$('.services__item').each(function () {
			var ths = $(this);
			var thsh = ths.find('.services__text').outerHeight();
			ths.find('.services__img').css('min-height', thsh);	
		});
	} carouselService();

	$('.select').selectize({
		create: true
	})

	$('.review__carousel').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true

	});

	$('.partners__carousel').owlCarousel({
		loop: true,
		items: 3,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: ["<img src='img/right-arrow.svg'>", "<img src='img/right-arrow.svg'>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	$('.button-top').click(function () {
		$('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(window).height()) {
			$('.button-top').addClass("button-top__active");
		} else {
			$('.button-top').removeClass("button-top__active");
		};
	});

	//E-mail Ajax Send
	$("form.form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find('.form__success').addClass('active').css('display', "flex").hide().fadeIn();
			setTimeout(function () {
				// Done Functions
				$(th).find('form__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});


