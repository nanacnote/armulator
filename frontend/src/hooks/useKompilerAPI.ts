/**
 * Fetch API wrapper to handle compiling Assembly instructions to machine code
 */
export function useKompilerAPI() {
  const post = (asm_str: string, arch_mode = 'armbe') => {
    return fetch('http://localhost:9001/kstool', {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify({ arch_mode, asm_str })
    })
      .then((res) => res.json())
      .then((ctx) => ({
        stackSize: 1024,
        progSize: ctx.text.length * 4,
        text: ctx.text.map((s: string) => parseInt(s, 16))
      }));
  };

  return { post };
}
