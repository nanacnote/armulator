import * as React from 'react';
import pkg from '../../../package.json';
import {
  useArmulatorCore,
  useASMTextBuffer,
  useKompilerAPI
} from '../../hooks';

interface TProps {}

/**
 * Footer component
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { getBuffer } = useASMTextBuffer();
  const { post } = useKompilerAPI();
  const { cpu, clk } = useArmulatorCore();

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
    const asmText = getBuffer();
    if (asmText) {
      post(asmText).then((data) => cpu.loadProg(data).run());
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
    clk.addEventListener('start', ctaGroupHandler);
    clk.addEventListener('stop', ctaGroupHandler);
    clk.addEventListener('pause', ctaGroupHandler);
    clk.addEventListener('resume', ctaGroupHandler);
    return () => {
      clk.removeEventListener('start', ctaGroupHandler);
      clk.removeEventListener('stop', ctaGroupHandler);
      clk.removeEventListener('pause', ctaGroupHandler);
      clk.removeEventListener('resume', ctaGroupHandler);
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
      <div className="divider my-0"></div>
      <p className="text-sm my-2 text-center">{`${new Date().getFullYear()} | © CC0-1.0 by ${
        pkg.author
      }`}</p>
    </div>
  );
};

export default Footer;
