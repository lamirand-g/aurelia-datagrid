import {Grid} from "./grid";
import {RegisterColumn} from "./grid-column-utils";
import {
  bindable,
  containerless,
  inject
} from "aurelia-framework";

@containerless
@inject(Grid)
export class GridColumnButton {
	@bindable caption;
	@bindable class;
	@bindable buttonClick;
	@bindable heading;

	constructor(grid){
	    this.grid = grid;
	}

	bind(bindingContext){
	    RegisterColumn(bindingContext, this);
	    this.loadConfigurationSettings();
	}

	click(){
		if(this.buttonClick){
			this.buttonClick();
		}
	}

	loadConfigurationSettings() {
	    if (this.grid.configuration) {
	        let config = this.grid.configuration.buttonClass;

	        this.class = config;
	    }
	}
}