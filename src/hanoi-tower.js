import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed ) {
    function countMoves(n) {
        return (n === 0) ? 0 : 2 * countMoves(n - 1) + 1;
    }
    return {turns: countMoves(disksNumber), seconds: Math.floor((countMoves(disksNumber) / turnsSpeed) * 3600)};
}
