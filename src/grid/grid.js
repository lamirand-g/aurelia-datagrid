import debounce from "lodash/function/debounce";
import {LoadConfiguration} from "./grid-configuration";
import {
  bindable,
  inject,
  ObserverLocator
} from "aurelia-framework";


@inject(ObserverLocator)
export class Grid {
    
    @bindable class;
    @bindable configurationName;
    @bindable items;
    @bindable filterFormClass;
    @bindable filterFormFieldClass;
    @bindable filterInputGroupClass;
    @bindable filterInputClass;
    @bindable filterSearchButtonClass;
    @bindable filterSearchIconClass;
    @bindable filterSearchGroupClass;
    @bindable sortAscendingIconClass;
    @bindable sortAvailableIconClass;
    @bindable sortButtonGroupClass;
    @bindable sortButtonClass;
    @bindable sortDescendingIconClass;

    constructor(observerLocator) {
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
        this.$parent = this.$parent || bindingContext;
        this.items = this.items || bindingContext.items || [];
        
        this.configuration = LoadConfiguration(this.configurationName);
        this.loadConfigurationSettings(this.configuration);

        this.observeFilters();
    }

    loadConfigurationSettings(configuration) {
        this.class = configuration.gridClasses.table;
        this.loadFilterConfigurationSettings(configuration);
        this.loadSortConfigurationSettings(configuration);
    }

    loadFilterConfigurationSettings(configuration) {
        this.filterFormClass = configuration.gridClasses.filterForm;
        this.filterFormFieldClass = configuration.gridClasses.filterFormField;
        this.filterInputGroupClass = configuration.gridClasses.filterInputGroup;
        this.filterInputClass = configuration.gridClasses.filterInput;
        this.filterSearchButtonClass = configuration.gridClasses.filterSearchButton;
        this.filterSearchIconClass = configuration.gridClasses.filterSearchIcon;
        this.filterSearchGroupClass = configuration.gridClasses.filterSearchGroup;
    }

    loadSortConfigurationSettings(configuration) {
        this.sortAscendingIconClass = configuration.gridClasses.sortAscendingIcon;
        this.sortAvailableIconClass = configuration.gridClasses.sortAvailableIcon;
        this.sortButtonGroupClass = configuration.gridClasses.sortButtonGroup;
        this.sortButtonClass = configuration.gridClasses.sortButton;
        this.sortDescendingIconClass = configuration.gridClasses.sortDescendingIcon;
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
        let oldValue = sort.value;

        // clear all other sorts
        for (let column of this.columns) {
            if (column.sort) {
                column.sort.value = null;
            }
        }

        switch(oldValue) {
            case 'ascending':
                sort.value = 'descending';
                break;
            case 'descending':
                sort.value = null;
                break;
            default:
                sort.value = 'ascending';
                break;
        }
    }
}