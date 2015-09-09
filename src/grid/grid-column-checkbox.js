import {Grid} from "./grid";
import {RegisterColumn} from "./grid-column-utils";
import {
  bindable,
  containerless,
  inject
} from 'aurelia-framework';


@containerless
@inject(Grid)
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

    constructor(grid){
        this.bindingContext = {};
        this.grid = grid;
        this.row = {};
    }

    bind(bindingContext) {
        RegisterColumn(bindingContext, this);
        this.loadConfigurationSettings();
    }

    loadConfigurationSettings() {
        if (this.grid.configuration) {
            let config = this.grid.configuration.checkboxClasses;

            this.checkedIconClass = config.checkedIcon;
            this.class = config.editInput;
            this.containerClass = config.container;
            this.uncheckedIconClass = config.uncheckedIcon;
        }
    }
}