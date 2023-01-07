import * as React from 'react';
import { useArmulatorCore } from '../../hooks';

interface TProps {}

/**
 * Memory component
 */
const Memory: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [hydrationKey, setHydrationKey] = React.useState(0);
  const { ram } = useArmulatorCore();

  // TODO: move to hook

  const withRadix = (val: string | number) => {
    if (typeof val == 'number') {
      return '0x' + val.toString(16);
    }
    if (typeof val == 'string') {
      return '0x' + parseInt(val).toString(16);
    }
  };

  const genTableEntry = () => {
    let b1 = '';
    let b2 = '';
    let b3 = '';
    let b4 = '';
    let index = 0;
    let address = 0;
    const batch: any[] = [];
    const tableEntries: any[] = [];
    const boundary = index + 80;
    const it = ram[Symbol.iterator]();

    while (index < boundary) {
      const value = it.next().value!;
      batch.push(...value);
      if (batch.length == 32) {
        b1 = batch.slice(0, 9).join('');
        b2 = batch.slice(9, 17).join('');
        b3 = batch.slice(17, 25).join('');
        b4 = batch.slice(24).join('');
        batch.length = 0;
        address++;
        tableEntries.push(
          <tr key={`ram-${address}`}>
            <th>{withRadix(address)}</th>
            <td>{withRadix(b1)}</td>
            <td>{withRadix(b2)}</td>
            <td>{withRadix(b3)}</td>
            <td>{withRadix(b4)}</td>
          </tr>
        );
      }
      index++;
    }
    return <>{...tableEntries}</>;
  };

  const rehydrate = () => {
    setHydrationKey((value) => value + 1);
  };

  React.useEffect(() => {
    ram.addEventListener('memory-write', rehydrate);
    return () => {
      ram.removeEventListener('memory-write', rehydrate);
    };
  }, []);

  return (
    <div ref={thisComponent} key={hydrationKey} className="m-4">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Address</th>
              <th>
                1<sup>st</sup> Byte
              </th>
              <th>
                2<sup>nd</sup> Byte
              </th>
              <th>
                3<sup>rd</sup> Byte
              </th>
              <th>
                4<sup>th</sup> Byte
              </th>
            </tr>
          </thead>
          <tbody>{genTableEntry()}</tbody>
          <tfoot>
            <tr>
              <th>Address</th>
              <th>
                1<sup>st</sup> Byte
              </th>
              <th>
                2<sup>nd</sup> Byte
              </th>
              <th>
                3<sup>rd</sup> Byte
              </th>
              <th>
                4<sup>th</sup> Byte
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-2 flex flex-row-reverse">
        <div className="btn-group">
          <button className="btn btn-xs">1</button>
          <button className="btn btn-xs btn-active">2</button>
          <button className="btn btn-xs">3</button>
          <button className="btn btn-xs">4</button>
        </div>
      </div>
    </div>
  );
};

export default Memory;
