import TripFiltersTemplate from '../view/site-trips-filters-view.js';
import { render, RenderPosition, replace, remove } from '../render.js';
import { UpdateType,FilterType } from '../utils/utils.js';
export default class FilterPresenter {
    #filterContainer = null;
    #filterModel = null;
    #pointsModel = null;

    #filterComponent = null;

    constructor(filterContainer, filterModel, tasksModel) {
      this.#filterContainer = filterContainer;
      this.#filterModel = filterModel;
      this.#pointsModel = tasksModel;
    }

    get filters() {
      return ['everything', 'future', 'past'];
    }

    init = () => {
      const filters = this.filters;
      const previousFilter = this.#filterComponent;

      this.#filterComponent = new TripFiltersTemplate(filters, this.#filterModel.filter);
      this.#filterComponent.FilterTypeChangeHandler(this.#FilterTypeChange);
      this.#pointsModel.addObserver(this.#ModelEvent);
      this.#filterModel.addObserver(this.#ModelEvent);
      if (previousFilter === null) {
        render(this.#filterContainer, this.#filterComponent, RenderPosition.BEFOREEND);
        return;
      }

      replace(this.#filterComponent, previousFilter);
      remove(previousFilter);
    }

    #ModelEvent = () => {
      this.init();
    }

    destroy = () => {
      remove(this.#filterComponent);
      this.#filterComponent = null;
  
      this.#pointsModel.removeObserver(this.#ModelEvent);
      this.#filterModel.removeObserver(this.#ModelEvent);
  
      this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    }

    #FilterTypeChange = (filterType) => {
      if (this.#filterModel.filter === filterType) {
        return;
      }

      this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
    }
}