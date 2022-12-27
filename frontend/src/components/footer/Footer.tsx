import React from 'react';
import styles from './footer.module.css';
import cx from 'classnames';
import pkg from '../../../package.json';

interface TProps {}

/**
 * Footer componet
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'text-center w-full')}>
      <hr />
      <div className="my-2">
        <button className="w-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l-lg">
          Start
        </button>
        <button className="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
          Stop
        </button>
        <button className="w-40 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4">
          Pause
        </button>
        <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
          Step
        </button>
      </div>
      <hr />
      <p className="text-lg my-2">{`${new Date().getFullYear()} | © CC0-1.0 by ${
        pkg.author
      }`}</p>
    </div>
  );
};

export default Footer;
