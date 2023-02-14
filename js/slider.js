const buttonsPrev = document.querySelectorAll('.button-prev');
const buttonsNext = document.querySelectorAll('.button-next');
console.log(buttonsPrev, buttonsNext);



buttonsPrev.forEach(button => {
	const slider = button.parentElement.querySelector('.cards-slider');
	const cards = slider.children;
	let activeCardIndex = 0;
	button.addEventListener('click', () => {
		if (activeCardIndex === 0) {
			activeCardIndex = (cards.length - 1);
		} else {
			activeCardIndex--;
		}

		slider.style.transform = `translateX(-${activeCardIndex * (100 / cards.length)}%)`;
	})
})