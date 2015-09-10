import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from "aurelia-framework";

@containerless
@inject(Grid, ColumnUtility, Element)
export class GridColumn {
    @bindable heading;
    @bindable editInputClass;
    @bindable editFieldClass;
    @bindable editFormClass;
    @bindable filterable;
    @bindable property;
    @bindable sortable;

    constructor(grid, utility, element) {
        this.element = element;
        this.grid = grid;
        this.row = {};
        this.utility = utility;
    }

    bind(bindingContext){
        if(bindingContext === this.grid) {
            this.utility.registerWithGrid(this.grid, this);
        }
        else {
            this.utility.bindToRow(bindingContext, this);
            this.utility.bindToValidation(this, this.element);
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