System.register([], function (_export) {
  'use strict';

  var InMemoryFilterStrategy;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      InMemoryFilterStrategy = (function () {
        function InMemoryFilterStrategy() {
          _classCallCheck(this, InMemoryFilterStrategy);
        }

        _createClass(InMemoryFilterStrategy, [{
          key: 'filter',
          value: function filter(items, filters) {
            var _this = this;

            var filteredItems = items.slice(0);
            filters.forEach(function (filter) {
              for (var i = filteredItems.length - 1; i > -1; i--) {
                if (!_this.matchesFilter(filteredItems[i], filter)) {
                  filteredItems.splice(i, 1);
                }
              }
            });
            return filteredItems;
          }
        }, {
          key: 'matchesFilter',
          value: function matchesFilter(item, filter) {
            var property = (item[filter.property] + '').toString().toLowerCase();
            return property.startsWith(filter.value.toString().toLowerCase());
          }
        }]);

        return InMemoryFilterStrategy;
      })();

      _export('InMemoryFilterStrategy', InMemoryFilterStrategy);
    }
  };
});