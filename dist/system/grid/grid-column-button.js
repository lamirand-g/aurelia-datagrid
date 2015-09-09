System.register(["./grid", "./grid-column-utils", "aurelia-framework"], function (_export) {
	"use strict";

	var Grid, RegisterColumn, bindable, containerless, inject, GridColumnButton;

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
			GridColumnButton = (function () {
				var _instanceInitializers = {};
				var _instanceInitializers = {};

				_createDecoratedClass(GridColumnButton, [{
					key: "caption",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "class",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "buttonClick",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "heading",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}], null, _instanceInitializers);

				function GridColumnButton(grid) {
					_classCallCheck(this, _GridColumnButton);

					_defineDecoratedPropertyDescriptor(this, "caption", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "class", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "buttonClick", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

					this.grid = grid;
				}

				_createDecoratedClass(GridColumnButton, [{
					key: "bind",
					value: function bind(bindingContext) {
						RegisterColumn(bindingContext, this);
						this.loadConfigurationSettings();
					}
				}, {
					key: "click",
					value: function click() {
						if (this.buttonClick) {
							this.buttonClick();
						}
					}
				}, {
					key: "loadConfigurationSettings",
					value: function loadConfigurationSettings() {
						if (this.grid.configuration) {
							var config = this.grid.configuration.buttonClass;

							this["class"] = config;
						}
					}
				}], null, _instanceInitializers);

				var _GridColumnButton = GridColumnButton;
				GridColumnButton = inject(Grid)(GridColumnButton) || GridColumnButton;
				GridColumnButton = containerless(GridColumnButton) || GridColumnButton;
				return GridColumnButton;
			})();

			_export("GridColumnButton", GridColumnButton);
		}
	};
});