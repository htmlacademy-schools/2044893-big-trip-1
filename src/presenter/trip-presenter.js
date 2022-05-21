import { render, RenderPosition } from '../render.js';
import { updateItem } from '../utils.js';
import EventsListTemplate from '../view/site-event-list-view';
import TripSortTemplate from '../view/site-trips-sort-view.js';
import PointPresenter from './point-presenter.js';
import SiteAddFirstPoint from '../view/site-add-first-point-view.js';

export default class TripPresenter {
    #tripEventsContainer = null;
    waypointElement = null;
  
    #tripEventsElement = null;
  
    #tripSortComponent = new TripSortTemplate();
    #siteAddFirstComponent = new SiteAddFirstPoint();
    #tripEventsListElement = new EventsListTemplate();
  
    #points = [];
  
    #pointPresenter = new Map();
  
    constructor(tripEventsContainer) {
      this.#tripEventsContainer = tripEventsContainer;
      this.#tripEventsElement = this.#tripEventsContainer.querySelector('.trip-events');
    }
  
    init = (points) => {
      this.#points = [...points];
      this.#renderPoint();
    };

    #renderFirstPoint = () => {
        render(this.#tripEventsElement, this.#siteAddFirstComponent, RenderPosition.BEFOREEND);
      };
  
    #handlePointChange = (updatedPoint) => {
      this.#points = updateItem(this.#points, updatedPoint);
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
        this.#renderPoints();
      }
    };
  
    #clearPointList = () => {
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();
    };
  }