System.register(['lodash'], function (_export) {
  'use strict';

  var _, Filterer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      Filterer = (function () {
        function Filterer(grid, viewModel, observerLocator) {
          var _this = this;

          _classCallCheck(this, Filterer);

          this.observeColumn = function (column) {
            if (column.filter) {
              _this.observerLocator.getObserver(column.filter, 'value').subscribe(_.debounce(function () {
                return _this.applyFilter(column.filter);
              }, 300));
            }
          };

          this.grid = grid;
          this.viewModel = viewModel;
          this.observerLocator = observerLocator;
        }

        _createClass(Filterer, [{
          key: 'applyFilter',
          value: function applyFilter(filterInformation) {
            if (this.viewModel.applyFilter) {
              this.viewModel.applyFilter(filterInformation);
            } else {
              this.filterLocally(this.grid.items, filterInformation);
            }
          }
        }, {
          key: 'filterLocally',
          value: function filterLocally(items, filterInformation) {
            var _this2 = this;

            if (!this.unfilteredItems) {
              this.unfilteredItems = items.slice(0);
            }

            var filteredItems = undefined;

            if (filterInformation.value || filterInformation.value === false) {
              filteredItems = _.filter(this.unfilteredItems, function (item) {
                return _this2.matchesFilter(item, filterInformation);
              });
            } else {
              filteredItems = this.unfilteredItems;
            }

            items.splice(0, items.length);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = filteredItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                items.push(item);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'matchesFilter',
          value: function matchesFilter(item, filterInformation) {
            var property = (item[filterInformation.property] + '').toString().toLowerCase();
            return property.startsWith(filterInformation.value.toString().toLowerCase());
          }
        }]);

        return Filterer;
      })();

      _export('default', Filterer);
    }
  };
});