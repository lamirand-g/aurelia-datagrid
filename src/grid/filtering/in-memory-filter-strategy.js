export class InMemoryFilterStrategy {
  filter(items, filters) {
    let filteredItems = items.slice(0);
    filters.forEach(filter => {
      for (let i = filteredItems.length - 1; i > -1; i--) {
        if (!this.matchesFilter(filteredItems[i], filter)) {
          filteredItems.splice(i, 1);
        }
      }
    });
    return filteredItems;
  }

  matchesFilter(item, filter) {
    let property = (item[filter.property] + '').toString().toLowerCase();
    return property.startsWith(filter.value.toString().toLowerCase());
  }
}
