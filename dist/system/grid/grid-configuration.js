System.register([], function (_export) {
  'use strict';

  var gridConfiguration;
  return {
    setters: [],
    execute: function () {
      gridConfiguration = {
        defaultCssFramework: 'default'
      };

      _export('default', gridConfiguration);
    }
  };
});