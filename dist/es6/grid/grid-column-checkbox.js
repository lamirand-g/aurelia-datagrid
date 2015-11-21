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

    get isEditing() {
        if(this.bindingContext) {
            return this.grid.isEditingItem(this.bindingContext.row);
        }
        return false;
    }

    constructor(grid, utility){
        this.bindingContext = {};
        this.grid = grid;
        this.inputType = 'checkbox';
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
        if (this.grid.cssFrameworkConfiguration) {
            let config = this.grid.cssFrameworkConfiguration.checkboxClasses;

            this.checkedIconClass = config.checkedIcon;
            this.class = config.editInput;
            this.containerClass = config.container;
            this.uncheckedIconClass = config.uncheckedIcon;
        }
    }
}