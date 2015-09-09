import {Grid} from "./grid";
import {RegisterColumn} from "./grid-column-utils";
import {
  bindable,
  containerless,
  inject
} from "aurelia-framework";

@containerless
@inject(Grid)
export class GridColumnEdit {
    @bindable butttonGroupClass;
    @bindable editButtonClass;
    @bindable saveButtonClass;
    @bindable cancelButtonClass;
	@bindable heading;
	@bindable hideCancel;

	showCancel = true;

	constructor(grid) {
	    this.grid = grid;
    }

	bind(bindingContext){
		RegisterColumn(bindingContext, this);
		this.hideCancel = this.hideCancel !== null;
		this.loadConfigurationSettings();
	}

	loadConfigurationSettings() {
	    if (this.grid.configuration) {
	        let config = this.grid.configuration.editClasses;

	        this.butttonGroupClass = config.buttonGroup;
	        this.editButtonClass = config.editButton;
	        this.saveButtonClass = config.saveButton;
	        this.cancelButtonClass = config.cancelButton;
	    }
	}
}