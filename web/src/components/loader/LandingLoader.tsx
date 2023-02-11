import * as React from 'react';
import cn from 'classnames';

interface TProps {}

/**
 * LandingLoader component
 */
const LandingLoader: React.FC<React.PropsWithChildren<TProps>> = ({
  children
}): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadPercentage, setLoadPercentage] = React.useState(0);

  const loadProgressHandler = () => {
    let curPercentage = 0;
    const maxPercentage = 100;
    setLoadPercentage((prev) => {
      if (prev < maxPercentage) {
        curPercentage = prev + 1;
      } else {
        curPercentage = maxPercentage;
      }
      return curPercentage;
    });
    if (curPercentage < maxPercentage) {
      requestAnimationFrame(loadProgressHandler);
    } else {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    requestAnimationFrame(loadProgressHandler);
    return () => {};
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
      <div
        className={cn('h-screen flex justify-center items-center', {
          hidden: !isLoading
        })}
      >
        <div
          className="radial-progress"
          style={{
            // @ts-ignore:
            '--value': loadPercentage,
            '--size': '12rem',
            '--thickness': '2rem'
          }}
        >
          <span className="text-2xl font-black">{`${loadPercentage}%`}</span>
        </div>
      </div>
      <div className={cn({ hidden: isLoading })}>{children}</div>
    </div>
  );
};

export default LandingLoader;
