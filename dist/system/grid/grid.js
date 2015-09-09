System.register(["lodash/function/debounce", "./grid-configuration", "aurelia-framework"], function (_export) {
    "use strict";

    var debounce, LoadConfiguration, bindable, inject, ObserverLocator, Grid;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_lodashFunctionDebounce) {
            debounce = _lodashFunctionDebounce.debounce;
        }, function (_gridConfiguration) {
            LoadConfiguration = _gridConfiguration.LoadConfiguration;
        }, function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
            ObserverLocator = _aureliaFramework.ObserverLocator;
        }],
        execute: function () {
            Grid = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(Grid, [{
                    key: "class",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "configurationName",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "items",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterFormClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterFormFieldClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterInputGroupClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterInputClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterSearchButtonClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterSearchIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterSearchGroupClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortAscendingIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortAvailableIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortButtonGroupClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortButtonClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortDescendingIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function Grid(observerLocator) {
                    _classCallCheck(this, _Grid);

                    _defineDecoratedPropertyDescriptor(this, "class", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "configurationName", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "items", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterFormClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterFormFieldClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterInputGroupClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterInputClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterSearchButtonClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterSearchIconClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterSearchGroupClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortAscendingIconClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortAvailableIconClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortButtonGroupClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortButtonClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortDescendingIconClass", _instanceInitializers);

                    this.columns = [];
                    this.observerLocator = observerLocator;
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
                        this.$parent = this.$parent || bindingContext;
                        this.items = this.items || bindingContext.items || [];

                        this.configuration = LoadConfiguration(this.configurationName);
                        this.loadConfigurationSettings(this.configuration);

                        this.observeFilters();
                    }
                }, {
                    key: "loadConfigurationSettings",
                    value: function loadConfigurationSettings(configuration) {
                        this["class"] = configuration.gridClasses.table;
                        this.loadFilterConfigurationSettings(configuration);
                        this.loadSortConfigurationSettings(configuration);
                    }
                }, {
                    key: "loadFilterConfigurationSettings",
                    value: function loadFilterConfigurationSettings(configuration) {
                        this.filterFormClass = configuration.gridClasses.filterForm;
                        this.filterFormFieldClass = configuration.gridClasses.filterFormField;
                        this.filterInputGroupClass = configuration.gridClasses.filterInputGroup;
                        this.filterInputClass = configuration.gridClasses.filterInput;
                        this.filterSearchButtonClass = configuration.gridClasses.filterSearchButton;
                        this.filterSearchIconClass = configuration.gridClasses.filterSearchIcon;
                        this.filterSearchGroupClass = configuration.gridClasses.filterSearchGroup;
                    }
                }, {
                    key: "loadSortConfigurationSettings",
                    value: function loadSortConfigurationSettings(configuration) {
                        this.sortAscendingIconClass = configuration.gridClasses.sortAscendingIcon;
                        this.sortAvailableIconClass = configuration.gridClasses.sortAvailableIcon;
                        this.sortButtonGroupClass = configuration.gridClasses.sortButtonGroup;
                        this.sortButtonClass = configuration.gridClasses.sortButton;
                        this.sortDescendingIconClass = configuration.gridClasses.sortDescendingIcon;
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
                                    _this.observerLocator.getObserver(column.filter, 'value').subscribe(debounce(function () {
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
                    key: "updateSort",
                    value: function updateSort(sort) {
                        var oldValue = sort.value;

                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var column = _step2.value;

                                if (column.sort) {
                                    column.sort.value = null;
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
                            case 'ascending':
                                sort.value = 'descending';
                                break;
                            case 'descending':
                                sort.value = null;
                                break;
                            default:
                                sort.value = 'ascending';
                                break;
                        }
                    }
                }], null, _instanceInitializers);

                var _Grid = Grid;
                Grid = inject(ObserverLocator)(Grid) || Grid;
                return Grid;
            })();

            _export("Grid", Grid);
        }
    };
});