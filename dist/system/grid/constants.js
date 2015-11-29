System.register(['./sorting/sortConstants'], function (_export) {
  'use strict';

  var sortConstants;
  return {
    setters: [function (_sortingSortConstants) {
      sortConstants = _sortingSortConstants['default'];
    }],
    execute: function () {
      _export('sortConstants', sortConstants);
    }
  };
});