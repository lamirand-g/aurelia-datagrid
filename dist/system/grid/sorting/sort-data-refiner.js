System.register(['lodash', './sort-constants'], function (_export) {
  'use strict';

  var _, sortConstants, SortDataRefiner;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }, function (_sortConstants) {
      sortConstants = _sortConstants['default'];
    }],
    execute: function () {
      SortDataRefiner = (function () {
        function SortDataRefiner(settings) {
          var _this = this;

          _classCallCheck(this, SortDataRefiner);

          this.refineData = function (data) {
            return new Promise(function (resolve) {
              var sortedData = _this.applySort(data);
              resolve(sortedData);
            });
          };

          this.refresh = settings.refresh;
          this.sort = {};
          this.subscribe(settings.dataRefinerHandler);
        }

        _createClass(SortDataRefiner, [{
          key: 'subscribe',
          value: function subscribe(dataRefinerHandler) {
            if (dataRefinerHandler) {
              dataRefinerHandler.addDataRefiner(this.refineData, 2000, false);
            }
          }
        }, {
          key: 'applySort',
          value: function applySort(data) {
            if (this.sort.direction) {
              return _.orderBy(data, this.sort.property, this.sort.direction);
            }
            return data;
          }
        }, {
          key: 'setSort',
          value: function setSort(property) {
            this.updateSort(property);
            this.onRefresh();
          }
        }, {
          key: 'updateSort',
          value: function updateSort(property) {
            var sameProperty = property === this.sort.property;
            this.sort.property = property;
            if (sameProperty) {
              this.toggleSort();
            } else {
              this.resetSort();
            }
          }
        }, {
          key: 'toggleSort',
          value: function toggleSort() {
            switch (this.sort.direction) {
              case sortConstants.sortAscending:
                this.sort.direction = sortConstants.sortDescending;
                break;
              case sortConstants.sortDescending:
                this.sort.direction = null;
                break;
              default:
                this.sort.direction = sortConstants.sortAscending;
                break;
            }
          }
        }, {
          key: 'resetSort',
          value: function resetSort() {
            this.sort.direction = sortConstants.sortAscending;
          }
        }, {
          key: 'onRefresh',
          value: function onRefresh() {
            if (this.refresh) {
              this.refresh();
            } else {
              throw new Error('The \'refresh\' function is undefined.');
            }
          }
        }]);

        return SortDataRefiner;
      })();

      _export('default', SortDataRefiner);
    }
  };
});