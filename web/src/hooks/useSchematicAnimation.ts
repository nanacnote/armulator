import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
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
 *
 * Handles schematic animation
 *
 */
export function useSchematicAnimation() {
  const animeClockTick = (targets: string) => {
    anime({
      targets,
      fillOpacity: 1,
      strokeOpacity: 1,
      direction: 'alternate',
      duration: DEF.FAST_CLOCK_SPEED
    });
  };

  const tickHandler = (e: Event) => {
    switch (e.type) {
      case DEF.ON_FETCH_CYCLE:
        animeClockTick('#schematic_cpu_clk_fetch');
        break;
      case DEF.ON_DECODE_CYCLE:
        animeClockTick('#schematic_cpu_clk_decode');
        break;
      case DEF.ON_EXECUTE_CYCLE:
        animeClockTick('#schematic_cpu_clk_execute');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    clk.addEventListener(DEF.ON_FETCH_CYCLE, tickHandler);
    clk.addEventListener(DEF.ON_DECODE_CYCLE, tickHandler);
    clk.addEventListener(DEF.ON_EXECUTE_CYCLE, tickHandler);
    return () => {
      clk.removeEventListener(DEF.ON_FETCH_CYCLE, tickHandler);
      clk.removeEventListener(DEF.ON_DECODE_CYCLE, tickHandler);
      clk.removeEventListener(DEF.ON_EXECUTE_CYCLE, tickHandler);
    };
  }, []);

  return {};
}
