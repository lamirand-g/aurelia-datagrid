System.register(['lodash', '../object-helper'], function (_export) {
  'use strict';

  var _, objectHelper, gridColumnBase;

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }, function (_objectHelper) {
      objectHelper = _objectHelper['default'];
    }],
    execute: function () {
      gridColumnBase = {
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
            var bindingProperty = objectHelper.getDeepestPropertyFromPath(this.property);
            this.heading = _.startCase(bindingProperty);
          }
          this.inputType = this.inputType || 'text';
          grid.addColumn(this);
        },

        bindToRow: function bindToRow(bindingRowContext) {
          this.bindingContext = bindingRowContext;
          this.bindingContext.editing = this.bindingContext.editing || false;
          this.row = bindingRowContext.row;

          this.bindingObject = objectHelper.getDeepestObjectFromPath(this.row, this.property);
          this.bindingProperty = objectHelper.getDeepestPropertyFromPath(this.property);
        }
      };

      _export('default', gridColumnBase);
    }
  };
});