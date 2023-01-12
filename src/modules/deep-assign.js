/**
 * Deep merge two or more objects into the first
 * @param {Object} objects Objects to merge together
 * @returns {Object} Merged objects
 */
 const deepAssign = (...objects) => {
  
  // Make sure there are objects to merge
  const objectsLength = objects.length;
  if (objectsLength < 1) return;
  if (objectsLength < 2) return objects[0];

  // Merge all objects into first
  for (let i = 1; i < objectsLength; i++) {
    for (const key in objects[i]) {
      
      // If object, recursively merge
      // Otherwise, push to key
      if (Object.prototype.toString.call(objects[i][key]) === '[object Object]') {
        objects[0][key] = deepAssign(objects[0][key] || {}, objects[i][key]);
      } else {
        objects[0][key] = objects[i][key];
      }
    }
  }

  return objects[0];
};

module.exports = deepAssign;