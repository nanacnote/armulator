import {
  DEF,
  cpu,
  bus,
  reg,
  mmu,
  dec,
  alu,
  ivt,
  clk,
  ram
} from '../lib/armulator_core/armulator_core';

/**
 * Exposes the armulator-core library API
 */
export function useArmulatorCore() {
  return { DEF, cpu, bus, reg, mmu, dec, alu, ivt, clk, ram };
}
