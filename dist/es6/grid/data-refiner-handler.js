const dataRefinerHandler = {
  addDataRefiner: function(refiner, priority, refreshImmediately) {
    let index = this.getDataRefinerPriorityIndexOf(priority);
    let refinerAndPriority = {
      refiner: refiner,
      priority: priority
    };
    this.dataRefiners.splice(index, 0, refinerAndPriority);
    if (refreshImmediately || refreshImmediately === undefined) {
      this.refresh();
    }
  },

  getDataRefinerPriorityIndexOf: function(priority) {
    let index = this.dataRefiners.length;
    if (priority) {
      for (let i = 0; i < this.dataRefiners.length; i++) {
        if (priority < this.dataRefiners[i].priority) {
          return i;
        }
      }
    } else if (this.dataRefiners.length) {
      let lastRefiner = this.dataRefiners[this.dataRefiners.length - 1];
      if (lastRefiner.priority === Number.MAX_VALUE) {
        --index;
      }
    }
    return index;
  },

  applyDataRefiners: function(items) {
    this.dataRefiners.reduce((sequence, refinerAndPriority) => {
      return sequence.then(data => {
        return refinerAndPriority.refiner(data);
      });
    }, Promise.resolve(items));
  }
};

export default dataRefinerHandler;
