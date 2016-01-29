import _ from 'lodash';
import objectHelper from '../object-helper';

const gridColumnBase = {
  bindToContext: function(bindingContext) {
    this.self = this;
    if (bindingContext === this.grid) {
      this.registerWithGrid(this.grid);
    } else {
      this.bindToRow(bindingContext);
      this.loadCssFrameworkSettings();
    }
    this.setAlignmentClass();
  },

  setAlignmentClass: function() {
    if (this.grid.cssFrameworkConfiguration) {
      this.alignmentClass = this.grid.cssFrameworkConfiguration.getAlignmentClass(this.alignment || '');
    }
  },

  registerWithGrid: function(grid) {
    if (!this.heading && this.property) {
      let bindingProperty = objectHelper.getDeepestPropertyFromPath(this.property);
      this.heading = _.startCase(bindingProperty);
    }
    this.inputType = this.inputType || 'text';
    grid.addColumn(this);
  },

  bindToRow: function(bindingRowContext) {
    this.bindingContext = bindingRowContext;
    this.bindingContext.editing = this.bindingContext.editing || false;
    this.row = bindingRowContext.row;

    this.bindingObject = objectHelper.getDeepestObjectFromPath(this.row, this.property);
    this.bindingProperty = objectHelper.getDeepestPropertyFromPath(this.property);
  }
};

export default gridColumnBase;
