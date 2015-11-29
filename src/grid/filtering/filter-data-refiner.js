export default class FilterDataRefiner {
  constructor(settings) {
    this.filters = [];
    this.refresh = settings.refresh;
    this.values = {};
    this.subscribe(settings.dataRefinerHandler);
  }

  subscribe(dataRefinerHandler) {
    if (dataRefinerHandler) {
      dataRefinerHandler.addDataRefiner(this.refineData, 1000, false);
    }
  }

  refineData = (data) => {
    return new Promise(resolve => {
      let filteredItems = data;
      this.filters.forEach(filter => {
        filteredItems = filter.strategy.apply(filteredItems, filter);
      });
      resolve(filteredItems);
    });
  }

  setFilter(property, value, strategy) {
    this.values[property] = value;
    this.onFilterChanged(property, strategy);
  }

  onFilterChanged(property, strategy) {
    this.updateFilter(property, strategy);
    this.onRefresh();
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

  onRefresh() {
    if (this.refresh) {
      this.refresh();
    } else {
      throw new Error(`The 'refresh' function is undefined.`);
    }
  }
}
