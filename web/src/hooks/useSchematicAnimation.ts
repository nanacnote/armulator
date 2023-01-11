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
  const showStaticMemSeg = (function () {
    let prevShortID: string = '';
    return (nextShortID: 'text' | 'init_data' | 'bss' | 'cli_arg') => {
      anime({
        targets: [
          `#sch_mem_layout_${nextShortID}_ptr_end`,
          `#sch_mem_layout_${nextShortID}_box_end`,
          `#sch_mem_layout_${prevShortID}_ptr_end`,
          `#sch_mem_layout_${prevShortID}_box_end`
        ],
        fill: [_parseThemeColorVar('--b1'), _parseThemeColorVar('--b2')],
        fillOpacity: function (el: any, i: number, l: number) {
          return i === 2 || i === 3 ? 0 : 1;
        },
        easing: 'linear'
      });
      prevShortID = nextShortID;
    };
  })();

  const showDynamicMemSeg = (function () {
    let prevShortID: string = '';
    return (nextShortID: 'heap' | 'stack') => {
      anime({
        targets: [
          `#sch_mem_layout_${nextShortID}_ptr_end`,
          `#sch_mem_layout_${nextShortID}_box_end`,
          `#sch_mem_layout_${nextShortID}_arrow_end`,
          `#sch_mem_layout_${prevShortID}_ptr_end`,
          `#sch_mem_layout_${prevShortID}_box_end`,
          `#sch_mem_layout_${prevShortID}_arrow_end`
        ],
        // fill: function (el: any, i: number, l: number) {
        //   return i === 0 ?[_parseThemeColorVar('--b1'), _parseThemeColorVar('--b2')] : 1;
        // },
        fillOpacity: function (el: any, i: number, l: number) {
          return i === 3 ? 0 : 1;
        },
        easing: 'linear'
      });
      prevShortID = nextShortID;
    };
  })();

  const showCurrentClkCycle = (shortID: 'fetch' | 'decode' | 'execute') => {
    anime({
      targets: `#sch_cpu_clk_label_${shortID}_end`,
      fillOpacity: 1,
      direction: 'alternate',
      easing: 'linear',
      duration: clk.SPEED / 2
    });
  };

  const _clkTickHandler = (e: Event) => {
    switch (e.type) {
      case DEF.ON_FETCH_CYCLE:
        showCurrentClkCycle('fetch');
        break;
      case DEF.ON_DECODE_CYCLE:
        showCurrentClkCycle('decode');
        break;
      case DEF.ON_EXECUTE_CYCLE:
        showCurrentClkCycle('execute');
        break;

      default:
        break;
    }
  };

  const _clkStartHandler = (e: Event) => {
    // TODO: handle tab switch corner case where the blinker goes back to green
    anime({
      targets: '#sch_cpu_clk_blinker_end',
      fill: [_parseThemeColorVar('--b2'), _parseThemeColorVar('--su')],
      easing: 'linear'
    });
  };

  const _clkStopHandler = (e: Event) => {
    // TODO: handle tab switch corner case where the blinker goes back to green
    anime({
      targets: '#sch_cpu_clk_blinker_end',
      fill: [_parseThemeColorVar('--b2'), _parseThemeColorVar('--er')],
      easing: 'linear'
    });
  };

  const _parseThemeColorVar = (val: string) => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue(val)
      .trim()
      .replaceAll(' ', ',')})`;
  };

  useEffect(() => {
    clk.addEventListener(DEF.ON_FETCH_CYCLE, _clkTickHandler);
    clk.addEventListener(DEF.ON_DECODE_CYCLE, _clkTickHandler);
    clk.addEventListener(DEF.ON_EXECUTE_CYCLE, _clkTickHandler);
    clk.addEventListener(DEF.ON_START_EVENT, _clkStartHandler);
    clk.addEventListener(DEF.ON_STOP_EVENT, _clkStopHandler);
    return () => {
      clk.removeEventListener(DEF.ON_FETCH_CYCLE, _clkTickHandler);
      clk.removeEventListener(DEF.ON_DECODE_CYCLE, _clkTickHandler);
      clk.removeEventListener(DEF.ON_EXECUTE_CYCLE, _clkTickHandler);
      clk.removeEventListener(DEF.ON_START_EVENT, _clkStartHandler);
      clk.addEventListener(DEF.ON_STOP_EVENT, _clkStopHandler);
    };
  }, []);

  //TODO: remove before production
  useEffect(() => {
    const callback = showDynamicMemSeg;
    let input: any = document.getElementById('dev-test-input-id');
    let btn: any = document.getElementById('dev-test-btn-id');
    if (!input) {
      input = document.body.appendChild(document.createElement('input'));
      input.classList.add('input');
      input.id = 'dev-test-input-id';
      input.style.cssText = 'position: absolute; top: 10px; left: 100px';
    }
    if (!btn) {
      btn = document.body.appendChild(document.createElement('button'));
      btn.classList.add('btn');
      btn.id = 'dev-test-btn-id';
      btn.innerText = 'click';
      btn.style.cssText = 'position: absolute; top: 10px; left: 10px';
      btn.onclick = () => callback(input.value);
    } else {
      btn.onclick = () => callback(input.value);
    }
  }, []);
}
