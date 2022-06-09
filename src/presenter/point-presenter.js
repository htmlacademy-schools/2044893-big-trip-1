import { RenderPosition, render, replace, remove } from '../render';
import SiteEditNewPoint from '../view/site-edit-new-point-view.js';
import WaypointTemplate from '../view/site-waypoint-view.js';
import { UserAction, UpdateType } from '../utils/utils.js';
import { dateEquality } from '../utils/utils.js';

export const State = {
  SAVING: 'SAVING',
  DELETING: 'DELETING',
  ABORTING: 'ABORTING'
};

const Mode = {
    DEFAULT: 'DEFAULT',
    EDITING: 'EDITING',
  };
  
  export default class WaypointPresenter {
    #waypointContainer = null;
    #changeData = null;
    #changeMode = null;
  
    #waypointComponent = null;
    #editPointComponent = null;
    #waypoint = null;
    #mode = Mode.DEFAULT;
    #destinations = null;
    #allOffers = null;

    constructor(waypointContainer, changeData, changeMode, destinations, allOffers) {
      this.#waypointContainer = waypointContainer;
      this.#changeData = changeData;
      this.#changeMode = changeMode;
      this.#destinations = destinations;
      this.#allOffers = allOffers;
    }
  
    init = (waypoint) => {
      this.#waypoint = waypoint;
      const prevWaypointComponent = this.#waypointComponent;
      const prevEditPointComponent = this.#editPointComponent;
      this.#waypointComponent = new WaypointTemplate(waypoint);
      this.#editPointComponent = new SiteEditNewPoint(waypoint, this.#destinations, this.#allOffers);
  
      this.#waypointComponent.editClickHandler(this.#editClick);
      this.#waypointComponent.favoriteClickHandler(this.#favoriteClick);
      this.#editPointComponent.eventRollUpBtnHandler(this.#RollUpBtnClick);
      this.#editPointComponent.formSubmitHandler(this.#formSubmit);
      this.#editPointComponent.deleteClickHandler(this.#deleteClick);
  
      if (prevWaypointComponent === null || prevEditPointComponent === null) {
        render(this.#waypointContainer, this.#waypointComponent, RenderPosition.BEFOREEND);
        return;
      }
  
      if (this.#mode === Mode.DEFAULT) {
        replace(this.#waypointComponent, prevWaypointComponent);
      }
  
      if (this.#mode === Mode.EDITING) {
        replace(this.#waypointComponent, prevEditPointComponent);
        this.#mode = Mode.DEFAULT;
      }
  
      remove(prevWaypointComponent);
      remove(prevEditPointComponent);
    };
  
    destroy = () => {
      remove(this.#waypointComponent);
      remove(this.#editPointComponent);
    };
  
    resetView = () => {
      if (this.#mode !== Mode.DEFAULT) {
        this.#editPointComponent.reset(this.#waypoint);
        this.#replaceFormToWaypoint();
      }
    };

    setViewState = (state) => {
      if (this.#mode === Mode.DEFAULT) {
        return;
      }
  
      const resetFormState = () => {
        this.#editPointComponent.updateData({
          isDisabled: false,
          isSaving: false,
          isDeleting: false,
        });
      };
  
      switch (state) {
        case State.SAVING:
          this.#editPointComponent.updateData({
            isDisabled: true,
            isSaving: true,
          });
          break;
        case State.DELETING:
          this.#editPointComponent.updateData({
            isDisabled: true,
            isDeleting: true,
          });
          break;
        case State.ABORTING:
          this.#waypointComponent.shake(resetFormState);
          this.#editPointComponent.shake(resetFormState);
          break;
      }
    }
  
    #replaceWaypointToForm = () => {
      replace(this.#editPointComponent, this.#waypointComponent);
      document.addEventListener('keydown', this.#escKeyDownHandler);
      this.#changeMode();
      this.#mode = Mode.EDITING;
    };
  
    #replaceFormToWaypoint = () => {
      replace(this.#waypointComponent, this.#editPointComponent);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
      this.#mode = Mode.DEFAULT;
    };
  
    #escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#editPointComponent.reset(this.#waypoint);
        this.#replaceFormToWaypoint();
      }
    };
  
    #RollUpBtnClick = () => {
      this.#editPointComponent.reset(this.#waypoint);
      this.#replaceFormToWaypoint();
    };
  
    #formSubmit = (update) => {
      const isMinorUpdate =
       !dateEquality(this.#waypoint.dateFrom, update.dateFrom) ||
       !dateEquality(this.#waypoint.dateTo, update.dateTo) ||
       (this.#waypoint.cost !== update.cost);

      this.#changeData(
        UserAction.UPDATE_POINT,
        isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
        update,
      );
    };
  
    #editClick = () => {
      this.#replaceWaypointToForm();
    };
  
    #favoriteClick = () => {
      this.#changeData(
        UserAction.UPDATE_POINT,
        UpdateType.PATCH,
        {...this.#waypoint, isFavorite: !this.#waypoint.isFavorite}
      );
    };

    #deleteClick = (task) => {
      this.#changeData(
        UserAction.DELETE_POINT,
        UpdateType.MINOR,
        task,
      );
    }
  }
  
  