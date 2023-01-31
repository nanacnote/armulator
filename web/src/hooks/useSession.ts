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
    getTheme: session.getTheme,
    toggleTheme: session.toggleTheme,
    getSelectedTab: session.getSelectedTab,
    setSelectedTab: session.setSelectedTab,
    getNumeralType: session.getNumeralType,
    setNumeralType: session.setNumeralType,
    getASMTextChunk: session.getASMTextChunk,
    setASMTextChunkByUpload: session.setASMTextChunkByUpload,
    setASMTextChunkByAceInput: session.setASMTextChunkByAceInput
  };
}
