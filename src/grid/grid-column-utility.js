import startCase from "lodash/string/startCase";
import { ElementsToPropertyDictionarySingleton } from "./validation/elements-to-property-dictionary";
//import { inject } from "aurelia-framework";

//@inject(ElementsToPropertyDictionary)
export class ColumnUtility{

    // constructor(propertyDictionary){
    //     //this.propertyDictionary = propertyDictionary;
    // }

    constructor(){
        this.propertyDictionary = ElementsToPropertyDictionarySingleton.Instance;
    }

    bindToRow(bindingRowContext, column) {
        column.bindingContext = bindingRowContext;
        column.bindingContext.editing = column.bindingContext.editing || false;
        column.row = bindingRowContext.row;
    }

    bindToValidation(template, element){
        let elementId = element.getAttribute('au-target-id');
        let hasElement = this.propertyDictionary.hasElement(template.property, elementId);

        if(!hasElement) {
            this.propertyDictionary.add(template.property, elementId);
        }
    }

    registerWithGrid(grid, template) {
        if (!template.heading && template.property) {
            template.heading = startCase(template.property);
        }

        let column = {
            heading: template.heading,
            inputType: template.inputType || 'text',
            property: template.property,
            
            filterable: template.filterable !== null && template.filterable !== undefined,
            
            filter: {
                property: template.property,
                value: null
            },

            sortable: template.sortable !== null && template.sortable !== undefined,
          
            sort: {
                property: template.property,
                value: null
            }
        };

        grid.addColumn(column);
    }
}