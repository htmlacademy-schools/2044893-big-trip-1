import dayjs from 'dayjs';

export const createWaypoint = (waypoints) => {
  const {OfferType, city, price, offers, isFavorite, dueDate} = waypoints;
  const offerName = offers.offerName;
  const offerPrice = offers.price;

  const date = dayjs(dueDate).format('D MMM');

  const activeFavorite = isFavorite ? '--active' : '';

  return `<div class="event">
  <time class="event__date" datetime="2019-03-19">${date}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${OfferType}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${OfferType} ${city}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-19T11:20">14:20</time>
      &mdash;
      <time class="event__end-time" datetime="2019-03-19T13:00">13:00</time>
    </p>
    <p class="event__duration">01H 20M</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    <li class="event__offer">
      <span class="event__offer-title">${offerName}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offerPrice}</span>
    </li>
    <li class="event__offer">
      <span class="event__offer-title">Lunch in city</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">30</span>
    </li>
  </ul>
  <button class="event__favorite-btn${activeFavorite}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>`;
};