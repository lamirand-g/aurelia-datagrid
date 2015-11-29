'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _grid = require('../grid');

var _gridColumnUtility = require('./grid-column-utility');

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
  }], null, _instanceInitializers);

  function GridColumnTemplate(grid, utility, element, observerLocator) {
    _classCallCheck(this, _GridColumnTemplate);

    _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

    this.element = element;
    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    this.utility = utility;
  }

  _createDecoratedClass(GridColumnTemplate, [{
    key: 'bind',
    value: function bind(bindingContext) {
      if (bindingContext === this.grid) {
        this.utility.registerWithGrid(this.grid, this);
      } else {
        this.utility.bindToRow(bindingContext, this);
      }
    }
  }], null, _instanceInitializers);

  var _GridColumnTemplate = GridColumnTemplate;
  GridColumnTemplate = (0, _aureliaDependencyInjection.inject)(_grid.Grid, _gridColumnUtility.ColumnUtility, Element, _aureliaBinding.ObserverLocator)(GridColumnTemplate) || GridColumnTemplate;
  GridColumnTemplate = (0, _aureliaTemplating.containerless)(GridColumnTemplate) || GridColumnTemplate;
  return GridColumnTemplate;
})();

exports.GridColumnTemplate = GridColumnTemplate;