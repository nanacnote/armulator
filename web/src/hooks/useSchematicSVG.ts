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
export function useSchematicSVG(root: React.RefObject<HTMLDivElement>) {
  const showSignalAlongPath = (id: string) => {
    const sigEl = _genSignalElementForPath();
    const path = anime.path('#' + id);
    anime({
      targets: sigEl,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: clk.SPEED
    }).finished.then(() => sigEl.remove());
  };

  const showMemSeg = (
    shortID: 'text' | 'init_data' | 'bss' | 'heap' | 'stack' | 'cli_arg'
  ) => {
    const colorVarB1 = _parseThemeColorVar('--b1');
    const colorVarB2 = _parseThemeColorVar('--b2');
    anime({
      targets: [
        '#sch_mem_layout_text_ptr_end',
        '#sch_mem_layout_init_data_ptr_end',
        '#sch_mem_layout_bss_ptr_end',
        '#sch_mem_layout_heap_ptr_end',
        '#sch_mem_layout_stack_ptr_end',
        '#sch_mem_layout_cli_arg_ptr_end',
        '#sch_mem_layout_text_box_end',
        '#sch_mem_layout_init_data_box_end',
        '#sch_mem_layout_bss_box_end',
        '#sch_mem_layout_cli_arg_box_end'
      ],
      fillOpacity: 0,
      easing: 'linear',
      duration: 0
    }).finished.then(() => {
      if (shortID === 'heap' || shortID === 'stack') {
        return anime({
          targets: `#sch_mem_layout_${shortID}_ptr_end`,
          fillOpacity: 1,
          fill: [colorVarB1, colorVarB2],
          easing: 'linear'
        });
      } else {
        return anime({
          targets: [
            `#sch_mem_layout_${shortID}_ptr_end`,
            `#sch_mem_layout_${shortID}_box_end`
          ],
          fillOpacity: 1,
          fill: [colorVarB1, colorVarB2],
          easing: 'linear'
        });
      }
    });
  };

  const _clkTickHandler = (e: Event) => {
    const show = (shortID: string) =>
      anime({
        targets: `#sch_cpu_clk_label_${shortID}_end`,
        fillOpacity: 1,
        direction: 'alternate',
        easing: 'linear',
        duration: clk.SPEED / 2
      });
    switch (e.type) {
      case DEF.ON_FETCH_CYCLE:
        show('fetch');
        break;
      case DEF.ON_DECODE_CYCLE:
        show('decode');
        break;
      case DEF.ON_EXECUTE_CYCLE:
        show('execute');
        break;

      default:
        break;
    }
  };

  const _clkStartHandler = (e?: Event) => {
    _initBaseAnimation().heapArrow.play();
    _initBaseAnimation().stackArrow.play();
    anime({
      targets: '#sch_cpu_clk_blinker_end',
      fill: [_parseThemeColorVar('--b2'), _parseThemeColorVar('--su')],
      easing: 'linear'
    });
  };

  const _clkStopHandler = (e?: Event) => {
    _initBaseAnimation().heapArrow.pause();
    _initBaseAnimation().heapArrow.seek(0);
    _initBaseAnimation().stackArrow.pause();
    _initBaseAnimation().stackArrow.seek(0);
    anime({
      targets: '#sch_cpu_clk_blinker_end',
      fill: [_parseThemeColorVar('--b2'), _parseThemeColorVar('--er')],
      easing: 'linear'
    });
  };

  const _getObjectCoord = (id: string) => {
    // TODO: implement
    const rootCoord = root.current!.getBoundingClientRect()!;
    const objCoord = ((document.getElementById(
      id
    )! as unknown) as SVGAElement).getBBox();
    console.log(rootCoord);
    console.log(objCoord);
  };

  const _parseThemeColorVar = (val: string) => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue(val)
      .trim()
      .replaceAll(' ', ',')})`;
  };

  const _genSignalElementForPath = () => {
    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.width = '1.2%'; // calc relative to viewBox of svg
    el.style.height = '1.8%'; // calc relative to viewBox of svg
    el.style.borderRadius = '50%';
    el.style.backgroundColor = 'hsl(var(--su))';
    root.current!.prepend(el);
    return el;
  };

  const _initBaseAnimation = (function () {
    const animation: { [key: string]: anime.AnimeInstance } = {};
    return () => {
      animation['heapArrow'] =
        animation['heapArrow'] ??
        anime({
          targets: `#sch_mem_layout_heap_arrow_end`,
          translateY: '-15px',
          direction: 'alternate',
          easing: 'easeInCubic',
          loop: true,
          autoplay: false
        });
      animation['stackArrow'] =
        animation['stackArrow'] ??
        anime({
          targets: `#sch_mem_layout_stack_arrow_end`,
          translateY: '15px',
          direction: 'alternate',
          easing: 'easeInCubic',
          loop: true,
          autoplay: false
        });
      return animation;
    };
  })();

  useEffect(() => {
    _initBaseAnimation();
    if (clk.STATE === DEF.START_CLOCK_KEY) _clkStartHandler();
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
  // useEffect(() => {
  //   // const callback = _getObjectCoord;
  //   const callback = showSignalAlongPath;
  //   let input: any = document.getElementById('dev-test-input-id');
  //   let btn: any = document.getElementById('dev-test-btn-id');
  //   if (!input) {
  //     input = document.body.appendChild(document.createElement('input'));
  //     input.classList.add('input');
  //     input.id = 'dev-test-input-id';
  //     input.style.cssText = 'position: absolute; top: 10px; left: 100px';
  //   }
  //   if (!btn) {
  //     btn = document.body.appendChild(document.createElement('button'));
  //     btn.classList.add('btn');
  //     btn.id = 'dev-test-btn-id';
  //     btn.innerText = 'click';
  //     btn.style.cssText = 'position: absolute; top: 10px; left: 10px';
  //     btn.onclick = () => callback(input.value);
  //   } else {
  //     btn.onclick = () => callback(input.value);
  //   }
  // }, []);
}
