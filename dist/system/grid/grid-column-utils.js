System.register(["lodash/string/startCase"], function (_export) {
    "use strict";

    var startCase;

    _export("RegisterColumn", RegisterColumn);

    function RegisterColumn(bindingContext, template) {
        if (!template.heading && template.property) {
            template.heading = startCase(template.property);
        }

        if (bindingContext.addColumn) {
            var column = {
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

    return {
        setters: [function (_lodashStringStartCase) {
            startCase = _lodashStringStartCase["default"];
        }],
        execute: function () {}
    };
});