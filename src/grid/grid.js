import debounce from "lodash/function/debounce";
import GridConstants  from "./grid-constants";
import { GridCssFrameworkRepository } from "./css-frameworks/repository";
import { bindable, inject, ObserverLocator } from "aurelia-framework";

export function configure(config){
    console.log('conf');
}

@inject(ObserverLocator, GridCssFrameworkRepository)
export class Grid {
    
    @bindable class;
    @bindable cssFrameworkName;
    @bindable items;
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

    constructor(observerLocator, repository) {
        this.columns = [];
        this.observerLocator = observerLocator;
        this.repository = repository;
    }

    addColumn(column) {
        this.columns.push(column);
    }

    applyFilter(filter) {
        if (this.$parent.applyFilter) {
            this.$parent.applyFilter(filter);
        }
    }

    applySort(sort) {
        this.updateSort(sort);

        if (this.$parent.applySort) {
            this.$parent.applySort(sort);
        }
    }

    bind(bindingContext) {
        this.$parent = bindingContext;
        this.items = bindingContext.items || [];
        this.cssFramework = this.repository.get(this.cssFrameworkName);

        this.loadCssFrameworkSettings();
        this.observeFilters();
    }

    loadCssFrameworkSettings() {
        this.class = this.cssFramework.gridClasses.table;
        this.loadFilterCssFrameworkSettings();
        this.loadSortCssFrameworkSettings();
    }

    loadFilterCssFrameworkSettings() {
        let settings = this.cssFramework.gridClasses;

        this.filterCheckboxButtonClass = settings.filterCheckboxButton;
        this.filterCheckboxCheckedIconClass = settings.filterCheckboxCheckedIcon;
        this.filterCheckboxClearIconClass = settings.filterCheckboxClearIcon;
        this.filterCheckboxGroupClass = settings.filterCheckboxGroup;
        this.filterCheckboxUncheckedIconClass = settings.filterCheckboxUncheckedIcon;
        this.filterFormClass = settings.filterForm;
        this.filterFormFieldClass = settings.filterFormField;
        this.filterInputGroupClass = settings.filterInputGroup;
        this.filterInputClass = settings.filterInput;
        this.filterSearchIconClass = settings.filterSearchIcon;
    }

    loadSortCssFrameworkSettings() {
        let settings = this.cssFramework.gridClasses;

        this.sortAscendingIconClass = settings.sortAscendingIcon;
        this.sortAvailableIconClass = settings.sortAvailableIcon;
        this.sortButtonGroupClass = settings.sortButtonGroup;
        this.sortButtonClass = settings.sortButton;
        this.sortDescendingIconClass = settings.sortDescendingIcon;
    }

    observeFilters() {
        for (let column of this.columns) {
            if (column.filter) {
                this.observerLocator
                    .getObserver(column.filter, 'value')
                    .subscribe(debounce(() => this.applyFilter(column.filter), 300));
            }
        }
    }

    updateSort(sort) {
        let oldValue = sort.direction;

        // clear all other sorts
        for (let column of this.columns) {
            if (column.sort) {
                column.sort.direction = null;
            }
        }

        switch(oldValue) {
            
            case GridConstants.sortAscending:
                sort.direction = GridConstants.sortDescending;
                break;
            case GridConstants.sortDescending:
                sort.direction = null;
                break;
            default:
                sort.direction = GridConstants.sortAscending;
                break;
        }
    }
}