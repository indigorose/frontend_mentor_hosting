function validateForm() {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	// const queryType = document.getElementById('queryType');
	const message = document.getElementById('messageText').value;
	const consent = document.getElementById('consent').checked;

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

	let isValid = true;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (firstName === '' || /\d/.test(firstName)) {
		fnameErr.textContent = 'This field is required';
		isValid = false;
	}

	if (lastName === '' || /\d/.test(lastName)) {
		lnameErr.textContent = 'This field is required';
		isValid = false;
	}

	if (email === '' || emailPattern.test(email)) {
		emailErr.textContent = 'Please enter a valid email address';
		isValid = false;
	}

	if (message === '') {
		msgErr.textContent = 'This field is required';
	}

	if (!consent) {
		consentErr.textContent =
			'To submit this form, please consent to being contacted';
		isValid = false;
	}
}

function resetErrors() {
	document.getElementById('lname-error').textContent = '';
	document.getElementById('fname-error').textContent = '';
	document.getElementById('email-error').textContent = '';
	document.getElementById('query-error').textContent = '';
	document.getElementById('message-error').textContent = '';
	document.getElementById('consent-error').textContent = '';
}
