System.register([], function (_export) {
  'use strict';

  var defaultCssFramework;
  return {
    setters: [],
    execute: function () {
      defaultCssFramework = {
        name: 'none',
        buttonClass: '',
        checkboxClasses: {
          checkedIcon: '',
          container: '',
          input: '',
          uncheckedIcon: ''
        },
        editClasses: {
          buttonGroup: '',
          cancelButton: '',
          editButton: '',
          orDiv: '',
          saveButton: '',
          saveCancelButtonGroup: ''
        },
        gridClasses: {
          filterForm: '',
          filterFormField: '',
          filterCheckboxFormFieldGroup: '',
          filterInputGroup: '',
          filterInput: '',
          filterSearchIcon: '',
          sortAscendingIcon: '',
          sortAvailableIcon: '',
          sortButtonGroup: '',
          sortButton: '',
          sortDescendingIcon: '',
          table: ''
        },
        textClasses: {
          editForm: '',
          editField: '',
          editInput: ''
        }
      };

      _export('default', defaultCssFramework);
    }
  };
});