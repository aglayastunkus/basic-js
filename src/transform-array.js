import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {

    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    if (!arr.some(item => (item === '--double-next' || item === '--double-prev' || item === '--discard-prev' || item === '--discard-next' ))) return arr;
    let array = arr.slice();

    function double(idx) {
        array = array.map((item, id) =>
            (id === idx) ? (Array.isArray(item) ? item.concat([item[0]]) : [item].concat(item)) : item)
    }

    function discard(idx) {
        array = array.map((item, id) =>
            (id === idx) ? (Array.isArray(item)) ? item.pop() : 0 : item
        )
    }

    arr.forEach((item, index) => {
        if (item === '--double-next') double(index + 1);
        if (item === '--double-prev') double(index - 1);
        if (item === '--discard-prev') discard(index - 1);
        if (item === '--discard-next') discard(index + 1);
    });

    return array.flat().filter(item => Number.isInteger(item)).filter(item => item > 0)
}
