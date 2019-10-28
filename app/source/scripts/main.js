document.addEventListener("DOMContentLoaded", function () {
	// AOS init
	AOS.init({
		offset: 50
	});



	// Меню
	// body смещается вниз и влево, фон меняется, тени появляются, есть кнопка меню закрыть, при нажатии на бади - закрывается меню
	// меню не исчезает, оно просто смещено
	// при нажатии на кнопку происходит смещение

	const pageMobile = document.querySelector('.page');
	const wrapperMobile = document.querySelector('.wrapper');
	const innerMobile = document.querySelector(".inner");
	const headerMobile = document.querySelector('.header');
	

	// const navMenu = document.querySelector('.nav__menu');
	const navMenuMobile = document.querySelector('.nav-mobile');
	const navMobileWrapper = document.querySelector('.nav-mobile__wrapper');

	const navButton = document.querySelector(".nav__button");
	const navButtonMobile = document.querySelector('.nav-mobile__button');

	
	// On click
	navButton.addEventListener("click", function (evt) {
		evt.preventDefault(evt);
		if (navButton.classList.contains('nav__button--close')) {

			innerMobile.classList.remove('inner--show');
			innerMobile.classList.add('inner--static');

			navButton.classList.remove('nav__button--close');
			// navMenu.classList.remove('nav__menu--show');

			pageMobile.classList.remove('page--mobile');
			wrapperMobile.classList.remove('wrapper--mobile');
			headerMobile.classList.remove('header--mobile');
			navMenuMobile.classList.remove('nav-mobile--show');
			navMenuMobile.classList.add('visually-hidden');
			navMobileWrapper.classList.remove('nav-mobile__wrapper--show');

		} else {
			innerMobile.classList.add('inner--show');
			innerMobile.classList.remove('inner--static');
			navButton.classList.add('nav__button--close');
			// navMenu.classList.add('nav__menu--show');
			pageMobile.classList.add('page--mobile');
			wrapperMobile.classList.add('wrapper--mobile');
			headerMobile.classList.add('header--mobile');
			navMenuMobile.classList.add('nav-mobile--show');
			navMenuMobile.classList.remove('visually-hidden');
			navMobileWrapper.classList.add('nav-mobile__wrapper--show');
		}
		
		// if (navMenu.classList.contains('nav__menu--show')) {
		// 	navMenu.classList.remove('nav__menu--show');
		// 	navButton.classList.remove('nav__button--close');
		// 	navButtonText.textContent = "menu";
		// 	pageBody.classList.remove('page--show');
		// } else {
		// 	navMenu.classList.add('nav__menu--show');
		// 	navButton.classList.add('nav__button--close');
		// 	navButtonText.textContent = "close";
		// 	pageBody.classList.add('page--show');
		// }
	});

	
	navButtonMobile.addEventListener("click", function (evt) {
		evt.preventDefault(evt);
		if (navButton.classList.contains('nav__button--close')) {
			innerMobile.classList.remove('inner--show');
			innerMobile.classList.add('inner--static');

			navButton.classList.remove('nav__button--close');
			// navMenu.classList.remove('nav__menu--show');

			pageMobile.classList.remove('page--mobile');
			wrapperMobile.classList.remove('wrapper--mobile');
			headerMobile.classList.remove('header--mobile');
			navMenuMobile.classList.remove('nav-mobile--show');
			navMobileWrapper.classList.remove('nav-mobile__wrapper--show');
		} else {
			innerMobile.classList.add('inner--show');
			innerMobile.classList.remove('inner--static');
			navButton.classList.add('nav__button--close');
			// navMenu.classList.add('nav__menu--show');
			pageMobile.classList.add('page--mobile');
			wrapperMobile.classList.add('wrapper--mobile');
			headerMobile.classList.add('header--mobile');
			navMenuMobile.classList.add('nav-mobile--show');
			navMobileWrapper.classList.add('nav-mobile__wrapper--show');
		}
	});



	// Custom JS
	console.log('Hello, World!');
});