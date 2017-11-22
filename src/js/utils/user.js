export function name(n) {
	if (document.querySelector('.js-main-header .js-name')) {
		document.querySelector('.js-main-header .js-name').innerHTML = n;
	}
}

export function lastName(l) {
	if (document.querySelector('.js-main-header .js-lastname')) {
		document.querySelector('.js-main-header .js-lastname').innerHTML = l;
	}
}