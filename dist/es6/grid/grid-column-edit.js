import { Grid } from "./grid";
import { ColumnUtility } from "./grid-column-utility";
import { bindable, containerless, inject } from "aurelia-framework";

@containerless
@inject(Grid, ColumnUtility)
export class GridColumnEdit {
    @bindable butttonGroupClass;
    @bindable cancelButtonClass;
    @bindable cancelClick;
    @bindable editButtonClass;
    @bindable editClick;
    @bindable heading;
    @bindable orDivClass;
    @bindable saveButtonClass;
    @bindable saveCancelButtonGroupClass;
    @bindable saveClick;

    showCancel = true;

    constructor(grid, utility) {
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

	cancelButtonClick() {
        if(this.cancelClick){
        	this.cancelClick(this.bindingContext.row);
        }

        Object.assign(this.bindingContext.row, this.originalValue);
        this.bindingContext.editing = false;
    }

	editButtonClick() {

	    this.originalValue = Object.assign({}, this.bindingContext.row); 

        if(this.editClick){
        	this.editClick(this.bindingContext.row);
        }

        this.bindingContext.editing = true;
    }

    loadCssFrameworkSettings() {
	    if (this.grid.cssFramework) {
	        let config = this.grid.cssFramework.editClasses;

	        this.butttonGroupClass = config.buttonGroup;
	        this.cancelButtonClass = config.cancelButton;
            this.editButtonClass = config.editButton;
            this.orDivClass =  config.orDiv;
	        this.saveButtonClass = config.saveButton;
            this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
	    }
	}

	saveButtonClick() {
        if(this.saveClick){
        	this.saveClick(this.bindingContext.row);
        }

        this.bindingContext.editing = false;
    }
}