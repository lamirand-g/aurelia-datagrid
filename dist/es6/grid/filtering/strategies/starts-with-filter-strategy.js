const startsWithFilterStrategy = {
  apply: (items, filter) => {
    let filteredItems = items.slice(0);
    for (let i = filteredItems.length - 1; i > -1; i--) {
      if (!startsWithFilterStrategy.matchesFilter(filteredItems[i], filter)) {
        filteredItems.splice(i, 1);
      }
    }
    return filteredItems;
  },

  matchesFilter: (item, filter) => {
    let property = (item[filter.property] + '').toString().toLowerCase();
    return property.startsWith(filter.value.toString().toLowerCase());
  }
};

export default startsWithFilterStrategy;
