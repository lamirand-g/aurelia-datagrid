import { bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { GridCssFrameworkRepository } from './css-frameworks/repository';
import FilterEngine from './filtering/filter-engine';
import Sorter from './sorting/sorter';
import configuration from './grid-configuration';

@inject(GridCssFrameworkRepository)
export class Grid {
  @bindable class;
  @bindable cssFramework;
  @bindable dataSource;
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
    this.itemsCurrentlyEditing = [];
    this.repository = repository;
    this.filteredItems = [];
    this.filterEngine = new FilterEngine({
      model: this,
      filtersApplied: this.filtersApplied
    });
    this.sorter = new Sorter(this);
  }

  filtersApplied = (filteredItems) => {
    this.filteredItems = filteredItems;
  }

  addColumn(column) {
    this.columns.push(column);
  }

  bind(bindingContext) {
    this.$parent = bindingContext;
    this.items = this.dataSource || bindingContext.items || [];
    this.cssFrameworkConfiguration = this.repository.get(this.cssFramework);

    this.loadCssFrameworkSettings();
    this.filterEngine.applyFilters();
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
    this.items = this.dataSource || this.$parent.items || [];
    this.filterEngine.applyFilters();
  }

  getFilterStrategy(column) {
    let strategyTemplate = column.filterable || configuration.defaultFilter;
    let strategyType = typeof(strategyTemplate);
    let strategy = strategyType;

    if (strategyType === 'string') {
      let filter = configuration.filters.find(fil => {
        return fil.name.toLowerCase() === strategyTemplate.toLowerCase();
      });

      if (!filter) {
        throw Error(`The filter '${strategyTemplate}' cannot be found.`);
      }
      strategy = filter.strategy;
    }
    return strategy;
  }
}
