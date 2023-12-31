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

const btnEye = document.querySelectorAll('[data-btn-eye]');
btnEye?.forEach(item =>
  item?.addEventListener('click', () => {
    const field = item.parentElement.querySelector('input');
    item.classList.toggle('field-text__btn-password--open');
    item.classList.contains('field-text__btn-password--open') ? field.type = 'text' : field.type = 'password';
  })
)

const toggleSearch = document.querySelectorAll('[data-toggle-search]');
toggleSearch?.forEach(item =>
  item?.addEventListener('click', () => {
    const parent = item.closest('.mobile-search');
    parent.querySelector('form').classList.toggle('d-none')
  })
)

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

// Вспомогательная функция открытия и закрытия
const btnLink = document.querySelectorAll('[data-fancybox-src]');
btnLink?.forEach(item =>
  item.addEventListener('click', (e) => {
    Fancybox.close();
    Fancybox.show([{
      src: e.target.dataset.fancyboxSrc,
      dragToClose: false,
      defaultType: 'inline'
    }]);
  })
)

const autoCompleteJS = new autoComplete({
  selector: "[data-autocomplite]",
  data: {
    src: [
      "Все украшения",
      "Обручальные кольца",
      "Колье",
      "Пирсинг",
      "Булавка","Брошь",
      "Крестик",
      "Запонки",
      "Зажимы",
      "Столовое серебро",
      "Подарочная упаковка",
      "Чистящее средство",
    ],
    cache: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      }
    }
  }
})


//TODO передалать если будет время и вынести в компанент shops
const shopLink = document.querySelectorAll('[data-shop-link]');
const shopCurrentClose = document.querySelectorAll('[data-close-shop-current]');
const toggleShop = (item) => {
  const parentShop = item.closest('[data-shop]');
  const currentShop = parentShop?.querySelector("[data-shop-current]");

  if (window.matchMedia("(max-width: 1079px)").matches) {
    Fancybox.show([{
      src: item.dataset.shopLink,
      dragToClose: false,
      defaultType: 'inline'
    }]);
  } else {
    currentShop.classList.toggle('active');
  }
}

shopLink?.forEach(item =>
  item.addEventListener('click', () => toggleShop(item))
)

shopCurrentClose?.forEach(item =>
  item.addEventListener('click', () => toggleShop(item))
)

//TODO передалать если будет время и вынести в компанент shops
const contentToggleDelivery = document.querySelector('[data-toggle-delivery]');
contentToggleDelivery.addEventListener('click', () => {
  const elemToggleDelivery = document.querySelector(`[data-delivery='${contentToggleDelivery.dataset.toggleDelivery}']`);
  contentToggleDelivery.classList.toggle('active');
  contentToggleDelivery.classList.contains("active") ?
    elemToggleDelivery.setAttribute("hidden", "") :
    elemToggleDelivery.removeAttribute("hidden");
})

const btnShowDelivery = document.querySelectorAll("[data-show-delivery]");
const parentBlocks = document.querySelectorAll('[data-delivery]');
btnShowDelivery.forEach(item => {
  item.addEventListener('click', () => {
    btnShowDelivery.forEach(btn => btn.classList.remove('active'));
    item.classList.add('active');
    const current = item.dataset.showDelivery;

    parentBlocks.forEach(elem => {
      const elemClass = elem.classList;
      elemClass.remove('d-none');
      current === elem.dataset.delivery ? elemClass.remove('d-none') : elemClass.add('d-none');
    })
  })
})
