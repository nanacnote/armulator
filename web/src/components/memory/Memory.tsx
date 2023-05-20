import * as React from 'react';
import { useArmulatorCore, useSession } from '../../hooks';
import { Numeral } from '../';
import { hexDump } from '../../lib/helper/utils';
import {
  HEX_DUMP_SIZE_BYTE,
  MEMORY_HEX_DUMP_TYPE,
  MEMORY_TABLE_VIEW_TYPE,
  NUMBER_OF_MEMORY_TABLE_ENTRIES
} from '../../lib/helper/def';

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
  const { type, on, off, setMemViewType } = useSession();
  const { DEF, ram } = useArmulatorCore();

  const memViewChangeHandler = (e: CustomEventInit) => {
    // TODO:
    // unknown bug where `thisComponent.current` is null
    // when switching between tabs and right after click `table view` or `hex dump`
    // to remedy this `views` and `btnGroup` are wrapped in `if` conditions
    const views = thisComponent.current?.getElementsByClassName(
      'content-item-for-view-type'
    ) as HTMLCollectionOf<HTMLDivElement>;
    if (views) {
      for (const child of views) {
        if (child.dataset.name === e.detail) {
          child.classList.remove('hidden');
        } else {
          child.classList.add('hidden');
        }
      }
    }
    const btnGroup = thisComponent.current?.getElementsByClassName(
      'btn-item-for-view-type'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    if (btnGroup) {
      for (const child of btnGroup) {
        if (child.name === e.detail) {
          child.classList.add('btn-active');
        } else {
          child.classList.remove('btn-active');
        }
      }
    }
  };

  const pagGroupHandler = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    const children = thisComponent.current?.getElementsByClassName(
      'btn-item-for-pag'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.index === el.dataset.index) {
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
    if (!(index % 4) && index !== pagStartIndex) {
      setPagSelectionOffset(0);
      setPagStartIndex(index);
      rehydratePag();
    }
    if (index === pagStartIndex && index > 3) {
      setPagSelectionOffset(4);
      setPagStartIndex(index - 4);
      rehydratePag();
    }
    setTableStartAddress(startAddr);
    pagGroupHandler(e);
    rehydrateTable();
  };

  const generateHexDump = () => {
    return hexDump(ram.BUFFER.buffer.slice(0, HEX_DUMP_SIZE_BYTE));
  };

  const genTableEntry = () => {
    let count = 0;
    let batch = '';
    let address = tableStartAddress;
    let byteStart = address * 4;
    const byteEnd = byteStart + NUMBER_OF_MEMORY_TABLE_ENTRIES * 4;
    const tableEntries: any[] = [];
    const it = ram[Symbol.iterator]() as any;

    while (byteStart < byteEnd) {
      const value = it.next().value!;
      count++;
      if (count < byteStart + 1) continue;
      batch += value;
      if (batch.length === 32) {
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
    const pagLength = wordLength / NUMBER_OF_MEMORY_TABLE_ENTRIES;
    const pagEntries: any[] = [];
    for (let i = pagStart; i < pagLength; i++) {
      if (i > pagStart + 4) break;
      pagEntries.push(
        <button
          className="btn-item-for-pag btn btn-xs"
          data-start-addr={i * (NUMBER_OF_MEMORY_TABLE_ENTRIES - 1)}
          data-index={i}
          onClick={paginationHandler}
        >
          {i + 1}
        </button>
      );
    }
    return <>{...pagEntries}</>;
  };

  const syncPagSelection = () => {
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

  const memViewSelectionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMemViewType(e.currentTarget.name);
  };

  React.useEffect(() => {
    syncPagSelection();
  }, [pagRehydrationKey]);

  React.useEffect(() => {
    on(type.MEMORY_VIEW_CHANGE, memViewChangeHandler);
    ram.addEventListener(DEF.ON_RAM_WRITE, rehydrateTable);
    return () => {
      off(type.MEMORY_VIEW_CHANGE, memViewChangeHandler);
      ram.removeEventListener(DEF.ON_RAM_WRITE, rehydrateTable);
    };
  }, []);

  return (
    <div ref={thisComponent} className="p-4">
      <div
        className="content-item-for-view-type"
        data-name={MEMORY_HEX_DUMP_TYPE}
      >
        <div className="relative bg-base-100 shadow-md h-[441px] border rounded border-base-300 overflow-auto">
          <div className="sticky top-0 left-0 right-0 mb-4">
            <div className="alert shadow-lg rounded-none">
              <div className="text-xs font-bold opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Memory Hexadecimal dump is restricted to first</span>
                <div className="badge badge-neutral badge-sm">
                  {`${HEX_DUMP_SIZE_BYTE} Bytes`}
                </div>
                {/* <span>or</span>
                <div className="badge badge-neutral badge-sm">
                  {`${(HEX_DUMP_SIZE_BYTE / 1024 / 1000).toPrecision(2)}MB`}
                </div> */}
              </div>
            </div>
          </div>
          <div className="px-6">
            <pre>{generateHexDump()}</pre>
          </div>
        </div>
      </div>

      <div
        className="content-item-for-view-type"
        data-name={MEMORY_TABLE_VIEW_TYPE}
      >
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
      </div>

      <div className="mt-2 flex justify-between">
        <div className="btn-group">
          <button
            className="btn-item-for-view-type btn btn-xs"
            name={MEMORY_TABLE_VIEW_TYPE}
            onClick={memViewSelectionHandler}
          >
            Table view
          </button>
          <button
            className="btn-item-for-view-type btn btn-xs"
            name={MEMORY_HEX_DUMP_TYPE}
            onClick={memViewSelectionHandler}
          >
            Hex dump
          </button>
        </div>
        <div
          key={pagRehydrationKey}
          className="content-item-for-view-type btn-group"
          data-name={MEMORY_TABLE_VIEW_TYPE}
        >
          {genPaginationEntry()}
        </div>
      </div>
    </div>
  );
};

export default Memory;
