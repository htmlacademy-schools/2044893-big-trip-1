import SmartView from './smart-view.js';
import { destinations } from '../utils/destinations.js';
import { offersList } from '../utils/offers.js';
import { createOffersSegmentMarkup, createWaypointTypesMarkup } from '../utils/utils.js';
import flatpickr from 'flatpickr';
import he from 'he';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';


const createAddNewPointTemplate = (point) => {
  const {cost: cost, destination, type} = point;
  const pointTypeLabel = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
  const pointTypesMarkup = createWaypointTypesMarkup(offersList(), type);
  const destinationOptions = destinations().map((x) => (`<option value="${x.name}"></option>`)).join('');

  const createImages= (dest) => {
    if (dest.pictures.length > 0) {
      return dest.pictures
        .map((x) => (`<img class="event__photo" src="${x.src}" alt="${x.description}">`))
        .join('');
    }
    return '';
  };

  const imagesMarkup = createImages(destination);
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
                        ${ pointTypesMarkup }
                        </fieldset>
                      </div>
                    </div>
  
                    <div class="event__field-group  event__field-group--destination">
                      <label class="event__label  event__type-output" for="event-destination-1">
                        ${ pointTypeLabel }
                      </label>
                      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
                      <datalist id="destination-list-1">
                        ${ destinationOptions }
                      </datalist>
                    </div>
  
                    <div class="event__field-group  event__field-group--time">
                      <label class="visually-hidden" for="event-start-time-1">From</label>
                      <input class="event__input  event__input--time event__input-start-time" id="event-start-time-1" type="text" name="event-start-time" value="${ templateDatetime }">
                      &mdash;
                      <label class="visually-hidden" for="event-end-time-1">To</label>
                      <input class="event__input  event__input--time event__input-end-time" id="event-end-time-1" type="text" name="event-end-time" ${ templateDatetime}">
                    </div>
  
                    <div class="event__field-group  event__field-group--price">
                      <label class="event__label" for="event-price-1">
                        <span class="visually-hidden">Price</span>
                        &euro;
                      </label>
                      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(price ? price.toString() : '')}">
                    </div>
  
                    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                    <button class="event__reset-btn" type="reset">Cancel</button>
                  </header>
                  <section class="event__details">${ editedOffersMarkup } 
                    <section class="event__section  event__section--offers">
                    <section class="event__section  event__section--destination">
                      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                      <p class="event__destination-description">${destination.description ? destination.description : ''}</p>
  
                      <div class="event__photos-container">
                        <div class="event__photos-tape">
                          ${ imagesMarkup}
                        </div>
                      </div>
                    </section>
                  </section>
                </form>
              </li>`;
  };

export default class SiteAddNewPoint extends SmartView {
  #datepickerFrom = null;
  #datepickerTo = null;

  constructor(point) {
    super();
    this._data = PointAddView.createEmptyPoint(point);

    this.#setInnerHandlers();
    this.#setDatepicker();
  }

  get template() {
    return createAddNewPointTemplate(this._data);
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

  reset = (point) => {
    this.updateData(
      SiteAddNewPoint.parsePointToData(point),
    );
  }

  #setDatepicker = () => {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('.event__input-start-time'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i' ,
        defaultDate: this._data.dateFrom,
        onChange: this.#dateFromChange
      },
    );
    this.#datepickerTo = flatpickr(
      this.element.querySelector('.event__input-end-time'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._data.dateTo,
        onChange: this.#dateToChange
      },
    );
  }

  #dateFromChange = ([userDate]) => {
    this.updateData({
      dateFrom: userDate.toISOString(),
    });
  }

  #dateToChange = ([userDate]) => {
    this.updateData({
      dateTo: userDate.toISOString(),
    });
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#setDatepicker();
    this.setFormSubmit(this._callback.formSubmit);
    this.setDeleteClick(this._callback.deleteClick);
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
      basePrice: evt.target.value
    }, true);
  }

  setFormSubmit = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmit);
  }

  #formSubmit = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(PointAddView.parseDataToPoint(this._data));
  }

  setDeleteClick = (callback) => {
    this._callback.deleteClick = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClick);
  }

  #formDeleteClick = (evt) => {
    evt.preventDefault();
    this._callback.deleteClick(PointAddView.parseDataToPoint(this._data));
  }

  static createEmptyPoint = () => {
    const offerArray = offersList();
    const date = new Date();
    return {
      basePrice: null,
      dateFrom: date.toISOString(),
      dateTo: date.toISOString(),
      destination: {
        'description': null,
        'name': '',
        'pictures': []
      },
      id: null,
      isFavorite: false,
      offers: offerArray,
      type: 'taxi'
    };
  }

  static parsePointToData = (point) => ({...point,
  });

  static parseDataToPoint = (data) => {
    const point = {...data};

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


