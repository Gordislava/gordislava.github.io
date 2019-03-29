$(function () {
	$(".menu-item--lang").click(function () {
		$(".menu-item--lang").not($(this)).removeClass('menu-item--lang-active');
		$(this).toggleClass('menu-item--lang-active');
	});

});
