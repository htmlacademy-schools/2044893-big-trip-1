import AbstractView from '../view/site-abstract-class-view.js';

const createFilterTemplate = (type, currentFilterType) => (
  `<div class="trip-filters__filter">
  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === currentFilterType ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
</div>`
);

const createFiltersTemplate = (filterItems, currentFilterType) => {
  const filterTemplate = filterItems
    .map((filter) => createFilterTemplate(filter, currentFilterType))
    .join('');
  return `<form class="trip-filters" action="#" method="get">
        ${createFiltersTemplate}
        </form>`;
};
export default class TripFiltersTemplate extends AbstractView {
  #filters = null;
  #currentFilter = null;
  constructor(filters, currentFilterType) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
  }
  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  FilterTypeChangeHandler = (callback) => {
    this._callback.filterTypeChange = callback;
    this.element.addEventListener('change', this.#filterTypeChange);
  }

  #filterTypeChange = (evt) => {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }
}
