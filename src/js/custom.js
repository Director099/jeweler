'use strict';

import "../blocks/components/accordion/accordion.js";
import "../blocks/components/dropdown/dropdown.js";
import "../blocks/components/range/range.js";
import "../blocks/components/tab-filter/tab-filter.js";
import "../blocks/components/navigation-changer/move-to.js";
import "../blocks/components/field-select/field-select.js";
import "../blocks/components/navigation-changer/navigation-changer.js";
import '../blocks/components/section-content/section-content.js';
import '../blocks/project/main-slider/main-slider.js';
import '../blocks/project/blog-place/blog-place.js';

const telMask = document.querySelectorAll('[type="tel"]');

telMask.forEach((item) => {
  IMask(item, {
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

form.forEach((itemForm) => {
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

const clipboard = document.querySelectorAll('[data-copy-code]');
clipboard?.forEach(item =>
  item?.addEventListener('click', () => {
    const inputCopy = item.querySelector('input');
    console.log(inputCopy, 'inputCopy')
    inputCopy.select();
    document.execCommand("copy");
    inputCopy.value;
  })
)

//TODO: Если время будет
// const dataFormFilter = document.querySelector('[data-form-filter]');
// const dataResetFormFilter = document.querySelector('[data-reset-form]');
// const dataFormInput = dataFormFilter.querySelectorAll('input');
// const dataFormContainer = document.querySelector('[data-container]');
// const dataFormTpl = ({text, inputId}) => {
//   return `
//     <button class="tag-filter" type="button" data-label="${inputId}">
//       ${text}
//       <svg width="24" height="24">
//         <use href="img/symbols.svg#icon-close"></use>
//       </svg>
//     </button>
//   `
// }
//
// dataResetFormFilter.addEventListener('click', () => dataFormFilter.reset());
//
// dataFormInput.forEach((item) => {
//   item.addEventListener('change', (e) => {
//     const elemInput = e.target;
//     const textCheckbox = elemInput.closest('label').textContent;
//
//
//     if(elemInput.checked) {
//       dataFormContainer.insertAdjacentHTML(
//       "afterbegin",
//         dataFormTpl({
//           text: textCheckbox,
//           inputId: 'asd'
//         })
//       )
//     }
//   })
// })
