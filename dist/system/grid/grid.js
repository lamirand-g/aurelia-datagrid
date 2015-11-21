System.register(["./sorting/sorter", "./filtering/filterer", "./css-frameworks/repository", "aurelia-framework"], function (_export) {
    "use strict";

    var Sorter, Filterer, GridCssFrameworkRepository, bindable, inject, ObserverLocator, Grid;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_sortingSorter) {
            Sorter = _sortingSorter["default"];
        }, function (_filteringFilterer) {
            Filterer = _filteringFilterer["default"];
        }, function (_cssFrameworksRepository) {
            GridCssFrameworkRepository = _cssFrameworksRepository.GridCssFrameworkRepository;
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
                    key: "cssFrameworkName",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "items",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterCheckboxButtonClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterCheckboxCheckedIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterCheckboxClearIconClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterCheckboxGroupClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterCheckboxUncheckedIconClass",
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
                    key: "filterSearchIconClass",
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

                function Grid(observerLocator, repository) {
                    var _this = this;

                    _classCallCheck(this, _Grid);

                    _defineDecoratedPropertyDescriptor(this, "class", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "cssFrameworkName", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "items", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterCheckboxButtonClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterCheckboxCheckedIconClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterCheckboxClearIconClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterCheckboxGroupClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterCheckboxUncheckedIconClass", _instanceInitializers);

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

                    this.beginEditingItem = function (item) {
                        _this.itemsCurrentlyEditing.push(item);
                    };

                    this.isEditingItem = function (item) {
                        return _this.itemsCurrentlyEditing.some(function (editing) {
                            return editing === item;
                        });
                    };

                    this.finishEditingItem = function (item) {
                        var index = _this.itemsCurrentlyEditing.indexOf(item);
                        _this.itemsCurrentlyEditing.splice(index, 1);
                    };

                    this.columns = [];
                    this.itemsCurrentlyEditing = [];
                    this.observerLocator = observerLocator;
                    this.repository = repository;
                    this.sorter = new Sorter(this);
                }

                _createDecoratedClass(Grid, [{
                    key: "addColumn",
                    value: function addColumn(column) {
                        this.columns.push(column);
                        this.filterer.observeColumn(column);
                    }
                }, {
                    key: "bind",
                    value: function bind(bindingContext) {
                        this.$parent = bindingContext;
                        this.items = bindingContext.items || [];
                        this.cssFramework = this.repository.get(this.cssFrameworkName);

                        this.loadCssFrameworkSettings();
                        this.filterer = new Filterer(this, this.$parent, this.observerLocator);
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

                        this.filterCheckboxButtonClass = settings.filterCheckboxButton;
                        this.filterCheckboxCheckedIconClass = settings.filterCheckboxCheckedIcon;
                        this.filterCheckboxClearIconClass = settings.filterCheckboxClearIcon;
                        this.filterCheckboxGroupClass = settings.filterCheckboxGroup;
                        this.filterCheckboxUncheckedIconClass = settings.filterCheckboxUncheckedIcon;
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
                }], null, _instanceInitializers);

                var _Grid = Grid;
                Grid = inject(ObserverLocator, GridCssFrameworkRepository)(Grid) || Grid;
                return Grid;
            })();

            _export("Grid", Grid);
        }
    };
});