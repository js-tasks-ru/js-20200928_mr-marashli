/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObj = {};
  const objKeys = Object.keys(obj);

  const omitedKeys = objKeys.filter(item => fields.indexOf(item) == -1);

  for (const key of omitedKeys) {
    newObj[key] = obj[key];
  }
  return newObj;
};
