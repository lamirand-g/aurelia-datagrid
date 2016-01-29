import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@containerless
@inject(Grid)
export class GridColumnCheckbox {
  @bindable alignment = 'center';
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
    if (this.bindingContext) {
      return this.grid.isEditingItem(this.bindingContext.row);
    }
    return false;
  }

  constructor(grid) {
    this.bindingContext = {};
    this.grid = grid;
    this.inputType = 'checkbox';
    this.row = {};
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
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
