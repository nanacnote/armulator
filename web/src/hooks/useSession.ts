import { session } from '../lib/helper/session';

/**
 *
 * Handles user session
 *
 */
export function useSession() {
  return {
    type: session.TYPE,
    on: session.addEventListener,
    off: session.removeEventListener,
    toggleTheme: session.toggleTheme,
    getTheme: session.getTheme,
    setNumeralType: session.setNumeralType,
    getNumeralType: session.getNumeralType,
    setASMTextChunk: session.setASMTextChunk,
    getASMTextChunk: session.getASMTextChunk
  };
}
