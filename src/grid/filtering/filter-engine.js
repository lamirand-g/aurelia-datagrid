export default class FilterEngine {
  constructor(settings) {
    this.model = settings.model;
    this.filtersApplied = settings.filtersApplied;
    this.filters = [];
    this.values = {};
  }

  setFilter(property, value, strategy) {
    this.values[property] = value;
    this.onFilterChanged(property, strategy);
  }

  onFilterChanged(property, strategy) {
    this.updateFilter(property, strategy);
    this.applyFilters();
  }

  updateFilter(property, strategy) {
    let existingFilter = this.filters.find(filter => {
      return filter.property.toLowerCase() === property.toLowerCase();
    });

    let filter;
    if (existingFilter) {
      filter = existingFilter;
    } else {
      filter = { property: property };
      this.filters.push(filter);
    }

    let value = this.values[property];
    if (value || value === false) {
      filter.value = value;
      filter.strategy = strategy;
    } else {
      let index = this.filters.indexOf(filter);
      this.filters.splice(index, 1);
    }
  }

  applyFilters() {
    let filteredItems = this.model.items;
    this.filters.forEach(filter => {
      filteredItems = filter.strategy.apply(filteredItems, filter);
    });

    if (this.filtersApplied) {
      this.filtersApplied(filteredItems);
    }
  }
}
