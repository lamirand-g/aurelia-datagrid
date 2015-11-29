"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterDataRefiner = (function () {
  function FilterDataRefiner(settings) {
    var _this = this;

    _classCallCheck(this, FilterDataRefiner);

    this.refineData = function (data) {
      return new Promise(function (resolve) {
        var filteredItems = data;
        _this.filters.forEach(function (filter) {
          filteredItems = filter.strategy.apply(filteredItems, filter);
        });
        resolve(filteredItems);
      });
    };

    this.filters = [];
    this.refresh = settings.refresh;
    this.values = {};
    this.subscribe(settings.dataRefinerHandler);
  }

  _createClass(FilterDataRefiner, [{
    key: "subscribe",
    value: function subscribe(dataRefinerHandler) {
      if (dataRefinerHandler) {
        dataRefinerHandler.addDataRefiner(this.refineData, 1000, false);
      }
    }
  }, {
    key: "setFilter",
    value: function setFilter(property, value, strategy) {
      this.values[property] = value;
      this.onFilterChanged(property, strategy);
    }
  }, {
    key: "onFilterChanged",
    value: function onFilterChanged(property, strategy) {
      this.updateFilter(property, strategy);
      this.onRefresh();
    }
  }, {
    key: "updateFilter",
    value: function updateFilter(property, strategy) {
      var existingFilter = this.filters.find(function (filter) {
        return filter.property.toLowerCase() === property.toLowerCase();
      });

      var filter = undefined;
      if (existingFilter) {
        filter = existingFilter;
      } else {
        filter = { property: property };
        this.filters.push(filter);
      }

      var value = this.values[property];
      if (value || value === false) {
        filter.value = value;
        filter.strategy = strategy;
      } else {
        var index = this.filters.indexOf(filter);
        this.filters.splice(index, 1);
      }
    }
  }, {
    key: "onRefresh",
    value: function onRefresh() {
      if (this.refresh) {
        this.refresh();
      } else {
        throw new Error("The 'refresh' function is undefined.");
      }
    }
  }]);

  return FilterDataRefiner;
})();

exports["default"] = FilterDataRefiner;
module.exports = exports["default"];