define(['exports', 'module'], function (exports, module) {
  'use strict';

  var defaultCssFramework = {
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
      table: '',
      tableSelectable: ''
    },
    textClasses: {
      editForm: '',
      editField: '',
      editInput: ''
    },

    getAlignmentClass: function getAlignmentClass(alignment) {
      return '';
    }
  };

  module.exports = defaultCssFramework;
});