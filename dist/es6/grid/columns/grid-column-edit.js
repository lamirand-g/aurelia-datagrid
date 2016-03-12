import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@containerless
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
    let response = true;

    if (this.cancelClick) {
      response = this.cancelClick(event);
    }

    Promise.resolve(response)
      .then(promiseResponse => {
        if (this.successfulResponse(promiseResponse)) {
          Object.assign(this.bindingContext.row, this.originalValue);
          this.grid.finishEditingItem(this.bindingContext.row);
        }
      })
      .catch(() => {});
  }

  editButtonClick(event) {
    this.originalValue = Object.assign({}, this.bindingContext.row);

    let response = true;

    if (this.editClick) {
      response = this.editClick(event);
    }

    Promise.resolve(response)
      .then(promiseResponse => {
        if (this.successfulResponse(promiseResponse)) {
          this.grid.beginEditingItem(this.bindingContext.row);
        }
      })
      .catch(() => {});
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let config = this.grid.cssFrameworkConfiguration.editClasses;

      this.buttonGroupClass = config.buttonGroup;
      this.cancelButtonClass = config.cancelButton;
      this.editButtonClass = config.editButton;
      this.orDivClass =  config.orDiv;
      this.saveButtonClass = config.saveButton;
      this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
    }
  }

  saveButtonClick(event) {
    let response = true;

    if (this.saveClick) {
      response = this.saveClick(event);
    }

    Promise.resolve(response)
      .then(promiseResponse => {
        if (this.successfulResponse(promiseResponse)) {
          this.grid.finishEditingItem(this.bindingContext.row);
        }
      })
      .catch(() => {});
  }

  successfulResponse(response) {
    return response === undefined || response;
  }
}
