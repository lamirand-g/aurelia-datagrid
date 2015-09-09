export function LoadConfiguration(name) {
    let configName = name ? name.toLowerCase(): '';

    switch(configName) {
        case 'semantic':
            return getSemanticConfiguration();
        default :
            return getBootstrapConfiguration();
    }
}

function getBootstrapConfiguration() {
    return {
        name: 'bootstrap',
        buttonClass: 'btn btn-default',
        checkboxClasses: {
            checkedIcon: 'glyphicon glyphicon-ok',
            container: 'text-center',
            editInput: 'checkbox',
            uncheckedIcon: '',
        },
        editClasses: {
            buttonGroup: 'btn-group',
            editButton: 'btn btn-primary',
            saveButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        gridClasses: {
            filterForm: 'form',
            filterFormField: '',
            filterInputGroup: 'input-group',
            filterInput: 'form-control',
            filterSearchButton: 'btn btn-default',
            filterSearchIcon: 'glyphicon glyphicon-search',
            filterSearchGroup: 'input-group-btn',
            sortAscendingIcon: 'glyphicon glyphicon-chevron-up',
            sortAvailableIcon: 'glyphicon glyphicon-sort',
            sortButtonGroup: 'btn-group btn-group-justified',
            sortButton: 'btn btn-default',
            sortDescendingIcon: 'glyphicon glyphicon-chevron-down',
            table: 'table table-striped table-condensed table-bordered'
        },
        textClasses: {
            editForm: '',
            editField: 'form-group',
            editInput: 'form-control'
        }
    }
}

function getSemanticConfiguration() {
    return {
        name: 'semantic-ui',
        buttonClass: 'ui button',
        checkboxClasses: {
            checkedIcon: 'green checkmark icon',
            container: 'aligned center ui',
            input: 'checkbox ui',
            uncheckedIcon: '',
        },
        editClasses: {
            buttonGroup: 'ui buttons',
            editButton: 'ui primary button',
            saveButton: 'ui positive button',
            cancelButton: 'ui negative button'
        },
        gridClasses: {
            filterForm: 'ui form aligned center',
            filterFormField: 'field',
            filterInputGroup: 'ui icon input',
            filterInput: 'prompt',
            filterSearchButton: 'button',
            filterSearchIcon: 'search icon',
            filterSearchGroup: '',
            sortAscendingIcon: 'icon ascending sort',
            sortAvailableIcon: 'icon sort',
            sortButtonGroup: 'ui fluid buttons',
            sortButton: 'ui button',
            sortDescendingIcon: 'icon descending sort',
            table: 'ui celled compact striped table'
        },
        textClasses: {
            editForm: 'form ui',
            editField: 'field',
            editInput: ''
        }
    }
}