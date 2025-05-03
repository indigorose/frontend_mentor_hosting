// How to make the calculator responsive
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const tipValue5 = document.getElementById('tip-value-5');
const tipValue10 = document.getElementById('tip-value-10');
const tipValue15 = document.getElementById('tip-value-15');
const tipValue25 = document.getElementById('tip-value-25');
const tipValue50 = document.getElementById('tip-value-50');

// error message
const peopleWarning = document.getElementById('people-warning');

peopleInput.addEventListener('input', () => {
	const peopleValue = parseFloat(peopleInput.value);

	if (!peopleValue || peopleValue <= 0) {
		// Show the warning message
		peopleWarning.style.display = 'block';
		peopleInput.style.borderColor = 'red'; // Optional: Add a red border to the input
	} else {
		// Hide the warning message
		peopleWarning.style.display = 'none';
		peopleInput.style.borderColor = ''; // Reset the border color
	}
});

billInput.addEventListener('input', () => {
	console.log('Bill input changed:', billInput.value);
});
