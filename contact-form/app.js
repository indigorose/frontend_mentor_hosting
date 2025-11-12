document.addEventListener('DOMContentLoaded', () => {
	// Check the email - regex
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let StdErrorMsg = 'This field is required';
	let emailErrorMsg = 'Please enter a valid email address';
	let queryErrorMsg = 'Please select a query type';
	let consentErrorMsg =
		'To submit this form, please consent to being contacted';

	// --- added validation logic ---
	// (use IDs present in your HTML)
	const form = document.getElementById('container-form');
	const firstName = document.getElementById('firstName');
	const lastName = document.getElementById('lastName');
	const email = document.getElementById('emailAddress'); // HTML id is emailAddress
	const generalQuery = document.getElementById('generalQuery');
	const supportQuery = document.getElementById('supportQuery');
	const message = document.getElementById('messageText');
	const consent = document.getElementById('consentBox'); // HTML id is consentBox
	const successWrapper = document.getElementById('wrapperSuccess');
	const successText = document.getElementById('email-text');

	// helper: find or create error element for a control
	const getErrorEl = (control) => {
		const id = (control && control.id ? control.id : 'ctrl') + '-error';
		let el = document.getElementById(id);
		if (!el) {
			el = document.createElement('span');
			el.id = id;
			el.className = 'error-message';
			el.setAttribute('aria-live', 'polite');
			// insert after control if possible
			if (control && control.parentNode)
				control.parentNode.insertBefore(el, control.nextSibling);
			else document.body.appendChild(el);
		}
		return el;
	};

	const setError = (control, msg) => {
		const err = getErrorEl(control);
		err.textContent = msg;
		err.style.display = 'block';
		if (control) control.classList.add('input-error');
	};

	const clearError = (control) => {
		if (!control) return;
		const err = document.getElementById(control.id + '-error');
		if (err) {
			err.textContent = '';
			err.style.display = 'none';
		}
		control.classList.remove('input-error');
	};

	// validate single field; returns boolean
	const validateField = (control) => {
		if (!control) return true;
		const val = (control.value || '').trim();

		if (
			control === firstName ||
			control === lastName ||
			control === message
		) {
			if (!val) {
				setError(control, StdErrorMsg);
				return false;
			}
			clearError(control);
			return true;
		}

		if (control === email) {
			if (!val) {
				setError(control, StdErrorMsg);
				return false;
			}
			if (!emailPattern.test(val)) {
				setError(control, emailErrorMsg);
				return false;
			}
			clearError(control);
			return true;
		}

		// radios: ensure one of the radio options is checked
		if (control === generalQuery || control === supportQuery) {
			if (!generalQuery.checked && !supportQuery.checked) {
				// attach error to the first radio's container
				setError(generalQuery, queryErrorMsg);
				return false;
			}
			// clear both radio errors
			clearError(generalQuery);
			clearError(supportQuery);
			return true;
		}

		if (control === consent) {
			if (!consent.checked) {
				setError(consent, consentErrorMsg);
				return false;
			}
			clearError(consent);
			return true;
		}

		return true;
	};

	// wire up instant validation to clear errors as user types/changes
	[firstName, lastName, email, message].forEach((ctrl) => {
		if (!ctrl) return;
		ctrl.addEventListener('input', () => validateField(ctrl));
		ctrl.addEventListener('blur', () => validateField(ctrl));
	});
	// radios and consent
	if (generalQuery)
		generalQuery.addEventListener('change', () =>
			validateField(generalQuery)
		);
	if (supportQuery)
		supportQuery.addEventListener('change', () =>
			validateField(supportQuery)
		);
	if (consent)
		consent.addEventListener('change', () => validateField(consent));

	// submit handler
	if (form) {
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			let valid = true;

			[
				firstName,
				lastName,
				email,
				generalQuery,
				supportQuery,
				message,
				consent,
			].forEach((ctrl) => {
				if (!ctrl) return;
				const ok = validateField(ctrl);
				if (!ok) valid = false;
			});

			if (!valid) {
				// focus first invalid control
				const firstInvalid =
					document.querySelector('.input-error') ||
					document.querySelector('.error-message:not(:empty)');
				if (firstInvalid && typeof firstInvalid.focus === 'function')
					firstInvalid.focus();
				return;
			}

			// form is valid -> show success UI (don't submit to server here)
			if (successWrapper) {
				form.reset();
				// clear errors
				[
					firstName,
					lastName,
					email,
					message,
					consent,
					generalQuery,
					supportQuery,
				].forEach((c) => c && clearError(c));
				// populate success text with email if present
				if (successText && email && email.value)
					successText.textContent = email.value.trim();
				successWrapper.classList.remove('hidden');
				successWrapper.setAttribute('role', 'status');
				// optionally hide the form
				form.classList.add('hidden');
			} else {
				form.submit();
			}
		});
	}
});
