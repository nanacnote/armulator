/**
 * Fetch API wrapper to handle compiling Assembly instructions to machine code
 */
export function useKompilerAPI() {
  const post = (asm_str: string, arch_mode = 'armbe') => {
    return fetch('http://192.168.0.10:9001/kstool', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({ arch_mode, asm_str })
    })
      .then((res) => res.json())
      .then((ctx) => ({
        stackSize: ctx.text.length * 4, // TODO: get from response
        progSize: ctx.text.length * 4, // TODO: get from response
        text: ctx.text.map((s: string) => parseInt(s, 16))
      }));
  };

  return { post };
}
