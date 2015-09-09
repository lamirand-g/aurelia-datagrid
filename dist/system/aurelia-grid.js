System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./grid/grid", "./grid/grid-column", "./grid/grid-column-button", "./grid/grid-column-checkbox", "./grid/grid-column-edit", "./grid/grid-column-template");
    }

    return {
        setters: [],
        execute: function () {}
    };
});