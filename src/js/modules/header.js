function init() {
	if (document.querySelector('.js-main-header')) {
		const user = require('../utils/user.js');
		user.name('Cristina');
		user.lastName('Ponce');
	}
}

module.exports = init();