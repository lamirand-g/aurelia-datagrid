import startCase from "lodash/string/startCase";

export class ColumnUtility{

    bindToRow(bindingRowContext, column) {
        column.bindingContext = bindingRowContext;
        column.bindingContext.editing = column.bindingContext.editing || false;
        column.row = bindingRowContext.row;
    }

    registerWithGrid(grid, template) {
        if (!template.heading && template.property) {
            template.heading = startCase(template.property);
        }

        let column = {
            heading: template.heading,
            property: template.property,
            
            filterable: template.filterable !== null && template.filterable !== undefined,
            
            filter: { property: template.property },

            sortable: template.sortable !== null && template.sortable !== undefined,
          
            sort: { property: template.property }
        };

        grid.addColumn(column);
    }
}