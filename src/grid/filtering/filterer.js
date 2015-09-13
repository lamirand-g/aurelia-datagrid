import _filter from "lodash/collection/filter";
import debounce from "lodash/function/debounce";

export default class Filterer {

    constructor(grid, viewModel, observerLocator){
        this.grid = grid;
        this.viewModel = viewModel;
        this.observeFilters(observerLocator);
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

        if(filterInformation.value){
            filteredItems = _filter(this.unfilteredItems, item => { return this.matchesFilter(item, filterInformation) });
        } else {
            filteredItems = this.unfilteredItems;
        }

        items.length = 0;
        for(let item of filteredItems){
            items.push(item);
        }
    }

    matchesFilter(item, filterInformation) {
        let property = (item[filterInformation.property] + '').toLowerCase();
        return property.startsWith(filterInformation.value.toLowerCase());
    }

    observeFilters = (observerLocator) => {
        for (let column of this.grid.columns) {
            if (column.filter) {
                observerLocator
                    .getObserver(column.filter, 'value')
                    .subscribe(debounce(() => this.applyFilter(column.filter), 300));
            }
        }
    }
}