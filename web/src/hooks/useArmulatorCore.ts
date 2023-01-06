import { cpu } from '../lib/armulator_core/armulator_core';

/**
 * Exposes the armulator-core library API
 */
export function useArmulatorCore() {
  return { cpu };
}
