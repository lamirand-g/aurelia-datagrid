import _ from 'lodash';
import sortConstants from './sort-constants';

export default class SortDataRefiner {
  constructor(settings) {
    this.refresh = settings.refresh;
    this.sort = {};
    this.subscribe(settings.dataRefinerHandler);
  }

  subscribe(dataRefinerHandler) {
    if (dataRefinerHandler) {
      dataRefinerHandler.addDataRefiner(this.refineData, 2000, false);
    }
  }

  refineData = (data) => {
    return new Promise(resolve => {
      let sortedData = this.applySort(data);
      resolve(sortedData);
    });
  }

  applySort(data) {
    if (this.sort.direction) {
      return _.sortByOrder(data,
        this.sort.property,
        this.sort.direction);
    }
    return data;
  }

  setSort(property) {
    this.updateSort(property);
    this.onRefresh();
  }

  updateSort(property) {
    let sameProperty = (property === this.sort.property);
    this.sort.property = property;
    if (sameProperty) {
      this.toggleSort();
    } else {
      this.resetSort();
    }
  }

  toggleSort() {
    switch (this.sort.direction) {
    case sortConstants.sortAscending:
      this.sort.direction = sortConstants.sortDescending;
      break;
    case sortConstants.sortDescending:
      this.sort.direction = null;
      break;
    default:
      this.sort.direction = sortConstants.sortAscending;
      break;
    }
  }

  resetSort() {
    this.sort.direction = sortConstants.sortAscending;
  }

  onRefresh() {
    if (this.refresh) {
      this.refresh();
    } else {
      throw new Error(`The 'refresh' function is undefined.`);
    }
  }
}
