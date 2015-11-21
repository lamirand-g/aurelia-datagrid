import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from "aurelia-framework";
import { ObserverLocator } from 'aurelia-binding';

@containerless
@inject(Grid, ColumnUtility, Element, ObserverLocator)
export class GridColumnTemplate {
    @bindable heading;
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
        }
    }
}