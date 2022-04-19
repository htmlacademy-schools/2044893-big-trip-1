import {renderTemplate, RenderPosition} from './render.js';
import {createEditForm} from './view/edit-form.js';
import {createSiteEventsList} from './view/event-list.js';
import {createTripsFilters} from './view/trips-filters.js';
import {createTripsNavigation} from './view/trips-navigation.js';
import {createTripsSort} from './view/trips-sort.js';
import {createWaypoint} from './view/waypoints.js';
import {createMenu} from './view/menu.js';
import {generateWaypoint} from './mock/waypoint.js';

const tripEvents = document.querySelector('.trip-events');
const tripEventsList = document.querySelector('.trip-events__list');
const filters = document.querySelector('.trip-controls__filters');
const navigation = document.querySelector('.trip-controls__navigation');
const menu = document.querySelector('.trip-main');
const count = 3;
const waypoints = Array.from({length: count}, generateWaypoint);

renderTemplate(tripEvents, createSiteEventsList(), RenderPosition.BEFOREEND);
renderTemplate(navigation, createTripsNavigation(), RenderPosition.BEFOREEND);
for (let i = 0; i < count; i++) 
  {
    renderTemplate(tripEventsList, createWaypoint(waypoints[i]), RenderPosition.BEFOREEND);
  }
  renderTemplate(menu, createMenu(), RenderPosition.AFTERBEGIN);
  renderTemplate(tripEvents, createTripsSort(), RenderPosition.AFTERBEGIN);
  renderTemplate(tripEventsList, createEditForm(waypoints[i]), RenderPosition.AFTERBEGIN);
  renderTemplate(filters, createTripsFilters(), RenderPosition.BEFOREEND);
