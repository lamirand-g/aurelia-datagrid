System.register([], function (_export) {
  "use strict";

  var gridCssConfigurationLoader;
  return {
    setters: [],
    execute: function () {
      gridCssConfigurationLoader = {
        loadCssConfiguration: function loadCssConfiguration() {
          this.cssFrameworkConfiguration = this.repository.get(this.cssFramework);
          this.loadCssFrameworkSettings();
        },

        loadCssFrameworkSettings: function loadCssFrameworkSettings() {
          this.cssFramework = this.cssFrameworkConfiguration.name;
          this["class"] = this["class"] || this.cssFrameworkConfiguration.gridClasses.table;
          this.selectableClass = this.selectableClass || this.cssFrameworkConfiguration.gridClasses.tableSelectable;
          this.loadFilterCssFrameworkSettings();
          this.loadSortCssFrameworkSettings();
        },

        loadFilterCssFrameworkSettings: function loadFilterCssFrameworkSettings() {
          var settings = this.cssFrameworkConfiguration.gridClasses;

          this.filterCheckboxButtonClass = settings.filterCheckboxButton;
          this.filterCheckboxCheckedIconClass = settings.filterCheckboxCheckedIcon;
          this.filterCheckboxClearIconClass = settings.filterCheckboxClearIcon;
          this.filterCheckboxFormFieldGroupClass = settings.filterCheckboxFormFieldGroup;
          this.filterCheckboxGroupClass = settings.filterCheckboxGroup;
          this.filterCheckboxUncheckedIconClass = settings.filterCheckboxUncheckedIcon;
          this.filterFormClass = settings.filterForm;
          this.filterFormFieldClass = settings.filterFormField;
          this.filterInputGroupClass = settings.filterInputGroup;
          this.filterInputClass = settings.filterInput;
          this.filterSearchIconClass = settings.filterSearchIcon;
        },

        loadSortCssFrameworkSettings: function loadSortCssFrameworkSettings() {
          var settings = this.cssFrameworkConfiguration.gridClasses;

          this.sortAscendingIconClass = settings.sortAscendingIcon;
          this.sortAvailableIconClass = settings.sortAvailableIcon;
          this.sortButtonGroupClass = settings.sortButtonGroup;
          this.sortButtonClass = settings.sortButton;
          this.sortDescendingIconClass = settings.sortDescendingIcon;
        }
      };

      _export("default", gridCssConfigurationLoader);
    }
  };
});