import { singleton } from "aurelia-framework";

export class ElementsToPropertyDictionary {
    
    constructor() {
        this.dictionary = [];
    }

    add(propertyName, elementId) {
        let property = this.findProperty(propertyName);

        if (property) {
            property.elementIds.push(elementId);
        } else {
            this.dictionary.push({
                property: propertyName,
                elementIds: [elementId]
            });
        };
    }
    
    findProperty(propertyName) {
        return this.dictionary.find(item => {
            return item.property = propertyName;
        });
    }

    findPropertyWithElementId(elementId){
        for(let property of this.dictionary){
            if(this.hasElement(property, elementId)){
                return property;
            }
        }

        return null;
    }

    hasElement(propertyName, elementId) {
        let property = this.findProperty(propertyName);

        if (property) {
            let element = property.elementIds.find(item => {
                return item === elementId.toString();
            });

            return element;
        };

        return false;
    }
}

export class ElementsToPropertyDictionarySingleton { }

ElementsToPropertyDictionarySingleton.Instance = new ElementsToPropertyDictionary();