import dayjs from 'dayjs';
import { generateFromToDates } from '../utils/utils.js';
import { getRandomInteger } from '../utils/utils.js';
import { nanoid } from 'nanoid';

/*const generateDestination = () => {
  const dest = cities;
  const randomIndex = getRandomInteger(0, dest.length - 1);
  return dest[randomIndex];
};*/

const getDuration = () => ' ';

/*export const generateDescription = () => {
  const description = descriptions;
  const randomIndex = getRandomInteger(0, description.length - 1);
  return description[randomIndex];
};*/

const generateCost = () => getRandomInteger(1, 100) * 10;

/*const generateOffers = () => {
  const offers = [
    {
      type: 'Taxi',
      name: 'Order Taxi',
      price: 40,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'Flight',
      name: 'buy a ticket',
      price: 500,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'Flight',
      name: 'Switch to comfort',
      price: 100,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'Bus',
      name: 'buy a ticket',
      price: 12,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'Hotel',
      name: 'book a room for a day',
      price: 100,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'train',
      name: 'choose a reserved seat wagon',
      price: 100,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
    {
      type: 'restaurant',
      name: 'order coffee',
      price: 10,
      isChosen: Boolean(getRandomInteger(0, 1))
    },
  ];
  let count = getRandomInteger(0, 5);
  let len = offers.length;
  const result = new Array(count);
  const taken = new Array(len);
  if (count > len)
  {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (count--) {
    const x = Math.floor(Math.random() * len);
    result[count] = offers[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
};*/


export const generatePoint = () => {
  const dates = generateFromToDates();
  const destinationArray = destinations();
  const offerArray = offersList();

  return {
    cost: generateCost(),
    dateFrom:dates.from,
    dateTo:dates.to,
    destinations: destinationArray[getRandomInteger(0,destinationArray.length-1)],   
    id: nanoid(),
    isFavorite:Boolean(getRandomInteger(0,1)),
    offersList: offerArray,
    type: offerArray[getRandomInteger(0,offerArray.length-1)].type
  };
};
