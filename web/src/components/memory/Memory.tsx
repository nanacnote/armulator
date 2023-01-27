import * as React from 'react';
import { useArmulatorCore } from '../../hooks';
import { Numeral } from '../';

interface TProps {}

/**
 * Memory component
 */
const Memory: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [pagSelectionOffset, setPagSelectionOffset] = React.useState(0);
  const [tableRehydrationKey, setTableRehydrationKey] = React.useState(10);
  const [tableStartAddress, setTableStartAddress] = React.useState(0);
  const [pagRehydrationKey, setPagRehydrationKey] = React.useState(20);
  const [pagStartIndex, setPagStartIndex] = React.useState(0);
  const { DEF, ram } = useArmulatorCore();

  const pagGroupHandler = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-pag'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.index == el.dataset.index) {
        child.classList.add('btn-active');
      } else {
        child.classList.remove('btn-active');
      }
    }
  };

  const paginationHandler = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    const index = parseInt(el.dataset.index!);
    const startAddr = parseInt(el.dataset.startAddr!);
    if (!(index % 4) && index != pagStartIndex) {
      setPagSelectionOffset(0);
      setPagStartIndex(index);
      rehydratePag();
    }
    if (index == pagStartIndex && index > 3) {
      setPagSelectionOffset(4);
      setPagStartIndex(index - 4);
      rehydratePag();
    }
    setTableStartAddress(startAddr);
    pagGroupHandler(e);
    rehydrateTable();
  };

  const genTableEntry = () => {
    let count = 0;
    let batch = '';
    let address = tableStartAddress;
    let byteStart = address * 4;
    const byteEnd = byteStart + 40; // 40/4 = 10 which represents how many entries are in a pagination must be in sync with `genPaginationEntry` pagLength
    const tableEntries: any[] = [];
    const it = ram[Symbol.iterator]() as any;

    while (byteStart < byteEnd) {
      const value = it.next().value!;
      count++;
      if (count < byteStart + 1) continue;
      batch += value;
      if (batch.length == 32) {
        tableEntries.push(
          <tr key={`ram-${address}`}>
            <th>
              {React.createElement(Numeral, { binStr: address.toString(2) })}
            </th>
            <td>
              {React.createElement(Numeral, { binStr: batch.slice(0, 8) })}
            </td>
            <td>
              {React.createElement(Numeral, { binStr: batch.slice(8, 16) })}
            </td>
            <td>
              {React.createElement(Numeral, { binStr: batch.slice(16, 24) })}
            </td>
            <td>{React.createElement(Numeral, { binStr: batch.slice(24) })}</td>
          </tr>
        );
        batch = '';
        address++;
      }
      byteStart++;
    }
    return <>{...tableEntries}</>;
  };

  const genPaginationEntry = () => {
    let pagStart = pagStartIndex;
    const wordLength = ram.getByteLength() / 4;
    const pagLength = wordLength / 10; // 10 is the max number of entries in a pagination must be in sync for the `genTableEntry` byteEnd value
    const pagEntries: any[] = [];
    for (let i = pagStart; i < pagLength; i++) {
      if (i > pagStart + 4) break;
      pagEntries.push(
        <button
          className="btn-item-for-pag btn btn-xs"
          data-start-addr={i * 9}
          data-index={i}
          onClick={paginationHandler}
        >
          {i + 1}
        </button>
      );
    }
    return <>{...pagEntries}</>;
  };

  const initialPagSelection = () => {
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-pag'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    if (children.length) {
      children[pagSelectionOffset].classList.add('btn-active');
    }
  };

  const rehydrateTable = () => {
    setTableRehydrationKey((prev) => prev + 1);
  };

  const rehydratePag = () => {
    setPagRehydrationKey((prev) => prev + 1);
  };

  React.useEffect(() => {
    initialPagSelection();
  }, [pagRehydrationKey]);

  React.useEffect(() => {
    ram.addEventListener(DEF.ON_RAM_WRITE_EVENT, rehydrateTable);
    initialPagSelection();
    return () => {
      ram.removeEventListener(DEF.ON_RAM_WRITE_EVENT, rehydrateTable);
    };
  }, []);

  return (
    <div ref={thisComponent} className="m-4">
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
          <tbody key={tableRehydrationKey}>{genTableEntry()}</tbody>
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
        <div key={pagRehydrationKey} className="btn-group">
          {genPaginationEntry()}
        </div>
      </div>
    </div>
  );
};

export default Memory;
