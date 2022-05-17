import AbstractView from '../view/site-abstract-class-view.js';
const createEventsListTemplate = () => (
  `<ul class="trip-events__list">
      </ul>`
);

export default class EventsListTemplate extends AbstractView {
  get template() {
    return createEventsListTemplate();
  }
}
