/**
 * No-operation function (nop).
 * Does nothing and serves as a placeholder.
 */
export function nop() {
  // No code inside the function body
}

/**
 * Creates a bitwise AND mask of the specified length.
 *
 * @param {number} length - The length of the mask.
 * @returns {number} The bitwise AND mask.
 */
export function createBitwiseANDMask(length) {
  return ((1 << length) >>> 0) - 1;
}

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

/**
 * Counts the number of leading zero bits in a given number.
 * @param {number} number - The input number.
 * @param {number} [length=32] - The length of the number in bits. Default is 32.
 * @returns {number} The count of leading zero bits.
 */

export function countLeadingZeros(number, length = 32) {
  if (number === 0) {
    return length;
  } else {
    let count = 0;
    while (!(number & ((1 << (length - 1)) >>> 0))) {
      count++;
      number <<= 1;
    }
    return count;
  }
}

/**
 * Performs a left rotation on the given value by the specified rotation amount.
 *
 * @param {number} value - The value to rotate.
 * @param {number} rotation - The rotation amount.
 * @returns {number} The result of the left rotation.
 */
export function leftRotate(value, rotation) {
  const clampRotation = rotation % 32; // Ensure rotation is within the range 0-31
  return ((value << clampRotation) | (value >>> (32 - clampRotation))) >>> 0;
}

/**
 * Performs a right rotation on the given value by the specified rotation amount.
 *
 * @param {number} value - The value to rotate.
 * @param {number} rotation - The rotation amount.
 * @returns {number} The result of the right rotation.
 */
export function rightRotate(value, rotation) {
  const clampRotation = rotation % 32; // Ensure rotation is within the range 0-31
  return ((value >>> clampRotation) | (value << (32 - clampRotation))) >>> 0;
}

/**
 * Expands a 12-bit immediate value with carry in to a 32-bit value and updates the carry out.
 *
 * @param {number} imm12 - The 12-bit immediate value.
 * @param {number} carryIn - The carry input value.
 * @returns {{imm32: number, carryOut: number}} An object containing the expanded immediate value and the updated carry value.
 */
export function expandImmediateWithCarry(imm12, carryIn) {
  let carryOut = carryIn;
  let imm32 = (imm12 >>> 0) & (((1 << 8) >>> 0) - 1);
  const rotation = (imm12 >>> 8) & (((1 << 4) >>> 0) - 1);

  if (rotation > 0) {
    imm32 = ((imm32 >>> rotation) | (imm32 << (32 - rotation))) >>> 0;
    carryOut = (imm32 >>> 31) & (((1 << 4) >>> 0) - 1);
  }
  return { imm32, carryOut };
}
