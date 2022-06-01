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
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_destinations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/destinations.js */ "./src/utils/destinations.js");
/* harmony import */ var _utils_offers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/offers.js */ "./src/utils/offers.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");





/*const generateDestination = () => {
  const dest = cities;
  const randomIndex = getRandomInteger(0, dest.length - 1);
  return dest[randomIndex];
};*/

/*export const generateDescription = () => {
  const description = descriptions;
  const randomIndex = getRandomInteger(0, description.length - 1);
  return description[randomIndex];
};*/

const generateCost = () => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 100) * 10;
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


const generatePoint = () => {
  const dates = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateFromToDates)();
  const destinationArray = (0,_utils_destinations_js__WEBPACK_IMPORTED_MODULE_1__.destinations)();
  const offerArray = (0,_utils_offers_js__WEBPACK_IMPORTED_MODULE_2__.offersList)();
  return {
    cost: generateCost(),
    dateFrom: dates.from,
    dateTo: dates.to,
    destinations: destinationArray[(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, destinationArray.length - 1)],
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
    isFavorite: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    offersList: offerArray,
    type: offerArray[(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, offerArray.length - 1)].type
  };
};

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WaypointPresenter)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _view_site_edit_new_point_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-edit-new-point-view.js */ "./src/view/site-edit-new-point-view.js");
/* harmony import */ var _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/site-waypoint-view.js */ "./src/view/site-waypoint-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _waypointContainer = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _waypointComponent = /*#__PURE__*/new WeakMap();

var _editPointComponent = /*#__PURE__*/new WeakMap();

var _waypoint = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replaceWaypointToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToWaypoint = /*#__PURE__*/new WeakMap();

var _escKeyDownHandler = /*#__PURE__*/new WeakMap();

var _RollUpBtnClick = /*#__PURE__*/new WeakMap();

var _formSubmit = /*#__PURE__*/new WeakMap();

var _editClick = /*#__PURE__*/new WeakMap();

var _favoriteClick = /*#__PURE__*/new WeakMap();

class WaypointPresenter {
  constructor(waypointContainer, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _waypointContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _waypointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _editPointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _waypoint, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", waypoint => {
      _classPrivateFieldSet(this, _waypoint, waypoint);

      const prevWaypointComponent = _classPrivateFieldGet(this, _waypointComponent);

      const prevEditPointComponent = _classPrivateFieldGet(this, _editPointComponent);

      _classPrivateFieldSet(this, _waypointComponent, new _view_site_waypoint_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](waypoint));

      _classPrivateFieldSet(this, _editPointComponent, new _view_site_edit_new_point_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](waypoint));

      _classPrivateFieldGet(this, _waypointComponent).editClickHandler(_classPrivateFieldGet(this, _editClick));

      _classPrivateFieldGet(this, _waypointComponent).favoriteClickHandler(_classPrivateFieldGet(this, _favoriteClick));

      _classPrivateFieldGet(this, _editPointComponent).eventRollUpBtnHandler(_classPrivateFieldGet(this, _RollUpBtnClick));

      _classPrivateFieldGet(this, _editPointComponent).formSubmitHandler(_classPrivateFieldGet(this, _formSubmit));

      if (prevWaypointComponent === null || prevEditPointComponent === null) {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _waypointContainer), _classPrivateFieldGet(this, _waypointComponent), _render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.replace)(_classPrivateFieldGet(this, _waypointComponent), prevWaypointComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.replace)(_classPrivateFieldGet(this, _editPointComponent), prevEditPointComponent);
      }

      (0,_render__WEBPACK_IMPORTED_MODULE_0__.remove)(prevWaypointComponent);
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.remove)(prevEditPointComponent);
    });

    _defineProperty(this, "destroy", () => {
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.remove)(_classPrivateFieldGet(this, _waypointComponent));
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.remove)(_classPrivateFieldGet(this, _editPointComponent));
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _editPointComponent).reset(_classPrivateFieldGet(this, _waypoint));

        _classPrivateFieldGet(this, _replaceFormToWaypoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceWaypointToForm, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.replace)(_classPrivateFieldGet(this, _editPointComponent), _classPrivateFieldGet(this, _waypointComponent));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToWaypoint, {
      writable: true,
      value: () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.replace)(_classPrivateFieldGet(this, _waypointComponent), _classPrivateFieldGet(this, _editPointComponent));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _escKeyDownHandler, {
      writable: true,
      value: evt => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _editPointComponent).reset(_classPrivateFieldGet(this, _waypoint));

          _classPrivateFieldGet(this, _replaceFormToWaypoint).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _RollUpBtnClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _editPointComponent).reset(_classPrivateFieldGet(this, _waypoint));

        _classPrivateFieldGet(this, _replaceFormToWaypoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _formSubmit, {
      writable: true,
      value: pnt => {
        _classPrivateFieldGet(this, _changeData).call(this, pnt);

        _classPrivateFieldGet(this, _replaceFormToWaypoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _editClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceWaypointToForm).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _favoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _waypoint),
          isFavorite: !_classPrivateFieldGet(this, _waypoint).isFavorite
        });
      }
    });

    _classPrivateFieldSet(this, _waypointContainer, waypointContainer);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _view_site_event_list_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/site-event-list-view */ "./src/view/site-event-list-view.js");
/* harmony import */ var _view_site_trips_sort_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/site-trips-sort-view.js */ "./src/view/site-trips-sort-view.js");
/* harmony import */ var _point_presenter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-presenter.js */ "./src/presenter/point-presenter.js");
/* harmony import */ var _view_site_add_first_point_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/site-add-first-point-view.js */ "./src/view/site-add-first-point-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }










var _mainElement = /*#__PURE__*/new WeakMap();

var _tripEventsElement = /*#__PURE__*/new WeakMap();

var _tripSortComponent = /*#__PURE__*/new WeakMap();

var _siteAddFirstComponent = /*#__PURE__*/new WeakMap();

var _tripEventsListElement = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _points = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _sourcedPoints = /*#__PURE__*/new WeakMap();

var _sortTasks = /*#__PURE__*/new WeakMap();

var _renderFirstPoint = /*#__PURE__*/new WeakMap();

var _renderEventList = /*#__PURE__*/new WeakMap();

var _handlePointChange = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _handleSortTypeChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderPoint = /*#__PURE__*/new WeakMap();

var _renderPoints = /*#__PURE__*/new WeakMap();

var _renderMain = /*#__PURE__*/new WeakMap();

var _clearPointList = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(mainElement) {
    _classPrivateFieldInitSpec(this, _mainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripEventsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripSortComponent, {
      writable: true,
      value: new _view_site_trips_sort_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    });

    _classPrivateFieldInitSpec(this, _siteAddFirstComponent, {
      writable: true,
      value: new _view_site_add_first_point_view_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
    });

    _classPrivateFieldInitSpec(this, _tripEventsListElement, {
      writable: true,
      value: new _view_site_event_list_view__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(this, _points, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_DAY
    });

    _classPrivateFieldInitSpec(this, _sourcedPoints, {
      writable: true,
      value: []
    });

    _defineProperty(this, "init", points => {
      _classPrivateFieldSet(this, _points, [...points]);

      _classPrivateFieldSet(this, _sourcedPoints, [...points]); //this.points.forEach(this.#renderPoint());


      this.renderMain();
    });

    _classPrivateFieldInitSpec(this, _sortTasks, {
      writable: true,
      value: sortType => {
        switch (sortType) {
          case _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_DAY:
            _classPrivateFieldGet(this, _points).sort(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.sortPointByDay);

            break;

          case _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_TIME:
            _classPrivateFieldGet(this, _points).sort(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.sortPointByDuration);

            break;

          case _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_PRICE:
            _classPrivateFieldGet(this, _points).sort(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.sortPointByPrice);

            break;

          default:
            _classPrivateFieldSet(this, _points, [..._classPrivateFieldGet(this, _sourcedPoints)]);

        }

        _classPrivateFieldSet(this, _currentSortType, sortType);
      }
    });

    _classPrivateFieldInitSpec(this, _renderFirstPoint, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _siteAddFirstComponent), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderEventList, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _tripEventsListElement), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _handlePointChange, {
      writable: true,
      value: updatedPoint => {
        _classPrivateFieldSet(this, _points, (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateItem)(_classPrivateFieldGet(this, _points), updatedPoint));

        _classPrivateFieldSet(this, _sourcedPoints, (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.updateItem)(_classPrivateFieldGet(this, _sourcedPoints), updatedPoint));

        _classPrivateFieldGet(this, _pointPresenter).get(updatedPoint.id).init(updatedPoint);
      }
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _handleSortTypeChange, {
      writable: true,
      value: sortType => {
        if (_classPrivateFieldGet(this, _currentSortType) === sortType) {
          return;
        }

        _classPrivateFieldGet(this, _sortTasks).call(this, sortType);

        _classPrivateFieldGet(this, _clearPointList).call(this);

        _classPrivateFieldGet(this, _renderEventList).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripEventsElement), _classPrivateFieldGet(this, _tripSortComponent), _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);

        _classPrivateFieldGet(this, _tripSortComponent).SortTypeChangeHandler(_classPrivateFieldGet(this, _handleSortTypeChange));
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoint, {
      writable: true,
      value: point => {
        const pointPresenter = new _point_presenter_js__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _tripEventsListElement), _classPrivateFieldGet(this, _handlePointChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(point);

        _classPrivateFieldGet(this, _pointPresenter).set(point.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoints, {
      writable: true,
      value: () => {
        for (let i = 1; i < _classPrivateFieldGet(this, _points).length; i++) {
          this.renderPoint(_classPrivateFieldGet(this, _points)[i]);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _renderMain, {
      writable: true,
      value: () => {
        if (_classPrivateFieldGet(this, _points).length === 0) {
          _classPrivateFieldGet(this, _renderFirstPoint).call(this);
        } else {
          _classPrivateFieldGet(this, _renderSort).call(this);

          _classPrivateFieldGet(this, _renderEventList).call(this);

          _classPrivateFieldGet(this, _sortTasks).call(this, _classPrivateFieldGet(this, _currentSortType));

          _classPrivateFieldGet(this, _renderPoints).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _clearPointList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.destroy());

        _classPrivateFieldGet(this, _pointPresenter).clear();
      }
    });

    _classPrivateFieldSet(this, _mainElement, mainElement);

    _classPrivateFieldSet(this, _tripEventsElement, _classPrivateFieldGet(this, _mainElement).querySelector('.trip-events'));
  }

}

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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
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
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/utils/destinations.js":
/*!***********************************!*\
  !*** ./src/utils/destinations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destinations": () => (/* binding */ destinations)
/* harmony export */ });
const destinations = () => [{
  'description': 'Париж - это столица и крупнейший город во Франции. Находится на севере государства, в центральной части Парижского бассейна, на р. Сена. Население 2,2 млн человек (2016)',
  'name': 'Paris',
  'pictures': [{
    'src': 'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_20770_1.600w.jpg?ver=1575040255.jpg',
    'description': 'Эйфевелева Башня'
  }, {
    'src': 'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20905_208cfcc257a889002227594b5fd7a9ae.jpg?ver=1477298085.jpg',
    'description': 'Диснейлэнд'
  }, {
    'src': 'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20860_a77485e7b2cbb83c2086a6fc7c03817b.jpg?ver=1477297955.jpg',
    'description': 'Круиз по Сене'
  }]
}, {
  'description': 'Рим — столица и крупнейший город Италии. Административный центр области Лацио и одноимённой территориальной единицы Рим, приравненной к провинции. Расположен на реке Тибр.',
  'name': 'Rome',
  'pictures': [{
    'src': 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/1-Coliseum-e1531108988704.jpg',
    'description': 'Колизей'
  }, {
    'src': 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/3-Vatican.jpg',
    'description': 'Ватикан'
  }]
}, {
  'description': 'Варша́ва  — столица и крупнейший по населению и по территории город Польши.',
  'name': 'Warszawa',
  'pictures': [{
    'src': 'https://top10.travel/wp-content/uploads/2016/11/staryj-gorod-varshavy.jpg',
    'description': 'Старый город'
  }, {
    'src': 'https://top10.travel/wp-content/uploads/2016/11/kostyol-svyatogo-ioanna-krestitelya.jpg',
    'description': 'Костёл Святого Иоанна Крестителя'
  }]
}, {
  'description': 'Хе́льсинки  — столица и крупнейший город Финляндии, административный центр провинции Уусимаа (Нюланд).',
  'name': 'Helsinki',
  'pictures': [{
    'src': 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Helsinki-1-Helsinki_Senate_Squarehttpswww.flickr.comphotosstephenrwalli-e1506466991673.jpg',
    'description': 'Сенатская площадь'
  }, {
    'src': 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/3-Suomenlinna-e1506485170207.jpg',
    'description': 'Суоменлинна'
  }, {
    'src': 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/7-Moulin_--_vent_mus--e_de_Seurasaari_Helsinki-e1506490641741.jpg',
    'description': 'Остров Сеурасаари'
  }]
}, {
  'description': 'Нью-Йо́рк — крупнейший город США, входящий в одну из крупнейших агломераций мира.расположен на берегу Атлантического океана в юго-восточной части штата Нью-Йорк. Город был основан в начале XVII века голландскими колонистами и до 1664 года назывался Новый Амстердам.',
  'name': 'Туц-Нщкл',
  'pictures': [{
    'src': 'https://tripmydream.cc/travelhub/travel/block_gallery/92/419/default_92419.jpg',
    'description': 'Статуя свободы'
  }, {
    'src': 'https://tripmydream.cc/travelhub/travel/block_gallery/92/420/default_92420.jpg',
    'description': 'Empire State Building'
  }, {
    'src': 'https://tripmydream.cc/travelhub/travel/block_gallery/92/424/default_92424.jpg',
    'description': 'World Trade Center'
  }]
}, {
  'description': 'Детройт - город на севере США, в штате Мичиган. Расположен в юго-восточном углу штата, на реке Детройт, на границе с Канадой.',
  'name': 'Detroit',
  'pictures': [{
    'src': 'https://media.istockphoto.com/photos/detroit-aerial-panorama-picture-id859451446?k=20&m=859451446&s=612x612&w=0&h=-vw4-7-6EWEUsI43xhYB949PrnJKekqLe9xiNS8hbRs=',
    'description': 'Detroit city'
  }, {
    'src': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZI5Z7N8RBKTz0GYGWL-IvpuaDFNY-Ln9mBZCkhamwRKcdAOv1B9Tis-tqgSTcOtL1Jk&usqp=CAU',
    'description': 'City Detroit'
  }]
}, {
  'description': 'Женева - город на юго-западе Швейцарии. Столица одноимённого франкоязычного кантона и административный центр одноимённой коммуны.',
  'name': 'Geneva',
  'pictures': [{
    'src': 'https://switzerland-tour.com/images/city/geneva-top/Geneva-in-Switzerland.jpg',
    'description': 'Geneva city'
  }, {
    'src': 'https://arenda-car.ru/upload/iblock/2f3/jeneva.jpg',
    'description': 'City Geneva'
  }]
}, {
  'description': ' столица и крупнейший город Германии, первый по населению и четвёртый по площади город Евросоюза.',
  'name': 'Berlin',
  'pictures': [{
    'src': 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/bb1dcb9933b840889a1306a81f976b78/',
    'description': 'Berlin city'
  }, {
    'src': 'http://stroyobzor.ua/assets/files/%D1%84%D0%BE%D1%82%D0%BE%20WWW/%D0%9D%D0%9E%D0%92%D0%90%D0%AF/%D0%B1%D0%B5%D1%80%D0%BB%D0%B8%D0%BD.jpg',
    'description': 'City Berlin'
  }, {
    'src': 'https://www.amigo-s.ru/content-images/9341464874c962ca4605ff7737412e76.jpg',
    'description': 'Berlin temple'
  }]
}, {
  'description': ' город в Японии, самый крупный город региона Тюгоку на юго-западе острова Хонсю, административный центр префектуры Хиросима.',
  'name': 'Hiroshima',
  'pictures': [{
    'src': 'https://media.istockphoto.com/photos/modern-hiroshima-picture-id157529612?k=20&m=157529612&s=612x612&w=0&h=d0JQPELDccEdTZt8UX1MdV5ExTdL3rkvVmAEO7adL5s=',
    'description': 'Hiroshima city'
  }, {
    'src': 'http://ttgmice.2017.ttgasia.com/wp-content/uploads/sites/3/2018/07/Hiroshima-city.jpg',
    'description': 'City Hiroshima'
  }]
}];

/***/ }),

/***/ "./src/utils/offers.js":
/*!*****************************!*\
  !*** ./src/utils/offers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offersList": () => (/* binding */ offersList)
/* harmony export */ });
const offersList = () => [{
  'type': 'taxi',
  'offers': [{
    'id': 1,
    'title': 'попросить отключить музыку',
    'cost': 10
  }, {
    'id': 2,
    'title': 'повысить класс',
    'cost': 65
  }]
}, {
  'type': 'bus',
  'offers': [{
    'id': 3,
    'title': 'выбрать места',
    'cost': 5
  }]
}, {
  'type': 'train',
  'offers': [{
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
  }]
}, {
  'type': 'ship',
  'offers': [{
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
  }]
}, {
  'type': 'drive',
  'offers': [{
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
  }]
}, {
  type: 'flight',
  'offers': [{
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
  }]
}, {
  'type': 'check-in',
  'offers': [{
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
  }]
}, {
  'type': 'sightseeing',
  'offers': [{
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
  }]
}, {
  'type': 'restaurant',
  'offers': [{
    'id': 27,
    'title': 'бюджетный обед',
    'cost': 200
  }, {
    'id': 28,
    'title': 'чаевые',
    'cost': 40
  }]
}];

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "generateImages": () => (/* binding */ generateImages),
/* harmony export */   "generateFromToDates": () => (/* binding */ generateFromToDates),
/* harmony export */   "updateItem": () => (/* binding */ updateItem),
/* harmony export */   "SortType": () => (/* binding */ SortType),
/* harmony export */   "sortPointByDay": () => (/* binding */ sortPointByDay),
/* harmony export */   "sortPointByDuration": () => (/* binding */ sortPointByDuration),
/* harmony export */   "sortPointByPrice": () => (/* binding */ sortPointByPrice),
/* harmony export */   "createWaypointTypesMarkup": () => (/* binding */ createWaypointTypesMarkup),
/* harmony export */   "createOffersSegmentMarkup": () => (/* binding */ createOffersSegmentMarkup)
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
const generateFromToDates = () => {
  const maxGap = 10;
  const fromDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(getRandomInteger(-maxGap, maxGap), 'day').add(getRandomInteger(-maxGap, maxGap), 'hour').add(getRandomInteger(-maxGap, maxGap), 'minute');
  const toDate = fromDate.clone().add(getRandomInteger(0, 14), 'day').add(getRandomInteger(0, 59), 'hour').add(getRandomInteger(0, 59), 'minute');
  return {
    from: fromDate.toISOString(),
    to: toDate.toISOString()
  };
}; //export const dateRend = (date, format) => dayjs(date).format(format);
//export const cities = ['Chelyabinsk', 'Ekaterinburg', 'Detroit', 'New-York', 'Norilsk', 'London','Washington','Kansas'];
//export const waypointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'restaurant','sightseeing'];

/*export const descriptions = [
  'Fusce tristique felis at fermentum pharetra.',
  'In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];*/

const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};
const SortType = {
  SORT_DAY: 'sort-day',
  SORT_TIME: 'sort-time',
  SORT_PRICE: 'sort-price'
};
const sortPointByDay = (pointOne, pointTwo) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointOne.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointTwo.dateFrom));
const sortPointByDuration = (pointOne, pointTwo) => {
  const pointOneDuration = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointOne.dateTo).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointOne.dateFrom));
  const pointTwoDuration = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointTwo.dateTo).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointTwo.dateFrom));
  return pointTwoDuration - pointOneDuration !== 0 ? pointTwoDuration - pointOneDuration : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointOne.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointTwo.dateFrom));
};
const sortPointByPrice = (pointOne, pointTwo) => {
  return pointTwo.cost - pointOne.cost !== 0 ? pointTwo.cost - pointOne.cost : dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointOne.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointTwo.dateFrom));
};
const createWaypointTypesMarkup = (offers, chosenPointType) => {
  const createTypeMarkup = offer => {
    const isChecked = offer.type === chosenPointType ? 'checked=""' : '';
    const label = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);
    return `<div class="event__type-item">
                          <input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-1">${label}</label>
                        </div>`;
  };

  return offers.map(createTypeMarkup).join('');
};
const createOffersSegmentMarkup = (offersByTypes, pointType) => {
  const createOfferMarkup = offer => `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointType}-1" type="checkbox" name="event-offer-${pointType}">
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.cost}</span>
                        </label>
                      </div>`;

  let offersByCurrentType = [];

  for (let i = 0; i < offersByTypes.length; i++) {
    if (offersByTypes[i].type === pointType) {
      offersByCurrentType = offersByTypes[i].offers;
    }
  }

  const offersMarkup = offersByCurrentType.map(createOfferMarkup).join('');

  if (offersByCurrentType.length !== 0) {
    return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersMarkup}</section>`;
  }

  return '';
};

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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_destinations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/destinations.js */ "./src/utils/destinations.js");
/* harmony import */ var _utils_offers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/offers.js */ "./src/utils/offers.js");
/* harmony import */ var _smart_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-view */ "./src/view/smart-view.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }







const createEditNewPointTemplate = point => {
  const {
    cost: cost,
    dateFrom: ISOFrom,
    dateTo: ISOTo,
    destination,
    type
  } = point;
  const DatetimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('DD/MM/YY HH:mm ');
  const DatetimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('DD/MM/YY HH:mm');
  const pointTypeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  const pointTypesMarkup = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.createWaypointTypesMarkup)((0,_utils_offers_js__WEBPACK_IMPORTED_MODULE_2__.offersList)(), type);
  const destinationOptions = (0,_utils_destinations_js__WEBPACK_IMPORTED_MODULE_1__.destinations)().map(x => `<option value="${x.name}"></option>`).join('');
  const photosMarkup = destination.pictures.map(x => `<img className="event__photo" src="${x.src}" alt="${x.description}">`).join('');
  const editedOffersMarkup = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.createOffersSegmentMarkup)((0,_utils_offers_js__WEBPACK_IMPORTED_MODULE_2__.offersList)(), type);
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${pointTypesMarkup}
                      </fieldset>
                    </div>
                  </div>
                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointTypeLabel}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${destinationOptions}
                    </datalist>
                  </div>
                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time event__input-start-time" id="event-start-time-1" type="text" name="event-start-time" value="${DatetimeFrom}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time event__input-end-time" id="event-end-time-1" type="text" name="event-end-time" value="${DatetimeTo}">
                  </div>
                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${cost}">
                  </div>
                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${editedOffersMarkup}
                  <section class="event__section  event__section--destination">
                    ${destination.description ? '<h3 class="event__section-title  event__section-title--destination">Destination</h3>' : ''}
                    <p class="event__destination-description">${destination.description ? destination.description : ''}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${photosMarkup}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
};

var _setInnerHandlers = /*#__PURE__*/new WeakMap();

var _typeGroupClick = /*#__PURE__*/new WeakMap();

var _destinationChange = /*#__PURE__*/new WeakMap();

var _startTimeChange = /*#__PURE__*/new WeakMap();

var _endTimeChange = /*#__PURE__*/new WeakMap();

var _priceChange = /*#__PURE__*/new WeakMap();

var _rollupClick = /*#__PURE__*/new WeakMap();

var _formSubmit = /*#__PURE__*/new WeakMap();

var _getChangedDestination = /*#__PURE__*/new WeakMap();

class SiteEditNewPoint extends _smart_view__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(_point) {
    super();

    _defineProperty(this, "reset", point => {
      this.updateData(PointEditView.parsePointToData(point));
    });

    _defineProperty(this, "restoreHandlers", () => {
      _classPrivateFieldGet(this, _setInnerHandlers).call(this);

      this.setRollupClickHandler(this._callback.rollupClick);
      this.setFormSubmitHandler(this._callback.formSubmit);
    });

    _classPrivateFieldInitSpec(this, _setInnerHandlers, {
      writable: true,
      value: () => {
        this.element.querySelector('.event__type-group').addEventListener('change', _classPrivateFieldGet(this, _typeGroupClick));
        this.element.querySelector('.event__input--destination').addEventListener('change', _classPrivateFieldGet(this, _destinationChange));
        this.element.querySelector('.event__input-start-time').addEventListener('change', _classPrivateFieldGet(this, _startTimeChange));
        this.element.querySelector('.event__input-end-time').addEventListener('change', _classPrivateFieldGet(this, _endTimeChange));
        this.element.querySelector('.event__input--price').addEventListener('change', _classPrivateFieldGet(this, _priceChange));
      }
    });

    _classPrivateFieldInitSpec(this, _typeGroupClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          type: evt.target.value
        }, false);
      }
    });

    _classPrivateFieldInitSpec(this, _destinationChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          destination: _classPrivateFieldGet(this, _getChangedDestination).call(this, evt.target.value)
        }, false);
      }
    });

    _classPrivateFieldInitSpec(this, _startTimeChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          dateFrom: evt.target.value
        }, true);
      }
    });

    _classPrivateFieldInitSpec(this, _endTimeChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          dateTo: evt.target.value
        }, true);
      }
    });

    _classPrivateFieldInitSpec(this, _priceChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          cost: evt.target.value
        }, true);
      }
    });

    _defineProperty(this, "setRollupClickHandler", callback => {
      this._callback.rollupClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _rollupClick));
    });

    _classPrivateFieldInitSpec(this, _rollupClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.rollupClick();
      }
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmit));
    });

    _classPrivateFieldInitSpec(this, _formSubmit, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();

        this._callback.formSubmit(this._data);

        this._callback.formSubmit(PointEditView.parseDataToPoint(this._data));
      }
    });

    _classPrivateFieldInitSpec(this, _getChangedDestination, {
      writable: true,
      value: destinationName => {
        const allDestinations = (0,_utils_destinations_js__WEBPACK_IMPORTED_MODULE_1__.destinations)();

        for (let i = 0; i < allDestinations.length; i++) {
          if (allDestinations[i].name === destinationName) {
            return allDestinations[i];
          }
        }

        return {
          'description': null,
          'name': '',
          'pictures': []
        };
      }
    });

    this._data = PointEditView.parsePointToData(_point);

    _classPrivateFieldGet(this, _setInnerHandlers).call(this);
  }

  get template() {
    return createEditNewPointTemplate(this._data);
  }

}

_defineProperty(SiteEditNewPoint, "parsePointToData", point => ({ ...point // В будущем здесь появится обработка Предложений (Offers).

}));

_defineProperty(SiteEditNewPoint, "parseDataToPoint", data => {
  const point = { ...data
  }; // В будущем здесь появится обработка Предложений (Offers).

  return point;
});

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
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




const createTripsSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
              <div class="trip-sort__item  trip-sort__item--day">
                <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_DAY}">
                <label class="trip-sort__btn" for="sort-day">Day</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--event">
                <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
                <label class="trip-sort__btn" for="sort-event">Event</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--time">
                <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time"  data-sort-type="${_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_TIME}">
                <label class="trip-sort__btn" for="sort-time">Time</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--price">
                <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_PRICE}">
                <label class="trip-sort__btn" for="sort-price">Price</label>
              </div>
              <div class="trip-sort__item  trip-sort__item--offer">
                <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
                <label class="trip-sort__btn" for="sort-offer">Offers</label>
              </div>
            </form>`;

var _sortTypeChange = /*#__PURE__*/new WeakMap();

class TripSortTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "SortTypeChangeHandler", callback => {
      this._callback.sortTypeChange = callback;
      this.element.addEventListener('change', _classPrivateFieldGet(this, _sortTypeChange));
    });

    _classPrivateFieldInitSpec(this, _sortTypeChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.sortTypeChange(evt.target.dataset.sortType);
      }
    });
  }

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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");
/* harmony import */ var _utils_offers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/offers.js */ "./src/utils/offers.js");
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
    cost: cost,
    dateFrom: ISOFrom,
    dateTo: ISOTo,
    destination,
    isFavorite: isFavorite,
    type
  } = point;
  const destinationName = destination.name;
  const dayFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('MMM D');
  const dateFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('YYYY-MM-DD');
  const TimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('HH:mm');
  const DatetimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('YYYY-MM-DDTHH:mm');
  const TimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('HH:mm');
  const DatetimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('YYYY-MM-DDTHH:mm');

  const getDuration = (beginTime, endTime) => {
    const getTimeDifference = () => {
      const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginTime).toDate();
      const endDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTime).toDate();
      const resultDict = new Date(endDate - startDate);
      return {
        days: resultDict.getUTCDate() - 1,
        hours: resultDict.getUTCHours(),
        minutes: resultDict.getUTCMinutes()
      };
    };

    const timeDifference = getTimeDifference();
    const resultArray = [];

    if (timeDifference.days !== 0) {
      resultArray[0] = `${String(timeDifference.days).padStart(2, '0')}D`;
    }

    if (timeDifference.hours !== 0) {
      resultArray[1] = `${String(timeDifference.hours).padStart(2, '0')}H`;
    }

    if (timeDifference.minutes !== 0) {
      resultArray[2] = `${String(timeDifference.minutes).padStart(2, '0')}M`;
    }

    return resultArray.join(' ');
  };

  const duration = getDuration(ISOFrom, ISOTo);
  const isFavoriteClass = isFavorite ? ' event__favorite-btn--active' : ''; ///

  const CreateOffers = (pointType, offersByTypes) => {
    const createOfferMarkup = offer => `<li class="event__offer">
                  <span class="event__offer-title">${offer.title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offer.cost}</span>
                </li>`;

    let offersByThemType = [];

    for (let i = 0; i < offersByTypes.length; i++) {
      if (offersByTypes[i].type === pointType) {
        offersByThemType = offersByTypes[i].offers;
      }
    }

    return offersByThemType.map(createOfferMarkup).join('');
  };

  const OffersMarkup = CreateOffers(type, (0,_utils_offers_js__WEBPACK_IMPORTED_MODULE_2__.offersList)());
  return `<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="${dateFrom}">${dayFrom}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${destinationName}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${DatetimeFrom}">${TimeFrom}</time>
      &mdash;
      <time class="event__end-time" datetime="${DatetimeTo}">${TimeTo}</time>
    </p>
    <p class="event__duration">${duration}</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${cost}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">${OffersMarkup}</ul>
  <button class="event__favorite-btn${isFavoriteClass}" type="button">
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

var _favoriteClick = /*#__PURE__*/new WeakMap();

class WaypointTemplate extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: {}
    });

    _defineProperty(this, "editClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClick));
    });

    _defineProperty(this, "favoriteClickHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteClick));
    });

    _classPrivateFieldInitSpec(this, _editClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _classPrivateFieldInitSpec(this, _favoriteClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createWaypointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/smart-view.js":
/*!********************************!*\
  !*** ./src/view/smart-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartView)
/* harmony export */ });
/* harmony import */ var _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/site-abstract-class-view.js */ "./src/view/site-abstract-class-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SmartView extends _view_site_abstract_class_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_data", {});

    _defineProperty(this, "updateData", (update, justDataUpdating) => {
      if (!update) {
        return;
      }

      this._data = { ...this._data,
        ...update
      };

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    });

    _defineProperty(this, "updateElement", () => {
      const prevElement = this.element;
      const parent = prevElement.parentElement;
      this.removeElement();
      const newElement = this.element;
      parent.replaceChild(newElement, prevElement);
      this.restoreHandlers();
    });

    _defineProperty(this, "restoreHandlers", () => {
      throw new Error('Abstract method not implemented: restoreHandlers');
    });
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



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
/* harmony import */ var _view_site_trips_filters_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/site-trips-filters-view.js */ "./src/view/site-trips-filters-view.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/trip-presenter.js */ "./src/presenter/trip-presenter.js");





const pageBodyElement = document.querySelector('.page-body');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const COUNT = 3;
const points = Array.from({
  length: COUNT
}, _mock_point_js__WEBPACK_IMPORTED_MODULE_3__.generatePoint);
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripNavigationElement, new _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]().element, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripFiltersElement, new _view_site_trips_filters_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]().element, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
const tripPresenter = new _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_4__["default"](pageBodyElement);
tripPresenter.init(points);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map