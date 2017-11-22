function isMobile() {
	return window.innerWidth <= 767 ? true : false;
};

function isPortrait() {
	return window.innerWidth >= 768 && window.innerWidth <= 1023 ? true : false;
};

function isLandscape() {
	return window.innerWidth >= 1024 && window.innerWidth <= 1365 ? true : false;
};

function isDesktop() {
	return window.innerWidth >= 1366 ? true : false;
};

module.exports = {
	isMobile: isMobile,
	isPortrait: isPortrait,
	isLandscape: isLandscape,
	isDesktop: isDesktop
};