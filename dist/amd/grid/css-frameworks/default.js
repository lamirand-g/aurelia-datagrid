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
            table: ''
        },
        textClasses: {
            editForm: '',
            editField: '',
            editInput: ''
        }
    };

    module.exports = defaultCssFramework;
});