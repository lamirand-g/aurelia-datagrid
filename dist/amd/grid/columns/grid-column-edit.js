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

  var GridColumnEdit = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(GridColumnEdit, [{
      key: 'buttonGroupClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'cancelButtonClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'cancelClick',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'editButtonClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'editClick',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'heading',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'orDivClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'saveButtonClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'saveCancelButtonGroupClass',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'saveClick',
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

    function GridColumnEdit(grid) {
      _classCallCheck(this, _GridColumnEdit);

      _defineDecoratedPropertyDescriptor(this, 'buttonGroupClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'cancelButtonClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'cancelClick', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'editButtonClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'editClick', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'orDivClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'saveButtonClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'saveCancelButtonGroupClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'saveClick', _instanceInitializers);

      this.grid = grid;
      this.showCancel = true;
      Object.assign(this, _gridColumnBase2['default']);
    }

    _createDecoratedClass(GridColumnEdit, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindToContext(bindingContext);
      }
    }, {
      key: 'cancelButtonClick',
      value: function cancelButtonClick(event) {
        var _this = this;

        var response = true;

        if (this.cancelClick) {
          response = this.cancelClick(event);
        }

        Promise.resolve(response).then(function (promiseResponse) {
          if (_this.successfulResponse(promiseResponse)) {
            Object.assign(_this.bindingContext.row, _this.originalValue);
            _this.grid.finishEditingItem(_this.bindingContext.row);
          }
        })['catch'](function () {});
      }
    }, {
      key: 'editButtonClick',
      value: function editButtonClick(event) {
        var _this2 = this;

        this.originalValue = Object.assign({}, this.bindingContext.row);

        var response = true;

        if (this.editClick) {
          response = this.editClick(event);
        }

        Promise.resolve(response).then(function (promiseResponse) {
          if (_this2.successfulResponse(promiseResponse)) {
            _this2.grid.beginEditingItem(_this2.bindingContext.row);
          }
        })['catch'](function () {});
      }
    }, {
      key: 'loadCssFrameworkSettings',
      value: function loadCssFrameworkSettings() {
        if (this.grid.cssFrameworkConfiguration) {
          var config = this.grid.cssFrameworkConfiguration.editClasses;

          this.buttonGroupClass = config.buttonGroup;
          this.cancelButtonClass = config.cancelButton;
          this.editButtonClass = config.editButton;
          this.orDivClass = config.orDiv;
          this.saveButtonClass = config.saveButton;
          this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
        }
      }
    }, {
      key: 'saveButtonClick',
      value: function saveButtonClick(event) {
        var _this3 = this;

        var response = true;

        if (this.saveClick) {
          response = this.saveClick(event);
        }

        Promise.resolve(response).then(function (promiseResponse) {
          if (_this3.successfulResponse(promiseResponse)) {
            _this3.grid.finishEditingItem(_this3.bindingContext.row);
          }
        })['catch'](function () {});
      }
    }, {
      key: 'successfulResponse',
      value: function successfulResponse(response) {
        return response === undefined || response;
      }
    }], null, _instanceInitializers);

    var _GridColumnEdit = GridColumnEdit;
    GridColumnEdit = (0, _aureliaDependencyInjection.inject)(_grid.Grid)(GridColumnEdit) || GridColumnEdit;
    return GridColumnEdit;
  })();

  exports.GridColumnEdit = GridColumnEdit;
});