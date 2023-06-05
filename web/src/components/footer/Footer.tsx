import * as React from 'react';
import cn from 'classnames';
import pkg from '../../../package.json';
import { GlobalDataContext } from '../../context/GlobalData';
import { useArmulatorCore, useSession, useKompilerAPI } from '../../hooks';
import { EDITOR_LOGGER_PAYLOADS, TAB_NAMES } from '../../utils/def';
import { sleep } from '../../utils/helpers';

interface TProps {}

/**
 * Footer component
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { getInstructionBuffer, setLoadedELF, setSelectedTab } = useSession();
  const { addEditorLog } = React.useContext(GlobalDataContext);
  const { kstoolBE } = useKompilerAPI();
  const { DEF, cpu, clk } = useArmulatorCore();

  const ctaGroupHandler = (e: Event) => {
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-cta'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.type == e.type) {
        child.classList.add('btn-active');
      } else {
        child.classList.remove('btn-active');
      }
    }
  };

  const startHandler = (e: React.MouseEvent) => {
    const instruction = getInstructionBuffer();
    if (instruction && clk.STATE !== DEF.START_CLOCK_KEY) {
      setIsLoading(true);
      addEditorLog(EDITOR_LOGGER_PAYLOADS[1], EDITOR_LOGGER_PAYLOADS[2]);
      kstoolBE(instruction)
        .then((elfStruct) => {
          addEditorLog(EDITOR_LOGGER_PAYLOADS[3], EDITOR_LOGGER_PAYLOADS[4]);
          const extELFStruct: any = cpu.load(elfStruct);
          setLoadedELF(JSON.stringify(extELFStruct));
          addEditorLog({
            ...EDITOR_LOGGER_PAYLOADS[5],
            msg: EDITOR_LOGGER_PAYLOADS[5].msg.replace('[]', extELFStruct.pid)
          });
          return extELFStruct;
        })
        .then((extELFStruct) =>
          sleep(2000).then(() => {
            setSelectedTab(TAB_NAMES[1]);
            cpu.spawn(extELFStruct.pid).run();
            addEditorLog({
              ...EDITOR_LOGGER_PAYLOADS[6],
              msg: EDITOR_LOGGER_PAYLOADS[6].msg.replace('[]', extELFStruct.pid)
            });
          })
        )
        .catch(() => addEditorLog(EDITOR_LOGGER_PAYLOADS[7]))
        .finally(() => setIsLoading(false));
    } else {
      // TODO: implement alert
    }
  };

  const stopHandler = (e: React.MouseEvent) => {
    clk.stop();
  };

  const pauseHandler = (e: React.MouseEvent) => {
    clk.pause();
  };

  const resumeHandler = (e: React.MouseEvent) => {
    clk.resume();
  };

  React.useEffect(() => {
    clk.addEventListener(DEF.ON_START, ctaGroupHandler);
    clk.addEventListener(DEF.ON_STOP, ctaGroupHandler);
    clk.addEventListener(DEF.ON_PAUSE, ctaGroupHandler);
    clk.addEventListener(DEF.ON_RESUME, ctaGroupHandler);
    return () => {
      clk.removeEventListener(DEF.ON_START, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_STOP, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_PAUSE, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_RESUME, ctaGroupHandler);
    };
  }, []);

  return (
    <div ref={thisComponent}>
      <div className={cn({ hidden: isLoading })}>
        <div className="flex justify-center">
          <div className="btn-group btn-group-horizontal">
            <button
              className="btn btn-item-for-cta"
              name="start"
              data-type="start"
              onClick={startHandler}
            >
              Start
            </button>
            <button
              className="btn btn-item-for-cta"
              name="stop"
              data-type="stop"
              onClick={stopHandler}
            >
              Stop
            </button>
            <button
              className="btn btn-item-for-cta"
              name="pause"
              data-type="pause"
              onClick={pauseHandler}
            >
              Pause
            </button>
            <button
              className="btn btn-item-for-cta"
              name="resume"
              data-type="resume"
              onClick={resumeHandler}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className={cn('my-6', { hidden: !isLoading })}>
        <progress className="progress"></progress>
      </div>
      <p className="text-sm my-2 text-center">{`${new Date().getFullYear()} | © CC0-1.0 by ${
        pkg.author
      }`}</p>
    </div>
  );
};

export default Footer;
