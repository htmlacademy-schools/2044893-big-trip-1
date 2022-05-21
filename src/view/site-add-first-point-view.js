import AbstractView from '../view/site-abstract-class-view.js';

const createFirstPointTemplate = () => (
  `<p class="trip-events__msg">
  Click New Event to create your first point
  </p>`
);
export default class SiteAddFirstPoint extends AbstractView {
  get template() {
    return createFirstPointTemplate();
  }
}

