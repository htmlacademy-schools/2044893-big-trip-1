import { RenderPosition, render } from './render.js';
import SiteMenuTemplate from './view/site-menu-view.js';
import TripFiltersTemplate from './view/site-trips-filters-view.js';
import { generatePoint } from './mock/point.js';
import TripPresenter from './presenter/trip-presenter.js';

const pageBodyElement = document.querySelector('.page-body');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');

const COUNT = 3;
const points = Array.from({length: COUNT}, generatePoint);

render(tripNavigationElement, new SiteMenuTemplate().element , RenderPosition.BEFOREEND);
render(tripFiltersElement, new TripFiltersTemplate().element , RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter(pageBodyElement);
tripPresenter.init(points);
