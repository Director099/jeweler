const choiceSelect = document.querySelectorAll('[data-choices-select]');

//todo: на мобилке наверное стоит убить
choiceSelect.forEach((item) => {
  //TODO: В переменную
  // if (window.matchMedia("(min-width: 1080px)").matches) {
  //   new Choices(item, {
  //     searchChoices: false,
  //     searchEnabled: false,
  //     itemSelectText: '',
  //     renderSelectedChoices: '',
  //     placeholder: true,
  //     sorter: () => false,
  //   })
  // }
  new Choices(item, {
    searchChoices: false,
    searchEnabled: false,
    itemSelectText: '',
    renderSelectedChoices: '',
    placeholder: true,
    sorter: () => false,
  })
})
