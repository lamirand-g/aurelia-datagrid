export default class FilterEngine {
  constructor(settings) {
    this.model = settings.model;
    this.filters = [];
    this.filtersChanged = settings.filtersChanged;
    this.values = {};
  }

  setFilter(property, value, strategy) {
    this.values[property] = value;
    this.onFilterChanged(property, strategy);
  }

  onFilterChanged(property, strategy) {
    this.updateFilter(property, strategy);
    this.refresh();
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

  refresh() {
    if(this.filtersChanged) {
      this.filtersChanged();
    } else {
      throw new Error(`${bindingContext.constructor.name} does not contain an 'refresh' function.`);
    }
  }

  applyFilters = (data) => {
    return new Promise(resolve => {
      let filteredItems = data;
      this.filters.forEach(filter => {
        filteredItems = filter.strategy.apply(filteredItems, filter);
      });
      resolve(filteredItems);
    });
  }
}
