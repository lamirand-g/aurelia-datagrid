System.register(["./bootstrap", "./default", "./semantic", "../grid-configuration"], function (_export) {
    "use strict";

    var bootstrapCssFramework, defaultCssFramework, semanticCssFramework, configuration, GridCssFrameworkRepository;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_bootstrap) {
            bootstrapCssFramework = _bootstrap["default"];
        }, function (_default) {
            defaultCssFramework = _default["default"];
        }, function (_semantic) {
            semanticCssFramework = _semantic["default"];
        }, function (_gridConfiguration) {
            configuration = _gridConfiguration["default"];
        }],
        execute: function () {
            GridCssFrameworkRepository = (function () {
                function GridCssFrameworkRepository() {
                    _classCallCheck(this, GridCssFrameworkRepository);

                    this.globalDefaultFramework = {};
                    this.frameworks = [bootstrapCssFramework, semanticCssFramework];
                }

                _createClass(GridCssFrameworkRepository, [{
                    key: "import",
                    value: function _import(framework, setAsDefault) {
                        this.frameworks.push(framework);

                        if (setAsDefault === true) {
                            configuration.defaultCssFramework = framework.name;
                        }
                    }
                }, {
                    key: "get",
                    value: function get(frameworkName) {
                        var framework = undefined;

                        if (frameworkName) {
                            framework = this.frameworks.find(function (item) {
                                return item.name.toLowerCase() === frameworkName.toLowerCase();
                            });
                        } else if (typeof configuration.defaultCssFramework === 'string') {
                            framework = this.get(configuration.defaultCssFramework);
                        } else {
                            framework = configuration.defaultCssFramework;
                        }

                        return Object.assign({}, defaultCssFramework, framework);
                    }
                }]);

                return GridCssFrameworkRepository;
            })();

            _export("GridCssFrameworkRepository", GridCssFrameworkRepository);
        }
    };
});