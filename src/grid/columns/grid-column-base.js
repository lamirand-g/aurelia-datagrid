import _ from 'lodash';

const gridColumnBase = {
  bindToContext: function(bindingContext) {
    this.self = this;
    if (bindingContext === this.grid) {
      this.registerWithGrid(this.grid);
    } else {
      this.bindToRow(bindingContext);
      this.loadCssFrameworkSettings();
    }
  },

  registerWithGrid: function(grid) {
    if (!this.heading && this.property) {
      this.heading = _.startCase(this.property);
    }
    this.inputType = this.inputType || 'text';
    grid.addColumn(this);
  },

  bindToRow: function(bindingRowContext) {
    this.bindingContext = bindingRowContext;
    this.bindingContext.editing = this.bindingContext.editing || false;
    this.row = bindingRowContext.row;
  }
};

export default gridColumnBase;
