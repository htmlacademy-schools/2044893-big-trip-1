import { createElement } from '../render.js';

const createFirstPointTemplate = () => {
    `<p class="trip-events__msg">
    Click New Event to create your first point
    </p>`
}

export default class SiteAddFirstPoint {
  #element = null;
  
  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
      }
  
      return this.#element;
    }
  
    get template() {
      return createFirstPointTemplate();
    }
  
    removeElement() {
      this.#element = null;
    }
}