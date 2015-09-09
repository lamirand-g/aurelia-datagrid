export function LoadCssFramework(name) {
    let configName = name ? name.toLowerCase(): '';

    switch(configName) {
        case 'semantic':
            return getSemanticCssFramework();
        default :
            return getBootstrapCssFramework();
    }
}

function getBootstrapCssFramework() {
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
            filterSearchIcon: 'glyphicon glyphicon-search',
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

function getSemanticCssFramework() {
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
            buttonGroup: 'buttons fluid ui',
            editButton: 'ui primary button',
            saveButton: 'ui positive button',
            cancelButton: 'ui negative button'
        },
        gridClasses: {
            filterForm: 'ui form aligned center',
            filterFormField: 'field',
            filterInputGroup: 'ui icon input',
            filterInput: 'prompt',
            filterSearchIcon: 'search icon',
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