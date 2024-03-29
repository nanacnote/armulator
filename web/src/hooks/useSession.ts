import { session } from '../utils/session';

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
    getMemViewType: session.getMemViewType,
    setMemViewType: session.setMemViewType,
    getInstructionBuffer: session.getInstructionBuffer,
    setInstructionBuffer: session.setInstructionBuffer,
    getLoadedELF: session.getLoadedELF,
    setLoadedELF: session.setLoadedELF
  };
}
