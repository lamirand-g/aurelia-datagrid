import { ValidateCustomAttributeViewStrategyBase  } from "aurelia-validation";
import { ElementsToPropertyDictionarySingleton } from "./elements-to-property-dictionary";

const idAttribute = 'au-target-id';

export class GridColumnPropertyViewStrategy extends ValidateCustomAttributeViewStrategyBase {

    constructor() {
        super();
        this.appendMessageToInput = true;
        this.appendMessageToLabel = false;
        this.helpBlockClass = 'aurelia-validation-message';
    }

    getValidationProperty(validation, element) {
        let atts = element.attributes;
        for (let i = 0; i < this.bindingPathAttributes.length; i++) {
            let attributeName = this.bindingPathAttributes[i];
            if (atts[attributeName]) {
                var bindingPath = this.getAttributeBindingPath(atts[attributeName], validation.property);
                if (bindingPath.indexOf('|') != -1)
                    bindingPath = bindingPath.split('|')[0].trim();
                var validationProperty = validation.result.properties[bindingPath];

                if (attributeName == 'validate' && (validationProperty === null || validationProperty === undefined)) {
                    validation.ensure(bindingPath);
                    validationProperty = validation.result.properties[bindingPath];
                }
                return validationProperty;
            }
        }
        return null;
    }

    getAttributeBindingPath(attribute, propertyName) {
        let value = attribute.value.trim();

        if (propertyName) {
            value = value.replace('[property]', '.' + propertyName);
        }
        return value;
    }

    searchFormGroup(currentElement, currentDepth) {
        if (currentDepth === 5) {
            return null;
        }
        if (currentElement.classList && currentElement.classList.contains('form-group')) {
            return currentElement;
        }
        return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
    }

    findLabels(formGroup, inputId) {
        let labels = [];
        this.findLabelsRecursively(formGroup, inputId, labels, 0);
        return labels;
    }

    findLabelsRecursively(currentElement, inputId, currentLabels, currentDepth) {
        if (currentDepth === 5) {
            return;
        }
        if (currentElement.nodeName === 'LABEL' &&
            ((currentElement.attributes.for && currentElement.attributes.for.value === inputId) ||
            (!currentElement.attributes.for))
        ) {
            currentLabels.push(currentElement);
        }
        for (let i = 0; i < currentElement.children.length; i++) {
            this.findLabelsRecursively(currentElement.children[i], inputId, currentLabels, 1 + currentDepth);
        }
    }

    appendMessageToElement(element, validationProperty) {
        let helpBlock = element.nextSibling;
        if (helpBlock) {
            if (!helpBlock.classList) {
                helpBlock = null;
            } else if (!helpBlock.classList.contains(this.helpBlockClass)) {
                helpBlock = null;
            }
        }
        if (!helpBlock) {
            helpBlock = document.createElement('p');
            helpBlock.classList.add('help-block');
            helpBlock.classList.add(this.helpBlockClass);
            if (element.nextSibling) {
                element.parentNode.insertBefore(helpBlock, element.nextSibling);
            } else {
                element.parentNode.appendChild(helpBlock);
            }
        }
        if (validationProperty) {
            helpBlock.textContent = validationProperty.message;
        } else {
            helpBlock.textContent = '';
        }
    }

    appendUIVisuals(validationProperty, currentElement) {
        let formGroup = this.searchFormGroup(currentElement, 0);
        if (formGroup) {
            if (validationProperty && validationProperty.isDirty) {
                if (validationProperty.isValid) {
                    formGroup.classList.remove('has-warning');
                    formGroup.classList.add('has-success');
                } else {
                    formGroup.classList.remove('has-success');
                    formGroup.classList.add('has-warning');
                }
            } else {
                formGroup.classList.remove('has-warning');
                formGroup.classList.remove('has-success');
            }
            if (this.appendMessageToInput) {
                this.appendMessageToElement(currentElement, validationProperty);
            }
            if (this.appendMessageToLabel) {
                let labels = this.findLabels(formGroup, currentElement.id);
                for (let ii = 0; ii < labels.length; ii++) {
                    let label = labels[ii];
                    this.appendMessageToElement(label, validationProperty);
                }
            }
        }
    }

    prepareElement(validationProperty, element) {
        this.appendUIVisuals(null, element);
    }

    updateElement(validationProperty, element) {
        this.appendUIVisuals(validationProperty, element);
    }
}

export class AureliaGridCustomAttributeViewStrategy { }
AureliaGridCustomAttributeViewStrategy.ColumnViewStrategy = new GridColumnPropertyViewStrategy();