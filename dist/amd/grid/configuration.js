define(['exports', 'module', './filtering/strategies/contains-filter-strategy', './filtering/strategies/ends-with-filter-strategy', './filtering/strategies/equals-filter-strategy', './filtering/strategies/starts-with-filter-strategy'], function (exports, module, _filteringStrategiesContainsFilterStrategy, _filteringStrategiesEndsWithFilterStrategy, _filteringStrategiesEqualsFilterStrategy, _filteringStrategiesStartsWithFilterStrategy) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _containsFilterStrategy = _interopRequireDefault(_filteringStrategiesContainsFilterStrategy);

  var _endsWithFilterStrategy = _interopRequireDefault(_filteringStrategiesEndsWithFilterStrategy);

  var _equalsFilterStrategy = _interopRequireDefault(_filteringStrategiesEqualsFilterStrategy);

  var _startsWithFilterStrategy = _interopRequireDefault(_filteringStrategiesStartsWithFilterStrategy);

  var configuration = {
    defaultCssFramework: 'default',
    defaultFilterStrategy: 'starts with',
    filterStrategies: [{ name: 'contains', strategy: _containsFilterStrategy['default'] }, { name: 'ends with', strategy: _endsWithFilterStrategy['default'] }, { name: 'equals', strategy: _equalsFilterStrategy['default'] }, { name: 'starts with', strategy: _startsWithFilterStrategy['default'] }]
  };

  module.exports = configuration;
});