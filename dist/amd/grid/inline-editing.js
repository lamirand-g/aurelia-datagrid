define(["exports", "module"], function (exports, module) {
  "use strict";

  var inlineEditing = {
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

  module.exports = inlineEditing;
});