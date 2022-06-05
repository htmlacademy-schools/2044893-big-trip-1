import { render, RenderPosition, remove } from '../render.js';
import EventsListTemplate from '../view/site-event-list-view.js';
import TripSortTemplate from '../view/site-trips-sort-view.js';
import PointPresenter from './point-presenter.js';
import SiteAddFirstPoint from '../view/site-add-first-point-view.js';
import NewPointPresenter from './new-point-presenter.js';
import { filter } from '../utils/utils.js';
import { SortType, UpdateType, FilterType, UserAction } from '../utils/utils.js';
import { sortPointByDay,sortPointByDuration,sortPointByPrice } from '../utils/utils.js';

export default class TripPresenter {
    #mainElement = null; 
    #tripEventsElement = null;
    #pointsModel = null;
    #filterModel = null;
  
    #tripSortComponent = null;
    #siteAddFirstComponent = null;
    #tripEventsListElement = new EventsListTemplate();
  

  
    #pointPresenter = new Map();
    #newPointPresenter = null;

    #currentSortType = SortType.SORT_DAY;
    //#sourcedPoints = [];
    #filterType = FilterType.EVERYTHING;

    constructor(mainElement, pointsModel, filterModel) {
      this.#mainElement = mainElement;
      this.#tripEventsElement = this.#mainElement.querySelector('.trip-events');

      this.#pointsModel = pointsModel;
      this.#filterModel = filterModel;
  
      this.#newPointPresenter = new NewPointPresenter(this.#tripEventsListElement, this.#handleViewAction);
  
      this.#pointsModel.addObserver(this.#handleModelEvent);
      this.#filterModel.addObserver(this.#handleModelEvent);
    }

    get points() {
      this.#filterType = this.#filterModel.filter;
      const points = this.#pointsModel.points;
      const filteredPoints = filter[this.#filterType](points);
  
      switch (this.#currentSortType) {
        case SortType.SORT_DAY:
          return filteredPoints.sort(sortPointByDay);
        case SortType.SORT_TIME:
          return filteredPoints.sort(sortPointByDuration);
        case SortType.SORT_PRICE:
          return filteredPoints.sort(sortPointByPrice);
      }
      return filteredPoints;
    }
    
    init = () => {
      this.#renderMain();
    };

    createPoint = () => {
      this.#currentSortType = SortType.SORT_DAY;
      this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
      this.#newPointPresenter.init();
    }

    #handleModelEvent = (updateType, data) => {
      switch (updateType) {
        case UpdateType.PATCH:
          this.#pointPresenter.get(data.id).init(data);
          break;
        case UpdateType.MINOR:
          this.#clearMain();
          this.#renderMain();
          break;
        case UpdateType.MAJOR:
          this.#clearMain({resetRenderedTaskCount: true, resetSortType: true});
          this.#renderMain();
        break;
      }
    };
  
    
    #renderFirstPoint = () => {
        this.#siteAddFirstComponent = new SiteAddFirstPoint(this.#filterType);
        render(this.#tripEventsElement, this.#siteAddFirstComponent, RenderPosition.BEFOREEND);
      }

    #renderEventList = () => {
        render(this.#tripEventsElement, this.#tripEventsListElement, RenderPosition.BEFOREEND);
      }
  
    #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }

  }
  
    #handleModeChange = () => {
      this.#newPointPresenter.destroy();
        this.#pointPresenter.forEach((presenter) => presenter.resetView());
      };
  
    #handleSortTypeChange = (sortType) => {
      if (this.#currentSortType === sortType) {
        return;
      }
    
      this.#currentSortType = sortType;
      this.#clearPointList();
      this.#renderPoints(this.points);
      this.#clearMain({resetRenderedTaskCount: true});
      this.#renderMain();
      };
  
  
    #renderSort = () => {
      this.#tripSortComponent = new TripSortTemplate(this.#currentSortType);
      this.#tripSortComponent.SortTypeChangeHandler(this.#handleSortTypeChange);
      render(this.#tripEventsElement, this.#tripSortComponent, RenderPosition.AFTERBEGIN);
    };
  
    #renderPoint = (point) => {
      const pointPresenter = new PointPresenter(this.#tripEventsListElement, this.#handleViewAction, this.#handleModeChange);
      pointPresenter.init(point);
      this.#pointPresenter.set(point.id, pointPresenter);
    };
  
    #renderPoints = (points) => {
      points.forEach((point) => this.#renderPoint(point));
  
    }

    #clearMain = ({resetSortType = false} = {}) => {
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();
  
      remove(this.#tripSortComponent);
  
      if (resetSortType) {
        this.#currentSortType = SortType.SORT_DAY;
      }
  
      if (this.#siteAddFirstComponent) {
        remove(this.#siteAddFirstComponent);
      }
    }

    #renderMain = () => {
      const points = this.points;
      const pointCount = points.length;
  
      if (pointCount === 0) {
        this.#renderFirstPoint();
      return;
      }
      this.#renderSort();
      this.#renderEventList();
      this.#renderPoints(points);
    };
  
    #clearPointList = () => {
      this.#newPointPresenter.destroy();
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();
    };
    }
