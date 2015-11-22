import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from './grid';
import { ColumnUtility } from './grid-column-utility';

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

  get isEditing() {
    if (this.bindingContext) {
      return this.grid.isEditingItem(this.bindingContext.row);
    }
    return false;
  }

  constructor(grid, utility) {
    this.grid = grid;
    this.showCancel = true;
    this.utility = utility;
  }

  bind(bindingContext) {
    if (bindingContext === this.grid) {
      this.utility.registerWithGrid(this.grid, this);
    } else {
      this.utility.bindToRow(bindingContext, this);
    }

    this.loadCssFrameworkSettings();
  }

  cancelButtonClick() {
    if (this.cancelClick) {
      this.cancelClick(this.bindingContext.row);
    }

    Object.assign(this.bindingContext.row, this.originalValue);
    this.grid.finishEditingItem(this.bindingContext.row);
  }

  editButtonClick() {
    this.originalValue = Object.assign({}, this.bindingContext.row);

    if (this.editClick) {
      this.editClick(this.bindingContext);
    }

    this.grid.beginEditingItem(this.bindingContext.row);
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let config = this.grid.cssFrameworkConfiguration.editClasses;

      this.butttonGroupClass = config.buttonGroup;
      this.cancelButtonClass = config.cancelButton;
      this.editButtonClass = config.editButton;
      this.orDivClass =  config.orDiv;
      this.saveButtonClass = config.saveButton;
      this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
    }
  }

  saveButtonClick() {
    if (this.saveClick) {
      this.saveClick(this.bindingContext.row);
    }

    this.grid.finishEditingItem(this.bindingContext.row);
  }
}
