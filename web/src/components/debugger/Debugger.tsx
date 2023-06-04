import * as React from 'react';
import cn from 'classnames';
import { useArmulatorCore, useSession } from '../../hooks';
import { Numeral } from '..';
import { DEBUGGER_EMPTY_MSG, BREAKPOINT_SYMBOL } from '../../utils/def';

interface TProps {}

/**
 * Debugger component
 */
const Debugger: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { DEF, reg, alu, clk } = useArmulatorCore();
  const { type, on, off, getLoadedELF, setLoadedELF } = useSession();
  const [hideAlert, setHideAlert] = React.useState(true);
  const [instructions, setInstructions] = React.useState<any>([]);
  const [registers, setRegisters] = React.useState([...(reg as any)]);

  const stepIntoNextInstructionHandler = (e: React.MouseEvent) => {
    clk.step();
  };

  const addBreakpointHandler = (e: React.MouseEvent) => {
    const elem = e.currentTarget as HTMLDivElement;
    const uuid = elem.dataset.uuid;
    const data = getLoadedELF()!;
    const instructionPrefix: string[] = [];
    const parsedData = JSON.parse(data);
    parsedData.instructionPrefix = parsedData.instructionPrefix
      ? parsedData.instructionPrefix
      : [...Array(parsedData.textUUIDS.length).keys()];
    for (let i = 0, len = parsedData.textUUIDS.length; i < len; i++) {
      if (
        parsedData.textUUIDS[i].toString() === uuid &&
        parsedData.instructionPrefix[i] !== BREAKPOINT_SYMBOL
      ) {
        instructionPrefix.push(BREAKPOINT_SYMBOL);
      } else {
        instructionPrefix.push(String(i + 1));
      }
    }
    setLoadedELF(JSON.stringify({ ...parsedData, instructionPrefix }));
  };

  const resetStyles = (e: Event) => {
    (
      thisComponent.current?.getElementsByClassName(
        'step-cta-for-breakpoint'
      )[0] as HTMLDivElement
    ).classList.add('hidden');
    [
      ...(thisComponent.current?.getElementsByClassName(
        'code-entry-for-snippet'
      ) || [])
    ].forEach((element: Element) => {
      element.classList.remove(
        'highlighted-entry-for-snippet',
        'bg-warning',
        'text-warning-content'
      );
    });
    setRegisters((prev: any) =>
      prev.map((reg: any) => {
        reg.hasChanged = false;
        return reg;
      })
    );
  };

  const triggerBreakpoint = (e: Event) => {
    const breakpointElemByIndicator = thisComponent.current?.querySelector(
      `.code-entry-for-snippet[data-prefix="${BREAKPOINT_SYMBOL}"]`
    ) as HTMLDivElement;
    if (breakpointElemByIndicator) {
      const breakpointElemByHighlight = thisComponent.current?.querySelector(
        `.highlighted-entry-for-snippet[data-prefix="${BREAKPOINT_SYMBOL}"]`
      ) as HTMLDivElement;
      if (breakpointElemByHighlight) {
        clk.pause();
        breakpointElemByHighlight.classList.remove(
          'highlighted-entry-for-snippet'
        );
        (
          thisComponent.current?.getElementsByClassName(
            'step-cta-for-breakpoint'
          )[0] as HTMLDivElement
        ).classList.remove('hidden');
      }
    }
  };

  const hydrateInstruction = () => {
    const entries: {}[] = [];
    const data = getLoadedELF()!;
    const parsedData = JSON.parse(data);
    const instruction = parsedData.instruction;
    const textUUIDS = parsedData.textUUIDS;
    const textContent = parsedData.textContent;
    const instructionPrefix = parsedData.instructionPrefix;
    const instructions = instruction.split(';');
    const maxPadding = instructions.reduce(
      (acc: any, cur: any) => (cur.length > acc ? cur.length : acc),
      0
    );
    for (let i = 0, len = textUUIDS.length; i < len; i++) {
      const uuid = textUUIDS[i];
      const prefix = instructionPrefix ? instructionPrefix[i] : i + 1;
      const instruction = `${instructions[i].padEnd(maxPadding + 8, ' ')}`;
      const commentSymbol = ';;';
      const machineCode = React.createElement(Numeral, {
        binStr: textContent[i].toString(2)
      });
      entries.push({
        uuid,
        prefix,
        instruction,
        commentSymbol,
        machineCode
      });
    }
    setInstructions(entries);
    if (data === DEBUGGER_EMPTY_MSG) {
      setHideAlert(false);
    } else {
      setHideAlert(true);
    }
  };

  const highlightInstruction = (e: CustomEventInit) => {
    const children: any = thisComponent.current?.getElementsByClassName(
      'code-entry-for-snippet'
    );
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].dataset.uuid === e.detail.checkSum.toString()) {
        children[i].classList.add(
          'highlighted-entry-for-snippet',
          'bg-warning',
          'text-warning-content'
        );
        children[i].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      } else {
        children[i].classList.remove(
          'highlighted-entry-for-snippet',
          'bg-warning',
          'text-warning-content'
        );
      }
    }
  };

  const highlightRegister = (e: CustomEventInit) => {
    setRegisters((prev: any) =>
      prev.map((reg: any, index: number) => {
        if (reg.NAME === e.detail.NAME) {
          reg.key = (e as Event).timeStamp + index;
          reg.hasChanged = true;
          return reg;
        } else {
          reg.hasChanged = false;
          return reg;
        }
      })
    );
  };

  const genRegisterNumeral = (reg: any) => {
    return React.createElement(Numeral, {
      binStr: reg.view(),
      binPad: 32,
      hexPad: 8
    });
  };

  const registerValueChangeHandler = (e: any) => {
    e.preventDefault();
    const name = e.currentTarget.dataset.name;
    const [span, form] = document.querySelector(
      `.numeral-entry-for-register[data-name="${name}"]`
    )?.children!;
    const [editIcon, cancelIcon] = document.querySelectorAll(
      `.edit-btn-for-register[name="${name}"] svg`
    );
    const input = form.children[0] as HTMLInputElement;
    input.classList.add('hidden');
    span.classList.remove('hidden');
    cancelIcon.classList.add('hidden');
    editIcon.classList.remove('hidden');
    if (input.value && parseInt(input.value, 10) >= 0)
      registers.filter((reg: any) => reg.NAME === name)[0].write(input.value);
    input.value = '';
  };

  const editRegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const [span, form] = document.querySelector(
      `.numeral-entry-for-register[data-name="${btn.name}"]`
    )?.children!;
    const [editIcon, cancelIcon] = document.querySelectorAll(
      `.edit-btn-for-register[name="${btn.name}"] svg`
    );
    const input = form.children[0] as HTMLInputElement;
    if (btn.dataset.isEditing) {
      input.classList.add('hidden');
      span.classList.remove('hidden');
      cancelIcon.classList.add('hidden');
      editIcon.classList.remove('hidden');
      btn.dataset.isEditing = '';
    } else {
      span.classList.add('hidden');
      input.classList.remove('hidden');
      editIcon.classList.add('hidden');
      cancelIcon.classList.remove('hidden');
      btn.dataset.isEditing = 'true';
      input.focus();
    }
  };

  const flushRegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    registers
      .filter((reg: any) => reg.NAME === e.currentTarget.name)[0]
      .flush();
  };

  React.useEffect(() => {
    on(type.ELF_LOAD, hydrateInstruction);
    reg.addEventListener(DEF.ON_REG_WRITE, highlightRegister);
    alu.addEventListener(DEF.ON_ALU_EXECUTE, highlightInstruction);
    clk.addEventListener(DEF.ON_EXECUTE_CYCLE_END, triggerBreakpoint);
    clk.addEventListener(DEF.ON_START, resetStyles);
    clk.addEventListener(DEF.ON_STOP, resetStyles);
    return () => {
      off(type.ELF_LOAD, hydrateInstruction);
      reg.removeEventListener(DEF.ON_REG_WRITE, highlightRegister);
      alu.removeEventListener(DEF.ON_ALU_EXECUTE, highlightInstruction);
      clk.removeEventListener(DEF.ON_EXECUTE_CYCLE_END, triggerBreakpoint);
      clk.removeEventListener(DEF.ON_START, resetStyles);
      clk.removeEventListener(DEF.ON_STOP, resetStyles);
    };
  }, []);

  return (
    <div ref={thisComponent} className="p-4">
      <div className={cn('mb-4', { hidden: hideAlert })}>
        <div className="alert shadow-lg">
          <div className="text-xs font-bold opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Click</span>
            <div className="badge badge-neutral badge-sm">START</div>
            <span>to load the current program in the editor if any.</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <div className="relative mockup-code h-[473px] overflow-auto">
            <div
              className="step-cta-for-breakpoint absolute top-4 right-4 animate-pulse hover:animate-none hidden"
              role="button"
              tabIndex={0}
              onClick={stepIntoNextInstructionHandler}
            >
              <div
                className="tooltip tooltip-left tooltip-secondary text-xs"
                data-tip="Step into next instruction"
              >
                <div className="badge badge-lg badge-accent">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                  </svg>
                </div>
              </div>
            </div>
            {instructions.map((item: any) => (
              <pre
                key={item.uuid}
                data-uuid={item.uuid}
                data-prefix={item.prefix}
                className={cn(
                  'code-entry-for-snippet before:hover:cursor-pointer',
                  {
                    'before:text-error before:!opacity-100':
                      item.prefix === BREAKPOINT_SYMBOL
                  }
                )}
                tabIndex={0}
                onClick={addBreakpointHandler}
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
              <div key={reg.key || reg.NAME}>
                <div
                  className={cn(
                    'grid grid-cols-7 text-xs mb-[3.5px] pl-3 border rounded border-base-300',
                    {
                      'bg-neutral-content text-warning-content':
                        !reg.hasChanged,
                      'bg-warning text-warning-content': reg.hasChanged
                    }
                  )}
                  data-key={reg.key || reg.NAME}
                  data-name={reg.NAME}
                >
                  <div className="font-semibold">
                    <span className="align-middle">{reg.NAME}</span>
                  </div>
                  <div
                    className="numeral-entry-for-register col-span-5 truncate"
                    data-name={reg.NAME}
                  >
                    <span className="align-middle">
                      {genRegisterNumeral(reg)}
                    </span>
                    <form
                      onSubmit={registerValueChangeHandler}
                      data-name={reg.NAME}
                    >
                      <input
                        className="input input-bordered input-xs w-full max-w-xs hidden"
                        type="number"
                        min="0"
                        placeholder="uint32"
                        data-name={reg.NAME}
                        onBlur={registerValueChangeHandler}
                      />
                    </form>
                  </div>
                  <div>
                    <div className="btn-group">
                      <button
                        className="edit-btn-for-register btn btn-xs btn-outline border-none h-0 p-0 m-0 mr-2 hover:bg-transparent"
                        onClick={editRegisterHandler}
                        name={reg.NAME}
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="hsl(var(--in))"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                        <svg
                          className="w-4 h-4 hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="hsl(var(--er))"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          />
                        </svg>
                      </button>
                      <button
                        className="btn btn-xs btn-outline border-none h-0 p-0 m-0 mr-2 hover:bg-transparent"
                        onClick={flushRegisterHandler}
                        name={reg.NAME}
                      >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debugger;
