import { parseInstructionForKstool } from '../lib/helper/utils';

/**
 * Fetch API wrapper to handle compiling Assembly instructions to machine code
 */
export function useKompilerAPI() {
  const kstoolBE = (instruction: string) => {
    const parsedInstruction = parseInstructionForKstool(instruction);
    return fetch('http://localhost:9001/api/kstool', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({
        arch_mode: 'armbe',
        asm_str: parsedInstruction
      })
    })
      .then((res) => res.json())
      .then((ctx) => ({
        procSize: ctx.text.length * 4 * 4, // TODO: get from response
        envSize: 4,
        envContent: [],
        bssSize: 4,
        bssContent: [],
        initDataSize: 4,
        initDataContent: [],
        textSize: ctx.text.length * 4, // TODO: get from response
        textContent: ctx.text.map((s: string) => parseInt(s, 16)),
        instructions: parsedInstruction.split(';')
      }));
  };

  return { kstoolBE };
}
