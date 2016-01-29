define(['exports', 'module'], function (exports, module) {
  'use strict';

  var semanticCssFramework = {
    name: 'semantic',
    buttonClass: 'ui button',
    checkboxClasses: {
      checkedIcon: 'ui green checkmark icon',
      container: 'ui center aligned',
      input: 'ui checkbox',
      uncheckedIcon: 'ui red remove icon'
    },
    editClasses: {
      buttonGroup: 'ui fluid buttons',
      cancelButton: 'ui button',
      editButton: 'ui primary button',
      orDiv: 'or',
      saveButton: 'ui positive button',
      saveCancelButtonGroup: 'ui fluid buttons'
    },
    gridClasses: {
      filterCheckboxButton: 'ui button',
      filterCheckboxClearIcon: 'ui ban icon',
      filterCheckboxCheckedIcon: 'ui green checkmark icon',
      filterCheckboxFormFieldGroup: 'field',
      filterCheckboxGroup: 'ui center aligned small basic icon buttons',
      filterCheckboxUncheckedIcon: 'red remove icon',
      filterForm: 'ui center aligned form',
      filterFormField: 'field',
      filterInputGroup: 'ui fluid action input',
      filterInput: 'prompt',
      filterSearchIcon: 'ui search icon',
      sortAscendingIcon: 'ui sort ascending icon',
      sortAvailableIcon: 'ui sort icon',
      sortButtonGroup: 'ui fluid buttons',
      sortButton: 'ui basic button',
      sortDescendingIcon: 'ui sort descending icon',
      table: 'ui celled compact striped table',
      tableSelectable: 'selectable'
    },
    textClasses: {
      editForm: 'ui form',
      editField: 'field',
      editInput: ''
    },
    getAlignmentClass: function getAlignmentClass(alignment) {
      alignment = alignment.toLowerCase();

      switch (alignment) {
        case 'right':
        case 'right aligned':
          return 'ui right aligned';

        case 'center':
        case 'center aligned':
          return 'ui center aligned';

        case 'justify':
        case 'justified':
          return 'justified';

        default:
          return 'ui left aligned';
      }
    }
  };

  module.exports = semanticCssFramework;
});