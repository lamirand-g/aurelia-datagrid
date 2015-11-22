define(["exports", "./grid/grid-configuration"], function (exports, _gridGridConfiguration) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _configuration = _interopRequireDefault(_gridGridConfiguration);

    function configure(aurelia, config) {
        aurelia.globalResources("./grid/grid", "./grid/grid-column", "./grid/grid-column-button", "./grid/grid-column-checkbox", "./grid/grid-column-edit", "./grid/grid-column-template");

        if (config) {
            config(_configuration["default"]);
        }
    }
});