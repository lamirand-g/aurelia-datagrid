import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@inject(Grid)
export class GridColumnEdit {
  @bindable buttonGroupClass;
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

  constructor(grid) {
    this.grid = grid;
    this.showCancel = true;
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
  }

  cancelButtonClick(event) {
    if (this.cancelClick) {
      this.cancelClick(event);
    }

    Object.assign(this.bindingContext.row, this.originalValue);
    this.grid.finishEditingItem(this.bindingContext.row);
  }

  editButtonClick(event) {
    this.originalValue = Object.assign({}, this.bindingContext.row);

    if (this.editClick(event)) {
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

  saveButtonClick(event) {
    if (this.saveClick) {
      this.saveClick(event);
    }

    this.grid.finishEditingItem(this.bindingContext.row);
  }
}
