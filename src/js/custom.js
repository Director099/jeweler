'use strict';

import "../blocks/components/accordion/accordion.js";
import "../blocks/components/navigation-changer/move-to.js";
import "../blocks/components/navigation-changer/navigation-changer.js";
import '../blocks/components/section-content/section-content.js';
import '../blocks/project/main-slider/main-slider.js';
import '../blocks/project/blog-place/blog-place.js';

const telMask = document.querySelectorAll('[type="tel"]');

telMask.forEach((item) => {
  const phoneMask = IMask(item, {
    mask: '{+7} (000) 000 00 00',
    lazy: false,
  });
})

const dataAge = document.querySelectorAll('[data-age]');

dataAge.forEach((item) => {
  IMask(item, {
    mask: '00'
  });
})

const form = document.querySelectorAll("[data-form]");

form && form.forEach((itemForm) => {
  const pristine = new Pristine(itemForm, {
    classTo: 'field-text',
    errorTextParent: 'field-text',
  });

  const submitForm = (e) =>  {
    const _disabled = 'disabled';
    const valid = pristine.validate();
    const btnSubmit = pristine.form.querySelector("[data-form-btn]");
    valid ? btnSubmit.removeAttribute(_disabled) : btnSubmit.setAttribute(_disabled, _disabled);
    return valid ? true : e.preventDefault();
  }

  ["submit", "input"].forEach(item => itemForm.addEventListener(item, e => submitForm(e)))
})
