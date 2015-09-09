define(['exports', 'lodash/string/startCase', 'aurelia-framework'], function (exports, _lodashStringStartCase, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _startCase = _interopRequireDefault(_lodashStringStartCase);

    var propertyAttributeName = 'property';
    var headingAttributeName = 'heading';
    var filterableAttributeName = 'filterable';
    var sortableAttributeName = 'sortable';

    var GridColumnTemplate = (function () {
        function GridColumnTemplate(element) {
            _classCallCheck(this, _GridColumnTemplate);

            this.column = {};
            this.element = element;
        }

        _createClass(GridColumnTemplate, [{
            key: 'bind',
            value: function bind(bindingContext) {
                if (bindingContext.addColumn) {
                    this.fillColumnInformationFromAttributes();
                    bindingContext.addColumn(this.column);
                }
            }
        }, {
            key: 'fillColumnInformationFromAttributes',
            value: function fillColumnInformationFromAttributes() {
                this.getColumnProperty();
                this.getColumnHeading();
                this.getColumnFilter();
                this.getColumnSort();
            }
        }, {
            key: 'getColumnProperty',
            value: function getColumnProperty() {
                var property = this.element.attributes.getNamedItem(propertyAttributeName);
                if (property) {
                    this.column[propertyAttributeName] = property.value;
                }
            }
        }, {
            key: 'getColumnHeading',
            value: function getColumnHeading() {
                var attribute = this.element.attributes.getNamedItem(headingAttributeName);
                if (attribute) {
                    this.column[headingAttributeName] = attribute.value;
                } else if (this.column[propertyAttributeName]) {
                    this.column[headingAttributeName] = (0, _startCase['default'])(this.column[propertyAttributeName]);
                }
            }
        }, {
            key: 'getColumnFilter',
            value: function getColumnFilter() {
                var attribute = this.element.attributes.getNamedItem(filterableAttributeName);
                if (attribute) {
                    this.column[filterableAttributeName] = true;
                    this.column.filter = {
                        property: attribute.value || this.column[propertyAttributeName],
                        value: undefined
                    };
                }
            }
        }, {
            key: 'getColumnSort',
            value: function getColumnSort() {
                var attribute = this.element.attributes.getNamedItem(sortableAttributeName);
                if (attribute) {
                    this.column[sortableAttributeName] = true;
                    this.column.sort = {
                        property: attribute.value || this.column[propertyAttributeName],
                        value: undefined
                    };
                }
            }
        }]);

        var _GridColumnTemplate = GridColumnTemplate;
        GridColumnTemplate = (0, _aureliaFramework.inject)(Element)(GridColumnTemplate) || GridColumnTemplate;
        GridColumnTemplate = (0, _aureliaFramework.customAttribute)('grid-column-template')(GridColumnTemplate) || GridColumnTemplate;
        return GridColumnTemplate;
    })();

    exports.GridColumnTemplate = GridColumnTemplate;
});