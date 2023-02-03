import * as React from 'react';
import { useArmulatorCore, useSession } from '../../hooks';
import { Numeral } from '..';

interface TProps {}

/**
 * Debugger component
 */
const Debugger: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [content, setContent] = React.useState<any>([]);
  const { getKstoolOutput } = useSession();
  const { DEF, clk } = useArmulatorCore();

  const processLoadHandler = () => {
    const data = getKstoolOutput();
    if (data) {
      const content = [];
      const { instructions, text: machineCodes } = JSON.parse(data);
      const maxPadding = instructions.reduce(
        (acc: any, cur: any) => (cur.length > acc ? cur.length : acc),
        0
      );
      for (let i = 0, len = instructions.length; i < len; i++) {
        content.push({
          key: instructions[i].replaceAll(' ', i.toString()),
          lineNumber: i + 1,
          instruction: `${instructions[i].padEnd(maxPadding + 8, ' ')} ;;`,
          machineCode: React.createElement(Numeral, {
            binStr: machineCodes[i].toString(2)
          })
        });
      }
      setContent(content);
    }
  };

  React.useEffect(() => {
    clk.addEventListener(DEF.ON_START_EVENT, processLoadHandler);
    return () => {
      clk.removeEventListener(DEF.ON_START_EVENT, processLoadHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="mockup-code h-[473px] overflow-auto">
            <pre data-prefix="0" className="bg-warning text-warning-content">
              <code></code>
            </pre>
            {content.map((item: any) => (
              <pre key={item.key} data-prefix={item.lineNumber}>
                <code>
                  {item.instruction}
                  &nbsp;
                  <span className="text-neutral-content text-opacity-60">
                    {item.machineCode}
                    &nbsp;
                  </span>
                </code>
              </pre>
            ))}
          </div>
        </div>
        <div className="h-[473px] border overflow-auto"></div>
      </div>
    </div>
  );
};

export default Debugger;
