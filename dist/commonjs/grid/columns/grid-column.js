'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _grid = require('../grid');

var _gridColumnBase = require('./grid-column-base');

var _gridColumnBase2 = _interopRequireDefault(_gridColumnBase);

var GridColumn = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(GridColumn, [{
    key: 'heading',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editInputClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editFieldClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editFormClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'property',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'isEditing',
    get: function get() {
      if (this.bindingContext) {
        return this.grid.isEditingItem(this.bindingContext.row);
      }
      return false;
    }
  }], null, _instanceInitializers);

  function GridColumn(grid, observerLocator) {
    _classCallCheck(this, _GridColumn);

    this.alignment = 'left aligned';

    _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editInputClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editFieldClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editFormClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    Object.assign(this, _gridColumnBase2['default']);
  }

  _createDecoratedClass(GridColumn, [{
    key: 'bind',
    value: function bind(bindingContext) {
      var _this = this;

      this.bindToContext(bindingContext);

      if (bindingContext !== this.grid) {
        this.observerLocator.getObserver(bindingContext.row, 'validation').subscribe(function (newValue) {
          _this.validation = Object.assign({}, newValue, { property: _this.property });
        });
      }
    }
  }, {
    key: 'loadCssFrameworkSettings',
    value: function loadCssFrameworkSettings() {
      if (this.grid.cssFrameworkConfiguration) {
        var settings = this.grid.cssFrameworkConfiguration.textClasses;

        this.editInputClass = settings.editInput;
        this.editFieldClass = settings.editField;
        this.editFormClass = settings.editForm;
      }
    }
  }], null, _instanceInitializers);

  var _GridColumn = GridColumn;
  GridColumn = (0, _aureliaDependencyInjection.inject)(_grid.Grid, _aureliaBinding.ObserverLocator)(GridColumn) || GridColumn;
  GridColumn = (0, _aureliaTemplating.containerless)(GridColumn) || GridColumn;
  return GridColumn;
})();

exports.GridColumn = GridColumn;