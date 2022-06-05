import TripFiltersTemplate from '../view/site-trips-filters-view.js';
import { render, RenderPosition, replace, remove } from '../render.js';
import { UpdateType } from '../utils/utils.js';
export default class FilterPresenter {
    #filterContainer = null;
    #filterModel = null;
    #tasksModel = null;

    #filterComponent = null;

    constructor(filterContainer, filterModel, tasksModel) {
      this.#filterContainer = filterContainer;
      this.#filterModel = filterModel;
      this.#tasksModel = tasksModel;

      this.#filterModel.addObserver(this.#ModelEvent);
    }

    get filters() {
      return ['everything', 'future', 'past'];
    }

    init = () => {
      const filters = this.filters;
      const previousFilter = this.#filterComponent;

      this.#filterComponent = new TripFiltersTemplate(filters, this.#filterModel.filter);
      this.#filterComponent.FilterTypeChangeHandler(this.#FilterTypeChange);

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

    #FilterTypeChange = (filterType) => {
      if (this.#filterModel.filter === filterType) {
        return;
      }

      this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
    }
}