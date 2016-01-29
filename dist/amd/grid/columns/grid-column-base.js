define(['exports', 'module', 'lodash', '../object-helper'], function (exports, module, _lodash, _objectHelper) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _2 = _interopRequireDefault(_lodash);

  var _objectHelper2 = _interopRequireDefault(_objectHelper);

  var gridColumnBase = {
    bindToContext: function bindToContext(bindingContext) {
      this.self = this;
      if (bindingContext === this.grid) {
        this.registerWithGrid(this.grid);
      } else {
        this.bindToRow(bindingContext);
        this.loadCssFrameworkSettings();
      }
      this.setAlignmentClass();
    },

    setAlignmentClass: function setAlignmentClass() {
      if (this.grid.cssFrameworkConfiguration) {
        this.alignmentClass = this.grid.cssFrameworkConfiguration.getAlignmentClass(this.alignment || '');
      }
    },

    registerWithGrid: function registerWithGrid(grid) {
      if (!this.heading && this.property) {
        var bindingProperty = _objectHelper2['default'].getDeepestPropertyFromPath(this.property);
        this.heading = _2['default'].startCase(bindingProperty);
      }
      this.inputType = this.inputType || 'text';
      grid.addColumn(this);
    },

    bindToRow: function bindToRow(bindingRowContext) {
      this.bindingContext = bindingRowContext;
      this.bindingContext.editing = this.bindingContext.editing || false;
      this.row = bindingRowContext.row;

      this.bindingObject = _objectHelper2['default'].getDeepestObjectFromPath(this.row, this.property);
      this.bindingProperty = _objectHelper2['default'].getDeepestPropertyFromPath(this.property);
    }
  };

  module.exports = gridColumnBase;
});