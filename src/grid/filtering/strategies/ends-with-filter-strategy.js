import objectHelper from '../../object-helper';

const endsWithFilterStrategy = {
  apply: (items, filter) => {
    let filteredItems = items.slice(0);
    for (let i = filteredItems.length - 1; i > -1; i--) {
      if (!endsWithFilterStrategy.matchesFilter(filteredItems[i], filter)) {
        filteredItems.splice(i, 1);
      }
    }
    return filteredItems;
  },

  matchesFilter: (item, filter) => {
    let bindingObject = objectHelper.getDeepestObjectFromPath(item, filter.property);
    let bindingProperty = objectHelper.getDeepestPropertyFromPath(filter.property);

    let property = (bindingObject[bindingProperty] + '').toString().toLowerCase();
    return property.endsWith(filter.value.toString().toLowerCase());
  }
};

export default endsWithFilterStrategy;
