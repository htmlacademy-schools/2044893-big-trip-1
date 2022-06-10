import { remove, render, RenderPosition } from '../render';
import SiteAddNewPoint from '../view/site-add-new-point-view.js';
import { UserAction, UpdateType } from '../utils/utils.js';

export default class NewPointPresenter{
    #pointsList = null;
    #changeData = null;
    #addPointItem = null;
    #destroyCallback = null;

    #offers = null;
    #destinations = null;

    constructor(pointsList, changeData) {
      this.#pointsList = pointsList;
      this.#changeData = changeData;
    }

    init = (callback,destinations,offers) => {
      this.#destroyCallback = callback;

      if (this.#addPointItem !== null) {
        return;
      }
      
      this.#destinations = destinations;
      this.#offers = offers;

      this.#addPointItem = new SiteAddNewPoint(this.#destinations,this.#offers);
      this.#addPointItem.FormSubmitHandler(this.#FormSubmit);
      this.#addPointItem.DeleteClickHandler(this.#DeleteClick);

      render(this.#pointsList, this.#addPointItem, RenderPosition.AFTERBEGIN);

      document.addEventListener('keydown', this.#escKeyDown);
    }

    destroy = () => {
      if (this.#addPointItem === null) {
        return;
      }
      this.#destroyCallback?.();
      remove(this.#addPointItem);
      this.#addPointItem = null;

      document.removeEventListener('keydown', this.#escKeyDown);
    }

    #FormSubmit = (point) => {
      this.#changeData(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        point
      );
      this.destroy();
    }

    #DeleteClick = () => {
      this.destroy();
    }

    #escKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.destroy();
      }
    }
}
