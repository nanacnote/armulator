/**
 * Parse a given instruction string for Kstool.
 *
 * @param {string} val - The instruction string to parse.
 * @returns {string} - The parsed instruction string.
 *
 */
function parseInstructionForKstool(val) {
  // TODO: remove comments and replace line breaks with ; [think about how to handle branch names and main section]
  return typeof val === 'string'
    ? val.trim().replaceAll(/[\n\r;]+/g, ';')
    : val;
}

function hexDump(buffer, blockSize = 16) {
  if (buffer instanceof ArrayBuffer && buffer.byteLength !== undefined) {
    // buffer is ArrayBuffer
    buffer = String.fromCharCode.apply(
      String,
      [].slice.call(new Uint8Array(buffer))
    );
  } else if (Array.isArray(buffer)) {
    // buffer is Array
    buffer = String.fromCharCode.apply(String, buffer);
  } else if (buffer.constructor === Uint8Array) {
    // buffer is Uint8Array
    buffer = String.fromCharCode.apply(String, [].slice.call(buffer));
  } else {
    // TODO: raise error alert here
    // buffer is unknown
    return false;
  }
  var lines = [];
  var hex = '0123456789ABCDEF';
  for (var b = 0; b < buffer.length; b += blockSize) {
    var block = buffer.slice(b, Math.min(b + blockSize, buffer.length));
    var addr = ('0000' + b.toString(16)).slice(-4);
    var codes = block
      .split('')
      .map(function (ch) {
        var code = ch.charCodeAt(0);
        return '   ' + hex[(0xf0 & code) >> 4] + hex[0x0f & code];
      })
      .join('');
    codes += '   '.repeat(blockSize - block.length);
    // eslint-disable-next-line no-control-regex
    var chars = block.replace(/[\x00-\x1F\x20]/g, '.');
    chars += ' '.repeat(blockSize - block.length);
    lines.push(addr + '       ' + codes + '        | ' + chars);
  }
  return lines.join('\n');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { parseInstructionForKstool, hexDump, sleep };
