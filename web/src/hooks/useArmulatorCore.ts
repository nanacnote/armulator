import { DEF, cpu, bus, reg, mmu, dec, alu, clk, ram } from 'armulator-core';

/**
 * Exposes the armulator-core library API
 */
export function useArmulatorCore() {
  return { DEF, cpu, bus, reg, mmu, dec, alu, clk, ram };
}
