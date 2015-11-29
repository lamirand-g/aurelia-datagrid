define(['exports', './bootstrap', './default', './semantic', '../configuration'], function (exports, _bootstrap, _default, _semantic, _configuration) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _bootstrapCssFramework = _interopRequireDefault(_bootstrap);

  var _defaultCssFramework = _interopRequireDefault(_default);

  var _semanticCssFramework = _interopRequireDefault(_semantic);

  var _configuration2 = _interopRequireDefault(_configuration);

  var GridCssFrameworkRepository = (function () {
    function GridCssFrameworkRepository() {
      _classCallCheck(this, GridCssFrameworkRepository);

      this.globalDefaultFramework = {};
      this.frameworks = [_bootstrapCssFramework['default'], _semanticCssFramework['default']];
    }

    _createClass(GridCssFrameworkRepository, [{
      key: 'import',
      value: function _import(framework, setAsDefault) {
        this.frameworks.push(framework);

        if (setAsDefault === true) {
          _configuration2['default'].defaultCssFramework = framework.name;
        }
      }
    }, {
      key: 'get',
      value: function get(frameworkName) {
        var framework = undefined;

        if (frameworkName) {
          framework = this.frameworks.find(function (item) {
            return item.name.toLowerCase() === frameworkName.toLowerCase();
          });
        } else if (typeof _configuration2['default'].defaultCssFramework === 'string') {
          framework = this.get(_configuration2['default'].defaultCssFramework);
        } else {
          framework = _configuration2['default'].defaultCssFramework;
        }

        return Object.assign({}, _defaultCssFramework['default'], framework);
      }
    }]);

    return GridCssFrameworkRepository;
  })();

  exports.GridCssFrameworkRepository = GridCssFrameworkRepository;
});