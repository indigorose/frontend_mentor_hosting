const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const queryTypes = document.querySelectorAll('input[name="queryType"]');
const message = document.getElementById('messageText');
const consent = document.getElementById('consent');

function validateForm() {
	const fnameErr = document.getElementById('fname-error');
	const lnameErr = document.getElementById('lname-error');
	const emailErr = document.getElementById('email-error');
	const queryErr = document.getElementById('query-error');
	const msgErr = document.getElementById('message-error');
	const consentErr = document.getElementById('consent-error');

	fnameErr.textContent = '';
	lnameErr.textContent = '';
	emailErr.textContent = '';
	queryErr.textContent = '';
	msgErr.textContent = '';
	consentErr.textContent = '';

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const selected = [...queryTypes].some((queryType) => queryType.checked);

	let isValid = true;

	if (firstName.value === '') {
		fnameErr.textContent = 'This field is required';
		firstName.classList.add('input-error');
		isValid = false;
	}

	if (lastName.value === '' || /\d/.test(lastName)) {
		lnameErr.textContent = 'This field is required';
		lastName.classList.add('input-error');
		isValid = false;
	}

	if (email.value === '' || emailPattern.test(email)) {
		emailErr.textContent = 'Please enter a valid email address';
		email.classList.add('input-error');
		isValid = false;
	}
	if (!selected) {
		queryErr.textContent = 'Please select a query type';
		isValid = false;
	}

	if (message.value === '') {
		message.classList.add('input-error');
		msgErr.textContent = 'This field is required';
		isValid = false;
	}

	if (!consent.checked) {
		consentErr.textContent =
			'To submit this form, please consent to being contacted';
		isValid = false;
	}
	if (isValid) {
		// inner text change = "Form submitted successfully"
		return true;
	} else {
		return false;
	}
}

function resetErrors() {
	document.getElementById('lname-error').textContent = '';
	document.getElementById('fname-error').textContent = '';
	document.getElementById('email-error').textContent = '';
	document.getElementById('query-error').textContent = '';
	document.getElementById('message-error').textContent = '';
	document.getElementById('consent-error').textContent = '';
	firstName.classList.remove('input-error');
	lastName.classList.remove('input-error');
	email.classList.remove('input-error');
	message.classList.remove('input-error');
}
