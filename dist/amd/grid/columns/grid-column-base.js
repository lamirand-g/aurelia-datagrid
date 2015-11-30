define(['exports', 'module', 'lodash'], function (exports, module, _lodash) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _2 = _interopRequireDefault(_lodash);

  var gridColumnBase = {
    bindToContext: function bindToContext(bindingContext) {
      this.self = this;
      if (bindingContext === this.grid) {
        this.registerWithGrid(this.grid);
      } else {
        this.bindToRow(bindingContext);
        this.loadCssFrameworkSettings();
      }
    },

    registerWithGrid: function registerWithGrid(grid) {
      if (!this.heading && this.property) {
        this.heading = _2['default'].startCase(this.property);
      }
      this.inputType = this.inputType || 'text';
      grid.addColumn(this);
    },

    bindToRow: function bindToRow(bindingRowContext) {
      this.bindingContext = bindingRowContext;
      this.bindingContext.editing = this.bindingContext.editing || false;
      this.row = bindingRowContext.row;
    }
  };

  module.exports = gridColumnBase;
});