define(["exports", "lodash/string/startCase"], function (exports, _lodashStringStartCase) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.RegisterColumn = RegisterColumn;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _startCase = _interopRequireDefault(_lodashStringStartCase);

    function RegisterColumn(bindingContext, template) {
        if (!template.heading && template.property) {
            template.heading = (0, _startCase["default"])(template.property);
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
});