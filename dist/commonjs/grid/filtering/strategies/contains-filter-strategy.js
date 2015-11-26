'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var containsFilterStrategy = {
  apply: function apply(items, filter) {
    var filteredItems = items.slice(0);
    for (var i = filteredItems.length - 1; i > -1; i--) {
      if (!containsFilterStrategy.matchesFilter(filteredItems[i], filter)) {
        filteredItems.splice(i, 1);
      }
    }
    return filteredItems;
  },

  matchesFilter: function matchesFilter(item, filter) {
    var property = (item[filter.property] + '').toString().toLowerCase();
    return property.includes(filter.value.toString().toLowerCase());
  }
};

exports['default'] = containsFilterStrategy;
module.exports = exports['default'];