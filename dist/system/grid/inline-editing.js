System.register([], function (_export) {
  "use strict";

  var inlineEditing;
  return {
    setters: [],
    execute: function () {
      inlineEditing = {
        itemsCurrentlyEditing: [],

        beginEditingItem: function beginEditingItem(item) {
          this.itemsCurrentlyEditing.push(item);
        },

        isEditingItem: function isEditingItem(item) {
          return this.itemsCurrentlyEditing.some(function (editing) {
            return editing === item;
          });
        },

        finishEditingItem: function finishEditingItem(item) {
          var index = this.itemsCurrentlyEditing.indexOf(item);
          this.itemsCurrentlyEditing.splice(index, 1);
        }
      };

      _export("default", inlineEditing);
    }
  };
});