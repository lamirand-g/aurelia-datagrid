import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from "aurelia-framework";
import { ObserverLocator } from 'aurelia-binding';

@containerless
@inject(Grid, ColumnUtility, Element, ObserverLocator)
export class GridColumn {
    @bindable heading;
    @bindable editInputClass;
    @bindable editFieldClass;
    @bindable editFormClass;
    @bindable filterable;
    @bindable property;
    @bindable sortable;

    constructor(grid, utility, element, observerLocator) {
        this.element = element;
        this.grid = grid;
        this.observerLocator = observerLocator;
        this.row = {};
        this.utility = utility;
    }

    bind(bindingContext){
        if(bindingContext === this.grid) {
            this.utility.registerWithGrid(this.grid, this);
        }
        else {
            this.utility.bindToRow(bindingContext, this);

            this.observerLocator
                .getObserver(bindingContext.row, 'validation')
                .subscribe(newValue => {
                    this.validation = Object.assign({}, newValue, { property: this.property });
                });
        }

        this.loadCssFrameworkSettings();
    }

    loadCssFrameworkSettings() {
        if (this.grid.cssFramework) {
            let settings = this.grid.cssFramework.textClasses;

            this.editInputClass = settings.editInput;
            this.editFieldClass = settings.editField;
            this.editFormClass = settings.editForm;
        }
    }
}