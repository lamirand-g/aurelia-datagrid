define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', './css-frameworks/grid-css-configuration-loader', './css-frameworks/repository', './data-refiner-handler', './filtering/filter-data-refiner', './configuration', './inline-editing', './sorting/sort-data-refiner', './selection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _cssFrameworksGridCssConfigurationLoader, _cssFrameworksRepository, _dataRefinerHandler, _filteringFilterDataRefiner, _configuration, _inlineEditing, _sortingSortDataRefiner, _selection) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _gridCssConfigurationLoader = _interopRequireDefault(_cssFrameworksGridCssConfigurationLoader);

  var _dataRefinerHandler2 = _interopRequireDefault(_dataRefinerHandler);

  var _FilterDataRefiner = _interopRequireDefault(_filteringFilterDataRefiner);

  var _configuration2 = _interopRequireDefault(_configuration);

  var _inlineEditing2 = _interopRequireDefault(_inlineEditing);

  var _SortDataRefiner = _interopRequireDefault(_sortingSortDataRefiner);

  var _selection2 = _interopRequireDefault(_selection);

  var Grid = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(Grid, [{
      key: 'additionalFiltering',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'class',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'cssFramework',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'dataSource',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'defaultFilter',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterCheckboxButtonClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterCheckboxCheckedIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterCheckboxClearIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterCheckboxGroupClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterCheckboxUncheckedIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterFormClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterFormFieldClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterInputGroupClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterInputClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'filterSearchIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'rowSelected',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'selectable',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return 'row';
      },
      enumerable: true
    }, {
      key: 'selectableClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'sortAscendingIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'sortAvailableIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'sortButtonGroupClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'sortButtonClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'sortDescendingIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'customSort',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Grid(repository, element) {
      var _this = this;

      _classCallCheck(this, _Grid);

      _defineDecoratedPropertyDescriptor(this, 'additionalFiltering', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'class', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'cssFramework', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'defaultFilter', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterCheckboxButtonClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterCheckboxCheckedIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterCheckboxClearIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterCheckboxGroupClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterCheckboxUncheckedIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterFormClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterFormFieldClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterInputGroupClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterInputClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterSearchIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'rowSelected', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'selectableClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortAscendingIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortAvailableIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortButtonGroupClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortButtonClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortDescendingIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'customSort', _instanceInitializers);

      this.applyAdditionalDataRefining = function (data) {
        return new Promise(function (resolve) {
          if (_this.additionalFiltering) {
            var filteredData = _this.additionalFiltering(data);
            resolve(filteredData);
          } else {
            resolve(data);
          }
        });
      };

      this.updateFilteredItems = function (data) {
        return new Promise(function (resolve) {
          _this.filteredItems = data;
          resolve(_this.filteredItems);
        });
      };

      this.refresh = function () {
        _this.applyDataRefiners(_this.dataSource);
      };

      this.columns = [];
      this.dataRefiners = [];
      this.element = element;
      this.itemsCurrentlyEditing = [];
      this.repository = repository;
      this.filteredItems = [];
      Object.assign(this, _gridCssConfigurationLoader['default']);
      Object.assign(this, _inlineEditing2['default']);
      Object.assign(this, _selection2['default']);
      Object.assign(this, _dataRefinerHandler2['default']);
      this.addDataRefiners();
    }

    _createDecoratedClass(Grid, [{
      key: 'addDataRefiners',
      value: function addDataRefiners() {
        var dataRefinerSettings = {
          dataRefinerHandler: this,
          refresh: this.refresh
        };
        this.filterDataRefiner = new _FilterDataRefiner['default'](dataRefinerSettings);
        this.sortDataRefiner = new _SortDataRefiner['default'](dataRefinerSettings);
        this.addDataRefiner(this.applyAdditionalDataRefining, 9000, false);
        this.addDataRefiner(this.updateFilteredItems, Number.MAX_VALUE, false);
      }
    }, {
      key: 'addColumn',
      value: function addColumn(column) {
        this.columns.push(column);
        this.hasFilters = this.hasFilters || column.filterable !== null && column.filterable !== undefined;
      }
    }, {
      key: 'bind',
      value: function bind(bindingContext) {
        this.dataSource = this.dataSource || bindingContext.items;
        if (!this.dataSource) {
          throw new Error('The data-source is not undefined.');
        }
        if (this.customSort) {
          this.sortDataRefiner.customSort = this.customSort;
        }

        this.loadCssConfiguration();
        this.refresh();
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (this.selectable !== 'false') {
          this.handleEvents();
        }
      }
    }, {
      key: 'dataSourceChanged',
      value: function dataSourceChanged() {
        this.refresh();
      }
    }, {
      key: 'getFilterStrategy',
      value: function getFilterStrategy(column) {
        var strategyTemplate = column.filterable || this.defaultFilter || _configuration2['default'].defaultFilterStrategy;
        var strategyType = typeof strategyTemplate;
        var strategy = strategyTemplate;

        if (strategyType === 'string') {
          var filterStrategies = _configuration2['default'].filterStrategies.filter(function (filter) {
            return filter.name.toLowerCase() === strategyTemplate.toLowerCase();
          });

          if (filterStrategies.length === 0) {
            throw Error('The filter \'' + strategyTemplate + '\' cannot be found.');
          }
          strategy = filterStrategies[filterStrategies.length - 1].strategy;
        }
        return strategy;
      }
    }], null, _instanceInitializers);

    var _Grid = Grid;
    Grid = (0, _aureliaDependencyInjection.inject)(_cssFrameworksRepository.GridCssFrameworkRepository, Element)(Grid) || Grid;
    return Grid;
  })();

  exports.Grid = Grid;
});