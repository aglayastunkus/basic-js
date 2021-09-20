import {NotImplementedError} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
    if (typeof date === "undefined") return 'Unable to determine the time of year!';

    try {
        JSON.stringify(date);
        if (date.getMonth() === 11 || (date.getMonth() >= 0 && date.getMonth() < 2 )) return 'winter'; else if
        (date.getMonth() > 1 && date.getMonth() < 5) return 'spring'; else if
        (date.getMonth() > 4 && date.getMonth() < 8) return 'summer'; else return 'fall';

    } catch (e) {

        throw new Error('Invalid date!');

    }
}
