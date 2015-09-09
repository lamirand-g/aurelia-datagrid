import debounce from "lodash/function/debounce";
import { LoadCssFramework } from "./grid-css-framework";
import GridConstants  from "./grid-constants";
import { bindable, inject, ObserverLocator } from "aurelia-framework";

@inject(ObserverLocator)
export class Grid {
    
    @bindable class;
    @bindable cssFrameworkName;
    @bindable items;
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

    constructor(observerLocator, gridConstants) {
        this.columns = [];
        this.observerLocator = observerLocator;
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
        this.cssFramework = LoadCssFramework(this.cssFrameworkName);

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