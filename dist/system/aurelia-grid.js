System.register(["./grid/grid-configuration"], function (_export) {
    "use strict";

    var configuration;

    _export("configure", configure);

    function configure(aurelia, config) {
        aurelia.globalResources("./grid/grid", "./grid/grid-column", "./grid/grid-column-button", "./grid/grid-column-checkbox", "./grid/grid-column-edit", "./grid/grid-column-template");

        if (config) {
            config(configuration);
        }
    }

    return {
        setters: [function (_gridGridConfiguration) {
            configuration = _gridGridConfiguration["default"];
        }],
        execute: function () {}
    };
});