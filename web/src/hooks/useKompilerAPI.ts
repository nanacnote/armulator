import { session } from '../lib/helper/session';
import { parseInstructionForKstool } from '../lib/helper/utils';

/**
 * Fetch API wrapper to handle compiling Assembly instructions to machine code
 */
export function useKompilerAPI() {
  // extend the response to include other information needed by the `cpu.load` method in the `core` library
  // TODO: get from response
  const mapResponseToCPULoadStruct = (ctx: any) => {
    return {
      procSize: ctx.text.length * 4 * 4,
      envSize: 4,
      envContent: [],
      bssSize: 4,
      bssContent: [],
      initDataSize: 4,
      initDataContent: [],
      textSize: ctx.text.length * 4,
      textContent: ctx.text.map((s: string) => parseInt(s, 16))
    };
  };

  const kstoolBE = (instruction: string) => {
    const oldElf = JSON.parse(session.getLoadedELF()!);
    const newInstruction = parseInstructionForKstool(instruction);
    if (oldElf.instruction === newInstruction) {
      return new Promise<any>((resolve) => {
        resolve(oldElf);
      });
    } else {
      return fetch('http://localhost:9001/api/kstool', {
        cache: 'no-cache',
        method: 'POST',
        body: JSON.stringify({
          arch_mode: 'armbe',
          asm_str: newInstruction
        })
      })
        .then((res) => res.json())
        .then(mapResponseToCPULoadStruct)
        .then((ctx) => ({ ...ctx, instruction: newInstruction }));
    }
  };

  return { kstoolBE };
}
