import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from './grid';
import { ColumnUtility } from './grid-column-utility';

@containerless
@inject(Grid, ColumnUtility, Element, ObserverLocator)
export class GridColumnTemplate {
  @bindable heading;
  @bindable filterable;
  @bindable property;
  @bindable sortable;

  constructor(grid, utility, element, observerLocator) {
    this.element = element;
    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    this.utility = utility;
  }

  bind(bindingContext) {
    if (bindingContext === this.grid) {
      this.utility.registerWithGrid(this.grid, this);
    } else {
      this.utility.bindToRow(bindingContext, this);
    }
  }
}
