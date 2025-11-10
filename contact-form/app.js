document.addEventListener('DOMContentLoaded', () => {
	// Check the email - regex
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let stdErrorMsg = 'This field is required';
	let emailErrorMsg = 'Please enter a valid email address';
	let queryErrorMsg = 'Please select a query type';
	let consentErrorMsg =
		'To submit this form, please consent to being contacted';

	// Validation logic

	const form = document.getElementById('container-form');
	const successContainer = document.getElementById('wrapperSuccess');
	const firstName = document.getElementById('firstName');
	const lastName = document.getElementById('lastName');
	const email = document.getElementById('emailAddress');
	const generalQuery = document.getElementById('generalQuery');
	const supportQuery = document.getElementById('supportQuery');
	const message = document.getElementById('messageText');
	const consent = document.getElementById('consentBox');

	// helper: find or create error element for a control
	const getErrorEl = (control) => {
		const id = control.id + '-error';
		let el = document.getElementById(id);
		if (!el) {
			el = document.createElement('span');
			el.id = id;
			el.className = 'error-message';
			// place after the control (works for inputs/select/textarea)
			control.insertAdjacentElement('afterend', el);
		}
		return el;
	};

	const setError = (control, msg) => {
		const err = getErrorEl(control);
		err.textContent = stdErrorMsg;
		control.classList.add('input-error');
	};

	const clearError = (control) => {
		const err = document.getElementById(control.id + '-error');
		if (err) err.textContent = '';
		control.classList.remove('input-error');
	};

	// validate single field; returns boolean
	const validateField = (control) => {
		const val = (control.value || '').trim();
		if (
			control === firstName ||
			control === lastName ||
			control === message
		) {
			if (!val) {
				setError(control, stdErrorMsg);
				return false;
			}
			clearError(control);
			return true;
		}

		if (control === email) {
			if (!val) {
				setError(control, stdErrorMsg);
				return false;
			}
			if (!emailPattern.test(val)) {
				setError(control, emailErrorMsg);
				return false;
			}
			clearError(control);
			return true;
		}
		const validateQuery = () => {
			const checked = generalQuery.checked || supportQuery.checked;
			if (!checked) {
				setError(supportQuery, queryErrorMsg); // attach error near last radio
				return false;
			}
			clearError(supportQuery);
			return true;
		};

		if (control === consent) {
			if (!consent.checked) {
				setError(control, consentErrorMsg);
				return false;
			}
			clearError(control);
			return true;
		}

		return true;
	};

	// wire up instant validation to clear errors as user types/changes
	[firstName, lastName, email, queryType, message].forEach((ctrl) => {
		if (!ctrl) return;
		ctrl.addEventListener('input', () => validateField(ctrl));
		ctrl.addEventListener('blur', () => validateField(ctrl));
	});
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
				if (firstInvalid) firstInvalid.focus && firstInvalid.focus();
				return;
			}

			// form is valid -> proceed (either submit or show success)
			// use form.submit() to perform normal submit, or handle via AJAX here
			const returnBtn = document.getElementById('btn-return');

			returnBtn.addEventListener('click', () => {
				successContainer.classList.add('hidden');
				form.classList.remove('hidden');
			});
		});
	}
});
