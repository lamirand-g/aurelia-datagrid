const inlineEditing = {
  itemsCurrentlyEditing: [],

  beginEditingItem: function(item) {
    this.itemsCurrentlyEditing.push(item);
  },

  isEditingItem: function(item) {
    return this.itemsCurrentlyEditing.some(editing => editing === item);
  },

  finishEditingItem: function(item) {
    let index = this.itemsCurrentlyEditing.indexOf(item);
    this.itemsCurrentlyEditing.splice(index, 1);
  }
};

export default inlineEditing;
