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

export const dateEquality = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB);

export const MenuItem = {
  TABLE: 'TABLE',
  STATS: 'STATS'
};

export const SortType = {
  SORT_DAY: 'sort-day',
  SORT_TIME: 'sort-time',
  SORT_PRICE: 'sort-price'
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT'
};

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

export const filter = {
  [FilterType.EVERYTHING]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => new Date(point.dateFrom) > new Date()),
  [FilterType.PAST]: (points) => points.filter((point) => new Date(point.dateTo) < new Date()),
};

export const sortPointByDay = (pointOne, pointTwo) => dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom));

export const sortPointByDuration = (pointOne, pointTwo) => {
  const pointOneDuration = dayjs(pointOne.dateTo).diff(dayjs(pointOne.dateFrom));
  const pointTwoDuration = dayjs(pointTwo.dateTo).diff(dayjs(pointTwo.dateFrom));

  return (pointTwoDuration - pointOneDuration !== 0) ? pointTwoDuration - pointOneDuration : dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom));
  
};

export const sortPointByPrice = (pointOne, pointTwo) => {
    return (pointTwo.cost - pointOne.cost !== 0) ? pointTwo.cost- pointOne.cost: dayjs(pointOne.dateFrom).diff(dayjs(pointTwo.dateFrom)); 
}; 
 
export const createWaypointTypesMarkup = (offers, chosenPointType) => {

  const createTypeMarkup = (offer) => {
    const isChecked = offer.type === chosenPointType ? 'checked=""' : '';
    const label = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);

    return `<div class="event__type-item">
                          <input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden"
                          type="radio" name="event-type" value="${offer.type}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${offer.type}"
                          for="event-type-${offer.type}-1">${label}</label>
                        </div>`;
  };

  return offers.map(createTypeMarkup).join('');
};


export default class AbstractObservable {
  #observers = new Set();

  addObserver(observer) {
    this.#observers.add(observer);
  }

  removeObserver(observer) {
    this.#observers.delete(observer);
  }

  _notify(event, payload) {
    this.#observers.forEach((observer) => observer(event, payload));
  }
}


