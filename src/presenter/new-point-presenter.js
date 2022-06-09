import { remove, render, RenderPosition } from '../render';
import SiteAddNewPoint from '../view/site-add-new-point-view.js';
import { UserAction, UpdateType } from '../utils/utils.js';

export default class NewPointPresenter{
    #pointsList = null;
    #changeData = null;
    #addPointItem = null;
    #destroyCallback = null;

    #allOffers = null;
    #destinations = null;

    constructor(pointsList, changeData) {
      this.#pointsList = pointsList;
      this.#changeData = changeData;
    }

    init = (callback,destinations,allOffers) => {
      this.#destroyCallback = callback;

      if (this.#addPointItem !== null) {
        return;
      }
      
      this.#destinations = destinations;
      this.#allOffers = allOffers;

      this.#addPointItem = new SiteAddNewPoint(this.#destinations,this.#allOffers);
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
      document.querySelector('.trip-main__event-add-btn').disabled = false;
    }
    
    setSaving = () => {
      this.#addPointItem.updateData({
        isDisabled: true,
        isSaving: true,
      });
    }
  
    setAborting = () => {
      const resetFormState = () => {
        this.#addPointItem.updateData({
          isDisabled: false,
          isSaving: false,
          isDeleting: false,
        });
      };
  
      this.#addPointItem.shake(resetFormState);
    }

    #FormSubmit = (point) => {
      this.#changeData(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        point
      );
      document.querySelector('.trip-main__event-add-btn').disabled = false;
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
