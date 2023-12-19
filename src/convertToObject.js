'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string)
    .forEach((string) => {
      const parts = string.split(':');
      const [ part1, part2 ] = parts;

      stylesObject[part1.trim()] = part2.trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
