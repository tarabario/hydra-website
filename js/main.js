const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('nav[role="primary"]');
const body = document.body;
console.log(headerNav);

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('to-cross-mark');
	document.body.classList.toggle('blur');
	headerNav.classList.toggle('show');
})