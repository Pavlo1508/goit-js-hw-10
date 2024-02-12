// ===========Librarys==============

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ===========Variables===============

const form = document.querySelector('.form');

// ==========Create Form===============

function formTemplate() {
	return `
  <label>
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>`
}

form.innerHTML = formTemplate();

// ==========Create promis===========

