"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports["default"] = inlineEditing;
module.exports = exports["default"];