System.register(['./grid/configuration'], function (_export) {
  'use strict';

  var configuration;

  _export('configure', configure);

  function configure(aurelia, config) {
    aurelia.globalResources('./grid/grid', './grid/columns/grid-column', './grid/columns/grid-column-button', './grid/columns/grid-column-checkbox', './grid/columns/grid-column-edit', './grid/columns/grid-column-template');

    if (typeof config === 'function') {
      config(configuration);
    }
  }

  return {
    setters: [function (_gridConfiguration) {
      configuration = _gridConfiguration['default'];
    }],
    execute: function () {}
  };
});