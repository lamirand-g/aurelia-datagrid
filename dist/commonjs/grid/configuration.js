'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _filteringStrategiesContainsFilterStrategy = require('./filtering/strategies/contains-filter-strategy');

var _filteringStrategiesContainsFilterStrategy2 = _interopRequireDefault(_filteringStrategiesContainsFilterStrategy);

var _filteringStrategiesEndsWithFilterStrategy = require('./filtering/strategies/ends-with-filter-strategy');

var _filteringStrategiesEndsWithFilterStrategy2 = _interopRequireDefault(_filteringStrategiesEndsWithFilterStrategy);

var _filteringStrategiesEqualsFilterStrategy = require('./filtering/strategies/equals-filter-strategy');

var _filteringStrategiesEqualsFilterStrategy2 = _interopRequireDefault(_filteringStrategiesEqualsFilterStrategy);

var _filteringStrategiesStartsWithFilterStrategy = require('./filtering/strategies/starts-with-filter-strategy');

var _filteringStrategiesStartsWithFilterStrategy2 = _interopRequireDefault(_filteringStrategiesStartsWithFilterStrategy);

var configuration = {
  defaultCssFramework: 'default',
  defaultFilterStrategy: 'starts with',
  filterStrategies: [{ name: 'contains', strategy: _filteringStrategiesContainsFilterStrategy2['default'] }, { name: 'ends with', strategy: _filteringStrategiesEndsWithFilterStrategy2['default'] }, { name: 'equals', strategy: _filteringStrategiesEqualsFilterStrategy2['default'] }, { name: 'starts with', strategy: _filteringStrategiesStartsWithFilterStrategy2['default'] }]
};

exports['default'] = configuration;
module.exports = exports['default'];