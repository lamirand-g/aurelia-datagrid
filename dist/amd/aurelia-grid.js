define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.globalResources("./grid/grid", "./grid/grid-column", "./grid/grid-column-button", "./grid/grid-column-checkbox", "./grid/grid-column-edit", "./grid/grid-column-template");
    }
});