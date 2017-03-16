define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../grid', './grid-column-base'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _grid, _gridColumnBase) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _gridColumnBase2 = _interopRequireDefault(_gridColumnBase);

  var GridColumnTemplate = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(GridColumnTemplate, [{
      key: 'heading',
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
      key: 'class',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function GridColumnTemplate(grid) {
      _classCallCheck(this, _GridColumnTemplate);

      _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'class', _instanceInitializers);

      this.grid = grid;
      this.row = {};
      Object.assign(this, _gridColumnBase2['default']);
    }

    _createDecoratedClass(GridColumnTemplate, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindToContext(bindingContext);
      }
    }, {
      key: 'loadCssFrameworkSettings',
      value: function loadCssFrameworkSettings() {}
    }], null, _instanceInitializers);

    var _GridColumnTemplate = GridColumnTemplate;
    GridColumnTemplate = (0, _aureliaDependencyInjection.inject)(_grid.Grid)(GridColumnTemplate) || GridColumnTemplate;
    GridColumnTemplate = (0, _aureliaTemplating.containerless)(GridColumnTemplate) || GridColumnTemplate;
    return GridColumnTemplate;
  })();

  exports.GridColumnTemplate = GridColumnTemplate;
});