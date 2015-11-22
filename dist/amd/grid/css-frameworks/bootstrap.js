define(['exports', 'module'], function (exports, module) {
  'use strict';

  var bootstrapCssFramework = {
    name: 'bootstrap',
    buttonClass: 'btn btn-default',
    checkboxClasses: {
      checkedIcon: 'glyphicon glyphicon-ok',
      container: 'text-center',
      editInput: 'checkbox',
      uncheckedIcon: 'glyphicon glyphicon-remove'
    },
    editClasses: {
      buttonGroup: 'btn-group',
      cancelButton: 'btn btn-danger',
      editButton: 'btn btn-primary',
      orDiv: '',
      saveButton: 'btn btn-success',
      saveCancelButtonGroup: 'btn-group-vertical'
    },
    gridClasses: {
      filterCheckboxButton: 'btn btn-default',
      filterCheckboxClearIcon: 'glyphicon glyphicon-ban-circle',
      filterCheckboxCheckedIcon: 'glyphicon glyphicon-ok',
      filterCheckboxFormFieldGroup: 'text-center',
      filterCheckboxGroup: 'btn-group',
      filterCheckboxUncheckedIcon: 'glyphicon glyphicon-remove',
      filterForm: '',
      filterFormField: '',
      filterInputGroup: 'input-group',
      filterInput: 'form-control',
      filterSearchIcon: 'glyphicon glyphicon-search',
      sortAscendingIcon: 'glyphicon glyphicon-arrow-up',
      sortAvailableIcon: 'glyphicon glyphicon-sort',
      sortButtonGroup: 'btn-group btn-group-justified',
      sortButton: 'btn btn-default',
      sortDescendingIcon: 'glyphicon glyphicon-arrow-down',
      table: 'table table-striped table-condensed table-bordered'
    },
    textClasses: {
      editForm: '',
      editField: 'form-group',
      editInput: 'form-control'
    }
  };

  module.exports = bootstrapCssFramework;
});