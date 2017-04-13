import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@containerless
@inject(Grid, ObserverLocator)
export class GridColumn {
  @bindable alignment = 'left';
  @bindable heading;
  @bindable editInputClass;
  @bindable editFieldClass;
  @bindable editFormClass;
  @bindable filterable;
  @bindable property;
  @bindable sortable;
  @bindable class;

  get isEditing() {
    if (this.bindingContext) {
      return this.grid.isEditingItem(this.bindingContext.row);
    }
    return false;
  }

  constructor(grid, observerLocator) {
    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);

    if (bindingContext !== this.grid) {
      this.observerLocator
        .getObserver(bindingContext.row, 'validation')
        .subscribe(newValue => {
          this.validation = Object.assign({}, newValue, { property: this.property });
        });
    }
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let settings = this.grid.cssFrameworkConfiguration.textClasses;

      this.editInputClass = settings.editInput;
      this.editFieldClass = settings.editField;
      this.editFormClass = settings.editForm;
    }
  }
}
