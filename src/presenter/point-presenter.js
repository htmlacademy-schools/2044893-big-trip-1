import { RenderPosition, render, replace, remove } from '../render';
import SiteEditNewPoint from '../view/site-edit-new-point-view.js';
import WaypointTemplate from '../view/site-waypoint-view.js';
import { UserAction, UpdateType } from '../utils/utils.js';
import { dateEquality } from '../utils/utils.js';

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
  
    constructor(waypointContainer, changeData, changeMode) {
      this.#waypointContainer = waypointContainer;
      this.#changeData = changeData;
      this.#changeMode = changeMode;
    }
  
    init = (waypoint) => {
      this.#waypoint = waypoint;
      const prevWaypointComponent = this.#waypointComponent;
      const prevEditPointComponent = this.#editPointComponent;
      this.#waypointComponent = new WaypointTemplate(waypoint);
      this.#editPointComponent = new SiteEditNewPoint(waypoint);
  
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
        replace(this.#editPointComponent, prevEditPointComponent);
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
      this.#replaceFormToWaypoint();
    };
  
    #editClick = () => {
      this.#replaceWaypointToForm();
    };
  
    #favoriteClick = () => {
      this.#changeData(
        UserAction.UPDATE_POINT,
        UpdateType.MINOR,
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
  