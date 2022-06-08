import { destinations } from '../utils/destinations.js';
import { offersList } from '../utils/offers.js';
import SmartView from './smart-view.js';
import {createWaypointTypesMarkup, createOffersSegmentMarkup} from '../utils/utils.js';
import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import he from 'he';

const createEditNewPointTemplate = (point) => {
  const {cost: cost, destination, type} = point;

  const waypointTypeLabel = type.charAt(0).toUpperCase() + type.slice(1);

  const waypointTypesMarkup = createWaypointTypesMarkup(offersList(), type);
  const destinationOptions = destinations().map((x) => (`<option value="${x.name}"></option>`)).join('');

  const photosMarkup = destination.pictures.map((x) => (`<img class="event__photo" src="${x.src}" alt="${x.description}">`)).join('');

  const editedOffersMarkup = createOffersSegmentMarkup(offersList(), type);


  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${waypointTypesMarkup}
                      </fieldset>
                    </div>
                  </div>
                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${waypointTypeLabel}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${he.encode(destination.name)}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${destinationOptions}
                    </datalist>
                  </div>
                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time event__input-start-time" id="event-start-time-1" type="text" name="event-start-time" value="">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time event__input-end-time" id="event-end-time-1" type="text" name="event-end-time" value="">
                  </div>
                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(cost.toString())}">
                  </div>
                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${editedOffersMarkup}
                  <section class="event__section  event__section--destination">
                    ${destination.description ? '<h3 class="event__section-title  event__section-title--destination">Destination</h3>': ''}
                    <p class="event__destination-description">${destination.description ? destination.description : ''}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${photosMarkup}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
};

export default class SiteEditNewPoint extends SmartView {
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor(point) {
    super();
    this._data = SiteEditNewPoint.parsePointToData(point);

    this.#setInnerHandlers();
    this.#setDatepicker();
  }

  get template() {
    return createEditNewPointTemplate(this._data);
  }

  reset = (point) => {
    this.updateData(
      SiteEditNewPoint.parsePointToData(point),
    );
  }

  restoreHandlers = () => {
    this.#setDatepicker();
    this.#setInnerHandlers();
    this.setRollupClickHandler(this._callback.rollupClick);
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setDeleteClickHandler(this._callback.deleteClick);
  }

  setDeleteClickHandler = (callback) => {
    this._callback.deleteClick = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClick);
  }

  setRollupClickHandler = (callback) => {
    this._callback.rollupClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#rollupClick);
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmit);
  }

  #setDatepicker = () => {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('.event__input-start-time'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i' ,
        defaultDate: this._data.dateFrom,
        onChange: this.#dateFromChangeHandler
      },
    );
    this.#datepickerTo = flatpickr(
      this.element.querySelector('.event__input-end-time'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._data.dateTo,
        onChange: this.#dateToChangeHandler
      },
    );
  }

  #dateFromChangeHandler = ([userDate]) => {
    this.updateData({
      dateFrom: userDate.toISOString(),
    });
  }

  #dateToChangeHandler = ([userDate]) => {
    this.updateData({
      dateTo: userDate.toISOString(),
    });
  }


  removeElement = () => {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }
    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }


  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeGroupClick);
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChange);
    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#costChange);
  }

  #typeGroupClick = (evt) => {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value
    }, false);
  }

  #destinationChange = (evt) => {
    evt.preventDefault();
    this.updateData({
      destination: this.#getChangedDestination(evt.target.value)
    }, false);
  }

  #costChange = (evt) => {
    evt.preventDefault();
    this.updateData({
      cost: parseInt(evt.target.value, 10)
    }, true);
  }


  #rollupClick = (evt) => {
    evt.preventDefault();
    this._callback.rollupClick();
  }


  #formSubmit = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(SiteEditNewPoint.parseDataToPoint(this._data));
  }



  #formDeleteClick = (evt) => {
    evt.preventDefault();
    this._callback.deleteClick(SiteEditNewPoint.parseDataToPoint(this._data));
  }

  static parsePointToData = (point) => ({...point,
    // В будущем здесь появится обработка Предложений (Offers).
  });

  static parseDataToPoint = (data) => {
    const point = {...data};
    // В будущем здесь появится обработка Предложений (Offers).

    return point;
  }

  #getChangedDestination = (destinationName) => {
    const allDestinations = destinations();

    for (let i = 0; i < allDestinations.length; i++) {
      if (allDestinations[i].name === destinationName) {
        return allDestinations[i];
      }
    }

    return {
      'description': null,
      'name': '',
      'pictures': []
    };
  };
}