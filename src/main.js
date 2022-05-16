import { RenderPosition, render } from '../render.js';
import SiteMenuTemplate from '../view/site-menu-view.js';
import TripSortTemplate from '../view/site-trips-sort-view.js';
import TripFiltersTemplate from '../view/site-trips-filters-view.js';
import EventsListTemplate from '../view/site-event-list-view';
import WaypointTemplate from '../view/site-waypoint-view.js';
import SiteAddNewPoint from '../view/site-add-new-point-view.js';
import SiteEditNewPoint from '../view/site-edit-new-point-view.js';
import SiteAddFirstPoint from '../view/site-add-first-point-view.js';
import { generatePoint } from '../mock/point.js';

const tripEventsListElement = new EventsListTemplate();
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const COUNT = 3;
const points = Array.from({length: COUNT}, generatePoint);

render(tripNavigationElement, new SiteMenuTemplate().element, RenderPosition.BEFOREEND);
render(tripFiltersElement, new TripFiltersTemplate().element, RenderPosition.BEFOREEND);

if (points.length == 0)
{
  render(tripEventsElement, new SiteAddFirstPoint().element, RenderPosition.BEFOREEND);
}
else 
{
  render(tripEventsElement, new EventsListTemplate().element, RenderPosition.BEFOREEND);
  render(tripEventsElement, new TripSortTemplate().element, RenderPosition.AFTERBEGIN);
  render(tripEventsListElement.element, new SiteAddNewPoint(points[0]).element, RenderPosition.BEFOREEND);
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

  waypointTemplate.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceWaypointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editPoint.element.querySelector('form').addEventListener('submit', (p) => {
    p.preventDefault();
    replaceFormToWaypoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  editPoint.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToWaypoint(); 
  });

  render(pointsList, waypointTemplate.element, RenderPosition.BEFOREEND);
};

createPoint(tripEventsListElement.element, points[1]);
createPoint(tripEventsListElement.element, points[0]);
for (let i = 2; i < COUNT; i++){
  createPoint(tripEventsListElement.element, points[0]);
}
