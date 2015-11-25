import { InMemoryFilterStrategy } from './in-memory-filter-strategy';

export default class Filterer {
  constructor(grid, viewModel) {
    this.grid = grid;
    this.filters = [];
    this.strategy = new InMemoryFilterStrategy();
    this.viewModel = viewModel;
    this.values = {};
  }

  setFilter(column, newValue) {
    this.values[column.property] = newValue;
    this.onFilterChanged(column);
  }

  onFilterChanged(column) {
    this.updateFilter(column);
    this.pushFilters();
  }

  updateFilter(column) {
    let existingFilter = this.filters.find(filter => {
      return filter.property === column.property;
    });

    let filter;
    if (existingFilter) {
      filter = existingFilter;
    } else {
      filter = { property: column.property };
      this.filters.push(filter);
    }

    let value = this.values[column.property];
    if (value || value === false) {
      filter.value = value;
    } else {
      let index = this.filters.indexOf(filter);
      this.filters.splice(index, 1);
    }
  }

  pushFilters() {
    if (!this.unfilteredItems) {
      this.unfilteredItems = this.grid.items.slice(0);
    }

    if (this.viewModel.applyFilter) {
      this.viewModel.applyFilter(this.filters);
    } else {
      this.grid.items = this.strategy.filter(this.unfilteredItems, this.filters);
    }
  }
}
