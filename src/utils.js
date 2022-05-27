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

export const generateBeginEndDates = () => {
  const maxGap = 10;
  const startDate = dayjs()
    .add(getRandomInteger(-maxGap, maxGap), 'day')
    .add(getRandomInteger(-maxGap, maxGap), 'hour')
    .add(getRandomInteger(-maxGap, maxGap), 'minute');
  const endDate = startDate
    .clone()
    .add(getRandomInteger(0, 14), 'day')
    .add(getRandomInteger(0, 59), 'hour')
    .add(getRandomInteger(0, 59), 'minute');

  return {
    start: startDate.toDate(),
    end: endDate.toDate()
  };
};

export const dateRend = (date, format) => dayjs(date).format(format);


export const cities = ['Chelyabinsk', 'Ekaterinburg', 'Detroit', 'New-York', 'Norilsk', 'London','Washington','Kansas'];
export const waypointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'restaurant','sightseeing'];

export const descriptions = [
  'Fusce tristique felis at fermentum pharetra.',
  'In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

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

export const sortPointByDay = (pointOne, pointTwo) => dayjs(pointOne.startDate).diff(dayjs(pointTwo.startDate));

export const sortPointByDuration = (pointOne, pointTwo) => {
  const pointOneDuration = dayjs(pointOne.endDate).diff(dayjs(pointOne.startDate));
  const pointTwoDuration = dayjs(pointTwo.endDate).diff(dayjs(pointTwo.startDate));

  return (pointTwoDuration - pointOneDuration !== 0) ? pointTwoDuration - pointOneDuration : dayjs(pointOne.startDate).diff(dayjs(pointTwo.startDate));
  
};

export const sortPointByPrice = (pointOne, pointTwo) => {
    return (pointTwo.price - pointOne.price !== 0) ? pointTwo.price - pointOne.price: dayjs(pointOne.startDate).diff(dayjs(pointTwo.startDate)); 

};

