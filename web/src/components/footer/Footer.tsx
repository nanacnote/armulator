import * as React from 'react';
import pkg from '../../../package.json';
import { useArmulatorCore, useSession, useKompilerAPI } from '../../hooks';

interface TProps {}

/**
 * Footer component
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { getInstructionBuffer, setMachineCodeBuffer } = useSession();
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
    if (instruction) {
      kstoolBE(instruction).then((machineCode) => {
        setMachineCodeBuffer(machineCode);
        cpu.loadProg(machineCode).run();
      });
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
    clk.addEventListener(DEF.ON_START_EVENT, ctaGroupHandler);
    clk.addEventListener(DEF.ON_STOP_EVENT, ctaGroupHandler);
    clk.addEventListener(DEF.ON_PAUSE_EVENT, ctaGroupHandler);
    clk.addEventListener(DEF.ON_RESUME_EVENT, ctaGroupHandler);
    return () => {
      clk.removeEventListener(DEF.ON_START_EVENT, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_STOP_EVENT, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_PAUSE_EVENT, ctaGroupHandler);
      clk.removeEventListener(DEF.ON_RESUME_EVENT, ctaGroupHandler);
    };
  }, []);

  return (
    <div ref={thisComponent}>
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
      <p className="text-sm my-2 text-center">{`${new Date().getFullYear()} | © CC0-1.0 by ${
        pkg.author
      }`}</p>
    </div>
  );
};

export default Footer;
