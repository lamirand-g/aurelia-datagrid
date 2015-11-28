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

  applySort = (data) => {
    return new Promise(resolve => {
      let sortedData = data;
      if (this.sortInformation) {
        if (this.grid.$parent.applySort) {
          this.grid.$parent.applySort(this.sortInformation);
        } else {
          sortedData = this.sortItemsLocally(data, this.sortInformation);
        }
      }
      resolve(sortedData);
    });
  }

  clearAllSorts() {
    for (let column of this.grid.columns) {
      if (column.sort) {
        column.sort.direction = null;
      }
    }
  }

  sortItemsLocally(items, sort) {
    if (sort.direction) {
      return _.sortByOrder(items, sort.property, sort.direction);
    } else {
      return items;
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
