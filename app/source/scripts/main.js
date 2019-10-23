document.addEventListener("DOMContentLoaded", function () {
	// AOS init
	AOS.init({
		offset: 50
	});



	// Меню

	const navButton = document.querySelector(".nav__button");
	const navMenu = document.querySelector('.nav__menu');
	const navButtonText = document.querySelector('.button-text');
	// On click
	navButton.addEventListener("click", function (evt) {
		evt.preventDefault(evt);
		if (navMenu.classList.contains('nav__menu--show')) {
			navMenu.classList.remove('nav__menu--show');
			navButton.classList.remove('nav__button--close');
			navButtonText.textContent = "menu";
		} else {
			navMenu.classList.add('nav__menu--show');
			navButton.classList.add('nav__button--close');
			navButtonText.textContent = "close";
		}
	});



	// Custom JS
	console.log('Hello, World!');
});