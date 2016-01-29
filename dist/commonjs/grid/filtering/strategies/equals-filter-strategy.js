'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectHelper = require('../../object-helper');

var _objectHelper2 = _interopRequireDefault(_objectHelper);

var equalsFilterStrategy = {
  apply: function apply(items, filter) {
    var filteredItems = items.slice(0);
    for (var i = filteredItems.length - 1; i > -1; i--) {
      if (!equalsFilterStrategy.matchesFilter(filteredItems[i], filter)) {
        filteredItems.splice(i, 1);
      }
    }
    return filteredItems;
  },

  matchesFilter: function matchesFilter(item, filter) {
    var bindingObject = _objectHelper2['default'].getDeepestObjectFromPath(item, filter.property);
    var bindingProperty = _objectHelper2['default'].getDeepestPropertyFromPath(filter.property);

    var property = (bindingObject[bindingProperty] + '').toString().toLowerCase();
    return property === filter.value.toString().toLowerCase();
  }
};

exports['default'] = equalsFilterStrategy;
module.exports = exports['default'];