export class TabFilter {
  constructor(elem) {
    this._ALL = 'all';
    this._elTabs = document.querySelector(elem);

    if (!window.matchMedia(this._elTabs?.dataset?.destroy).matches) {
      if (this._elTabs) {
        this._elButtons = this._elTabs.querySelectorAll('[data-btn-filter]');
        this._elPanes = this._elTabs.querySelectorAll('[data-filter]');
        this._init();
      }
    }
  }

  defaultActivePanelFilter() {
    this._elButtons.forEach((e) => {
      if (!e.classList.contains('active')) {
        const currentTab = e.dataset.btnFilter;
        this._elTabs.querySelectorAll(`[data-filter=${currentTab}]`).forEach(e => e.setAttribute('hidden', ''));
      }
    })
  };

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
    const dataBtnValue = currentElem.target.dataset.btnFilter;
    this._elButtons.forEach((e) => e.classList.remove('active'));
    this._elTabs.querySelectorAll(`[data-btn-filter=${dataBtnValue}]`).forEach(e => e.classList.add('active'));
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
    this.defaultActivePanelFilter();
  };
}

new TabFilter('[data-tab-filter]');
