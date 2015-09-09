System.register(["./grid", "./grid-column-utils", "aurelia-framework"], function (_export) {
	"use strict";

	var Grid, RegisterColumn, bindable, containerless, inject, GridColumnEdit;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_grid) {
			Grid = _grid.Grid;
		}, function (_gridColumnUtils) {
			RegisterColumn = _gridColumnUtils.RegisterColumn;
		}, function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			containerless = _aureliaFramework.containerless;
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			GridColumnEdit = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(GridColumnEdit, [{
					key: "butttonGroupClass",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "editButtonClass",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "saveButtonClass",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "cancelButtonClass",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "heading",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "hideCancel",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function GridColumnEdit(grid) {
					_classCallCheck(this, _GridColumnEdit);

					_defineDecoratedPropertyDescriptor(this, "butttonGroupClass", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "editButtonClass", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "saveButtonClass", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "cancelButtonClass", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "hideCancel", _instanceInitializers);

					this.showCancel = true;

					this.grid = grid;
				}

				_createDecoratedClass(GridColumnEdit, [{
					key: "bind",
					value: function bind(bindingContext) {
						RegisterColumn(bindingContext, this);
						this.hideCancel = this.hideCancel !== null;
						this.loadConfigurationSettings();
					}
				}, {
					key: "loadConfigurationSettings",
					value: function loadConfigurationSettings() {
						if (this.grid.configuration) {
							var config = this.grid.configuration.editClasses;

							this.butttonGroupClass = config.buttonGroup;
							this.editButtonClass = config.editButton;
							this.saveButtonClass = config.saveButton;
							this.cancelButtonClass = config.cancelButton;
						}
					}
				}], null, _instanceInitializers);

				var _GridColumnEdit = GridColumnEdit;
				GridColumnEdit = inject(Grid)(GridColumnEdit) || GridColumnEdit;
				GridColumnEdit = containerless(GridColumnEdit) || GridColumnEdit;
				return GridColumnEdit;
			})();

			_export("GridColumnEdit", GridColumnEdit);
		}
	};
});