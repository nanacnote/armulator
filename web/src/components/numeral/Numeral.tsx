import * as React from 'react';
import { useSession } from '../../hooks';
import { NUMERAL_TYPE_BIN, NUMERAL_TYPE_HEX } from '../../lib/helper/def';

interface TProps {
  binStr: string;
}

/**
 * Numeral component
 */
const Numeral: React.FC<TProps> = ({ binStr }): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const origBinStr = React.useRef(binStr);
  const { type, on, off } = useSession();
  const [innerText, setInnerText] = React.useState(origBinStr.current);

  const numeralTypeHandler = (e: CustomEventInit) => {
    switch (e.detail) {
      case NUMERAL_TYPE_HEX:
        setInnerText(
          '0x' +
            parseInt(origBinStr.current)
              .toString(16)
              .padStart(8, '0')
              .toUpperCase()
        );
        break;
      case NUMERAL_TYPE_BIN:
        setInnerText('0b' + origBinStr.current.padStart(8, '0'));
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    on(type.NUMERAL, numeralTypeHandler);
    return () => {
      off(type.NUMERAL, numeralTypeHandler);
    };
  }, []);

  return <span ref={thisComponent}>{innerText}</span>;
};

export default Numeral;
