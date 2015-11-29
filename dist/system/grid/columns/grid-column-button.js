System.register(['aurelia-dependency-injection', 'aurelia-templating', '../grid', './grid-column-utility'], function (_export) {
  'use strict';

  var inject, bindable, containerless, Grid, ColumnUtility, GridColumnButton;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      containerless = _aureliaTemplating.containerless;
    }, function (_grid) {
      Grid = _grid.Grid;
    }, function (_gridColumnUtility) {
      ColumnUtility = _gridColumnUtility.ColumnUtility;
    }],
    execute: function () {
      GridColumnButton = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(GridColumnButton, [{
          key: 'caption',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'class',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'buttonClick',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'heading',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function GridColumnButton(grid, utility) {
          _classCallCheck(this, _GridColumnButton);

          _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'class', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'buttonClick', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

          this.grid = grid;
          this.utility = utility;
        }

        _createDecoratedClass(GridColumnButton, [{
          key: 'bind',
          value: function bind(bindingContext) {
            if (bindingContext === this.grid) {
              this.utility.registerWithGrid(this.grid, this);
            } else {
              this.utility.bindToRow(bindingContext, this);
            }

            this.loadCssFrameworkSettings();
          }
        }, {
          key: 'click',
          value: function click() {
            if (this.buttonClick) {
              this.buttonClick();
            }
          }
        }, {
          key: 'loadCssFrameworkSettings',
          value: function loadCssFrameworkSettings() {
            if (this.grid.cssFrameworkConfiguration) {
              var config = this.grid.cssFrameworkConfiguration.buttonClass;

              this['class'] = config;
            }
          }
        }], null, _instanceInitializers);

        var _GridColumnButton = GridColumnButton;
        GridColumnButton = inject(Grid, ColumnUtility)(GridColumnButton) || GridColumnButton;
        GridColumnButton = containerless(GridColumnButton) || GridColumnButton;
        return GridColumnButton;
      })();

      _export('GridColumnButton', GridColumnButton);
    }
  };
});