export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const Cities = ['Chelyabinsk', 'Ekaterinburg', 'Detroit', 'New-York', 'Norilsk', 'London','Washington','Kansas'];
export const OfferTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'restaurant','sightseeing'];

export const TextSentences = [
  'Fusce tristique felis at fermentum pharetra.',
  'In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

export const Offers = [
  {
    offerType: 'Taxi',
    offerName: 'Order Taxi',
    price: 40,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'Flight',
    offerName: 'buy a ticket',
    price: 500,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'Flight',
    offerName: 'Switch to comfort',
    price: 100,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'Bus',
    offerName: 'buy a ticket',
    price: 12,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'Hotel',
    offerName: 'book a room for a day',
    price: 100,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'train',
    offerName: 'choose a reserved seat wagon',
    price: 100,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
  {
    offerType: 'restaurant',
    offerName: 'order coffee',
    price: 10,
    isChosen: Boolean(getRandomInteger(0, 1))
  },
];
