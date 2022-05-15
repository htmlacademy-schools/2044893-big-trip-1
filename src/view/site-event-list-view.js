import { createElement } from '../render';
const createEventsListTemplate = () => (
  `<ul class="trip-events__list">
      </ul>`
);

export default class EventsListTemplate {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createEventsListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
