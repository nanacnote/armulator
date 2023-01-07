import { useEffect } from 'react';
import { session } from '../lib/helper/session';

/**
 *
 * Handles setting, getting and modifying the buffer containing the assembly text
 *
 */
export function useASMTextBuffer() {
  return {
    defaultKey: session.DEFAULT_KEY,
    setBuffer: session.setBuffer,
    getBuffer: session.getBuffer,
    onBufferChange: session.onBufferChange
  };
}
