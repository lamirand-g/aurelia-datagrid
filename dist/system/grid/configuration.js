System.register(['./filtering/strategies/contains-filter-strategy', './filtering/strategies/ends-with-filter-strategy', './filtering/strategies/equals-filter-strategy', './filtering/strategies/starts-with-filter-strategy'], function (_export) {
  'use strict';

  var containsFilterStrategy, endsWithFilterStrategy, equalsFilterStrategy, startsWithFilterStrategy, configuration;
  return {
    setters: [function (_filteringStrategiesContainsFilterStrategy) {
      containsFilterStrategy = _filteringStrategiesContainsFilterStrategy['default'];
    }, function (_filteringStrategiesEndsWithFilterStrategy) {
      endsWithFilterStrategy = _filteringStrategiesEndsWithFilterStrategy['default'];
    }, function (_filteringStrategiesEqualsFilterStrategy) {
      equalsFilterStrategy = _filteringStrategiesEqualsFilterStrategy['default'];
    }, function (_filteringStrategiesStartsWithFilterStrategy) {
      startsWithFilterStrategy = _filteringStrategiesStartsWithFilterStrategy['default'];
    }],
    execute: function () {
      configuration = {
        defaultCssFramework: 'default',
        defaultFilterStrategy: 'starts with',
        filterStrategies: [{ name: 'contains', strategy: containsFilterStrategy }, { name: 'ends with', strategy: endsWithFilterStrategy }, { name: 'equals', strategy: equalsFilterStrategy }, { name: 'starts with', strategy: startsWithFilterStrategy }]
      };

      _export('default', configuration);
    }
  };
});