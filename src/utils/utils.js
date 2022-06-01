import dayjs from 'dayjs';

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateImages = () => {
  const arrayOfImages = [];

  for (let i = 0; i < 3; i++) {
    arrayOfImages[i] = `http://picsum.photos/248/152?${ getRandomInteger(0, 99).toString() }`;
  }

  return arrayOfImages;
};

export const generateFromToDates = () => {
  const maxGap = 10;
  const fromDate = dayjs()
    .add(getRandomInteger(-maxGap, maxGap), 'day')
    .add(getRandomInteger(-maxGap, maxGap), 'hour')
    .add(getRandomInteger(-maxGap, maxGap), 'minute');
  const toDate = fromDate
    .clone()
    .add(getRandomInteger(0, 14), 'day')
    .add(getRandomInteger(0, 59), 'hour')
    .add(getRandomInteger(0, 59), 'minute');

  return {
    from: fromDate.toISOString(),
    to: toDate.toISOString()
  };
};

//export const dateRend = (date, format) => dayjs(date).format(format);


//export const cities = ['Chelyabinsk', 'Ekaterinburg', 'Detroit', 'New-York', 'Norilsk', 'London','Washington','Kansas'];
//export const waypointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'restaurant','sightseeing'];

/*export const descriptions = [
  'Fusce tristique felis at fermentum pharetra.',
  'In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];*/

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
  
};

export const SortType = {
  SORT_DAY: 'sort-day',
  SORT_TIME: 'sort-time',
  SORT_PRICE: 'sort-price'
};

export const sortPointByDay = (pointOne, pointTwo) => dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom));

export const sortPointByDuration = (pointOne, pointTwo) => {
  const pointOneDuration = dayjs(pointOne.dateTo).diff(dayjs(pointOne.dateFrom));
  const pointTwoDuration = dayjs(pointTwo.dateTo).diff(dayjs(pointTwo.dateFrom));

  return (pointTwoDuration - pointOneDuration !== 0) ? pointTwoDuration - pointOneDuration : dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom));
  
};

export const sortPointByPrice = (pointOne, pointTwo) => {
    return (pointTwo.price - pointOne.price !== 0) ? pointTwo.price - pointOne.price: dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom)); 

}; 
 
export const createWaypointTypesMarkup = (offers, chosenPointType) => {
  const createTypeMarkup = (offer) => {

    const isChecked = offer.type === chosenPointType ? 'checked=""' : '';
    const label = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);

    return `<div class="event__type-item">
                          <input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-1">${label}</label>
                        </div>`;
  };

  return offers.map(createTypeMarkup).join('');
};

export const createOffersSegmentMarkup = (offersByTypes, pointType) => {
  const createOfferMarkup = (offer) => `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointType}-1" type="checkbox" name="event-offer-${pointType}">
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`;

  let offersByCurrentType = [];

  for (let i = 0; i < offersByTypes.length; i++) {
    if (offersByTypes[i].type === pointType) {
      offersByCurrentType = offersByTypes[i].offers;
    }
  }
  const offersMarkup = offersByCurrentType.map(createOfferMarkup).join('');

  if (offersByCurrentType.length !== 0){
    return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersMarkup}</section>`;
  }
  return '';
};

