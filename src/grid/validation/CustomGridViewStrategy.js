import { ElementsToPropertyDictionary } from "./elements-to-property-dictionary";
import { inject } from "aurelia-framework";

@inject(ElementsToPropertyDictionary)
export class CustomGridViewStrategy extends ValidateCustomAttributeViewStrategyBase {

    constructor(propertyDictionary) {
        super();
        this.propertyDictionary = propertyDictionary;
    }

    getValidationProperty(validation, element){
        var atts = element.attributes;
        for (let i = 0; i < this.bindingPathAttributes.length; i++) {
            let attributeName = this.bindingPathAttributes[i];
            if (atts[attributeName]) {
                var bindingPath = getAttributeColumnProperty(atts, attributeName);
                if (bindingPath.indexOf('|') != -1)
                    bindingPath = bindingPath.split('|')[0].trim();
                var validationProperty = validation.result.properties[bindingPath];

                if (attributeName == 'validate' && (validationProperty === null || validationProperty === undefined)) {
                    //Dev explicitly stated to show validation on a field, but there's no rules for this field
                    //Hence, we add an empty validationProperty for that field, without any rules
                    //This way, when 'checkAll()' is called, the input element 'turns green'
                    validation.ensure(bindingPath);
                    validationProperty = validation.result.properties[bindingPath];
                }
                return validationProperty;
            }
        }
        return null;
    }

    getAttributeColumnProperty(atts, attributeName) {
        // TODO: make constant
        let elementIdAttribute = atts['au-target-id'];
        if (elementIdAttribute) {
            let elementId = elementIdAttribute.value;
            let columnProperty = this.propertyDictionary.findPropertyWithElementId(elementId);
            if (columnProperty) {
                return columnProperty.property;
            }
        };

        return atts[attributeName].value.trim();
    }

    prepareElement(validationProperty, element){
        console.log(validationProperty);
        console.log(element);
        //throw Error('View strategy must implement prepareElement(validationProperty, element)');
    }
    updateElement(validationProperty, element){
        console.log(validationProperty);
        console.log(element);
        //throw Error('View strategy must implement updateElement(validationProperty, element)');
    }
}