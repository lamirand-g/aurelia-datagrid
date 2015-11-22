System.register([], function (_export) {
  'use strict';

  var gridConstants;
  return {
    setters: [],
    execute: function () {
      gridConstants = {
        sortAscending: 'asc',
        sortDescending: 'desc'
      };

      _export('default', gridConstants);
    }
  };
});