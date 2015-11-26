'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _cssFrameworksRepository = require('./css-frameworks/repository');

var _filteringFilterEngine = require('./filtering/filter-engine');

var _filteringFilterEngine2 = _interopRequireDefault(_filteringFilterEngine);

var _sortingSorter = require('./sorting/sorter');

var _sortingSorter2 = _interopRequireDefault(_sortingSorter);

var _gridConfiguration = require('./grid-configuration');

var _gridConfiguration2 = _interopRequireDefault(_gridConfiguration);

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
  }], null, _instanceInitializers);

  function Grid(repository) {
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

    _defineDecoratedPropertyDescriptor(this, 'sortAscendingIconClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortAvailableIconClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortButtonGroupClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortButtonClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortDescendingIconClass', _instanceInitializers);

    this.filtersApplied = function (filteredItems) {
      _this.filteredItems = filteredItems;
      _this.sorter.applySort();

      if (_this.additionalFiltering) {
        _this.filteredItems = _this.additionalFiltering(_this.filteredItems);
      }
    };

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
    this.repository = repository;
    this.filteredItems = [];
    this.filterEngine = new _filteringFilterEngine2['default']({
      model: this,
      filtersApplied: this.filtersApplied
    });
    this.sorter = new _sortingSorter2['default'](this);
  }

  _createDecoratedClass(Grid, [{
    key: 'addColumn',
    value: function addColumn(column) {
      this.columns.push(column);
    }
  }, {
    key: 'bind',
    value: function bind(bindingContext) {
      this.$parent = bindingContext;
      this.items = this.dataSource || bindingContext.items || [];
      this.cssFrameworkConfiguration = this.repository.get(this.cssFramework);

      this.loadCssFrameworkSettings();
      this.refresh();
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.filterEngine.applyFilters();
    }
  }, {
    key: 'loadCssFrameworkSettings',
    value: function loadCssFrameworkSettings() {
      this.cssFramework = this.cssFrameworkConfiguration.name;
      this['class'] = this['class'] || this.cssFrameworkConfiguration.gridClasses.table;
      this.loadFilterCssFrameworkSettings();
      this.loadSortCssFrameworkSettings();
    }
  }, {
    key: 'loadFilterCssFrameworkSettings',
    value: function loadFilterCssFrameworkSettings() {
      var settings = this.cssFrameworkConfiguration.gridClasses;

      this.filterCheckboxButtonClass = settings.filterCheckboxButton;
      this.filterCheckboxCheckedIconClass = settings.filterCheckboxCheckedIcon;
      this.filterCheckboxClearIconClass = settings.filterCheckboxClearIcon;
      this.filterCheckboxFormFieldGroupClass = settings.filterCheckboxFormFieldGroup;
      this.filterCheckboxGroupClass = settings.filterCheckboxGroup;
      this.filterCheckboxUncheckedIconClass = settings.filterCheckboxUncheckedIcon;
      this.filterFormClass = settings.filterForm;
      this.filterFormFieldClass = settings.filterFormField;
      this.filterInputGroupClass = settings.filterInputGroup;
      this.filterInputClass = settings.filterInput;
      this.filterSearchIconClass = settings.filterSearchIcon;
    }
  }, {
    key: 'loadSortCssFrameworkSettings',
    value: function loadSortCssFrameworkSettings() {
      var settings = this.cssFrameworkConfiguration.gridClasses;

      this.sortAscendingIconClass = settings.sortAscendingIcon;
      this.sortAvailableIconClass = settings.sortAvailableIcon;
      this.sortButtonGroupClass = settings.sortButtonGroup;
      this.sortButtonClass = settings.sortButton;
      this.sortDescendingIconClass = settings.sortDescendingIcon;
    }
  }, {
    key: 'dataSourceChanged',
    value: function dataSourceChanged() {
      this.items = this.dataSource || this.$parent.items || [];
      this.refresh();
    }
  }, {
    key: 'getFilterStrategy',
    value: function getFilterStrategy(column) {
      var strategyTemplate = column.filterable || this.defaultFilter || _gridConfiguration2['default'].defaultFilterStrategy;
      var strategyType = typeof strategyTemplate;
      var strategy = strategyTemplate;

      if (strategyType === 'string') {
        var filterStrategies = _gridConfiguration2['default'].filterStrategies.filter(function (fil) {
          return fil.name.toLowerCase() === strategyTemplate.toLowerCase();
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
  Grid = (0, _aureliaDependencyInjection.inject)(_cssFrameworksRepository.GridCssFrameworkRepository)(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;