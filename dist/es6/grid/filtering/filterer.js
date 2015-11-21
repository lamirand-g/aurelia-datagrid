import _filter from "lodash/collection/filter";
import _debounce from "lodash/function/debounce";

export default class Filterer {
    constructor(grid, viewModel, observerLocator){
        this.grid = grid;
        this.viewModel = viewModel;
        this.observerLocator = observerLocator;
    }

    observeColumn = (column) => {
        if(column.filter) {
            this.observerLocator.getObserver(column.filter, 'value')
                .subscribe(_debounce(() => this.applyFilter(column.filter), 300));
        }
    }

    applyFilter(filterInformation) {
        if (this.viewModel.applyFilter) {
            this.viewModel.applyFilter(filterInformation);
        } else {
            this.filterLocally(this.grid.items, filterInformation);
        }
    }

	filterLocally(items, filterInformation){
        if(!this.unfilteredItems){
            this.unfilteredItems = items.slice(0);
        }

        let filteredItems;

        if(filterInformation.value || filterInformation.value === false){
            filteredItems = _filter(this.unfilteredItems, item => { return this.matchesFilter(item, filterInformation) });
        } else {
            filteredItems = this.unfilteredItems;
        }

        items.splice(0, items.length);
        for(let item of filteredItems){
            items.push(item);
        }
    }

    matchesFilter(item, filterInformation) {
        let property = (item[filterInformation.property] + '').toString().toLowerCase();
        return property.startsWith(filterInformation.value.toString().toLowerCase());
    }
}