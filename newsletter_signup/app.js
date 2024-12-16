document.addEventListener('DOMContentLoaded', () => {
	// Valid email check
	const emailInput = document.getElementById('Email');
	const submitBtn = document.getElementById('submit-btn');
	const errorMsg = document.getElementById('Error');
	const formContainer = document.getElementById('Wrapper');
	const successContainer = document.getElementById('Wrapper-success');
	const emailText = document.getElementById('email-text');
	// Check the email - regex
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// onclick submit button
	submitBtn.addEventListener('click', () => {
		const emailValue = emailInput.value.trim();

		// If true - hide wrapper container - show success container
		if (emailPattern.test(emailValue)) {
			formContainer.classList.add('hidden');
			successContainer.classList.remove('hidden');
			emailText.innerText = emailValue;
		} else {
			// False - display error message change the colour of the input
			errorMsg.classList.remove('hidden');
			emailInput.classList.add('input-error');
		}
	});
	const returnBtn = document.getElementById('btn-return');

	returnBtn.addEventListener('click', () => {
		successContainer.classList.add('hidden');
		formContainer.classList.remove('hidden');
	});
});

// Store the email address and add to the subscribing message.
// p tag - class success-text
