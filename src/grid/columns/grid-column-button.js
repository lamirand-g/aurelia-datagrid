import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';

@inject(Grid)
export class GridColumnButton {
  @bindable buttonClick;
  @bindable caption;
  @bindable class;
  @bindable heading;

  constructor(grid) {
    this.grid = grid;
    Object.assign(this, gridColumnBase);
  }

  bind(bindingContext) {
    this.bindToContext(bindingContext);
  }

  loadCssFrameworkSettings() {
    if (this.grid.cssFrameworkConfiguration) {
      let config = this.grid.cssFrameworkConfiguration.buttonClass;

      this.class = config;
    }
  }

  handleButtonClick = (event) => {
    if (this.buttonClick) {
      this.buttonClick(event);
    }
  }
}
