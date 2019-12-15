document.addEventListener("DOMContentLoaded", () => {
	// AOS init
	AOS.init({
		offset: 0
	});


	// Меню

	const pageMobile = document.querySelector('.page');
	const innerMobile = document.querySelector(".inner");
	const headerMobile = document.querySelector('.header');
	const mobileMenu = document.querySelector('.menu-mobile');
	const menuMobile = document.querySelector('.container-mobile');
	// кнопки
	const buttonMenu = document.querySelector(".nav__button");
	const buttonClose = document.querySelector('.nav-mobile__button');

	// переключатели
	const toggleInner = () => {
		innerMobile.classList.toggle('inner--mobile');
	};
	const togglePage = () => {
		pageMobile.classList.toggle('page--mobile');
	};
	const toggleMobileHeader = () => {
		headerMobile.classList.toggle('header--mobile');
	};
	const toggleMobileNav = () => {
		menuMobile.classList.toggle('container-mobile--show');
	};

	// нажатие
	buttonMenu.addEventListener("click", e => {
		e.preventDefault(e);
		e.stopPropagation();

		toggleInner();
		togglePage();
		toggleMobileHeader();
		toggleMobileNav();
	});

	buttonClose.addEventListener("click", e => {
		e.preventDefault(e);
		e.stopPropagation();
		
		toggleInner();
		togglePage();
		toggleMobileHeader();
		toggleMobileNav();
	});

	// при клике на пустую область
	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target == mobileMenu || mobileMenu.contains(target);
		let its_buttonClose = target == buttonClose;
		let its_buttonMenu = target == buttonMenu;
		let menu_is_active = innerMobile.classList.contains('inner--mobile');

		if (!its_menu && !its_buttonMenu && !its_buttonClose && menu_is_active) {
			toggleInner();
			togglePage();
			toggleMobileHeader();
			toggleMobileNav();
		}
	});

	// Custom JS
	console.log('Hello, World!');
});