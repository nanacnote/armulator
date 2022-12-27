import React from 'react';
import styles from './header.module.css';
import cx from 'classnames';
import pkg from '../../../package.json';

interface TProps {}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'w-full')}>
      <div className="">
        <button className="w-40 bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4">
          {pkg.name}
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
