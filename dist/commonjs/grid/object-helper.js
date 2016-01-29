'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var objectHelper = {
  getDeepestObjectFromPath: function getDeepestObjectFromPath(object, path) {
    if (!path) return object;

    var deepestObject = object;
    var properties = path.split('.');

    for (var i = 0; i < properties.length - 1; i++) {
      var currentLevelObject = object[properties[i]];

      if (currentLevelObject) {
        deepestObject = currentLevelObject;
      }
    }

    return deepestObject;
  },

  getDeepestPropertyFromPath: function getDeepestPropertyFromPath(path) {
    if (!path) return path;

    var properties = path.split('.');
    return properties[properties.length - 1];
  }
};

exports['default'] = objectHelper;
module.exports = exports['default'];