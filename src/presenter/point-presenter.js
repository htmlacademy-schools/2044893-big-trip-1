import { RenderPosition, render, replace, remove } from '../render';
import SiteEditNewPoint from '../view/site-edit-new-point-view.js';
import WaypointTemplate from '../view/site-waypoint-view.js';

const Mode = {
    DEFAULT: 'DEFAULT',
    EDITING: 'EDITING',
  };
  
  export default class WaypointPresenter {
    #waypointContainer = null;
    #changeData = null;
    #changeMode = null;
  
    #waypointTemplateComponent = null;
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
      const prevWaypointComponent = this.#waypointTemplateComponent;
      const prevEditPointComponent = this.#editPointComponent;
      this.#waypointTemplateComponent = new WaypointTemplate(waypoint);
      this.#editPointComponent = new SiteEditNewPoint(waypoint);
  
      this.#waypointTemplateComponent.editClickHandler(this.#editClick);
      this.#waypointTemplateComponent.favoriteClickHandler(this.#favoriteClick);
      this.#editPointComponent.eventRollUpBtnHandler(this.#RollUpBtnClick);
      this.#editPointComponent.formSubmitHandler(this.#formSubmit);
  
      if (prevWaypointComponent === null || prevEditPointComponent === null) {
        render(this.#waypointContainer, this.#waypointTemplateComponent, RenderPosition.BEFOREEND);
        return;
      }
  
      if (this.#mode === Mode.DEFAULT) {
        replace(this.#waypointTemplateComponent, prevWaypointComponent);
      }
  
      if (this.#mode === Mode.EDITING) {
        replace(this.#editPointComponent, prevEditPointComponent);
      }
  
      remove(prevWaypointComponent);
      remove(prevEditPointComponent);
    };
  
    destroy = () => {
      remove(this.#waypointTemplateComponent);
      remove(this.#editPointComponent);
    };
  
    resetView = () => {
      if (this.#mode !== Mode.DEFAULT) {
        this.#replaceFormToWaypoint();
      }
    };
  
    #replaceWaypointToForm = () => {
      replace(this.#editPointComponent, this.#waypointTemplateComponent);
      document.addEventListener('keydown', this.#escKeyDownHandler);
      this.#changeMode();
      this.#mode = Mode.EDITING;
    };
  
    #replaceFormToWaypoint = () => {
      replace(this.#waypointTemplateComponent, this.#editPointComponent);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
      this.#mode = Mode.DEFAULT;
    };
  
    #escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#replaceFormToWaypoint();
      }
    };
  
    #RollUpBtnClick = () => {
      this.#replaceFormToWaypoint();
    };
  
    #formSubmit = (pnt) => {
      this.#changeData(pnt);
      this.#replaceFormToWaypoint();
    };
  
    #editClick = () => {
      this.#replaceWaypointToForm();
    };
  
    #favoriteClick = () => {
      this.#changeData({...this.#waypoint, isFavorite: !this.#waypoint.isFavorite});
    };
  }