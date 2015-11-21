System.register(["lodash/string/startCase"], function (_export) {
    "use strict";

    var startCase, ColumnUtility;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_lodashStringStartCase) {
            startCase = _lodashStringStartCase["default"];
        }],
        execute: function () {
            ColumnUtility = (function () {
                function ColumnUtility() {
                    _classCallCheck(this, ColumnUtility);
                }

                _createClass(ColumnUtility, [{
                    key: "bindToRow",
                    value: function bindToRow(bindingRowContext, column) {
                        column.bindingContext = bindingRowContext;
                        column.bindingContext.editing = column.bindingContext.editing || false;
                        column.row = bindingRowContext.row;
                    }
                }, {
                    key: "registerWithGrid",
                    value: function registerWithGrid(grid, template) {
                        if (!template.heading && template.property) {
                            template.heading = startCase(template.property);
                        }

                        var column = {
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
                                direction: null
                            }
                        };

                        grid.addColumn(column);
                    }
                }]);

                return ColumnUtility;
            })();

            _export("ColumnUtility", ColumnUtility);
        }
    };
});