System.register(['../../object-helper'], function (_export) {
  'use strict';

  var objectHelper, endsWithFilterStrategy;
  return {
    setters: [function (_objectHelper) {
      objectHelper = _objectHelper['default'];
    }],
    execute: function () {
      endsWithFilterStrategy = {
        apply: function apply(items, filter) {
          var filteredItems = items.slice(0);
          for (var i = filteredItems.length - 1; i > -1; i--) {
            if (!endsWithFilterStrategy.matchesFilter(filteredItems[i], filter)) {
              filteredItems.splice(i, 1);
            }
          }
          return filteredItems;
        },

        matchesFilter: function matchesFilter(item, filter) {
          var bindingObject = objectHelper.getDeepestObjectFromPath(item, filter.property);
          var bindingProperty = objectHelper.getDeepestPropertyFromPath(filter.property);

          var property = (bindingObject[bindingProperty] + '').toString().toLowerCase();
          return property.endsWith(filter.value.toString().toLowerCase());
        }
      };

      _export('default', endsWithFilterStrategy);
    }
  };
});