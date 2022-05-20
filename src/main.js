import { RenderPosition, render } from './render.js';
import SiteMenuTemplate from './view/site-menu-view.js';
import TripSortTemplate from './view/site-trips-sort-view.js';
import TripFiltersTemplate from './view/site-trips-filters-view.js';
import EventsListTemplate from './view/site-event-list-view';
import WaypointTemplate from './view/site-waypoint-view.js';
import SiteAddNewPoint from './view/site-add-new-point-view.js';
import SiteEditNewPoint from './view/site-edit-new-point-view.js';
import SiteAddFirstPoint from './view/site-add-first-point-view.js';
import { generatePoint } from './mock/point.js';

const tripEventsListElement = new EventsListTemplate();
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const COUNT = 3;
const points = Array.from({length: COUNT}, generatePoint);

render(tripNavigationElement, new SiteMenuTemplate().element , RenderPosition.BEFOREEND);
render(tripFiltersElement, new TripFiltersTemplate().element , RenderPosition.BEFOREEND);

if (points.length === 0)
{
  render(tripEventsElement, SiteAddFirstPoint(), RenderPosition.BEFOREEND);
}
else
{
  render(tripEventsElement,new EventsListTemplate().element , RenderPosition.BEFOREEND);
  render(tripEventsElement, new TripSortTemplate(), RenderPosition.AFTERBEGIN);
  render(tripEventsListElement.element,SiteAddNewPoint(points[0]), RenderPosition.BEFOREEND);
}

const createPoint = (pointsList, point) => {
  const waypointTemplate = new WaypointTemplate(point);
  const editPoint = new SiteEditNewPoint(point);

  const replaceWaypointToForm = () => {
    pointsList.replaceChild(editPoint.element, waypointTemplate.element);
  };
  const replaceFormToWaypoint = () => {
    pointsList.replaceChild(waypointTemplate.element, editPoint.element);
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToWaypoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  waypointTemplate.element.editClickHandler(() => {
    replaceWaypointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editPoint.formSubmitHandler(() => {
    replaceFormToWaypoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  editPoint.eventRollUpBtnHandler(() => {
    replaceFormToWaypoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  render(pointsList, waypointTemplate, RenderPosition.BEFOREEND);
};

createPoint(tripEventsListElement, points[1]);
createPoint(tripEventsListElement, points[0]);
for (let i = 2; i < COUNT; i++){
  createPoint(tripEventsListElement, points[i]);
}
