import * as React from 'react';
import { useArmulatorCore, useSession } from '../../hooks';
import { Numeral } from '..';

interface TProps {}

/**
 * Debugger component
 */
const Debugger: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [instructions, setInstructions] = React.useState<any>([]);
  const [registers, setRegisters] = React.useState<any>([]);
  const { getLoadedELF } = useSession();
  const { DEF, alu, reg } = useArmulatorCore();

  const highlightInstruction = (e: CustomEventInit) => {
    const wrapperElements = thisComponent.current?.getElementsByClassName(
      'code-entry-for-snippet'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    const commentElements = thisComponent.current?.getElementsByClassName(
      'code-entry-comment-for-snippet'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0, len = wrapperElements.length; i < len; i++) {
      const wrapperElem = wrapperElements[i];
      const commentElement = commentElements[i];
      if (wrapperElem.dataset.uuid === e.detail.toString()) {
        wrapperElem.classList.add('bg-warning', 'text-warning-content');
        commentElement.classList.add('text-base-content');
      } else {
        wrapperElem.classList.remove('bg-warning', 'text-warning-content');
        commentElement.classList.remove('text-base-content');
      }
    }
  };

  const hydrateInstruction = () => {
    const data = getLoadedELF();
    if (data) {
      const entries = [];
      const { instructions, textUUIDS, textContent } = JSON.parse(data);
      const maxPadding = instructions.reduce(
        (acc: any, cur: any) => (cur.length > acc ? cur.length : acc),
        0
      );
      for (let i = 0, len = instructions.length; i < len; i++) {
        const uuid = textUUIDS[i];
        const lineNumber = i + 1;
        const instruction = `${instructions[i].padEnd(maxPadding + 8, ' ')}`;
        const commentSymbol = ';;';
        const machineCode = React.createElement(Numeral, {
          binStr: textContent[i].toString(2)
        });
        entries.push({
          uuid,
          lineNumber,
          instruction,
          commentSymbol,
          machineCode
        });
      }
      setInstructions(entries);
    }
  };

  const hydrateRegister = () => {
    const entries = [];
    const altName: any = { r13: 'sp', r14: 'lr', r15: 'pc', r16: 'cpsr' };
    const names = [...Array(16).keys()].map(
      (item) => altName[`r${item + 1}`] || `r${item + 1}`
    );
    for (let i = 0, len = names.length; i < len; i++) {
      const name = names[i];
      const binStr = (reg as any)[name].view();
      const key = `${name}-${binStr}-${i}`;
      const value = React.createElement(Numeral, { binStr });
      entries.push({ key, name, value });
    }
    setRegisters(entries);
  };

  const updateViewHandler = (e: CustomEventInit) => {
    hydrateRegister();
    hydrateInstruction();
    highlightInstruction(e);
  };

  React.useEffect(() => {
    hydrateRegister();
    hydrateInstruction();
    alu.addEventListener(DEF.ON_ALU_EXECUTE, updateViewHandler);
    return () => {
      alu.removeEventListener(DEF.ON_ALU_EXECUTE, updateViewHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <div className="mockup-code h-[473px] overflow-auto">
            {instructions.map((item: any) => (
              <pre
                key={item.uuid}
                data-uuid={item.uuid}
                data-prefix={item.lineNumber}
                className="code-entry-for-snippet"
              >
                <code>
                  {item.instruction}
                  <span className="code-entry-comment-for-snippet text-neutral-content text-opacity-50">
                    <span>{item.commentSymbol}</span>
                    <span>
                      &nbsp;
                      {item.machineCode}
                      &nbsp;
                    </span>
                  </span>
                </code>
              </pre>
            ))}
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="h-[473px] overflow-auto">
            {registers.map((reg: any) => (
              <div
                key={reg.key}
                className="grid grid-cols-7 text-xs mb-[3.5px] pl-3 border rounded bg-neutral-content text-warning-content"
                data-name={reg.name}
              >
                <div className="font-semibold">
                  <span className="align-middle">{reg.name}</span>
                </div>
                <div className="col-span-5 truncate">
                  <span className="align-middle">{reg.value}</span>
                </div>
                <div>
                  <div className="btn-group">
                    <button className="btn btn-xs btn-outline border-none h-0 p-0 m-0 mr-2 hover:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="hsl(var(--in))"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </button>
                    <button className="btn btn-xs btn-outline border-none h-0 p-0 m-0 mr-2 hover:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="hsl(var(--su))"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debugger;
