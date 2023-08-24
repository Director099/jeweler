export class TabFilter {
  constructor(elem) {
    this._ALL = 'all';
    this._elTabs = document.querySelector(elem);
    if (this._elTabs) {
      this._elButtons = this._elTabs.querySelectorAll('[data-btn-filter]');
      this._elPanes = this._elTabs.querySelectorAll('[data-filter]');
      this._init();
    }
  }

  tabFilterPanel(elem) {
    const currentTab = elem.target.dataset.btnFilter;
    this._elPanes.forEach((e) => e.setAttribute('hidden', ''));
    if (currentTab === this._ALL) {
      this._elPanes.forEach((e) => e.removeAttribute("hidden"))
    } else {
      this._elTabs.querySelectorAll(`[data-filter=${currentTab}]`).forEach(e => e.removeAttribute('hidden'));
    }
  };

  tabBtnElemActive(currentElem) {
    this._elButtons.forEach((e) => e.classList.remove('active'));
    currentElem.target.classList.add('active');
  };

  _events() {
    this._elButtons.forEach((e) => {
      e.addEventListener('click', (currentElem) => {
        this.tabBtnElemActive(currentElem);
        this.tabFilterPanel(currentElem);
      })
    });
  };

  _init() {
    this._events();
  };
}

new TabFilter('[data-tab-filter]');
