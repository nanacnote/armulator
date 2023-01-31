/**
 * Fetch API wrapper to handle compiling Assembly instructions to machine code
 */
export function useKompilerAPI() {
  const parsAsmStr = (val: string) => {
    // TODO: remove comments and replace line breaks with ; [think about how to handle branch names and main section]
    // return val;
    return 'cmp r3, #245; push {r7}; sub sp, sp, #12; add r7, sp, #0; str r0, [r7, #4]; ldr r3, [r7, #4]; mul r3, r3, r3; mov r0, r3; adds r7, r7, #12; mov sp, r7; ldr r7, [sp], #4; bx lr';
  };

  const kstoolBE = (asmStr: string) => {
    return fetch('http://localhost:9001/kstool', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({ arch_mode: 'armbe', asm_str: parsAsmStr(asmStr) })
    })
      .then((res) => res.json())
      .then((ctx) => ({
        stackSize: ctx.text.length * 4, // TODO: get from response
        progSize: ctx.text.length * 4, // TODO: get from response
        text: ctx.text.map((s: string) => parseInt(s, 16))
      }));
  };

  return { kstoolBE };
}
