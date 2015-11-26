import _ from 'lodash';

export class ColumnUtility {

  bindToRow(bindingRowContext, column) {
    column.bindingContext = bindingRowContext;
    column.bindingContext.editing = column.bindingContext.editing || false;
    column.row = bindingRowContext.row;
  }

  registerWithGrid(grid, column) {
    if (!column.heading && column.property) {
      column.heading = _.startCase(column.property);
    }
    column.inputType = column.inputType || 'text';
    column.sort = {
      property: column.property,
      direction: null
    };

    grid.addColumn(column);
  }
}
