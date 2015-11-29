'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var ColumnUtility = (function () {
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
        column.heading = _lodash2['default'].startCase(column.property);
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

exports.ColumnUtility = ColumnUtility;