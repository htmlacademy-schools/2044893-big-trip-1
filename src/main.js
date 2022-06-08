import { RenderPosition, render, remove } from './render.js';
import SiteMenuTemplate from './view/site-menu-view.js';
import FilterPresenter from './presenter/filter-presenter.js'
import { generatePoint } from './mock/point.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import StatsView from './view/stats-view.js';
import { MenuItem } from './utils/utils.js';

const pageBodyElement = document.querySelector('.page-body');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');

const COUNT = 3;
const points = Array.from({length: COUNT}, generatePoint);
const pointsModel = new PointsModel();
pointsModel.points = points;

const filterModel = new FilterModel();

const siteMenuComponent = new SiteMenuTemplate();
render(tripNavigationElement, new siteMenuComponent , RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter(pageBodyElement,pointsModel,filterModel);
const filterPresenter = new FilterPresenter(tripFiltersElement, filterModel, pointsModel);

let mode = 'TABLE';

const PointNewFormClose = () => {
  siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.TABLE}]`).classList.remove('visually-hidden');
  siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.STATS}]`).classList.remove('visually-hidden');
};

let statisticsComponent = null;

const SiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      if (mode !== 'TABLE') {
        filterPresenter.init();
        tripPresenter.init();
        remove(statisticsComponent);
        mode = 'TABLE';
      }
      break;
    case MenuItem.STATS:
      if (mode !== 'STATS') {
        filterPresenter.destroy();
        tripPresenter.destroy();
        statisticsComponent = new StatsView(pointsModel.points);
        render(pageBodyElement, statisticsComponent, RenderPosition.BEFOREEND);
        mode = 'STATS';
      }
      break;
  }
};

siteMenuComponent.MenuClickHandler(SiteMenuClick);
filterPresenter.init()
tripPresenter.init();

document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    remove(statisticsComponent);
    filterPresenter.destroy();
    filterPresenter.init();
    tripPresenter.destroy();
    tripPresenter.init();
    tripPresenter.createPoint(PointNewFormClose);
    siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.TABLE}]`).classList.add('visually-hidden');
    siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.STATS}]`).classList.add('visually-hidden');
    mode = 'TABLE';
  });
  
