import _ from 'lodash';

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  return _.merge(target, ...sources)
}

export function deleteElementFromArray(element, array) {
  const indexFound = array.indexOf(element);
  if (indexFound > -1) {
      array.splice(indexFound, 1);
  }
  return array;
}


export const findIndexByAttribute = (listOfObjects, attributeName) => {
  return listOfObjects.findIndex(object => Object.keys(object)[0] === attributeName);
}

export const getElementByAttribute = (listOfObjects, attributeName) => {
  const index = listOfObjects.findIndex(object => Object.keys(object)[0] === attributeName);
  return listOfObjects[index];
}
