import { RenderPosition, render } from './render.js';
import SiteMenuTemplate from './view/site-menu-view.js';
import FilterPresenter from './presenter/filter-presenter.js'
import { generatePoint } from './mock/point.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js'
import FilterModel from './model/filter-model.js'

const pageBodyElement = document.querySelector('.page-body');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');

const COUNT = 3;
const points = Array.from({length: COUNT}, generatePoint);
const pointsModel = new PointsModel();
pointsModel.points = points;

const filterModel = new FilterModel();


render(tripNavigationElement, new SiteMenuTemplate().element , RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter(pageBodyElement,pointsModel,filterModel);
const filterPresenter = new FilterPresenter(tripFiltersElement, filterModel);

filterPresenter.init()
tripPresenter.init();

document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    tripPresenter.createPoint();
  });
  
