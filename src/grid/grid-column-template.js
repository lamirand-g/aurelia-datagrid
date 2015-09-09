import startCase from "lodash/string/startCase";
import { inject, customAttribute } from 'aurelia-framework';

const propertyAttributeName = 'property';
const headingAttributeName = 'heading';
const filterableAttributeName = 'filterable';
const sortableAttributeName = 'sortable';

@customAttribute('grid-column-template')
@inject(Element)
export class GridColumnTemplate {

    constructor(element) {
        this.column = {};
        this.element = element;
    }

    bind(bindingContext) {
        if (bindingContext.addColumn) {
            this.fillColumnInformationFromAttributes();
            bindingContext.addColumn(this.column);
        }
    }

    fillColumnInformationFromAttributes() {
        this.getColumnProperty();
        this.getColumnHeading();
        this.getColumnFilter();
        this.getColumnSort();
    }

    getColumnProperty() {
        let property = this.element.attributes.getNamedItem(propertyAttributeName);
        if (property) {
            this.column[propertyAttributeName] = property.value;
        }
    }

    getColumnHeading() {
        let attribute = this.element.attributes.getNamedItem(headingAttributeName);
        if (attribute) {
            this.column[headingAttributeName] = attribute.value;
        } else if(this.column[propertyAttributeName]) {
            this.column[headingAttributeName] = startCase(this.column[propertyAttributeName]);
        }
    }

    getColumnFilter() {
        let attribute = this.element.attributes.getNamedItem(filterableAttributeName);
        if (attribute) {
            this.column[filterableAttributeName] = true;
            this.column.filter = {
                property: attribute.value || this.column[propertyAttributeName],
                value: undefined
            }
        }
    }

    getColumnSort() {
        let attribute = this.element.attributes.getNamedItem(sortableAttributeName);
        if (attribute) {
            this.column[sortableAttributeName] = true;
            this.column.sort = {
                property: attribute.value || this.column[propertyAttributeName],
                value: undefined
            }
        }
    }
}