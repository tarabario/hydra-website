//hamburger navigation menu
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('nav[role="primary"]');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('to-cross-mark');
	document.body.classList.toggle('blur');
	headerNav.classList.toggle('show');
})


//carousel sliders
const buttonsPrev = document.querySelectorAll('.button-prev');

buttonsPrev.forEach(buttonPrev => {
	const slider = buttonPrev.parentElement.querySelector('.cards-slider');
	const cards = slider.children;
	const buttonNextCompanion = buttonPrev.parentElement.querySelector('.button-next');
	let activeCardIndex = 0;

	buttonPrev.addEventListener('click', () => {
		if (activeCardIndex === 0) {
			activeCardIndex = (cards.length - 1);
		} else {
			activeCardIndex--;
		}

		slider.style.transform = `translateX(-${activeCardIndex * (100 / cards.length)}%)`;
	});

	buttonNextCompanion.addEventListener('click', () => {
		if (activeCardIndex === (cards.length - 1)) {
			activeCardIndex = 0;
			slider.style.transform = 'translateX(0)';
		} else {
			activeCardIndex++;
			slider.style.transform = `translateX(-${activeCardIndex * (100 / cards.length)}%)`;
		}
	});
});