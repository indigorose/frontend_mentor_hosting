// Array of HSL colors
const colors = [
	'hsl(15, 100%, 70%)',
	'hsl(195, 74%, 62%)',
	'hsl(348, 100%, 68%)',
	'hsl(145, 58%, 55%)',
	'hsl(264, 64%, 52%)',
	'hsl(43, 84%, 65%)',
];

fetch('./data.json')
	.then((response) => response.json())
	.then((data) => {
		const timeframeSelectors = document.querySelectorAll(
			'.profile-selector a'
		);

		// Function to update the displayed data based on the selected timeframe
		const updateData = (timeframe) => {
			data.forEach((item, index) => {
				const stateCard = document.querySelectorAll('.state_card');
				const card = document.querySelector(
					`.${item.title.toLowerCase().replace(/\s+/g, '-')}`
				);
				stateCard[index].style.backgroundColor = colors[index];
				if (card) {
					const currState = card.querySelector('.curr_hours');
					const prevState = card.querySelector('.prev_hours');
					currState.textContent = `${item.timeframes[timeframe].current}hrs`;
					prevState.textContent = `${item.timeframes[timeframe].previous}hrs`;
				}
			});
		};

		// Add event listeners to the timeframe selectors
		timeframeSelectors.forEach((selector) => {
			selector.addEventListener('click', (event) => {
				event.preventDefault();

				timeframeSelectors.forEach((selector) => {
					selector.classList.remove('active');
				});

				selector.classList.add('active');

				const timeframe = selector.textContent.toLowerCase();
				updateData(timeframe);
			});
		});

		// Initialize with weekly data
		updateData('weekly');
	});
