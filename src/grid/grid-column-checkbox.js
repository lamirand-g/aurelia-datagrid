import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from 'aurelia-framework';

@containerless
@inject(Grid, ColumnUtility)
export class GridColumnCheckbox {
    @bindable class;
    @bindable checkedIconClass;
    @bindable containerClass;
    @bindable heading;
    @bindable filterable;
    @bindable property;
    @bindable sortable;
    @bindable uncheckedIconClass;
    @bindable value;

    inputType = 'checkbox';

    constructor(grid, utility){
        this.bindingContext = {};
        this.grid = grid;
        this.row = {};
        this.utility = utility;
    }

    bind(bindingContext) {
        if(bindingContext === this.grid) {
            this.utility.registerWithGrid(this.grid, this);
        }
        else {
            this.utility.bindToRow(bindingContext, this);
        }

        this.loadCssFrameworkSettings();
    }

    loadCssFrameworkSettings() {
        if (this.grid.cssFramework) {
            let config = this.grid.cssFramework.checkboxClasses;

            this.checkedIconClass = config.checkedIcon;
            this.class = config.editInput;
            this.containerClass = config.container;
            this.uncheckedIconClass = config.uncheckedIcon;
        }
    }
}