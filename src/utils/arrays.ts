/**
 * Generates a sequence of numbers. In case min is larger than
 * max, then empty the array is returned.
 * 
 * @param {number} min Lower bound of the sequence
 * @param {number} max High bound of the sequence  
 * @example seq(1, 5) // [1, 2, 3, 4, 5]
 */
export const seq = (min: number = 0, max: number = 0) => {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}