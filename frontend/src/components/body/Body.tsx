import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <div
      className={cx(styles.container, 'flex justify-center overflow-hidden')}
    ></div>
  );
};

export default Body;
