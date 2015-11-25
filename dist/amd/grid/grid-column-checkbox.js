define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', './grid', './grid-column-utility'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _grid, _gridColumnUtility) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var GridColumnCheckbox = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(GridColumnCheckbox, [{
      key: 'class',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'checkedIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'containerClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
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
      key: 'uncheckedIconClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'value',
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

    function GridColumnCheckbox(grid, utility) {
      _classCallCheck(this, _GridColumnCheckbox);

      this.alignment = 'center aligned';

      _defineDecoratedPropertyDescriptor(this, 'class', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'checkedIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'containerClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'uncheckedIconClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.bindingContext = {};
      this.grid = grid;
      this.inputType = 'checkbox';
      this.row = {};
      this.utility = utility;
    }

    _createDecoratedClass(GridColumnCheckbox, [{
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
      key: 'loadCssFrameworkSettings',
      value: function loadCssFrameworkSettings() {
        if (this.grid.cssFrameworkConfiguration) {
          var config = this.grid.cssFrameworkConfiguration.checkboxClasses;

          this.checkedIconClass = config.checkedIcon;
          this['class'] = config.editInput;
          this.containerClass = config.container;
          this.uncheckedIconClass = config.uncheckedIcon;
        }
      }
    }], null, _instanceInitializers);

    var _GridColumnCheckbox = GridColumnCheckbox;
    GridColumnCheckbox = (0, _aureliaDependencyInjection.inject)(_grid.Grid, _gridColumnUtility.ColumnUtility)(GridColumnCheckbox) || GridColumnCheckbox;
    GridColumnCheckbox = (0, _aureliaTemplating.containerless)(GridColumnCheckbox) || GridColumnCheckbox;
    return GridColumnCheckbox;
  })();

  exports.GridColumnCheckbox = GridColumnCheckbox;
});