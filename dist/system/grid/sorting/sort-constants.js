System.register([], function (_export) {
  'use strict';

  var sortConstants;
  return {
    setters: [],
    execute: function () {
      sortConstants = {
        sortAscending: 'asc',
        sortDescending: 'desc'
      };

      _export('default', sortConstants);
    }
  };
});