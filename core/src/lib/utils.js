/**
 * Calculates the Fletcher-16 checksum of a string of data.
 *
 * @param {string} data - The data to be checksummed.
 * @returns {number} - The calculated 16-bit checksum value.
 */
export function fletcher16(data) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < data.length; i++) {
    sum1 = (sum1 + data.charCodeAt(i)) % 255;
    sum2 = (sum2 + sum1) % 255;
  }

  return (sum2 << 8) | sum1;
}

/**
 * Extracts a specified number of bits from a given number starting from a specified position.
 *
 * @param {number} number - The number from which bits will be extracted.
 * @param {number} start - The starting position of the extraction (0-based index).
 * @param {number} count - The number of bits to extract.
 * @returns {number} The extracted bits as a new number.
 */
export function extractBits(number, start, count) {
  return (number >>> start) & (((1 << count) >>> 0) - 1);
}

/**
 * Modifies a specific bit in a given number and returns the modified number.
 *
 * @param {number} number - The original number.
 * @param {number} bit - The position of the bit to be modified (0-based index).
 * @param {number} value - The new value to set for the specified bit (0 or 1).
 * @returns {number} The modified number.
 */
export function setBit(number, bit, value) {
  return (number & ~(1 << bit)) | (value << bit);
}
