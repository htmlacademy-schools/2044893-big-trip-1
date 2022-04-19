import dayjs from 'dayjs';
import { Cities, Offers } from '../utils.js';
import { OfferTypes } from '../utils.js';
import { getRandomInteger } from '../utils.js';
import { TextSentences} from '../utils.js';

export const generateDates = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(0, maxDaysGap);

  return dayjs().add(daysGap, 'day').toDate();
};

const getRandomOfferType = () => {
  const randomIndex = getRandomInteger(0, OfferTypes.length - 1);

  return OfferTypes[randomIndex];
};

const getRandomCity = () => {
  const randomIndex = getRandomInteger(0, Cities.length - 1);

  return Cities[randomIndex];
};

const getOffer = () => {
  const randomIndex = getRandomInteger(0, Offers.length - 1);

  return Offers[randomIndex];
};

const generateDescription = () => {
    const randomIndex = getRandomInteger(0, TextSentences.length - 1);
  
    let decription = '';
  
    for (let i = 0; i < getRandomInteger(1, 5); i++) {
      decription += TextSentences[randomIndex];
    }
  
    return decription;
};

const generatePicture = () => {
    const picture = [];
  
    for (let i = 0; i < 4; i++) {
      picture.push(`http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`);
    }
  
    return picture;
  };

const getRandomPrice = () => getRandomInteger(5, 600);

export const generateWaypoint = () => {
  const dueDate = generateDates();

  return {
    dueDate,
    OfferType: getRandomOfferType(),
    city: getRandomCity(),
    offers: getOffer(),
    description: generateDescription(),
    picture: generatePicture(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomPrice(),
  };
};
