import { bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import gridCssConfigurationLoader from './css-frameworks/grid-css-configuration-loader';
import { GridCssFrameworkRepository } from './css-frameworks/repository';
import dataRefinerHandler from './data-refiner-handler';
import FilterDataRefiner from './filtering/filter-data-refiner';
import configuration from './configuration';
import inlineEditing from './inline-editing';
import SortDataRefiner from './sorting/sort-data-refiner';
import selection from './selection';

@inject(GridCssFrameworkRepository, Element)
export class Grid {
  @bindable additionalFiltering;
  @bindable class;
  @bindable cssFramework;
  @bindable dataSource;
  @bindable defaultFilter;
  @bindable filterCheckboxButtonClass;
  @bindable filterCheckboxCheckedIconClass;
  @bindable filterCheckboxClearIconClass;
  @bindable filterCheckboxGroupClass;
  @bindable filterCheckboxUncheckedIconClass;
  @bindable filterFormClass;
  @bindable filterFormFieldClass;
  @bindable filterInputGroupClass;
  @bindable filterInputClass;
  @bindable filterSearchIconClass;
  @bindable rowSelected;
  @bindable selectable = 'row';
  @bindable selectableClass;
  @bindable sortAscendingIconClass;
  @bindable sortAvailableIconClass;
  @bindable sortButtonGroupClass;
  @bindable sortButtonClass;
  @bindable sortDescendingIconClass;

  constructor(repository, element) {
    this.columns = [];
    this.dataRefiners = [];
    this.element = element;
    this.itemsCurrentlyEditing = [];
    this.repository = repository;
    this.filteredItems = [];
    Object.assign(this, gridCssConfigurationLoader);
    Object.assign(this, inlineEditing);
    Object.assign(this, selection);
    Object.assign(this, dataRefinerHandler);
    this.addDataRefiners();
  }

  addDataRefiners() {
    let dataRefinerSettings = {
      dataRefinerHandler: this,
      refresh: this.refresh
    };
    this.filterDataRefiner = new FilterDataRefiner(dataRefinerSettings);
    this.sortDataRefiner = new SortDataRefiner(dataRefinerSettings);
    this.addDataRefiner(this.applyAdditionalDataRefining, 9000, false);
    this.addDataRefiner(this.updateFilteredItems, Number.MAX_VALUE, false);
  }

  applyAdditionalDataRefining = (data) => {
    return new Promise(resolve => {
      if (this.additionalFiltering) {
        let filteredData = this.additionalFiltering(data);
        resolve(filteredData);
      } else {
        resolve(data);
      }
    });
  }

  updateFilteredItems = (data) => {
    return new Promise(resolve => {
      this.filteredItems = data;
      resolve(this.filteredItems);
    });
  }

  addColumn(column) {
    this.columns.push(column);
    this.hasFilters = this.hasFilters || (column.filterable !== null && column.filterable !== undefined);
  }

  bind(bindingContext) {
    this.dataSource = this.dataSource || bindingContext.items;
    if (!this.dataSource) {
      throw new Error('The data-source is not undefined.');
    }

    this.loadCssConfiguration();
    this.refresh();
  }

  refresh = () => {
    this.applyDataRefiners(this.dataSource);
  }

  attached() {
    if (this.selectable !== 'false') {
      this.handleEvents();
    }
  }

  dataSourceChanged() {
    this.refresh();
  }

  getFilterStrategy(column) {
    let strategyTemplate = column.filterable || this.defaultFilter || configuration.defaultFilterStrategy;
    let strategyType = typeof(strategyTemplate);
    let strategy = strategyTemplate;

    if (strategyType === 'string') {
      let filterStrategies = configuration.filterStrategies.filter(filter => {
        return filter.name.toLowerCase() === strategyTemplate.toLowerCase();
      });

      if (filterStrategies.length === 0) {
        throw Error(`The filter '${strategyTemplate}' cannot be found.`);
      }
      strategy = filterStrategies[filterStrategies.length - 1].strategy;
    }
    return strategy;
  }
}
