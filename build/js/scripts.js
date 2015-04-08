$('.menu-toggle-mobile').on('click', function(event) {
	event.preventDefault();

	$('nav').addClass('open');
});

$('.close').on('click', function(event) {
	event.preventDefault();

	$('nav').removeClass('open');
});