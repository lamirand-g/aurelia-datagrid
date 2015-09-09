import {Grid} from "./grid";
import {RegisterColumn} from "./grid-column-utils";
import {
  bindable,
  containerless,
  inject
} from "aurelia-framework";

@containerless
@inject(Grid)
export class GridColumn {
	@bindable heading;
    @bindable editInputClass;
    @bindable editFieldClass;
    @bindable editFormClass;
    @bindable filterable;
    @bindable property;
    @bindable sortable;
    @bindable value;

    constructor(grid) {
        this.grid = grid;
        this.row = {};
    }

    bind(bindingContext){
        RegisterColumn(bindingContext, this);
        this.loadConfigurationSettings();
    }

    loadConfigurationSettings() {
        if (this.grid.configuration) {
            let config = this.grid.configuration.textClasses;

            this.editInputClass = config.editInput;
            this.editFieldClass = config.editField;
            this.editFormClass = config.editForm;
        }
    }
}