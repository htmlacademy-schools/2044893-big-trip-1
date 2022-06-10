import AbstractView from '../view/site-abstract-class-view.js';
import {MenuItem} from '../utils/utils.js'
const createSiteMenuTemplate = () => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  href=" #data-menu-item="${MenuItem.TABLE}">Table</a>
    <a class="trip-tabs__btn" href="#" data-menu-item="${MenuItem.STATS}">Stats</a>
    </nav>`
);

export default class SiteMenuTemplate extends AbstractView {
  get template()
  {
    return createSiteMenuTemplate();
  }
  setMenuClick = (callback) => {
    this._callback.menuClick = callback;
    this.element.addEventListener('click', this.#menuClick);
  }

  setMenuItem = (menuItem) => {
    const item = this.element.querySelector(`[ data-menu-item=${menuItem}]`);

    if (item !== null) {
      item.classList.add('trip-tabs__btn--active');
    } else {
      item.classList.remove('trip-tabs__btn--active');
    }
  }

  #menuClick = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this._callback.menuClick(evt.target.dataset.menuItem);
  }
}
