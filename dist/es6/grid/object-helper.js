const objectHelper = {
  getDeepestObjectFromPath(object, path) {
    if (!path) return object;

    let deepestObject = object;
    let properties = path.split('.');

    for (let i = 0; i < properties.length - 1; i++) {
      let currentLevelObject = object[properties[i]];

      if (currentLevelObject) {
        deepestObject = currentLevelObject;
      }
    }

    return deepestObject;
  },

  getDeepestPropertyFromPath(path) {
    if (!path) return path;

    let properties = path.split('.');
    return properties[properties.length - 1];
  }
};

export default objectHelper;
