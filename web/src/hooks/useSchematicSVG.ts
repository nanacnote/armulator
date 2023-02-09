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
  clk,
  ram
} from '../lib/armulator_core/index.modern';
/**
 *
 * Handles schematic animation
 *
 */
export function useSchematicSVG(root: React.RefObject<HTMLDivElement>) {
  const showTextAt = (function () {
    // TODO: rehydrate via session storage where all inserted text are tracked
    const location: { [key: string]: any } = {};
    return (key: string, value: string) => {
      const coord = _getObjectCoord(key as any);
      const descriptor = location[key];
      if (location[key]) descriptor.element.remove();
      const element = document.createElement('div');
      // element.innerText = value;  // remove animation and uncomment this if issues arise with hex/bin values
      element.classList.add('font-mono');
      element.style.position = 'absolute';
      element.style.fontSize = coord.fontSize;
      element.style.top = coord.top;
      element.style.left = coord.left;
      element.style.color = 'hsl(var(--su))';
      root.current?.prepend(element);
      const counterAnimeObj = { obs: 0 };
      anime({
        targets: counterAnimeObj,
        obs: value,
        round: 1,
        easing: 'linear',
        duration: clk.SPEED,
        update: function () {
          element.innerHTML = counterAnimeObj.obs.toString();
        }
      });

      location[key] = { value, element };
      console.log(location);
      return location[key];
    };
  })();

  const showSignalAlongPath = (id: string) => {
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.width = '1%'; // calc relative to viewBox of svg
    element.style.height = '1.6%'; // calc relative to viewBox of svg
    element.style.borderRadius = '50%';
    element.style.backgroundColor = 'hsl(var(--su))';
    root.current?.prepend(element);
    const path = anime.path('#' + id);
    anime({
      targets: element,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: clk.SPEED
    }).finished.then(() => element.remove());
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
      case DEF.ON_FETCH_CYCLE_START:
        show('fetch');
        break;
      case DEF.ON_DECODE_CYCLE_START:
        show('decode');
        break;
      case DEF.ON_EXECUTE_CYCLE_START:
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

  const _parseThemeColorVar = (val: string) => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue(val)
      .trim()
      .replaceAll(' ', ',')})`;
  };

  const _getObjectCoord = (key: keyof typeof showTextLookupTable) => {
    // TODO:
    // refactor this function if ever the schematic svg is remade to
    // be precise in which case the objCoord values can be used directly
    // *** SVG creation in inkscape is a pain atm so I will leave it***
    const entry = showTextLookupTable[key];
    const objCoord = (
      document.getElementById(entry.id) as unknown as SVGAElement
    )?.getBBox();
    return {
      top: entry.y + '%',
      left: entry.x + '%',
      width: objCoord.width,
      height: objCoord.height,
      fontSize: 1 + 'vw' // heuristically determined X-)
    };
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
    clk.addEventListener(DEF.ON_FETCH_CYCLE_START, _clkTickHandler);
    clk.addEventListener(DEF.ON_DECODE_CYCLE_START, _clkTickHandler);
    clk.addEventListener(DEF.ON_EXECUTE_CYCLE_START, _clkTickHandler);
    clk.addEventListener(DEF.ON_START, _clkStartHandler);
    clk.addEventListener(DEF.ON_STOP, _clkStopHandler);
    return () => {
      clk.removeEventListener(DEF.ON_FETCH_CYCLE_START, _clkTickHandler);
      clk.removeEventListener(DEF.ON_DECODE_CYCLE_START, _clkTickHandler);
      clk.removeEventListener(DEF.ON_EXECUTE_CYCLE_START, _clkTickHandler);
      clk.removeEventListener(DEF.ON_START, _clkStartHandler);
      clk.addEventListener(DEF.ON_STOP, _clkStopHandler);
    };
  }, []);

  //TODO: remove before production
  useEffect(() => {
    // const callback = showTextAt;
    // let input: any = document.getElementById('dev-test-input-id');
    // let btn: any = document.getElementById('dev-test-btn-id');
    // if (!input) {
    //   input = document.body.appendChild(document.createElement('input'));
    //   input.classList.add('input');
    //   input.id = 'dev-test-input-id';
    //   input.style.cssText = 'position: absolute; top: 10px; left: 100px';
    // }
    // if (!btn) {
    //   btn = document.body.appendChild(document.createElement('button'));
    //   btn.classList.add('btn');
    //   btn.id = 'dev-test-btn-id';
    //   btn.innerText = 'click';
    //   btn.style.cssText = 'position: absolute; top: 10px; left: 10px';
    //   btn.onclick = () =>
    //     callback(input.value, Math.ceil(Math.random() * 50000000).toString());
    // } else {
    //   btn.onclick = () =>
    //     callback(input.value, Math.ceil(Math.random() * 50000000).toString());
    // }
    showMemSeg('text');
    ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'].map((e) =>
      showTextAt(e, Math.ceil(Math.random() * 500000000).toString())
    );
    setInterval(() => {
      showSignalAlongPath(
        [
          'sch_bus_address_end',
          'sch_bus_control_end',
          'sch_bus_data_end',
          'sch_bridge_dec_n_cspr_end',
          'sch_bridge_dec_n_sp_end',
          'sch_bridge_dec_n_lr_end',
          'sch_bridge_dec_n_pc_end'
        ].concat(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
            (num) => `sch_bridge_dec_n_r${num}_end`
          )
        )[
          Math.floor(Math.random() * (Math.floor(18) - Math.ceil(0) + 1)) +
            Math.ceil(0)
        ]
      );
    }, clk.SPEED);
  }, []);
}

const showTextLookupTable = {
  r1: {
    id: 'sch_cpu_reg_box_r1_end',
    x: 6.5,
    y: 26.8
  },
  r2: {
    id: 'sch_cpu_reg_box_r2_end',
    x: 6.5,
    y: 31.7
  },
  r3: {
    id: 'sch_cpu_reg_box_r3_end',
    x: 6.5,
    y: 36.6
  },
  r4: {
    id: 'sch_cpu_reg_box_r4_end',
    x: 19,
    y: 26.8
  },
  r5: {
    id: 'sch_cpu_reg_box_r5_end',
    x: 19,
    y: 31.7
  },
  r6: {
    id: 'sch_cpu_reg_box_r6_end',
    x: 19,
    y: 36.6
  },
  r7: {
    id: 'sch_cpu_reg_box_r7_end',
    x: 6.5,
    y: 10
  },
  r8: {
    id: 'sch_cpu_reg_box_r8_end',
    x: 6.5,
    y: 10
  },
  r9: {
    id: 'sch_cpu_reg_box_r9_end',
    x: 6.5,
    y: 10
  },
  r10: {
    id: 'sch_cpu_reg_box_r10_end',
    x: 19,
    y: 10
  },
  r11: {
    id: 'sch_cpu_reg_box_r11_end',
    x: 19,
    y: 10
  },
  r12: {
    id: 'sch_cpu_reg_box_r12_end',
    x: 19,
    y: 10
  },
  lr: {
    id: 'sch_cpu_reg_box_lr_end',
    x: 19,
    y: 10
  },
  cspr: {
    id: 'sch_cpu_reg_box_cspr_end',
    x: 32.2,
    y: 10
  },
  sp: {
    id: 'sch_cpu_reg_box_sp_end',
    x: 32.2,
    y: 10
  },
  pc: {
    id: 'sch_cpu_reg_box_pc_end',
    x: 32.2,
    y: 10
  }
};

// var svg = document.querySelector('svg');
// var viewBox = svg.viewBox.baseVal;

// function zoomIn(){
//     viewBox.x = viewBox.x + viewBox.width / 4;
//     viewBox.y = viewBox.y + viewBox.height / 4;
//     viewBox.width = viewBox.width / 2;
//     viewBox.height = viewBox.height / 2;
// }

// function zoomOut(){
//     viewBox.x = viewBox.x - viewBox.width / 2;
//     viewBox.y = viewBox.y - viewBox.height / 2;
//     viewBox.width = viewBox.width * 2;
//     viewBox.height = viewBox.height * 2;
// }
