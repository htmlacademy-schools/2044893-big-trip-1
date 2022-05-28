import { cities } from '../utils.js';
import { waypointTypes } from '../utils.js';
import { dateRend } from '../utils.js';
import AbstractView from '../view/site-abstract-class-view.js';

const createEditNewPointTemplate = (point) => {
  const  { waypointType, startDate, endDate, cost, offers, description } = point;
  const startDateRend  = dateRend(startDate, 'D MMMM YYYY');
  const endDateRend  = dateRend(endDate, 'D MMMM YYYY');

  const createListEventTypeItem = (types = waypointTypes(), type) => {
    const createType = (currentType) => {
      const isChecked = currentType === type ? 'checked=""' : '';
      const label = currentType.charAt(0).toUpperCase() + currentType.slice(1);
      return `<div class="event__type-item">
                          <input id="event-type-${ currentType }-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${ currentType }" ${ isChecked }>
                          <label class="event__type-label  event__type-label--${ currentType }" for="event-type-${ currentType }-1">${ label }</label>
                        </div>`;
    };
    return types.map(createType).join('');
  };

  const createOptionsLocations = (city) => (`<option value="${city}"></option>`);

  const createOffer = (offer) => {
    const isChecked = offer.isChosen ? ' checked=""' : '';
    const name = offer.name;
    const price = offer.price;
    const type = offer.type;
    return `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${ type }-1" type="checkbox" name="event-offer-${ type }"${ isChecked }>
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${ name }</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${ price }</span>
                        </label>
                      </div>
    `;
  };

  const createOfferList = (editedOffers) => {
    if (editedOffers.length !== 0){
      return `<section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>${ editedOffers }
              </section>`;
    }
    return '';
  };

  const listEventTypeItem = createListEventTypeItem(waypointTypes(), waypointType);
  const fieldLabel = waypointType.charAt(0).toUpperCase() + waypointType.slice(1);
  const optionsLocations = cities().map(createOptionsLocations).join('');
  const editOffers = offers.map(createOffer).join('');
  const addableOffersList = createOfferList(editOffers);

  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${ waypointType }}" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
    
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${ listEventTypeItem }
              </fieldset>
            </div>
          </div>
    
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${ fieldLabel }
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
            <datalist id="destination-list-1">
              ${ optionsLocations }
            </datalist>
          </div>
    
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${ startDateRend }">
              &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${ endDateRend }">
          </div>
    
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${ cost }">
          </div>
    
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">${ addableOffersList }
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    
              </div>
            </div>
         </section>
    
         <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${ description }</p>
        </section>
      </section>
    </form>
  </li> `;
};

export default class SiteEditNewPoint extends AbstractView{
  #point = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createEditNewPointTemplate(this.#point);
  }

  formSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmit);
    this._callback.formSubmit(this.#point);
  }; 
  eventRollUpBtnHandler = (callback) => {
    this._callback.rollupClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#RollUpBtnClick);
  };


  #formSubmit = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit();
  };


  #RollUpBtnClick = (evt) => {
    evt.preventDefault();
    this._callback.rollupClick();
  };
}
