import containsFilterStrategy from './filtering/strategies/contains-filter-strategy';
import endsWithFilterStrategy from './filtering/strategies/ends-with-filter-strategy';
import equalsFilterStrategy from './filtering/strategies/equals-filter-strategy';
import startsWithFilterStrategy from './filtering/strategies/starts-with-filter-strategy';

const gridConfiguration = {
  defaultCssFramework: 'default',
  defaultFilterStrategy: 'starts with',
  filterStrategies: [
    { name: 'contains', strategy: containsFilterStrategy },
    { name: 'ends with', strategy: endsWithFilterStrategy },
    { name: 'equals', strategy: equalsFilterStrategy },
    { name: 'starts with', strategy: startsWithFilterStrategy }
  ]
};

export default gridConfiguration;
