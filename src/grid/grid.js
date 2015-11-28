import { bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { GridCssFrameworkRepository } from './css-frameworks/repository';
import FilterEngine from './filtering/filter-engine';
import Sorter from './sorting/sorter';
import configuration from './grid-configuration';
import dataRefinerHandler from './data-refiner-handler';

@inject(GridCssFrameworkRepository)
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
  @bindable sortAscendingIconClass;
  @bindable sortAvailableIconClass;
  @bindable sortButtonGroupClass;
  @bindable sortButtonClass;
  @bindable sortDescendingIconClass;

  constructor(repository) {
    this.columns = [];
    this.dataRefiners = [];
    this.itemsCurrentlyEditing = [];
    this.repository = repository;
    this.filteredItems = [];
    this.filterEngine = new FilterEngine({
      model: this,
      filtersChanged: this.refresh
    });
    this.sorter = new Sorter(this);

    Object.assign(this, dataRefinerHandler);
    this.addDataRefiner(this.filterEngine.applyFilters, 1000, false);
    this.addDataRefiner(this.sorter.applySort, 2000, false);
    this.addDataRefiner(this.applyAdditionalFiltering, 9000, false);
    this.addDataRefiner(this.updateFilteredItems, Number.MAX_VALUE, false);
  }

  applyAdditionalFiltering = (data) => {
    return new Promise(resolve => {
      let filteredData = data;
      if (this.additionalFiltering) {
        filteredData = this.additionalFiltering(data);
      };

      resolve(filteredData);
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
  }

  bind(bindingContext) {
    this.$parent = bindingContext;
    this.dataSource = this.dataSource || bindingContext.items;
    if (!this.dataSource) {
      throw new Error('The data-source is not undefined.');
    }

    this.cssFrameworkConfiguration = this.repository.get(this.cssFramework);

    this.loadCssFrameworkSettings();
    this.refresh();
  }

  refresh = () => {
    this.applyDataRefiners(this.dataSource);
  }

  loadCssFrameworkSettings() {
    this.cssFramework = this.cssFrameworkConfiguration.name;
    this.class = this.class || this.cssFrameworkConfiguration.gridClasses.table;
    this.loadFilterCssFrameworkSettings();
    this.loadSortCssFrameworkSettings();
  }

  loadFilterCssFrameworkSettings() {
    let settings = this.cssFrameworkConfiguration.gridClasses;

    this.filterCheckboxButtonClass = settings.filterCheckboxButton;
    this.filterCheckboxCheckedIconClass = settings.filterCheckboxCheckedIcon;
    this.filterCheckboxClearIconClass = settings.filterCheckboxClearIcon;
    this.filterCheckboxFormFieldGroupClass = settings.filterCheckboxFormFieldGroup;
    this.filterCheckboxGroupClass = settings.filterCheckboxGroup;
    this.filterCheckboxUncheckedIconClass = settings.filterCheckboxUncheckedIcon;
    this.filterFormClass = settings.filterForm;
    this.filterFormFieldClass = settings.filterFormField;
    this.filterInputGroupClass = settings.filterInputGroup;
    this.filterInputClass = settings.filterInput;
    this.filterSearchIconClass = settings.filterSearchIcon;
  }

  loadSortCssFrameworkSettings() {
    let settings = this.cssFrameworkConfiguration.gridClasses;

    this.sortAscendingIconClass = settings.sortAscendingIcon;
    this.sortAvailableIconClass = settings.sortAvailableIcon;
    this.sortButtonGroupClass = settings.sortButtonGroup;
    this.sortButtonClass = settings.sortButton;
    this.sortDescendingIconClass = settings.sortDescendingIcon;
  }

  beginEditingItem = (item) => {
    this.itemsCurrentlyEditing.push(item);
  }

  isEditingItem  = (item) => {
    return this.itemsCurrentlyEditing.some(editing => editing === item);
  }

  finishEditingItem = (item) => {
    let index = this.itemsCurrentlyEditing.indexOf(item);
    this.itemsCurrentlyEditing.splice(index, 1);
  }

  dataSourceChanged() {
    this.refresh();
  }

  getFilterStrategy(column) {
    let strategyTemplate = column.filterable || this.defaultFilter || configuration.defaultFilterStrategy;
    let strategyType = typeof(strategyTemplate);
    let strategy = strategyTemplate;

    if (strategyType === 'string') {
      let filterStrategies = configuration.filterStrategies.filter(fil => {
        return fil.name.toLowerCase() === strategyTemplate.toLowerCase();
      });

      if (filterStrategies.length === 0) {
        throw Error(`The filter '${strategyTemplate}' cannot be found.`);
      }
      strategy = filterStrategies[filterStrategies.length - 1].strategy;
    }
    return strategy;
  }
}
