"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _lodashFunctionDebounce = require("lodash/function/debounce");

var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);

var _gridConstants = require("./grid-constants");

var _gridConstants2 = _interopRequireDefault(_gridConstants);

var _cssFrameworksRepository = require("./css-frameworks/repository");

var _aureliaFramework = require("aurelia-framework");

function configure(config) {
    console.log('conf');
}

var Grid = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(Grid, [{
        key: "class",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "cssFrameworkName",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "items",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "filterFormClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "filterFormFieldClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "filterInputGroupClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "filterInputClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "filterSearchIconClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "sortAscendingIconClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "sortAvailableIconClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "sortButtonGroupClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "sortButtonClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: "sortDescendingIconClass",
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function Grid(observerLocator, repository) {
        _classCallCheck(this, _Grid);

        _defineDecoratedPropertyDescriptor(this, "class", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "cssFrameworkName", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "items", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "filterFormClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "filterFormFieldClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "filterInputGroupClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "filterInputClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "filterSearchIconClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "sortAscendingIconClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "sortAvailableIconClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "sortButtonGroupClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "sortButtonClass", _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, "sortDescendingIconClass", _instanceInitializers);

        this.columns = [];
        this.observerLocator = observerLocator;
        this.repository = repository;
    }

    _createDecoratedClass(Grid, [{
        key: "addColumn",
        value: function addColumn(column) {
            this.columns.push(column);
        }
    }, {
        key: "applyFilter",
        value: function applyFilter(filter) {
            if (this.$parent.applyFilter) {
                this.$parent.applyFilter(filter);
            }
        }
    }, {
        key: "applySort",
        value: function applySort(sort) {
            this.updateSort(sort);

            if (this.$parent.applySort) {
                this.$parent.applySort(sort);
            }
        }
    }, {
        key: "bind",
        value: function bind(bindingContext) {
            this.$parent = bindingContext;
            this.items = bindingContext.items || [];
            this.cssFramework = this.repository.get(this.cssFrameworkName);

            this.loadCssFrameworkSettings();
            this.observeFilters();
        }
    }, {
        key: "loadCssFrameworkSettings",
        value: function loadCssFrameworkSettings() {
            this["class"] = this.cssFramework.gridClasses.table;
            this.loadFilterCssFrameworkSettings();
            this.loadSortCssFrameworkSettings();
        }
    }, {
        key: "loadFilterCssFrameworkSettings",
        value: function loadFilterCssFrameworkSettings() {
            var settings = this.cssFramework.gridClasses;

            this.filterFormClass = settings.filterForm;
            this.filterFormFieldClass = settings.filterFormField;
            this.filterInputGroupClass = settings.filterInputGroup;
            this.filterInputClass = settings.filterInput;
            this.filterSearchIconClass = settings.filterSearchIcon;
        }
    }, {
        key: "loadSortCssFrameworkSettings",
        value: function loadSortCssFrameworkSettings() {
            var settings = this.cssFramework.gridClasses;

            this.sortAscendingIconClass = settings.sortAscendingIcon;
            this.sortAvailableIconClass = settings.sortAvailableIcon;
            this.sortButtonGroupClass = settings.sortButtonGroup;
            this.sortButtonClass = settings.sortButton;
            this.sortDescendingIconClass = settings.sortDescendingIcon;
        }
    }, {
        key: "observeFilters",
        value: function observeFilters() {
            var _this = this;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                var _loop = function () {
                    var column = _step.value;

                    if (column.filter) {
                        _this.observerLocator.getObserver(column.filter, 'value').subscribe((0, _lodashFunctionDebounce2["default"])(function () {
                            return _this.applyFilter(column.filter);
                        }, 300));
                    }
                };

                for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "setDefaultCssFramework",
        value: function setDefaultCssFramework(framework) {
            this.repository.setGlobalDefault(framework);
        }
    }, {
        key: "updateSort",
        value: function updateSort(sort) {
            var oldValue = sort.direction;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var column = _step2.value;

                    if (column.sort) {
                        column.sort.direction = null;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            switch (oldValue) {

                case _gridConstants2["default"].sortAscending:
                    sort.direction = _gridConstants2["default"].sortDescending;
                    break;
                case _gridConstants2["default"].sortDescending:
                    sort.direction = null;
                    break;
                default:
                    sort.direction = _gridConstants2["default"].sortAscending;
                    break;
            }
        }
    }], null, _instanceInitializers);

    var _Grid = Grid;
    Grid = (0, _aureliaFramework.inject)(_aureliaFramework.ObserverLocator, _cssFrameworksRepository.GridCssFrameworkRepository)(Grid) || Grid;
    return Grid;
})();

exports.Grid = Grid;