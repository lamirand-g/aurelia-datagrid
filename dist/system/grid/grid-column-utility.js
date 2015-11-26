System.register(['lodash'], function (_export) {
  'use strict';

  var _, ColumnUtility;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      ColumnUtility = (function () {
        function ColumnUtility() {
          _classCallCheck(this, ColumnUtility);
        }

        _createClass(ColumnUtility, [{
          key: 'bindToRow',
          value: function bindToRow(bindingRowContext, column) {
            column.bindingContext = bindingRowContext;
            column.bindingContext.editing = column.bindingContext.editing || false;
            column.row = bindingRowContext.row;
          }
        }, {
          key: 'registerWithGrid',
          value: function registerWithGrid(grid, column) {
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
        }]);

        return ColumnUtility;
      })();

      _export('ColumnUtility', ColumnUtility);
    }
  };
});