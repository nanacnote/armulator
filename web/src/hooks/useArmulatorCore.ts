import {
  DEF,
  cpu,
  bus,
  reg,
  mmu,
  dec,
  alu,
  clk,
  ram
} from '../lib/armulator_core/index.modern';

/**
 * Exposes the armulator-core library API
 */
export function useArmulatorCore() {
  return { DEF, cpu, bus, reg, mmu, dec, alu, clk, ram };
}
