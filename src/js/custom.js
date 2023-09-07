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
import '../blocks/project/product-gallery/product-gallery.js';
import '../blocks/project/blog-place/blog-place.js';

Fancybox.bind("[data-fancybox]", {
  dragToClose: false
});

const anchors = document.querySelectorAll('[data-smooth-scroll]')
anchors?.forEach((item) =>
  item.addEventListener('click',  (e) => {
    e.preventDefault()

    const blockID = item.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
)

const telMask = document.querySelectorAll('[type="tel"]');

telMask.forEach((item) => {
  IMask(item, {
    mask: '{+7} (000) 000 00 00',
    lazy: false,
  });
})


const numberOnly = document.querySelectorAll('[data-number-only]');
numberOnly.forEach((item) => {
  IMask(item, {
    mask: item.dataset.numberOnly ?? '00'
  });
})

class ResultSizeRings {
  constructor({input, text}) {
    this._inputSize = document.querySelector(input);
    this._sizeAlert = document.querySelector(text);
    this._MATH_NUMBER_RIGNG = 3.14;
    this._rangeSize = {
      MIN: 30,
      MAX: 80
    }
    this._classesAlert = {
      info: 'alert--info',
      danger: 'alert--danger-light'
    }

    this._init();
  }

  resetMessages() {
    this._sizeAlert.classList.remove(this._classesAlert.info);
    this._sizeAlert.classList.remove(this._classesAlert.danger);
  }

  hideMessages() {
    this._sizeAlert.classList.add('d-none');
  }

  showMessages() {
    this._sizeAlert.classList.remove('d-none');
  }

  successSize() {
    this.showMessages();
    this._sizeAlert.classList.add(this._classesAlert.info);
  }

  errorSize() {
    this.showMessages();
    this._sizeAlert.classList.add(this._classesAlert.danger);
  }

  _events() {
    this._inputSize.addEventListener('input', (e) => {
      const value = Number(e.target.value);
      const formulaRings = value / this._MATH_NUMBER_RIGNG;
      const fractionalNumber = !!Math.round(formulaRings % 1) ? 0 : 5;
      this.resetMessages();

      if (!value) {
        this.hideMessages();
      } else if (value > this._rangeSize.MIN && value < this._rangeSize.MAX) {
        this.successSize();
        this._sizeAlert.textContent = !!fractionalNumber ?  Math.round(formulaRings) +`.${fractionalNumber}` : Math.round(formulaRings);
      } else {
        this.errorSize();
        this._sizeAlert.textContent = ''
      }
    })
  }

  _init() {
    this._events()
  }
}

new ResultSizeRings({
  input: '[data-size-input]',
  text: '[data-size-alert]'
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
