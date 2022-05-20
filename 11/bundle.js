/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateDescription": () => (/* binding */ generateDescription),
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");







const generateType = () => {
  const types = _utils_js__WEBPACK_IMPORTED_MODULE_0__.waypointTypes;
  const randomIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, types.length - 1);
  return types[randomIndex];
};

const generateDestination = () => {
  const dest = _utils_js__WEBPACK_IMPORTED_MODULE_0__.cities;
  const randomIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, dest.length - 1);
  return dest[randomIndex];
};

const getDuration = () => ' ';

const generateDescription = () => {
  const description = _utils_js__WEBPACK_IMPORTED_MODULE_0__.descriptions;
  const randomIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, description.length - 1);
  return description[randomIndex];
};

const generateCost = () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 100) * 10;

const generateOffers = () => {
  const offers = [{
    type: 'Taxi',
    name: 'Order Taxi',
    price: 40,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'Flight',
    name: 'buy a ticket',
    price: 500,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'Flight',
    name: 'Switch to comfort',
    price: 100,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'Bus',
    name: 'buy a ticket',
    price: 12,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'Hotel',
    name: 'book a room for a day',
    price: 100,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'train',
    name: 'choose a reserved seat wagon',
    price: 100,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }, {
    type: 'restaurant',
    name: 'order coffee',
    price: 10,
    isChosen: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  }];
  let count = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 5);
  let len = offers.length;
  const result = new Array(count);
  const taken = new Array(len);

  if (count > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }

  while (count--) {
    const x = Math.floor(Math.random() * len);
    result[count] = offers[x in taken ? taken[x] : x];
    taken[x] = --len;
  }

  return result;
};

const generatePoint = () => {
  const date = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateBeginEndDates)();
  return {
    waypointType: generateType(),
    destination: generateDestination(),
    startDate: date.start,
    endDate: date.end,
    duration: getDuration(),
    description: generateDescription(),
    images: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateImages)(),
    cost: generateCost(),
    offers: generateOffers(),
    isArchive: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    isFavorite: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  };
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "generateImages": () => (/* binding */ generateImages),
/* harmony export */   "generateBeginEndDates": () => (/* binding */ generateBeginEndDates),
/* harmony export */   "dateRend": () => (/* binding */ dateRend),
/* harmony export */   "cities": () => (/* binding */ cities),
/* harmony export */   "waypointTypes": () => (/* binding */ waypointTypes),
/* harmony export */   "descriptions": () => (/* binding */ descriptions)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const generateImages = () => {
  const arrayOfImages = [];

  for (let i = 0; i < 3; i++) {
    arrayOfImages[i] = `http://picsum.photos/248/152?${getRandomInteger(0, 99).toString()}`;
  }

  return arrayOfImages;
};
const generateBeginEndDates = () => {
  const maxGap = 10;
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(getRandomInteger(-maxGap, maxGap), 'day').add(getRandomInteger(-maxGap, maxGap), 'hour').add(getRandomInteger(-maxGap, maxGap), 'minute');
  const endDate = startDate.clone().add(getRandomInteger(0, 14), 'day').add(getRandomInteger(0, 59), 'hour').add(getRandomInteger(0, 59), 'minute');
  return {
    start: startDate.toDate(),
    end: endDate.toDate()
  };
};
const dateRend = (date, format) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
const cities = ['Chelyabinsk', 'Ekaterinburg', 'Detroit', 'New-York', 'Norilsk', 'London', 'Washington', 'Kansas'];
const waypointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'restaurant', 'sightseeing'];
const descriptions = ['Fusce tristique felis at fermentum pharetra.', 'In rutrum ac purus sit amet tempus.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'];

/***/ }),

/***/ "./src/view/site-abstract-class-view.js":
/*!**********************************************!*\
  !*** ./src/view/site-abstract-class-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/site-add-first-point-view.js":
/*!***********************************************!*\
  !*** ./src/view/site-add-first-point-view.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteAddFirstPoint)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");


const createFirstPointTemplate = () => `<p class="trip-events__msg">
  Click New Event to create your first point
  </p>`;

class SiteAddFirstPoint extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFirstPointTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-add-new-point-view.js":
/*!*********************************************!*\
  !*** ./src/view/site-add-new-point-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteAddNewPoint)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








const createAddNewPointTemplate = point => {
  const {
    startDate,
    endDate,
    cost,
    offers
  } = point;
  const waypointType = 'Taxi';
  const startDateRend = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'D MMMM YYYY');
  const endDateRend = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(endDate, 'D MMMM YYYY');

  const createOffer = offer => {
    const name = offer.name;
    const price = offer.price;
    const type = offer.type;
    return `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}" >
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${price}</span>
                        </label>
                      </div>
    `;
  };

  const createOfferList = addableOffers => {
    if (addableOffers.length !== 0) {
      return `<section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          ${offers.map(createOffer).join('')}</section>`;
    }

    return '';
  };

  const createListEventTypeItem = (types = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.waypointTypes)(), type) => {
    const createType = currentType => {
      const isChecked = currentType === type ? 'checked=""' : '';
      const label = currentType.charAt(0).toUpperCase() + currentType.slice(1);
      return `<div class="event__type-item">
                          <input id="event-type-${currentType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${currentType}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${currentType}" for="event-type-${currentType} -1">${label}</label>
                        </div>`;
    };

    return types.map(createType).join('');
  };

  const createOptionsLocations = city => `<option value="${city}"></option>`;

  const createImagesList = photo => `<img className="event__photo" src="${photo}">`;

  const listEventTypeItem = createListEventTypeItem((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.waypointTypes)(), waypointType);
  const fieldLabel = waypointType.charAt(0).toUpperCase() + waypointType.slice(1);
  const optionsLocations = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cities)().map(createOptionsLocations).join('');
  const addableOffersList = createOfferList(offers);
  const description = (0,_mock_point_js__WEBPACK_IMPORTED_MODULE_1__.generateDescription)();
  const images = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateImages)();
  const imagesList = images.map(createImagesList).join('');
  return `<li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
               <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${waypointType}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
  
                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                      <legend class="visually-hidden">Event type</legend>
                        ${listEventTypeItem}
                        </fieldset>
                      </div>
                    </div>
  
                    <div class="event__field-group  event__field-group--destination">
                      <label class="event__label  event__type-output" for="event-destination-1">
                        ${fieldLabel}
                      </label>
                      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
                      <datalist id="destination-list-1">
                        ${optionsLocations}
                      </datalist>
                    </div>
  
                    <div class="event__field-group  event__field-group--time">
                      <label class="visually-hidden" for="event-start-time-1">From</label>
                      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDateRend}">
                      &mdash;
                      <label class="visually-hidden" for="event-end-time-1">To</label>
                      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" ${endDateRend}">
                    </div>
  
                    <div class="event__field-group  event__field-group--price">
                      <label class="event__label" for="event-price-1">
                        <span class="visually-hidden">Price</span>
                        &euro;
                      </label>
                      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${cost}">
                    </div>
  
                    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                    <button class="event__reset-btn" type="reset">Cancel</button>
                  </header>
                  <section class="event__details">${addableOffersList} 
                    <section class="event__section  event__section--offers">
                    <section class="event__section  event__section--destination">
                      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                      <p class="event__destination-description">${description}</p>
  
                      <div class="event__photos-container">
                        <div class="event__photos-tape">
                          ${imagesList}
                        </div>
                      </div>
                    </section>
                  </section>
                </form>
              </li>`;
};

var _point = /*#__PURE__*/new WeakMap();

class SiteAddNewPoint extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createAddNewPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/site-edit-new-point-view.js":
/*!**********************************************!*\
  !*** ./src/view/site-edit-new-point-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteEditNewPoint)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






const createEditNewPointTemplate = point => {
  const {
    waypointType,
    startDate,
    endDate,
    cost,
    offers,
    description
  } = point;
  const startDateRend = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'D MMMM YYYY');
  const endDateRend = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(endDate, 'D MMMM YYYY');

  const createListEventTypeItem = (types = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.waypointTypes)(), type) => {
    const createType = currentType => {
      const isChecked = currentType === type ? 'checked=""' : '';
      const label = currentType.charAt(0).toUpperCase() + currentType.slice(1);
      return `<div class="event__type-item">
                          <input id="event-type-${currentType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${currentType}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${currentType}" for="event-type-${currentType}-1">${label}</label>
                        </div>`;
    };

    return types.map(createType).join('');
  };

  const createOptionsLocations = city => `<option value="${city}"></option>`;

  const createOffer = offer => {
    const isChecked = offer.isChosen ? ' checked=""' : '';
    const name = offer.name;
    const price = offer.price;
    const type = offer.type;
    return `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}"${isChecked}>
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${price}</span>
                        </label>
                      </div>
    `;
  };

  const createOfferList = editedOffers => {
    if (editedOffers.length !== 0) {
      return `<section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>${editedOffers}
              </section>`;
    }

    return '';
  };

  const listEventTypeItem = createListEventTypeItem((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.waypointTypes)(), waypointType);
  const fieldLabel = waypointType.charAt(0).toUpperCase() + waypointType.slice(1);
  const optionsLocations = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.cities)().map(createOptionsLocations).join('');
  const editOffers = offers.map(createOffer).join('');
  const addableOffersList = createOfferList(editOffers);
  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${waypointType}}" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
    
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${listEventTypeItem}
              </fieldset>
            </div>
          </div>
    
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${fieldLabel}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
            <datalist id="destination-list-1">
              ${optionsLocations}
            </datalist>
          </div>
    
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDateRend}">
              &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDateRend}">
          </div>
    
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${cost}">
          </div>
    
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">${addableOffersList}
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    
              </div>
            </div>
         </section>
    
         <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
        </section>
      </section>
    </form>
  </li> `;
};

var _point = /*#__PURE__*/new WeakMap();

var _formSubmit = /*#__PURE__*/new WeakMap();

var _RollUpBtnClick = /*#__PURE__*/new WeakMap();

class SiteEditNewPoint extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "formSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmit));
    });

    _defineProperty(this, "eventRollUpBtnHandler", callback => {
      this._callback.rollupClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _RollUpBtnClick));
    });

    _classPrivateFieldInitSpec(this, _formSubmit, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();
      }
    });

    _classPrivateFieldInitSpec(this, _RollUpBtnClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.rollupClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createEditNewPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/site-event-list-view.js":
/*!******************************************!*\
  !*** ./src/view/site-event-list-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsListTemplate)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");


const createEventsListTemplate = () => `<ul class="trip-events__list">
      </ul>`;

class EventsListTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createEventsListTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuTemplate)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");


const createSiteMenuTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`;

class SiteMenuTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-trips-filters-view.js":
/*!*********************************************!*\
  !*** ./src/view/site-trips-filters-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripFiltersTemplate)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");


const createTripsFiltersTemplate = () => `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>
                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>
                <div class="trip-filters__filter">
                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
                  <label class="trip-filters__filter-label" for="filter-past">Past</label>
                </div>
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>
            </div>
          </div>`;

class TripFiltersTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createTripsFiltersTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-trips-sort-view.js":
/*!******************************************!*\
  !*** ./src/view/site-trips-sort-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripSortTemplate)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");


const createTripsSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
              <div class="trip-sort__item  trip-sort__item--day">
                <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
                <label class="trip-sort__btn" for="sort-day">Day</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--event">
                <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
                <label class="trip-sort__btn" for="sort-event">Event</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--time">
                <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
                <label class="trip-sort__btn" for="sort-time">Time</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--price">
                <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
                <label class="trip-sort__btn" for="sort-price">Price</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--offer">
                <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
                <label class="trip-sort__btn" for="sort-offer">Offers</label>
              </div>
            </form>`;

class TripSortTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createTripsSortTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-waypoint-view.js":
/*!****************************************!*\
  !*** ./src/view/site-waypoint-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WaypointTemplate)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createWaypointTemplate = point => {
  const {
    waypointType,
    destination,
    startDate,
    endDate,
    cost,
    duration,
    offers,
    favor
  } = point;
  const startDateayMonth = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'MMM D');
  const startDateate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'YYYY-MM-D');
  const startDateatetime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'YYYY-MM-DDTHH:mm');
  const startTime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(startDate, 'HH:mm');
  const endDateatetime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(endDate, 'YYYY-MM-DDTHH:mm');
  const endTime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dateRend)(endDate, 'HH:mm');

  const getDuration = dur => {
    const result = [];

    if (dur.days !== 0) {
      result[0] = `${String(dur.days).padStart(2, '0')}D`;
    }

    if (dur.hours !== 0) {
      result[1] = `${String(dur.hours).padStart(2, '0')}H`;
    }

    if (dur.minutes !== 0) {
      result[2] = `${String(dur.minutes).padStart(2, '0')}M`;
    }

    return result.join(' ');
  };

  const createListOffers = offer => {
    if (offer.isChosen) {
      const name = offer.name;
      const price = offer.price;
      return `<li class="event__offer">
                    <span class="event__offer-title">${name}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>`;
    }
  };

  const isFavorite = favor ? ' event__favorite-btn--active' : '';
  const listOffers = offers.map(createListOffers).join('');
  const durat = getDuration(duration);
  return `<li class="trip-events__item">
            <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${startDateate}">${startDateayMonth}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${waypointType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${waypointType} ${destination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${startDateatetime}">${startTime}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${endDateatetime}">${endTime}</time>
                  </p>
                  <p class="event__duration">${durat}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${cost}</span>
                </p>
                  <h4 class="visually-hidden">Offers:</h4>
                  <ul class="event__selected-offers">
                    ${listOffers}
                  </ul>
                  <button class="event__favorite-btn event__favorite-btn--${isFavorite}}" type="button">
                    <span class="visually-hidden">Add to favorite</span>
                    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                    </svg>
                  </button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _editClick = /*#__PURE__*/new WeakMap();

class WaypointTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "editClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClick));
    });

    _classPrivateFieldInitSpec(this, _editClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createWaypointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu-view.js */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_site_trips_sort_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/site-trips-sort-view.js */ "./src/view/site-trips-sort-view.js");
/* harmony import */ var _view_site_trips_filters_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/site-trips-filters-view.js */ "./src/view/site-trips-filters-view.js");
/* harmony import */ var _view_site_event_list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/site-event-list-view */ "./src/view/site-event-list-view.js");
/* harmony import */ var _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/site-waypoint-view.js */ "./src/view/site-waypoint-view.js");
/* harmony import */ var _view_site_add_new_point_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/site-add-new-point-view.js */ "./src/view/site-add-new-point-view.js");
/* harmony import */ var _view_site_edit_new_point_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/site-edit-new-point-view.js */ "./src/view/site-edit-new-point-view.js");
/* harmony import */ var _view_site_add_first_point_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/site-add-first-point-view.js */ "./src/view/site-add-first-point-view.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");










const tripEventsListElement = new _view_site_event_list_view__WEBPACK_IMPORTED_MODULE_4__["default"]();
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const COUNT = 3;
const points = Array.from({
  length: COUNT
}, _mock_point_js__WEBPACK_IMPORTED_MODULE_9__.generatePoint);
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripNavigationElement, new _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]().element, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripFiltersElement, new _view_site_trips_filters_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]().element, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);

if (points.length === 0) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripEventsElement, (0,_view_site_add_first_point_view_js__WEBPACK_IMPORTED_MODULE_8__["default"])(), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
} else {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripEventsElement, new _view_site_event_list_view__WEBPACK_IMPORTED_MODULE_4__["default"]().element, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripEventsElement, new _view_site_trips_sort_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripEventsListElement.element, (0,_view_site_add_new_point_view_js__WEBPACK_IMPORTED_MODULE_6__["default"])(points[0]), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
}

const createPoint = (pointsList, point) => {
  const waypointTemplate = new _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_5__["default"](point);
  const editPoint = new _view_site_edit_new_point_view_js__WEBPACK_IMPORTED_MODULE_7__["default"](point);

  const replaceWaypointToForm = () => {
    pointsList.replaceChild(editPoint.element, waypointTemplate.element);
  };

  const replaceFormToWaypoint = () => {
    pointsList.replaceChild(waypointTemplate.element, editPoint.element);
  };

  const onEscKeyDown = evt => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToWaypoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  waypointTemplate.element.editClickHandler(() => {
    replaceWaypointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });
  editPoint.formSubmitHandler(() => {
    replaceFormToWaypoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  editPoint.eventRollUpBtnHandler(() => {
    replaceFormToWaypoint();
    document.addEventListener('keydown', onEscKeyDown);
  });
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(pointsList, waypointTemplate, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
};

createPoint(tripEventsListElement, points[1]);
createPoint(tripEventsListElement, points[0]);

for (let i = 2; i < COUNT; i++) {
  createPoint(tripEventsListElement, points[i]);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map