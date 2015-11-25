System.register(['./in-memory-filter-strategy'], function (_export) {
  'use strict';

  var InMemoryFilterStrategy, Filterer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_inMemoryFilterStrategy) {
      InMemoryFilterStrategy = _inMemoryFilterStrategy.InMemoryFilterStrategy;
    }],
    execute: function () {
      Filterer = (function () {
        function Filterer(grid, viewModel) {
          _classCallCheck(this, Filterer);

          this.grid = grid;
          this.filters = [];
          this.strategy = new InMemoryFilterStrategy();
          this.viewModel = viewModel;
          this.values = {};
        }

        _createClass(Filterer, [{
          key: 'setFilter',
          value: function setFilter(column, newValue) {
            this.values[column.property] = newValue;
            this.onFilterChanged(column);
          }
        }, {
          key: 'onFilterChanged',
          value: function onFilterChanged(column) {
            this.updateFilter(column);
            this.pushFilters();
          }
        }, {
          key: 'updateFilter',
          value: function updateFilter(column) {
            var existingFilter = this.filters.find(function (filter) {
              return filter.property === column.property;
            });

            var filter = undefined;
            if (existingFilter) {
              filter = existingFilter;
            } else {
              filter = { property: column.property };
              this.filters.push(filter);
            }

            var value = this.values[column.property];
            if (value || value === false) {
              filter.value = value;
            } else {
              var index = this.filters.indexOf(filter);
              this.filters.splice(index, 1);
            }
          }
        }, {
          key: 'pushFilters',
          value: function pushFilters() {
            if (!this.unfilteredItems) {
              this.unfilteredItems = this.grid.items.slice(0);
            }

            if (this.viewModel.applyFilter) {
              this.viewModel.applyFilter(this.filters);
            } else {
              this.grid.items = this.strategy.filter(this.unfilteredItems, this.filters);
            }
          }
        }]);

        return Filterer;
      })();

      _export('default', Filterer);
    }
  };
});