import { remove, render, RenderPosition } from '../render';
import SiteAddNewPoint from '../view/site-add-new-point-view.js';
import { nanoid } from 'nanoid';
import { UserAction, UpdateType } from '../utils/utils.js';

export default class NewPointPresenter{
    #pointsList = null;
    #changeData = null;
    #addPointItem = null;

    constructor(pointsList, changeData) {
      this.#pointsList = pointsList;
      this.#changeData = changeData;
    }

    init = () => {
      if (this.#addPointItem !== null) {
        return;
      }

      this.#addPointItem = new SiteAddNewPoint();
      this.#addPointItem.FormSubmitHandler(this.#FormSubmit);
      this.#addPointItem.DeleteClickHandler(this.#DeleteClick);

      render(this.#pointsList, this.#addPointItem, RenderPosition.AFTERBEGIN);

      document.addEventListener('keydown', this.#escKeyDown);
    }

    destroy = () => {
      if (this.#addPointItem === null) {
        return;
      }

      remove(this.#addPointItem);
      this.#addPointItem = null;

      document.removeEventListener('keydown', this.#escKeyDown);
    }

    #FormSubmit = (task) => {
      this.#changeData(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        {id: nanoid(), ...task},
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
