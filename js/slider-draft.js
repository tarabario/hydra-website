const buttonsPrev = document.querySelectorAll('.button-prev');
const buttonsNext = document.querySelectorAll('.button-next');
console.log(buttonsPrev, buttonsNext);



let activeCardIndex = 0;

buttonsPrev.forEach(button => {
	const slider = button.parentElement.querySelector('.cards-slider');
	const cards = slider.children;
	let sliderActivation;
	let activeCardIndex;
	button.addEventListener('click', () => {
		if (!sliderActivation) {
			sliderActivation = true;
			activeCardIndex = 0;
		}

		if (activeCardIndex === 0) {
			activeCardIndex = (cards.length - 1);
		} else {
			activeCardIndex--;
		}

		slider.style.transform = `translateX(-${activeCardIndex * (100 / cards.length)}%)`;
		console.log(activeCardIndex);
		console.log(sliderActivation);
		console.log(slider);
	});
});

buttonsNext.forEach(button => {
	const slider = button.parentElement.querySelector('.cards-slider');
	const cards = slider.children;
	let sliderActivation;
	let activeCardIndex;
	button.addEventListener('click', () => {

		if (!sliderActivation) {
			sliderActivation = true;
			activeCardIndex = 0;
		}

		if (activeCardIndex === (cards.length - 1)) {
			activeCardIndex = 0;
			slider.style.transform = 'translateX(0)';
		} else {
			activeCardIndex++;
			slider.style.transform = `translateX(-${activeCardIndex * (100 / cards.length)}%)`;
		}
		console.log(activeCardIndex);
		console.log(sliderActivation);
		console.log(slider);
	});
});