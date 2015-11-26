define(["exports", "module"], function (exports, module) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var FilterEngine = (function () {
    function FilterEngine(settings) {
      _classCallCheck(this, FilterEngine);

      this.model = settings.model;
      this.filtersApplied = settings.filtersApplied;
      this.filters = [];
      this.values = {};
    }

    _createClass(FilterEngine, [{
      key: "setFilter",
      value: function setFilter(property, value, strategy) {
        this.values[property] = value;
        this.onFilterChanged(property, strategy);
      }
    }, {
      key: "onFilterChanged",
      value: function onFilterChanged(property, strategy) {
        this.updateFilter(property, strategy);
        this.applyFilters();
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
      key: "applyFilters",
      value: function applyFilters() {
        var filteredItems = this.model.items;
        this.filters.forEach(function (filter) {
          filteredItems = filter.strategy.apply(filteredItems, filter);
        });

        if (this.filtersApplied) {
          this.filtersApplied(filteredItems);
        }
      }
    }]);

    return FilterEngine;
  })();

  module.exports = FilterEngine;
});