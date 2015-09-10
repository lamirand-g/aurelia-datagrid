System.register([], function (_export) {
    "use strict";

    var gridConstants;
    return {
        setters: [],
        execute: function () {
            gridConstants = {
                sortAscending: "ascending",
                sortDescending: "descending"
            };

            _export("default", gridConstants);
        }
    };
});