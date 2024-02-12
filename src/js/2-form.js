// ============Default===============
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
// ==========Default function for LS====================
function saveToLs(key, value) {
	const jsonData = JSON.stringify(value);
	localStorage.setItem(key, jsonData);
}

function loadFromLs(key) {
	const data = localStorage.getItem(key);
	try {
		const result = JSON.parse(data);
		return result;
	} catch {
		return data;
	}
}
// ============Create Form===========================
function formInputsTemplate() {
	return `<label>
			Email
			<input type="email" name="email" autofocus />
		</label>
		<label>
			Message
			<textarea name="message" rows="8"></textarea>
		</label>
		<button type="submit">Submit</button>`;
};

	form.innerHTML = formInputsTemplate();
// ============Add Listners=========================
form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
// ============Save Data in LS=============================
function onFormInput() {
	form.elements.email.type = 'text';
	const email = form.elements.email.value.trim();
	const message = form.elements.message.value.trim();
	const data = {
		email: email,
		message: message,
	};

	saveToLs(localStorageKey, data);
}
// ============Settings Form================
function onFormSubmit(e) {
	e.preventDefault();
	const data = loadFromLs(localStorageKey);
	if (data && data.email && data.message) {
		console.log(data);
		localStorage.removeItem(localStorageKey);
		form.reset();
	}
}
// =========Fill Form====================
function fillForm() {
	const data = loadFromLs(localStorageKey);
	if (data) {
		form.elements.email.value = data.email || '';
		form.elements.message.value = data.message || '';
	}
		
}

fillForm();