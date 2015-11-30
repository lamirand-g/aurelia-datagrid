const selection = {
  handleEvents: function() {
    this.element.onclick = event => {
      let tableDetailElement = this.getParentTableElement(event.target, 'TD');
      if (tableDetailElement === null) return;

      this.deselectCurrentRow();
      this.selectRow(tableDetailElement);

      if (this.rowSelected) {
        let column = tableDetailElement.viewmodel;
        this.rowSelected({
          column: column,
          event: event,
          row: column ? column.row : undefined
        });
      }
    };
  },

  deselectCurrentRow: function() {
    if (this.currentlySelectedRow) {
      if (this.currentlySelectedRow.classList.contains('active')) {
        this.currentlySelectedRow.classList.remove('active');
      }
      this.currentlySelectedRow = null;
    }
  },

  selectRow: function(element) {
    let rowElement = this.getParentTableElement(element, 'TR');
    if (!rowElement.classList.contains('active')) {
      rowElement.classList.add('active');
    }
    this.currentlySelectedRow = rowElement;
  },

  getParentTableElement: function(element, tag) {
    if (!element || element.tagName === tag) {
      return element;
    }
    if (element !== this.element && element.parentNode) {
      return this.getParentTableElement(element.parentNode, tag);
    }
    return null;
  }
};

export default selection;
