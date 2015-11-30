System.register([], function (_export) {
  'use strict';

  var selection;
  return {
    setters: [],
    execute: function () {
      selection = {
        handleEvents: function handleEvents() {
          var _this = this;

          this.element.onclick = function (event) {
            var tableDetailElement = _this.getParentTableElement(event.target, 'TD');
            if (tableDetailElement === null) return;

            _this.deselectCurrentRow();
            _this.selectRow(tableDetailElement);

            if (_this.rowSelected) {
              var column = tableDetailElement.viewmodel;
              _this.rowSelected({
                column: column,
                event: event,
                row: column ? column.row : undefined
              });
            }
          };
        },

        deselectCurrentRow: function deselectCurrentRow() {
          if (this.currentlySelectedRow) {
            if (this.currentlySelectedRow.classList.contains('active')) {
              this.currentlySelectedRow.classList.remove('active');
            }
            this.currentlySelectedRow = null;
          }
        },

        selectRow: function selectRow(element) {
          var rowElement = this.getParentTableElement(element, 'TR');
          if (!rowElement.classList.contains('active')) {
            rowElement.classList.add('active');
          }
          this.currentlySelectedRow = rowElement;
        },

        getParentTableElement: function getParentTableElement(element, tag) {
          if (!element || element.tagName === tag) {
            return element;
          }
          if (element !== this.element && element.parentNode) {
            return this.getParentTableElement(element.parentNode, tag);
          }
          return null;
        }
      };

      _export('default', selection);
    }
  };
});