const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('nav[role="primary"]');

const buttonPrev = document.querySelector('.button-previous');
const buttonNext = document.querySelector('.button-next');
const supportCards = document.querySelectorAll('.support-card');
const cardsSlider = document.querySelector('.cards-slider');

window.addEventListener('resize', function() {
	if (this.innerWidth <= 450) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('to-cross-mark');
			document.body.classList.toggle('blur');
			headerNav.classList.toggle('show');
		})

		let activeCardIndex = 0;

		buttonNext.addEventListener('click', () => {
			if (activeCardIndex === (supportCards.length - 1)) {
				activeCardIndex = 0;
				cardsSlider.style.transform = `translateX(0)`;
			} else {
				activeCardIndex++;
				cardsSlider.style.transform = `translateX(-${activeCardIndex * (100 / supportCards.length)}%)`;
			}
		});

		buttonPrev.addEventListener('click', () => {
			if (activeCardIndex === 0) {
				activeCardIndex = (supportCards.length - 1);
				cardsSlider.style.transform = `translateX(-${activeCardIndex * (100 / supportCards.length)}%)`;
			} else {
				activeCardIndex--;
				cardsSlider.style.transform = `translateX(-${activeCardIndex * (100 / supportCards.length)}%)`;
			}
		});
	} else if (this.innerWidth > 450) {
		cardsSlider.style.transform = `translateX(0)`;
	}
})

