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
