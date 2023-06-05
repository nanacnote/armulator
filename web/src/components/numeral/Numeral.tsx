import * as React from 'react';
import { useSession } from '../../hooks';
import { NUMERAL_TYPE_BIN, NUMERAL_TYPE_HEX } from '../../utils/def';

interface TProps {
  binStr: string;
  binPad?: number;
  hexPad?: number;
}

/**
 * Numeral component
 * Returns an 8bit(byte) string with respect to the the bin/hex
 * example 0b11111111 or 0xFF
 * It updates when user preferred numeral ie bin/hex
 */
const Numeral: React.FC<TProps> = ({
  binStr,
  binPad = 8,
  hexPad = 2
}): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const origBinStr = React.useRef(binStr);
  const { type, on, off } = useSession();
  const [innerText, setInnerText] = React.useState(origBinStr.current);

  const numeralTypeHandler = (e: CustomEventInit) => {
    switch (e.detail) {
      case NUMERAL_TYPE_HEX:
        setInnerText(
          '0x' +
            parseInt(origBinStr.current, 2)
              .toString(16)
              .padStart(hexPad, '0')
              .toUpperCase()
        );
        break;
      case NUMERAL_TYPE_BIN:
        setInnerText('0b' + origBinStr.current.padStart(binPad, '0'));
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    on(type.NUMERAL_CHANGE, numeralTypeHandler);
    return () => {
      off(type.NUMERAL_CHANGE, numeralTypeHandler);
    };
  }, []);

  return <span ref={thisComponent}>{innerText}</span>;
};

export default Numeral;
