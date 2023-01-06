import React from 'react';
import styles from './footer.module.css';
import cx from 'classnames';
import pkg from '../../../package.json';
import { useArmulatorCore, useKompilerAPI } from '../../hooks';

interface TProps {}

/**
 * Footer component
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  const { post } = useKompilerAPI();
  const { cpu } = useArmulatorCore();

  const startHandler = () => {
    post(
      'cmp r3, #245; push {r7}; sub sp, sp, #12; add r7, sp, #0; str r0, [r7, #4]; ldr r3, [r7, #4]; mul r3, r3, r3; mov r0, r3; adds r7, r7, #12; mov sp, r7; ldr r7, [sp], #4; bx lr'
    ).then((data) => cpu.loadProg(data).run());
  };

  return (
    <div className={cx(styles.container, 'text-center w-full')}>
      <hr />
      <div className="my-2">
        <button
          className="w-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 sm:rounded-l-lg"
          onClick={startHandler}
        >
          Start
        </button>
        <button className="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
          Stop
        </button>
        <button className="w-40 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4">
          Pause
        </button>
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:rounded-r-lg">
          Step
        </button>
      </div>
      <hr />
      <p className="text-sm my-2">{`${new Date().getFullYear()} | © CC0-1.0 by ${
        pkg.author
      }`}</p>
    </div>
  );
};

export default Footer;
