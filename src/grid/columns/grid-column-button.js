import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@containerless
@inject(Grid)
export class GridColumnButton {
  @bindable caption;
  @bindable class;
  @bindable buttonClick;
  @bindable heading;

  constructor(grid) {
    this.grid = grid;
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
  }

  click() {
    if (this.buttonClick) {
      this.buttonClick();
    }
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let config = this.grid.cssFrameworkConfiguration.buttonClass;

      this.class = config;
    }
  }
}
