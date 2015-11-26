import _ from 'lodash';
import GridConstants  from '../grid-constants';

export default class Sorter {

  constructor(grid) {
    this.grid = grid;
  }

  setSort(sort) {
    this.updateSortInformation(sort);
    this.grid.refresh();
  }

  applySort() {
    if (this.sortInformation) {
      if (this.grid.$parent.applySort) {
        this.grid.$parent.applySort(this.sortInformation);
      } else {
        this.sortItemsLocally(this.grid.filteredItems, this.sortInformation);
      }
    }
  }

  clearAllSorts() {
    for (let column of this.grid.columns) {
      if (column.sort) {
        column.sort.direction = null;
      }
    }
  }

  sortItemsLocally(items, sort) {
    let sortedItems;
    if (sort.direction) {
      sortedItems = _.sortByOrder(items, sort.property, sort.direction);
      items.splice(0, items.length);
      for (let item of sortedItems) {
        items.push(item);
      }
    }
  }

  updateSortInformation(sortInformation) {
    let oldValue = sortInformation.direction;

    this.clearAllSorts();

    switch (oldValue) {
    case GridConstants.sortAscending:
      sortInformation.direction = GridConstants.sortDescending;
      break;
    case GridConstants.sortDescending:
      sortInformation.direction = null;
      break;
    default:
      sortInformation.direction = GridConstants.sortAscending;
      break;
    }

    this.sortInformation = sortInformation;
  }
}
