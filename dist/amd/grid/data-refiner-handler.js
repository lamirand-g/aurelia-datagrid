define(["exports", "module"], function (exports, module) {
  "use strict";

  var dataRefinerHandler = {
    addDataRefiner: function addDataRefiner(refiner, priority, refreshImmediately) {
      var index = this.getDataRefinerPriorityIndexOf(priority);
      var refinerAndPriority = {
        refiner: refiner,
        priority: priority
      };
      this.dataRefiners.splice(index, 0, refinerAndPriority);
      if (refreshImmediately || refreshImmediately === undefined) {
        this.refresh();
      }
    },

    getDataRefinerPriorityIndexOf: function getDataRefinerPriorityIndexOf(priority) {
      var index = this.dataRefiners.length;
      if (priority) {
        for (var i = 0; i < this.dataRefiners.length; i++) {
          if (priority < this.dataRefiners[i].priority) {
            return i;
          }
        }
      } else if (this.dataRefiners.length) {
        var lastRefiner = this.dataRefiners[this.dataRefiners.length - 1];
        if (lastRefiner.priority === Number.MAX_VALUE) {
          --index;
        }
      }
      return index;
    },

    applyDataRefiners: function applyDataRefiners(items) {
      this.dataRefiners.reduce(function (sequence, refinerAndPriority) {
        return sequence.then(function (data) {
          return refinerAndPriority.refiner(data);
        });
      }, Promise.resolve(items));
    }
  };

  module.exports = dataRefinerHandler;
});