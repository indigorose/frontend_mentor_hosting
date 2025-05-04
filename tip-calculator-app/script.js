// How to make the calculator responsive

// Elements from the DOM

const billInput = document.getElementById('bill'); /* Bill input */
const customTipInput = document.getElementById('custom'); /* Custom tip input */
const peopleInput = document.getElementById('people');
// Tip button values
const tipButtons = document.querySelectorAll('.tip-button');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');
// error message
const peopleWarning = document.getElementById('people-warning');

// Tip Calculator Logic
const calculateAmounts = (tipPercentage) => {
	const billValue = parseFloat(billInput.value) || 0;
	const peopleValue = parseFloat(peopleInput.value) || 0;

	if (peopleValue <= 0) {
		// Show warning if people input is invalid
		peopleWarning.style.display = 'block';

		return;
	} else {
		// Hide warning if people input is valid
		peopleWarning.style.display = 'none';
	}

	// Calculate tip and total amounts
	const tipValue = (billValue * tipPercentage) / 100;
	const tipPerPerson = tipValue / peopleValue;
	const totalPerPerson = (billValue + tipValue) / peopleValue;

	// Display the results
	tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
	totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
};

// Add event listeners to tip buttons
tipButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const tipPercentage = parseFloat(button.value); // Get the tip percentage from the button value
		calculateAmounts(tipPercentage);
	});
});

// Add event listener for custom tip input
customTipInput.addEventListener('input', () => {
	const customTipValue = parseFloat(customTipInput.value) || 0;
	calculateAmounts(customTipValue);
});

// Add event listener for reset button
resetButton.addEventListener('click', () => {
	// Reset all inputs and outputs
	billInput.value = '';
	customTipInput.value = '';
	peopleInput.value = '';
	tipAmount.textContent = '$0.00';
	totalAmount.textContent = '$0.00';
	peopleWarning.style.display = 'none';
	peopleInput.style.borderColor = '';
});
