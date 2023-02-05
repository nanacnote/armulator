import * as React from 'react';
import { useArmulatorCore, useSession } from '../../hooks';
import {
  DARK_THEME_NAME,
  LIGHT_THEME_NAME,
  NUMERAL_TYPE_BIN,
  NUMERAL_TYPE_HEX
} from '../../lib/helper/def';

interface TProps {}

/**
 * Header component
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { DEF, clk } = useArmulatorCore();
  const {
    type,
    on,
    off,
    toggleTheme,
    getTheme,
    setInstructionBuffer,
    getNumeralType,
    setNumeralType
  } = useSession();

  const numeralCTAGroupHandler = (e: CustomEventInit) => {
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-numeral'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.name == e.detail) {
        child.classList.add('btn-active');
      } else {
        child.classList.remove('btn-active');
      }
    }
  };

  const speedCTAGroupHandler = (e: CustomEventInit) => {
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-speed'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.detail == e.detail) {
        child.classList.add('btn-active');
      } else {
        child.classList.remove('btn-active');
      }
    }
  };

  const slowClockSpeedHandler = (e: React.MouseEvent) => {
    clk.changeSpeed(DEF.SLOW_CLOCK_SPEED);
  };

  const normalClockSpeedHandler = (e: React.MouseEvent) => {
    clk.changeSpeed(DEF.NORMAL_CLOCK_SPEED);
  };

  const fastClockSpeedHandler = (e: React.MouseEvent) => {
    clk.changeSpeed(DEF.FAST_CLOCK_SPEED);
  };

  const hexNumericUnitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNumeralType(e.currentTarget.name);
  };

  const binNumericUnitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNumeralType(e.currentTarget.name);
  };

  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const reader = new FileReader();
    reader.onload = (e) => {
      setInstructionBuffer(String(e.target?.result));
    };
    reader.readAsText(el.files![0]);
    el.value = ''; // allows for upload same multiple times in succession
  };

  const menuHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const children = thisComponent.current?.getElementsByClassName(
      'dropdown-item-for-menu'
    ) as HTMLCollectionOf<HTMLDivElement>;
    const child = children[0];
    if (el.checked) {
      child.classList.remove('hidden');
    } else {
      child.classList.add('hidden');
    }
  };

  const themeSwitchHandler = (e: CustomEventInit) => {
    document.documentElement.setAttribute('data-theme', e.detail);
  };

  React.useEffect(() => {
    on(type.THEME_CHANGE, themeSwitchHandler);
    on(type.NUMERAL_CHANGE, numeralCTAGroupHandler);
    clk.addEventListener(DEF.ON_SPEED_CHANGE_EVENT, speedCTAGroupHandler);
    return () => {
      off(type.THEME_CHANGE, themeSwitchHandler);
      off(type.NUMERAL_CHANGE, numeralCTAGroupHandler);
      clk.removeEventListener(DEF.ON_SPEED_CHANGE_EVENT, speedCTAGroupHandler);
    };
  }, []);

  return (
    <div ref={thisComponent}>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-base" href="/">
            ARMulator
          </a>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal mr-2 ml-6 mb-2 hidden lg:block">
            <div className="btn-group">
              <button
                className="btn btn-xs btn-item-for-speed"
                name="slow"
                data-detail={DEF.SLOW_CLOCK_SPEED}
                onClick={slowClockSpeedHandler}
              >
                Slow
              </button>
              <button
                className="btn btn-xs btn-item-for-speed btn-active"
                name="normal"
                data-detail={DEF.NORMAL_CLOCK_SPEED}
                onClick={normalClockSpeedHandler}
              >
                Normal
              </button>
              <button
                className="btn btn-xs btn-item-for-speed"
                name="fast"
                data-detail={DEF.FAST_CLOCK_SPEED}
                onClick={fastClockSpeedHandler}
              >
                Fast
              </button>
            </div>
          </div>
          <div className="menu menu-horizontal mr-3 ml-6 mb-2 hidden lg:block">
            <div className="btn-group">
              <button
                className={`btn-item-for-numeral btn btn-xs ${
                  getNumeralType() === NUMERAL_TYPE_HEX ? 'btn-active' : ''
                }`}
                name={NUMERAL_TYPE_HEX}
                onClick={hexNumericUnitHandler}
              >
                Hex
              </button>
              <button
                className={`btn-item-for-numeral btn btn-xs ${
                  getNumeralType() === NUMERAL_TYPE_BIN ? 'btn-active' : ''
                }`}
                name={NUMERAL_TYPE_BIN}
                onClick={binNumericUnitHandler}
              >
                Bin
              </button>
            </div>
          </div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <div className="tooltip tooltip-bottom" data-tip="upload">
                {/* TODO: put event listener next line element and catch all clicks with currentTarget */}
                <div className="swap swap-rotate">
                  <label className="swap swap-rotate">
                    <input
                      type="file"
                      name="upload"
                      accept=".txt,.asm"
                      className="hidden file-input w-full max-w-xs"
                      onChange={uploadHandler}
                    />
                    <svg
                      className="fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM13 12v4h-2v-4H8l4-4 4 4h-3z" />
                    </svg>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="tooltip tooltip-bottom" data-tip="theme">
                <label className="swap swap-rotate">
                  <input type="checkbox" name="theme" onChange={toggleTheme} />
                  <svg
                    className={`${
                      getTheme() === LIGHT_THEME_NAME ? 'swap-on' : 'swap-off'
                    } fill-current w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                  <svg
                    className={`${
                      getTheme() === DARK_THEME_NAME ? 'swap-on' : 'swap-off'
                    } fill-current w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </li>
            <li className="flex flex-col lg:hidden">
              <div className="tooltip tooltip-bottom" data-tip="menu">
                <label className="swap swap-rotate">
                  <input
                    className="cta-item-for-menu"
                    type="checkbox"
                    name="menu"
                    onChange={menuHandler}
                  />
                  <svg
                    className={`${'swap-off'} fill-current w-5 h-5`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                  <svg
                    className="swap-on fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:hidden bg-base-300 shadow-inner dropdown-item-for-menu">
        <div className="flex flex-row-reverse pb-4 pt-2">
          <div className="mr-6">
            <div className="btn-group">
              <button
                className="btn btn-xs btn-item-for-speed"
                name="slow"
                data-detail={1000}
                onClick={slowClockSpeedHandler}
              >
                Slow
              </button>
              <button
                className="btn btn-xs btn-item-for-speed btn-active"
                name="normal"
                data-detail={500}
                onClick={normalClockSpeedHandler}
              >
                Normal
              </button>
              <button
                className="btn btn-xs btn-item-for-speed"
                name="fast"
                data-detail={200}
                onClick={fastClockSpeedHandler}
              >
                Fast
              </button>
            </div>
          </div>
          <div className="mr-6">
            <div className="btn-group">
              <button
                className={`btn-item-for-numeral btn btn-xs ${
                  getNumeralType() === NUMERAL_TYPE_HEX ? 'btn-active' : ''
                }`}
                name={NUMERAL_TYPE_HEX}
                onClick={hexNumericUnitHandler}
              >
                Hex
              </button>
              <button
                className={`btn-item-for-numeral btn btn-xs ${
                  getNumeralType() === NUMERAL_TYPE_BIN ? 'btn-active' : ''
                }`}
                name={NUMERAL_TYPE_BIN}
                onClick={binNumericUnitHandler}
              >
                Bin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
