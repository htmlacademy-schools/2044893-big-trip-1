import { render, RenderPosition, remove } from '../render.js';
import EventsListTemplate from '../view/site-event-list-view.js';
import TripSortTemplate from '../view/site-trips-sort-view.js';
import PointPresenter, {State as PointPresenterViewState}  from './point-presenter.js';
import SiteAddFirstPoint from '../view/site-add-first-point-view.js';
import NewPointPresenter from './new-point-presenter.js';
import { filter } from '../utils/utils.js';
import { SortType, UpdateType, FilterType, UserAction } from '../utils/utils.js';
import { sortPointByDay,sortPointByDuration,sortPointByPrice } from '../utils/utils.js';
import AbstractObservable from '../utils/utils.js';
//import SiteAddNewPoint from '../view/site-add-new-point-view.js';
import LoadingView from '../view/loading-view.js';

export default class TripPresenter {
    #apiService = null;
    #mainElement = null; 
    #tableContainer = null;
    #pointsModel = null;
    #filterModel = null;
  
    #tripSortComponent = null;
    #siteAddFirstComponent = null;
    #EventListComponent = new EventsListTemplate();
    #loadingComponent = new LoadingView();
  

  
    #pointPresenter = new Map();
    #newPointPresenter = null;

    #currentSortType = SortType.SORT_DAY;
    //#sourcedPoints = [];
    #filterType = FilterType.EVERYTHING;
    #isLoading = true;
    #destinations = null;
    #offers = null;

    constructor(mainElement, pointsModel, filterModel, apiService) {
      this.#mainElement = mainElement;
      this.#tableContainer = this.#mainElement.querySelector('.trip-events');

      this.#pointsModel = pointsModel;
      this.#filterModel = filterModel;
      this.apiService = apiService;
  
      this.#newPointPresenter = new NewPointPresenter(this.#EventListComponent, this.#handleViewAction);
  
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
    
    init = async () => {
      try {
        this.#destinations = await this.#apiService.destinations;
      } catch(err) {
        this.#destinations = [];
      }
  
      try {
        this.#offers = await this.#apiService.offers;
      } catch(err) {
        this.#offers = [];
      }

      this.#pointsModel.addObserver(this.#handleModelEvent);
      this.#filterModel.addObserver(this.#handleModelEvent);
      this.#renderMain();
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
          this.#clearMain(true);
          this.#renderMain();
        break;
        case UpdateType.INIT:
          this.#isLoading = false;
          remove(this.#loadingComponent);
          this.#renderMain();
          break;
      }
    };
  
    
    destroy = () => {
      this.#clearMain(true);

      this.#pointsModel.removeObserver(this.#handleModelEvent);
      this.#filterModel.removeObserver(this.#handleModelEvent);
    }

    createPoint = (callback) => {
      this.#clearMain();
      this.#renderMain();
      this.#newPointPresenter.init(callback, this.#destinations, this.#offers);
    }
  
    #handleViewAction = async (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenter.get(update.id).setViewState(PointPresenterViewState.SAVING);
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch(err) {
          this.#pointPresenter.get(update.id).setViewState(PointPresenterViewState.ABORTING);
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch(err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenter.get(update.id).setViewState(PointPresenterViewState.DELETING);
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch(err) {
          this.#pointPresenter.get(update.id).setViewState(PointPresenterViewState.ABORTING);
        }
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
    
      this.#clearMain();
      this.#renderMain();
      };
  
  
    #renderSort = () => {
      this.#tripSortComponent = new TripSortTemplate(this.#currentSortType);
      this.#tripSortComponent.SortTypeChangeHandler(this.#handleSortTypeChange);

      render(this.#tableContainer, this.#tripSortComponent, RenderPosition.AFTERBEGIN);
    };
  
    #renderPoint = (point) => {
      const pointPresenter = new PointPresenter(this.#EventListComponent, this.#handleViewAction, this.#handleModeChange, this.#destinations, this.#offers);
      pointPresenter.init(point);
      this.#pointPresenter.set(point.id, pointPresenter);
    };

    #renderLoading = () => {
      render(this.#tableContainer, this.#loadingComponent, RenderPosition.AFTERBEGIN);
    }
    
    #renderPoints = (points) => {
      points.forEach((point) => this.#renderPoint(point));
  
    }

    #clearMain = (resetSortType = false) => {
      this.#newPointPresenter.destroy();
      this.#pointPresenter.forEach((presenter) => presenter.destroy());
      this.#pointPresenter.clear();

  
      remove(this.#tripSortComponent);
      remove(this.#loadingComponent);
      remove(this.#EventListComponent);


      if (this.#siteAddFirstComponent) {
        remove(this.#siteAddFirstComponent);
      }
  
      if (resetSortType) {
        this.#currentSortType = SortType.SORT_DAY;
      }
    }

    #renderFirstPoint = () => {
      this.#siteAddFirstComponent = new SiteAddFirstPoint(this.#filterType);
      render(this.#EventListComponent, this.#siteAddFirstComponent, RenderPosition.AFTERBEGIN);

    }

    #renderMain = () => {
      if (this.#isLoading) {
        this.#renderLoading();
        return;
      }
      render(this.#tableContainer,this.#EventListComponent,RenderPosition.BEFOREEND)
      
      const points = this.points;
      const pointCount = points.length;
  
      if (pointCount === 0) {
        this.#renderFirstPoint();
      return;
      }
      this.#renderSort();
      this.#renderPoints(points);

    };
  }
