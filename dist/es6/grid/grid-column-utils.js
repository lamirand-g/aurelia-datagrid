import startCase from "lodash/string/startCase";

export function RegisterColumn(bindingContext, template){
    if(!template.heading && template.property){
        template.heading = startCase(template.property);
    }

        if(bindingContext.addColumn){
         let column = {
          heading: template.heading,
          property: template.property,
          filterable: template.filterable !== null && template.filterable !== undefined,
          filter: {
           property: template.filterable || template.property
        },
       sortable: template.sortable !== null && template.sortable !== undefined,
       sort: {
           property: template.sortable || template.property
       }
    };

    bindingContext.addColumn(column);
    } else {
     template.bindingContext = bindingContext;
     template.bindingContext.editing = template.bindingContext.editing || false;
     template.row = bindingContext.row;
    }
}