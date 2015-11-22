System.register(['lodash', '../grid-constants'], function (_export) {
  'use strict';

  var _, GridConstants, Sorter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }, function (_gridConstants) {
      GridConstants = _gridConstants['default'];
    }],
    execute: function () {
      Sorter = (function () {
        function Sorter(grid) {
          _classCallCheck(this, Sorter);

          this.grid = grid;
        }

        _createClass(Sorter, [{
          key: 'applySort',
          value: function applySort(sort) {
            this.updateSortInformation(sort);

            if (this.grid.$parent.applySort) {
              this.grid.$parent.applySort(sort);
            } else {
              this.sortItemsLocally(this.grid.items, sort);
            }
          }
        }, {
          key: 'clearAllSorts',
          value: function clearAllSorts() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.grid.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var column = _step.value;

                if (column.sort) {
                  column.sort.direction = null;
                }
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
          key: 'sortItemsLocally',
          value: function sortItemsLocally(items, sort) {
            if (!this.unsortedItems) {
              this.unsortedItems = items.slice(0);
            }

            var sortedItems = undefined;

            if (sort.direction) {
              sortedItems = _.sortByOrder(this.unsortedItems, sort.property, sort.direction);
            } else {
              sortedItems = this.unsortedItems;
            }

            items.splice(0, items.length);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = sortedItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                items.push(item);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: 'updateSortInformation',
          value: function updateSortInformation(sortInformation) {
            var oldValue = sortInformation.direction;

            this.clearAllSorts();

            switch (oldValue) {
              case GridConstants.sortAscending:
                sortInformation.direction = GridConstants.sortDescending;
                break;
              case GridConstants.sortDescending:
                sortInformation.direction = null;
                break;
              default:
                sortInformation.direction = GridConstants.sortAscending;
                break;
            }
          }
        }]);

        return Sorter;
      })();

      _export('default', Sorter);
    }
  };
});