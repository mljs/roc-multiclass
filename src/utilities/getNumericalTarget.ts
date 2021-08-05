import max from 'ml-array-max';
import min from 'ml-array-min';

import { ClassType } from '../../types/Class';

/**
 * Returns the array of metadata numerically categorized.
 * @param {Array} target Array containing the categories.
 * @param {Array} test Array containing the result of prediction.
 * @param {Object} pair Object with information about two classes.
 * @return {Array<number>} Array containing the categories assinged as numbers.
 */

export function getNumericalTarget(
  target: string[],
  test: number[],
  pair: ClassType[],
) {
  const boundaries = [min(test) - 0.001, max(test) + 0.001];
  let result: number[] = [];
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < pair.length; j++) {
      if (target[i] === pair[j].class) {
        result[i] = boundaries[j];
        break;
      }
    }
  }
  return result;
}
