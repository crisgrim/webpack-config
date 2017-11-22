function init() {
	$('.js-show-text').on('click', function() {
		$('.js-extra-text').show();
		$(this).hide();
	});

	require('../vendor/slick.min.js');
	$('.js-slider').slick();
}

module.exports = init(); 