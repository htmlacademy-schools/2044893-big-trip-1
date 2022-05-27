import { render, RenderPosition } from '../render.js';
import { updateItem } from '../utils.js';
import EventsListTemplate from '../view/site-event-list-view';
import TripSortTemplate from '../view/site-trips-sort-view.js';
import PointPresenter from './point-presenter.js';
import SiteAddFirstPoint from '../view/site-add-first-point-view.js';
import { SortType } from '../utils.js';
import { sortPointByDay } from '../utils.js';
import { sortPointByDuration } from '../utils.js';
import { sortPointByPrice } from '../utils.js';

export default class TripPresenter {
    #tripEventsContainer = null;
    #waypointElement = null;
  
    #tripEventsElement = null;
  
    #tripSortComponent = new TripSortTemplate();
    #siteAddFirstComponent = new SiteAddFirstPoint();
    #tripEventsListElement = new EventsListTemplate();
  

  
    #pointPresenter = new Map();
    #points = [];
    #currentSortType = SortType.SORT_DAY;
    #sourcedPoints = [];

    constructor(tripEventsContainer) {
      this.#tripEventsContainer = tripEventsContainer;
      this.#tripEventsElement = this.#tripEventsContainer.querySelector('.trip-events');
    }
  
    init = (points) => {
      this.#points = [...points];
      this.#sourcedPoints = [...points];
      this.points.forEach(this.#renderPoint());
    };

    #sortTasks = (sortType) => {
      switch (sortType) {
        case SortType.SORT_DAY:
          this.#points.sort(sortPointByDay);
          break;
        case SortType.SORT_TIME:
          this.#points.sort(sortPointByDuration);
          break;
        case SortType.SORT_PRICE:
          this.#points.sort(sortPointByPrice);
          break;
        default:
          this.#points = [...this.#sourcedPoints];
      }
  
      this.#currentSortType = sortType;
    }
  
    #handleSortTypeChange = (sortType) => {
      if (this.#currentSortType === sortType) {
        return;
      }
  
      this.#sortTasks(sortType);
      this.#clearPointList();
      this.#renderEventList();
    }  

    #renderFirstPoint = () => {
        render(this.#tripEventsElement, this.#siteAddFirstComponent, RenderPosition.BEFOREEND);
      };
  
    #handlePointChange = (updatedPoint) => {
      this.#points = updateItem(this.#points, updatedPoint);
      this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
      this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
    };
  
    #handleModeChange = () => {
        this.#pointPresenter.forEach((presenter) => presenter.resetView());
      };
  
    #renderEventList = () => {
      render(this.#tripEventsElement, this.#tripEventsListElement, RenderPosition.BEFOREEND);
    };
  
    #renderSort = () => {
      render(this.#tripEventsElement, this.#tripSortComponent, RenderPosition.AFTERBEGIN);
      this.#tripSortComponent.SortTypeChangeHandler(this.#handleSortTypeChange);
    };
  
    #renderPoint = (point) => {
      const pointPresenter = new PointPresenter(this.#tripEventsListElement, this.#handlePointChange, this.#handleModeChange);
      pointPresenter.init(point);
      this.#pointPresenter.set(point.id, pointPresenter);
    };
  
    #renderPoints = () => {
      for (let i = 1; i < this.#points.length; i++) {
        this.renderPoint(this.#points[i]);
      }
    };
  
    #renderTripStart = () => {
      if (this.#points.length === 0) {
        this.#renderFirstPoint();
      } else {
        this.#renderSort();
        this.#renderEventList();
        this.#sortTasks(this.#currentSortType);
        this.#renderPoints();
      }
    };
  
    #clearPointList = () => {
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();
    };
  }