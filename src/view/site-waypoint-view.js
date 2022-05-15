import { dateRend } from '../utils.js';
import { createElement } from '../render';

const createWaypointTemplate = (point) => {
  const {waypointType, destination, startDate, endDate, cost, duration, offers, favor} = point;
  const startDateayMonth = dateRend(startDate, 'MMM D');
  const startDateate = dateRend(startDate, 'YYYY-MM-D');
  const startDateatetime = dateRend(startDate, 'YYYY-MM-DDTHH:mm');
  const startTime = dateRend(startDate, 'HH:mm');
  const endDateatetime = dateRend(endDate, 'YYYY-MM-DDTHH:mm');
  const endTime = dateRend(endDate, 'HH:mm');

  const getDuration = (dur) => {
    const result = [];
    if (dur.days !== 0) {
      result[0] = `${String(dur.days).padStart(2,'0')}D`;
    }
    if (dur.hours !== 0) {
      result[1] = `${String(dur.hours).padStart(2,'0')}H`;
    }
    if (dur.minutes !== 0) {
      result[2] = `${String(dur.minutes).padStart(2,'0')}M`;
    }
    return result.join(' ');
  };

  const createListOffers = (offer) => {
    if (offer.isChosen) {
      const name = offer.name;
      const price = offer.price;
      return `<li class="event__offer">
                    <span class="event__offer-title">${ name }</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${ price }</span>
                  </li>`;
    }
  };

  const isFavorite = favor ? ' event__favorite-btn--active' : '';

  const listOffers = offers.map(createListOffers).join('');
  const durat = getDuration(duration);

  return `<li class="trip-events__item">
            <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${ startDateate }">${ startDateayMonth }</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${ waypointType }.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${ waypointType } ${ destination }</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${ startDateatetime}">${ startTime }</time>
                    &mdash;
                    <time class="event__end-time" datetime="${ endDateatetime }">${ endTime }</time>
                  </p>
                  <p class="event__duration">${ durat }</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${ cost }</span>
                </p>
                  <h4 class="visually-hidden">Offers:</h4>
                  <ul class="event__selected-offers">
                    ${ listOffers }
                  </ul>
                  <button class="event__favorite-btn event__favorite-btn--${ isFavorite }}" type="button">
                    <span class="visually-hidden">Add to favorite</span>
                    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                    </svg>
                  </button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>`;
};

export default class WaypointTemplate {
  #element = null;
  #point = null;

  constructor(point) {
    this.#point = point;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createWaypointTemplate(this.#point);
  }

  removeElement() {
    this.#element = null;
  }
}
