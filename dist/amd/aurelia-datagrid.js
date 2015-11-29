define(['exports', './grid/configuration'], function (exports, _gridConfiguration) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _configuration = _interopRequireDefault(_gridConfiguration);

  function configure(aurelia, config) {
    aurelia.globalResources('./grid/grid', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template');

    if (typeof config === 'function') {
      config(_configuration['default']);
    }
  }
});