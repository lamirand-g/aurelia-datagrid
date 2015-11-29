'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sortConstants = require('./sort-constants');

var _sortConstants2 = _interopRequireDefault(_sortConstants);

var SortDataRefiner = (function () {
  function SortDataRefiner(settings) {
    var _this = this;

    _classCallCheck(this, SortDataRefiner);

    this.refineData = function (data) {
      return new Promise(function (resolve) {
        var sortedData = _this.applySort(data);
        resolve(sortedData);
      });
    };

    this.refresh = settings.refresh;
    this.sort = {};
    this.subscribe(settings.dataRefinerHandler);
  }

  _createClass(SortDataRefiner, [{
    key: 'subscribe',
    value: function subscribe(dataRefinerHandler) {
      if (dataRefinerHandler) {
        dataRefinerHandler.addDataRefiner(this.refineData, 2000, false);
      }
    }
  }, {
    key: 'applySort',
    value: function applySort(data) {
      if (this.sort.direction) {
        return _lodash2['default'].sortByOrder(data, this.sort.property, this.sort.direction);
      }
      return data;
    }
  }, {
    key: 'setSort',
    value: function setSort(property) {
      this.updateSort(property);
      this.onRefresh();
    }
  }, {
    key: 'updateSort',
    value: function updateSort(property) {
      var sameProperty = property === this.sort.property;
      this.sort.property = property;
      if (sameProperty) {
        this.toggleSort();
      } else {
        this.resetSort();
      }
    }
  }, {
    key: 'toggleSort',
    value: function toggleSort() {
      switch (this.sort.direction) {
        case _sortConstants2['default'].sortAscending:
          this.sort.direction = _sortConstants2['default'].sortDescending;
          break;
        case _sortConstants2['default'].sortDescending:
          this.sort.direction = null;
          break;
        default:
          this.sort.direction = _sortConstants2['default'].sortAscending;
          break;
      }
    }
  }, {
    key: 'resetSort',
    value: function resetSort() {
      this.sort.direction = _sortConstants2['default'].sortAscending;
    }
  }, {
    key: 'onRefresh',
    value: function onRefresh() {
      if (this.refresh) {
        this.refresh();
      } else {
        throw new Error('The \'refresh\' function is undefined.');
      }
    }
  }]);

  return SortDataRefiner;
})();

exports['default'] = SortDataRefiner;
module.exports = exports['default'];