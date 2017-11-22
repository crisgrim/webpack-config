const utils = require('./utils/utils.js');

require('./modules/header.js');


if (utils.isMobile()) {
	console.log('Mobile');
} else if (utils.isPortrait()) {
	console.log('Portrait');
} else if (utils.isLandscape()) {
	console.log('Landscape');
} else if (utils.isDesktop()) {
	console.log('Desktop');
}


// Put after that all the modules that use jQuery
window.jQuery = window.$ = require('jquery');

if (document.querySelector('.js-home')) {
	require('./controllers/home.js');
}