System.register(['lodash'], function (_export) {
  'use strict';

  var _, gridColumnBase;

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
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
        },

        registerWithGrid: function registerWithGrid(grid) {
          if (!this.heading && this.property) {
            this.heading = _.startCase(this.property);
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

      _export('default', gridColumnBase);
    }
  };
});