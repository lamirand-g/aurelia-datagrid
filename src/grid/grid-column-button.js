import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from "aurelia-framework";

@containerless
@inject(Grid, ColumnUtility)
export class GridColumnButton {
	@bindable caption;
	@bindable class;
	@bindable buttonClick;
	@bindable heading;

	constructor(grid, utility){
	    this.grid = grid;
	    this.utility = utility;
	}

	bind(bindingContext){
	    if(bindingContext === this.grid) {
            this.utility.registerWithGrid(this.grid, this);
        }
        else {
            this.utility.bindToRow(bindingContext, this);
        }

	    this.loadCssFrameworkSettings();
	}

	click(){
		if(this.buttonClick){
			this.buttonClick();
		}
	}

	loadCssFrameworkSettings() {
	    if (this.grid.cssFramework) {
	        let config = this.grid.cssFramework.buttonClass;

	        this.class = config;
	    }
	}
}