// Valid email check

function validateEmail() {
	const emailInput = document.getElementById('Email');
	const errorMessage = document.getElementById('form__error-message');

	// Simple email validation regex
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailPattern.test(emailInput.value)) {
		// Add red border and show error message
		emailInput.classList.add('form__input-error');
		errorMessage.textContent = 'valid email required';
		errorMessage.style.display = 'inline';
		return false; // Prevent form submission
	} else {
		// Remove error styles if input is valid
		emailInput.classList.remove('form__input-error');
		errorMessage.textContent = '';
		errorMessage.style.display = 'none';
		return true; // Allow form submission
	}
}
