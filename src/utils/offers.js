export const getChangedByTypeOffers = (allOffers, currentType) => {
  let offersByType = {};

  for (let i = 0; i < allOffers.length; i++) {
    if (allOffers[i].type === currentType) {
      offersByType = allOffers[i];
    }
  }

  for (let i = 0; i < offersByType.offers.length; i++) {
    offersByType.offers[i].isChosen = false;
  }

  return offersByType.offers;
};

export const createOffersSegmentMarkup = (offers, pointType) => {
  const createOfferMarkup = (offer) => `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointType}-1"
                        type="checkbox" name="event-offer-${pointType}" ${offer.isChosen ? 'checked' : ''}
                        value="${offer.title}">
                        <label class="event__offer-label" for="event-offer-name-1" data-title="${offer.title}">
                          <span class="event__offer-title" data-title="${offer.title}">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price" data-title="${offer.title}">${offer.price}</span>
                        </label>
                      </div>`;

  //const offersByCurrentType = getChangedByTypeOffers(allOffers, pointType);
  const offersMarkup = offers.map(createOfferMarkup).join('');

  if (offers.length !== 0){
    return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersMarkup}</section>`;
  }

  return '';
};

export const changeCheckedOffers = (offers, checkedOffer) => {
  const changedOffers = offers.map((offer) => ({
    'id': offer.id,
    'title': offer.title,
    'price': offer.price,
    'isChosen': offer.title === checkedOffer ? !offer.isChosen : offer.isChosen
  }));

  //console.log(changedOffers);
  return changedOffers;
};

export const offersList = () => ([
    {
      'type': 'taxi',
      'offers': [
        {
          'id': 1,
          'title': 'попросить отключить музыку',
          'cost': 10
        },{
          'id': 2,
          'title': 'повысить класс',
          'cost': 65
        }
      ]
    },
    {
      'type': 'bus',
      'offers': [
        {
          'id': 3,
          'title': 'выбрать места',
          'cost': 5
        }
      ]
    },
    {
      'type': 'train',
      'offers': [
        {
          'id': 4,
          'title': 'выбрать места',
          'cost': 5
        }, {
          'id': 5,
          'title': 'с животным',
          'cost': 50
        }, {
          'id': 6,
          'title': 'нешумный вагон',
          'cost': 140
        }, {
          'id': 7,
          'title': 'с багажом',
          'cost': 30
        }, {
          'id': 8,
          'title': 'обед',
          'cost': 25
        }, {
          'id': 9,
          'title': 'комфорт-класс',
          'cost': 100
        }
      ]
    },
    {
      'type': 'ship',
      'offers': [
        {
          'id': 10,
          'title': 'Завтрак на палубе',
          'cost': 200
        }, {
          'id': 11,
          'title': 'кабина комфорт-класса',
          'cost': 400
        }, {
          'id': 12,
          'title': 'с кондиционером',
          'cost': 100
        }
      ]
    },
    {
      'type': 'drive',
      'offers': [
        {
          'id': 13,
          'title': 'аренда машины',
          'cost': 400
        }, {
          'id': 14,
          'title': 'Повысить класс автомобиля',
          'cost': 180
        }, {
          'id': 15,
          'title': 'Бензин',
          'cost': 90
        }, {
          'id': 16,
          'title': 'Крыша с панорамным видом',
          'cost': 100
        }
      ]
    },
    {
      type: 'flight',
      'offers': [
        {
          'id': 17,
          'title': 'Обед',
          'cost': 50
        }, {
          'id': 18,
          'title': 'Заказать такси в пункте прибытия',
          'cost': 110
        }, {
          'id': 19,
          'title': 'Выбрать места',
          'cost': 5
        }, {
          'id': 20,
          'title': 'Комфорт-класс',
          'cost': 100
        }
      ]
    },
    {
      'type': 'check-in',
      'offers': [
        {
          'id': 21,
          'title': 'Завтрак',
          'cost': 120
        }, {
          'id': 22,
          'title': 'комфорт-класс',
          'cost': 250
        }, {
          'id': 23,
          'title': 'минибар',
          'cost': 700
        }
      ]
    },
    {
      'type': 'sightseeing',
      'offers': [
        {
          'id': 24,
          'title': 'Путеводитель по городу',
          'cost': 300
        }, {
          'id': 25,
          'title': 'Покупка сувениров',
          'cost': 170
        }, {
          'id': 26,
          'title': 'экскурсия',
          'cost': 250
        }
      ]
    },{
      'type': 'restaurant',
      'offers': [
        {
          'id': 27,
          'title': 'бюджетный обед',
          'cost': 200
        }, {
          'id': 28,
          'title': 'чаевые',
          'cost': 40
        }
      ]
    }
  ]);
  