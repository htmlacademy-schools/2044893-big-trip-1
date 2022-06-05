import AbstractView from '../view/site-abstract-class-view.js';
import {FilterType}from '../utils/utils.js'

const addFirstPointTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.FUTURE]: 'There are no future events now'
};


const createFirstPointTemplate = (filterType) => {
  const firstPointTextValue = addFirstPointTextType[filterType];

  return (
    `<p class="trip-events__msg">
      ${firstPointTextValue}
    </p>`);
};

export default class SiteAddFirstPoint extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }
  get template() {
    return createFirstPointTemplate(this._data);
  }
}

