import Sorter from "./sorting/sorter";
import Filterer from "./filtering/filterer";
import { GridCssFrameworkRepository } from "./css-frameworks/repository";
import { bindable, inject, ObserverLocator } from "aurelia-framework";

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
        this.sorter = new Sorter(this);
    }

    addColumn(column) {
        this.columns.push(column);
    }

    bind(bindingContext) {
        this.$parent = bindingContext;
        this.items = bindingContext.items || [];
        this.cssFramework = this.repository.get(this.cssFrameworkName);

        this.loadCssFrameworkSettings();
        this.filterer = new Filterer(this, this.$parent, this.observerLocator);
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
}