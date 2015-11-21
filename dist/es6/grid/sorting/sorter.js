import _sortByOrder from "lodash/collection/sortByOrder";
import GridConstants  from "../grid-constants";

export default class Sorter {

	constructor(grid){
		this.grid = grid;
	}

	applySort(sort) {
        this.updateSortInformation(sort);

        if (this.grid.$parent.applySort) {
            this.grid.$parent.applySort(sort);
        } else {
            this.sortItemsLocally(this.grid.items, sort);
        }
    }

    clearAllSorts(){
    	for (let column of this.grid.columns) {
            if (column.sort) {
                column.sort.direction = null;
            }
        }
    }

    sortItemsLocally(items, sort){
        if(!this.unsortedItems){
            this.unsortedItems = items.slice(0);
        }
        
        let sortedItems;

        if(sort.direction){
            sortedItems = _sortByOrder(this.unsortedItems, sort.property, sort.direction);
        } else {
            sortedItems = this.unsortedItems;
        }

        items.splice(0, items.length);
        for(let item of sortedItems){
            items.push(item);
        }
    }

    updateSortInformation(sortInformation) {
        let oldValue = sortInformation.direction;

        this.clearAllSorts();

        switch(oldValue) {
            
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
    }
}