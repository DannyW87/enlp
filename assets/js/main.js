(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	function toggleNav() {
		if ($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav');
				$('ul.menu').slideUp();
				$('ul.menu').removeClass('open');
		} else {
				$('body').addClass('show-nav');
				$('ul.menu').slideDown();
				$('ul.menu').addClass('open');
		}
	}

	// Mobile trigger
	$('body').on('click', '#mobile--nav', function() {
		$('#nav-icon').toggleClass('open');
		toggleNav();
	});

})(jQuery);