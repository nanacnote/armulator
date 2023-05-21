## Classes

<dl>
<dt><a href="#Dec">Dec</a></dt>
<dd><p>T0 - main encoding
    T1 - data-processing and miscellaneous instructions
        T11 - Extra load/store                                                              **
        T12 - Multiply and Accumulate
            • MUL/MULS
        T13 - Synchronization primitives and Load-Acquire/Store-Release                     **
        T14 - Miscellaneous
            • BX
            • CLZ
        T15 - Halfword Multiply and Accumulate                                              **
        T16 - Data-processing register (immediate shift)</p>
<pre><code>    T17 - Data-processing register (register shift)
    
    T18 - Data-processing immediate  
        T181 - Integer Data Processing (two register and immediate)
            • AND, ANDS (immediate)
            • EOR, EORS (immediate)
            • SUB, SUBS (immediate) - SUB variant
            • SUB, SUBS (SP minus immediate) - SUB variant 
            • ADR - A2
            • SUB, SUBS (immediate) - SUBS variant
            • SUB, SUBS (SP minus immediate) - SUBS variant 
            • RSB, RSBS (immediate)
            • ADD, ADDS (immediate) - ADD variant
            • ADD, ADDS (SP plus immediate) - ADD variant 
            • ADR - A1
            • ADD, ADDS (immediate) - ADDS variant
            • ADD, ADDS (SP plus immediate) - ADDS variant
            • ADC, ADCS (immediate)
            • SBC, SBCS (immediate)
            • RSC, RSCS (immediate)
        T182 - Move Halfword (immediate) 
            • MOV, MOVS (immediate)
            • MOVT
        T183 - Move Special Register and Hints (immediate)                              **
        T184 - Integer Test and Compare (one register and immediate) 
            • TST (immediate)
            • TEQ (immediate)
            • CMP (immediate)
            • CMN (immediate)
        T185 - Logical Arithmetic (two register and immediate)
            • ORR, ORRS (immediate)
            • MOV, MOVS (immediate)
            • BIC, BICS (immediate)
            • MVN, MVNS (immediate)

T2 - Load/Store Word, Unsigned Byte (immediate, literal)
• LDR(literal)
• LDR(immediate) - Post index variant
• LDR(immediate) - Offset variant
• LDRB(literal)
• LDRB(immediate) - Post index variant
• LDRB(immediate) - Offset variant
• STR(immediate) - Pre index variant
• STR(immediate) - Post index variant
• STR(immediate) - Offset variant
• STRB(immediate) - Post index variant
• STRB(immediate) - Offset variant

T3 - Load/Store Word, Unsigned Byte (register)
• LDR (register) - Pre-indexed variant
• LDR (register) - Post indexed variant
• LDRB (register) - Pre indexed variant
• LDRB (register) - Post indexed variant
• STR (register) - Pre-indexed variant
• STR (register) - Post indexed variant
• STRB (register) - Pre indexed variant
• STRB (register) - Post indexed variant

T4 - Media instructions \*\*

T5 - Branch, branch with link, and block data transfer
T51 - Exception Save/Restore **
T52 - Load/Store Multiple **
T53 - Branch (immediate)
• B
• BL (immediate)
• BLX (immediate)

T6 - System register access, Advanced SIMD, floating-point, and Supervisor call \*\*

T7 - Unconditional instructions \*\*
</code></pre>

</dd>
</dl>

<a name="module_Core"></a>

## Core

- [Classes](#classes)
- [Core](#core)
  - [Core.Alu ⇐ EventTarget](#corealu--eventtarget)
    - [new exports.Alu()](#new-exportsalu)
    - [alu.conn2reg(reg)](#aluconn2regreg)
    - [alu.call(options)](#alucalloptions)
  - [Core.Buffer32Bit ⇐ EventTarget](#corebuffer32bit--eventtarget)
    - [new exports.Buffer32Bit(name)](#new-exportsbuffer32bitname)
    - [buffer32Bit.NAME : String](#buffer32bitname--string)
    - [buffer32Bit.IS_EMPTY : number](#buffer32bitis_empty--number)
    - [buffer32Bit.BUFFER : DataView](#buffer32bitbuffer--dataview)
    - [buffer32Bit.read(\[byteOffset\]) ⇒ number](#buffer32bitreadbyteoffset--number)
    - [buffer32Bit.write(val, \[byteOffset\]) ⇒ number](#buffer32bitwriteval-byteoffset--number)
    - [buffer32Bit.flush() ⇒ number](#buffer32bitflush--number)
    - [buffer32Bit.view() ⇒ string](#buffer32bitview--string)
    - [buffer32Bit.Symbol.iterator() ⇒ Object](#buffer32bitsymboliterator--object)
  - [Core.Bus](#corebus)
    - [new exports.Bus(dev)](#new-exportsbusdev)
    - [bus.DEVICES : Object](#busdevices--object)
    - [bus.A_BUS_BUFFER : Buffer32Bit](#busa_bus_buffer--buffer32bit)
    - [bus.C_BUS_BUFFER : Buffer32Bit](#busc_bus_buffer--buffer32bit)
    - [bus.D_BUS_BUFFER : Buffer32Bit](#busd_bus_buffer--buffer32bit)
    - [bus.setAddress(val)](#bussetaddressval)
    - [bus.setControl(val)](#bussetcontrolval)
    - [bus.setData(val)](#bussetdataval)
    - [bus.getData() ⇒ number](#busgetdata--number)
    - [bus.view() ⇒ Object](#busview--object)
    - [bus.onTick()](#busontick)
  - [Core.Clk ⇐ EventTarget](#coreclk--eventtarget)
    - [new exports.Clk()](#new-exportsclk)
    - [clk.TICKER : number](#clkticker--number)
    - [clk.CYCLE : number](#clkcycle--number)
    - [clk.STATE : number](#clkstate--number)
    - [clk.SPEED : number](#clkspeed--number)
    - [clk.CYCLE_START_EVENTS](#clkcycle_start_events)
    - [clk.CYCLE_END_EVENTS](#clkcycle_end_events)
    - [clk.start()](#clkstart)
    - [clk.stop()](#clkstop)
    - [clk.pause()](#clkpause)
    - [clk.resume()](#clkresume)
    - [clk.step()](#clkstep)
    - [clk.changeSpeed(val)](#clkchangespeedval)
  - [Core.Cpu](#corecpu)
    - [new exports.Cpu(parts)](#new-exportscpuparts)
    - [cpu.run() ⇒ Cpu](#cpurun--cpu)
    - [cpu.spawn(pid) ⇒ Cpu](#cpuspawnpid--cpu)
    - [cpu.load(elf) ⇒ Object](#cpuloadelf--object)
  - [Core.Mmu](#coremmu)
    - [new exports.Mmu()](#new-exportsmmu)
    - [mmu.PROCESSES : Map.\<number, Process\>](#mmuprocesses--mapnumber-process)
    - [mmu.conn2bus(bus)](#mmuconn2busbus)
    - [mmu.processAlloc(size) ⇒ number](#mmuprocessallocsize--number)
    - [mmu.for(pid) ⇒ Process | null](#mmuforpid--process--null)
    - [mmu.malloc(pid, section, size, content) ⇒ Array.\<number\>](#mmumallocpid-section-size-content--arraynumber)
    - [mmu.translate(virtualAddress) ⇒ number](#mmutranslatevirtualaddress--number)
  - [Core.Process](#coreprocess)
    - [new exports.Process(pid, startAddr, endAddr)](#new-exportsprocesspid-startaddr-endaddr)
    - [process.PID : number](#processpid--number)
    - [process.PROC_START_ADDRESS : number](#processproc_start_address--number)
    - [process.PROC_END_ADDRESS : number](#processproc_end_address--number)
    - [process.set(section, size) ⇒ number](#processsetsection-size--number)
  - [Core.Ram ⇐ EventTarget](#coreram--eventtarget)
    - [new exports.Ram()](#new-exportsram)
    - [ram.read8(\[byteOffset\]) ⇒ number](#ramread8byteoffset--number)
    - [ram.read16(\[byteOffset\]) ⇒ number](#ramread16byteoffset--number)
    - [ram.read32(\[byteOffset\]) ⇒ number](#ramread32byteoffset--number)
    - [ram.write8(val, \[byteOffset\]) ⇒ number](#ramwrite8val-byteoffset--number)
    - [ram.write16(val, \[byteOffset\]) ⇒ number](#ramwrite16val-byteoffset--number)
    - [ram.write32(val, \[byteOffset\]) ⇒ number](#ramwrite32val-byteoffset--number)
    - [ram.getByteLength() ⇒ number](#ramgetbytelength--number)
    - [ram.view() ⇒ Array.\<string\>](#ramview--arraystring)
    - [ram.Symbol.iterator() ⇒ Object](#ramsymboliterator--object)
  - [Core.Reg ⇐ EventTarget](#corereg--eventtarget)
    - [new exports.Reg()](#new-exportsreg)
    - [reg.r1 ⇒ Buffer32Bit](#regr1--buffer32bit)
    - [reg.r2 ⇒ Buffer32Bit](#regr2--buffer32bit)
    - [reg.r3 ⇒ Buffer32Bit](#regr3--buffer32bit)
    - [reg.r4 ⇒ Buffer32Bit](#regr4--buffer32bit)
    - [reg.r5 ⇒ Buffer32Bit](#regr5--buffer32bit)
    - [reg.r6 ⇒ Buffer32Bit](#regr6--buffer32bit)
    - [reg.r7 ⇒ Buffer32Bit](#regr7--buffer32bit)
    - [reg.r8 ⇒ Buffer32Bit](#regr8--buffer32bit)
    - [reg.r9 ⇒ Buffer32Bit](#regr9--buffer32bit)
    - [reg.r10 ⇒ Buffer32Bit](#regr10--buffer32bit)
    - [reg.r11 ⇒ Buffer32Bit](#regr11--buffer32bit)
    - [reg.r12 ⇒ Buffer32Bit](#regr12--buffer32bit)
    - [reg.sp ⇒ Buffer32Bit](#regsp--buffer32bit)
    - [reg.lr ⇒ Buffer32Bit](#reglr--buffer32bit)
    - [reg.pc ⇒ Buffer32Bit](#regpc--buffer32bit)
    - [reg.cpsr ⇒ Buffer32Bit](#regcpsr--buffer32bit)
    - [reg.Symbol.iterator() ⇒ Object](#regsymboliterator--object)

<a name="module_Core.Alu"></a>

### Core.Alu ⇐ <code>EventTarget</code>

Represents an arithmetic logic unit (ALU).

**Kind**: static class of [<code>Core</code>](#module_Core)  
**Extends**: <code>EventTarget</code>

- [.Alu](#module_Core.Alu) ⇐ <code>EventTarget</code>
  - [new exports.Alu()](#new_module_Core.Alu_new)
  - [.conn2reg(reg)](#module_Core.Alu+conn2reg)
  - [.call(options)](#module_Core.Alu+call)

<a name="new_module_Core.Alu_new"></a>

#### new exports.Alu()

Creates an instance of the Alu class.

<a name="module_Core.Alu+conn2reg"></a>

#### alu.conn2reg(reg)

Connects the ALU to a register.

**Kind**: instance method of [<code>Alu</code>](#module_Core.Alu)

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| reg   | <code>object</code> | The register object. |

<a name="module_Core.Alu+call"></a>

#### alu.call(options)

Calls the ALU to execute an opcode.

**Kind**: instance method of [<code>Alu</code>](#module_Core.Alu)

| Param                  | Type                | Description               |
| ---------------------- | ------------------- | ------------------------- |
| options                | <code>object</code> | The options for the call. |
| options.pid            | <code>number</code> | The process ID.           |
| options.routine        | <code>number</code> | The routine.              |
| options.instruction    | <code>number</code> | The instruction.          |
| options.virtualAddress | <code>number</code> | The virtual address.      |

<a name="module_Core.Buffer32Bit"></a>

### Core.Buffer32Bit ⇐ <code>EventTarget</code>

A class representing a 32-bit buffer that can be read from and written to.

**Kind**: static class of [<code>Core</code>](#module_Core)  
**Extends**: <code>EventTarget</code>

- [.Buffer32Bit](#module_Core.Buffer32Bit) ⇐ <code>EventTarget</code>
  - [new exports.Buffer32Bit(name)](#new_module_Core.Buffer32Bit_new)
  - [.NAME](#module_Core.Buffer32Bit+NAME) : <code>String</code>
  - [.IS_EMPTY](#module_Core.Buffer32Bit+IS_EMPTY) : <code>number</code>
  - [.BUFFER](#module_Core.Buffer32Bit+BUFFER) : <code>DataView</code>
  - [.read([byteOffset])](#module_Core.Buffer32Bit+read) ⇒ <code>number</code>
  - [.write(val, [byteOffset])](#module_Core.Buffer32Bit+write) ⇒ <code>number</code>
  - [.flush()](#module_Core.Buffer32Bit+flush) ⇒ <code>number</code>
  - [.view()](#module_Core.Buffer32Bit+view) ⇒ <code>string</code>
  - [.Symbol.iterator()](#module_Core.Buffer32Bit+Symbol.iterator) ⇒ <code>Object</code>

<a name="new_module_Core.Buffer32Bit_new"></a>

#### new exports.Buffer32Bit(name)

Creates a new Buffer32Bit object.

| Param | Type                | Description                       |
| ----- | ------------------- | --------------------------------- |
| name  | <code>String</code> | A name to identify the buffer by. |

<a name="module_Core.Buffer32Bit+NAME"></a>

#### buffer32Bit.NAME : <code>String</code>

A name to identify the buffer.

**Kind**: instance property of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
<a name="module_Core.Buffer32Bit+IS_EMPTY"></a>

#### buffer32Bit.IS_EMPTY : <code>number</code>

A code indicating whether the buffer is empty.

**Kind**: instance property of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
<a name="module_Core.Buffer32Bit+BUFFER"></a>

#### buffer32Bit.BUFFER : <code>DataView</code>

A DataView object representing the buffer.

**Kind**: instance property of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
<a name="module_Core.Buffer32Bit+read"></a>

#### buffer32Bit.read([byteOffset]) ⇒ <code>number</code>

Reads a 32-bit value from the buffer at the specified byte offset.

**Kind**: instance method of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
**Returns**: <code>number</code> - The 32-bit value read from the buffer.  
**Emits**: <code>event:ON_BUFFER_32_READ</code>

| Param        | Type                | Default        | Description                                 |
| ------------ | ------------------- | -------------- | ------------------------------------------- |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to read the value. |

<a name="module_Core.Buffer32Bit+write"></a>

#### buffer32Bit.write(val, [byteOffset]) ⇒ <code>number</code>

Writes a 32-bit value to the buffer at the specified byte offset.

**Kind**: instance method of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
**Returns**: <code>number</code> - The OK_CODE indicating success.  
**Emits**: <code>event:ON_BUFFER_32_WRITE</code>

| Param        | Type                | Default        | Description                                  |
| ------------ | ------------------- | -------------- | -------------------------------------------- |
| val          | <code>number</code> |                | The 32-bit value to write to the buffer.     |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to write the value. |

<a name="module_Core.Buffer32Bit+flush"></a>

#### buffer32Bit.flush() ⇒ <code>number</code>

Resets the buffer to all zeros.

**Kind**: instance method of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
**Returns**: <code>number</code> - The OK_CODE indicating success.  
**Emits**: <code>event:ON_BUFFER_32_WRITE</code>  
<a name="module_Core.Buffer32Bit+view"></a>

#### buffer32Bit.view() ⇒ <code>string</code>

Returns a string representation of the binary contents of the buffer.

**Kind**: instance method of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
**Returns**: <code>string</code> - A string representation of the binary contents of the buffer.  
<a name="module_Core.Buffer32Bit+Symbol.iterator"></a>

#### buffer32Bit.Symbol.iterator() ⇒ <code>Object</code>

An iterator function that allows the buffer to be iterated over with a `for-of` loop.

**Kind**: instance method of [<code>Buffer32Bit</code>](#module_Core.Buffer32Bit)  
**Returns**: <code>Object</code> - An object with a `next` method that returns an object with a `value` property
representing the current bit in the buffer as a binary string, and a `done` property
indicating whether the end of the buffer has been reached.  
<a name="module_Core.Bus"></a>

### Core.Bus

Represents a bus system that connects devices and allows them to communicate with each other.
It has three buffers for the address, data, and control signals, and can read and write data from and to devices.

**Kind**: static class of [<code>Core</code>](#module_Core)

- [.Bus](#module_Core.Bus)
  - [new exports.Bus(dev)](#new_module_Core.Bus_new)
  - [.DEVICES](#module_Core.Bus+DEVICES) : <code>Object</code>
  - [.A_BUS_BUFFER](#module_Core.Bus+A_BUS_BUFFER) : <code>Buffer32Bit</code>
  - [.C_BUS_BUFFER](#module_Core.Bus+C_BUS_BUFFER) : <code>Buffer32Bit</code>
  - [.D_BUS_BUFFER](#module_Core.Bus+D_BUS_BUFFER) : <code>Buffer32Bit</code>
  - [.setAddress(val)](#module_Core.Bus+setAddress)
  - [.setControl(val)](#module_Core.Bus+setControl)
  - [.setData(val)](#module_Core.Bus+setData)
  - [.getData()](#module_Core.Bus+getData) ⇒ <code>number</code>
  - [.view()](#module_Core.Bus+view) ⇒ <code>Object</code>
  - [.onTick()](#module_Core.Bus+onTick)

<a name="new_module_Core.Bus_new"></a>

#### new exports.Bus(dev)

Creates a new Bus instance.

| Param | Type                | Description                                            |
| ----- | ------------------- | ------------------------------------------------------ |
| dev   | <code>Object</code> | An object containing the devices connected to the bus. |

<a name="module_Core.Bus+DEVICES"></a>

#### bus.DEVICES : <code>Object</code>

An object containing the devices connected to the bus.

**Kind**: instance property of [<code>Bus</code>](#module_Core.Bus)  
<a name="module_Core.Bus+A_BUS_BUFFER"></a>

#### bus.A_BUS_BUFFER : <code>Buffer32Bit</code>

The ADDRESS-BUS buffer.

**Kind**: instance property of [<code>Bus</code>](#module_Core.Bus)  
<a name="module_Core.Bus+C_BUS_BUFFER"></a>

#### bus.C_BUS_BUFFER : <code>Buffer32Bit</code>

The CONTROL-BUS buffer.

**Kind**: instance property of [<code>Bus</code>](#module_Core.Bus)  
<a name="module_Core.Bus+D_BUS_BUFFER"></a>

#### bus.D_BUS_BUFFER : <code>Buffer32Bit</code>

The DATA-BUS buffer.

**Kind**: instance property of [<code>Bus</code>](#module_Core.Bus)  
<a name="module_Core.Bus+setAddress"></a>

#### bus.setAddress(val)

Sets the value of the ADDRESS-BUS buffer.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| val   | <code>number</code> | The value to set. |

<a name="module_Core.Bus+setControl"></a>

#### bus.setControl(val)

Sets the value of the CONTROL-BUS buffer.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| val   | <code>number</code> | The value to set. |

<a name="module_Core.Bus+setData"></a>

#### bus.setData(val)

Sets the value of the DATA-BUS buffer.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| val   | <code>number</code> | The value to set. |

<a name="module_Core.Bus+getData"></a>

#### bus.getData() ⇒ <code>number</code>

Returns the value of the data bus.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)  
**Returns**: <code>number</code> - The value of the data bus.  
<a name="module_Core.Bus+view"></a>

#### bus.view() ⇒ <code>Object</code>

Returns the values of the address, data, and control buses.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)  
**Returns**: <code>Object</code> - An object containing the values of the address, data, and control buses.  
<a name="module_Core.Bus+onTick"></a>

#### bus.onTick()

Handles bus transactions on each tick of the clock.
If the address bus buffer is not empty, it reads the device key and byte offset from the address bus buffer,
then determines the type of bus transaction based on the value in the control bus buffer.
If the transaction is a read operation, it reads the specified number of bytes from the device at the specified byte offset
and writes the data to the data bus buffer.
If the transaction is a write operation, it writes the data in the data bus buffer to the device at the specified byte offset.
If the transaction is an interrupt request, it logs a message indicating that interrupt handling is not yet implemented.
Finally, it flushes the address bus buffer.

**Kind**: instance method of [<code>Bus</code>](#module_Core.Bus)  
<a name="module_Core.Clk"></a>

### Core.Clk ⇐ <code>EventTarget</code>

Represents a system clock that can be started, stopped, paused, and resumed, and can have its speed changed.
It also has observers that can be registered to be notified of different clock cycles.

**Kind**: static class of [<code>Core</code>](#module_Core)  
**Extends**: <code>EventTarget</code>

- [.Clk](#module_Core.Clk) ⇐ <code>EventTarget</code>
  - [new exports.Clk()](#new_module_Core.Clk_new)
  - [.TICKER](#module_Core.Clk+TICKER) : <code>number</code>
  - [.CYCLE](#module_Core.Clk+CYCLE) : <code>number</code>
  - [.STATE](#module_Core.Clk+STATE) : <code>number</code>
  - [.SPEED](#module_Core.Clk+SPEED) : <code>number</code>
  - [.CYCLE_START_EVENTS](#module_Core.Clk+CYCLE_START_EVENTS)
  - [.CYCLE_END_EVENTS](#module_Core.Clk+CYCLE_END_EVENTS)
  - [.start()](#module_Core.Clk+start)
  - [.stop()](#module_Core.Clk+stop)
  - [.pause()](#module_Core.Clk+pause)
  - [.resume()](#module_Core.Clk+resume)
  - [.step()](#module_Core.Clk+step)
  - [.changeSpeed(val)](#module_Core.Clk+changeSpeed)

<a name="new_module_Core.Clk_new"></a>

#### new exports.Clk()

Creates a new Clk object.

<a name="module_Core.Clk+TICKER"></a>

#### clk.TICKER : <code>number</code>

The ID of the current interval timer, or null if the clock is not currently running.

**Kind**: instance property of [<code>Clk</code>](#module_Core.Clk)  
<a name="module_Core.Clk+CYCLE"></a>

#### clk.CYCLE : <code>number</code>

The current cycle of the clock.

**Kind**: instance property of [<code>Clk</code>](#module_Core.Clk)  
<a name="module_Core.Clk+STATE"></a>

#### clk.STATE : <code>number</code>

The current state of the clock.
Can be one of STOP_CLOCK_KEY, START_CLOCK_KEY, or PAUSE_CLOCK_KEY.

**Kind**: instance property of [<code>Clk</code>](#module_Core.Clk)  
**Default**: <code>STOP_CLOCK_KEY</code>  
<a name="module_Core.Clk+SPEED"></a>

#### clk.SPEED : <code>number</code>

The current speed of the clock in milliseconds.
Can be any positive number.

**Kind**: instance property of [<code>Clk</code>](#module_Core.Clk)  
**Default**: <code>NORMAL_CLOCK_SPEED</code>  
<a name="module_Core.Clk+CYCLE_START_EVENTS"></a>

#### clk.CYCLE_START_EVENTS

**Kind**: instance constant of [<code>Clk</code>](#module_Core.Clk)  
**Default**: <code>[&quot;ON_FETCH_CYCLE_START&quot;,&quot;ON_DECODE_CYCLE_START&quot;,&quot;ON_EXECUTE_CYCLE_START&quot;]</code>  
**Properties**

| Name               | Type               | Description                                                                      |
| ------------------ | ------------------ | -------------------------------------------------------------------------------- |
| CYCLE_START_EVENTS | <code>Array</code> | A list of constants representing the different start of cycles in the processor. |

<a name="module_Core.Clk+CYCLE_END_EVENTS"></a>

#### clk.CYCLE_END_EVENTS

**Kind**: instance constant of [<code>Clk</code>](#module_Core.Clk)  
**Default**: <code>[&quot;ON_FETCH_CYCLE_END&quot;,&quot;ON_DECODE_CYCLE_END&quot;,&quot;ON_EXECUTE_CYCLE_END&quot;]</code>  
**Properties**

| Name             | Type               | Description                                                                    |
| ---------------- | ------------------ | ------------------------------------------------------------------------------ |
| CYCLE_END_EVENTS | <code>Array</code> | A list of constants representing the different end of cycles in the processor. |

<a name="module_Core.Clk+start"></a>

#### clk.start()

Starts the system clock.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_START</code>  
<a name="module_Core.Clk+stop"></a>

#### clk.stop()

Stops the clock, resetting the counter and cycle to their default values, and sets the state to `STOP_CLOCK_KEY`.
If the clock is already stopped, this method does nothing.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_STOP when the clock is stopped</code>  
<a name="module_Core.Clk+pause"></a>

#### clk.pause()

Pauses the system clock. If the clock is already paused, this method has no effect.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_PAUSE when the clock is paused</code>  
<a name="module_Core.Clk+resume"></a>

#### clk.resume()

Resumes the clock if it is currently paused.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_RESUME when the clock is resumed</code>  
<a name="module_Core.Clk+step"></a>

#### clk.step()

Resumes the clock if it is currently paused and pause it after 3 clocks.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_RESUME when the clock is resumed</code>  
<a name="module_Core.Clk+changeSpeed"></a>

#### clk.changeSpeed(val)

Changes the speed of the clock.

**Kind**: instance method of [<code>Clk</code>](#module_Core.Clk)  
**Emits**: <code>event:ON_SPEED_CHANGE the clock speed is changed</code>

| Param | Type                | Description                                  |
| ----- | ------------------- | -------------------------------------------- |
| val   | <code>number</code> | The new speed of the clock, in milliseconds. |

<a name="module_Core.Cpu"></a>

### Core.Cpu

A class representing the Central Processing Unit (CPU) of a computer.

The Cpu class acts as a coordinator of different hardware components and
handles the fetch-decode-execute cycle.

**Kind**: static class of [<code>Core</code>](#module_Core)

- [.Cpu](#module_Core.Cpu)
  - [new exports.Cpu(parts)](#new_module_Core.Cpu_new)
  - [.run()](#module_Core.Cpu+run) ⇒ <code>Cpu</code>
  - [.spawn(pid)](#module_Core.Cpu+spawn) ⇒ <code>Cpu</code>
  - [.load(elf)](#module_Core.Cpu+load) ⇒ <code>Object</code>

<a name="new_module_Core.Cpu_new"></a>

#### new exports.Cpu(parts)

Creates an instance of Cpu.

| Param     | Type                | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| parts     | <code>Object</code> | The hardware components required by the CPU. |
| parts.alu | <code>ALU</code>    | The Arithmetic Logic Unit of the CPU.        |
| parts.dec | <code>DEC</code>    | The Instruction Decoder of the CPU.          |
| parts.bus | <code>BUS</code>    | The Data Bus of the CPU.                     |
| parts.reg | <code>REG</code>    | The Register Bank of the CPU.                |
| parts.mmu | <code>MMU</code>    | The Memory Management Unit of the CPU.       |
| parts.clk | <code>CLK</code>    | The Clock of the CPU.                        |

<a name="module_Core.Cpu+run"></a>

#### cpu.run() ⇒ <code>Cpu</code>

Start the fetch-decode-execute cycle.

**Kind**: instance method of [<code>Cpu</code>](#module_Core.Cpu)  
**Returns**: <code>Cpu</code> - The Cpu instance.  
<a name="module_Core.Cpu+spawn"></a>

#### cpu.spawn(pid) ⇒ <code>Cpu</code>

Spawn a process by initializing the Program Counter (PC) and Stack Pointer (SP).

**Kind**: instance method of [<code>Cpu</code>](#module_Core.Cpu)  
**Returns**: <code>Cpu</code> - The Cpu instance.

| Param | Type                | Description                             |
| ----- | ------------------- | --------------------------------------- |
| pid   | <code>number</code> | The Process ID of the process to spawn. |

<a name="module_Core.Cpu+load"></a>

#### cpu.load(elf) ⇒ <code>Object</code>

Load an Executable and Linkable Format (ELF) file into memory.

**Kind**: instance method of [<code>Cpu</code>](#module_Core.Cpu)  
**Returns**: <code>Object</code> - The loaded ELF file with additional properties (pid, envUUUID, textUUUID, initDataUUID, bssUUID).

| Param               | Type                | Description                                                         |
| ------------------- | ------------------- | ------------------------------------------------------------------- |
| elf                 | <code>Object</code> | The ELF file to be loaded.                                          |
| elf.procSize        | <code>number</code> | The size of the process.                                            |
| elf.envSize         | <code>number</code> | The size of the environment section of the ELF file.                |
| elf.envContent      | <code>Array</code>  | The content of the environment section of the ELF file.             |
| elf.textSize        | <code>number</code> | The size of the text section of the ELF file.                       |
| elf.textContent     | <code>Array</code>  | The content of the text section of the ELF file.                    |
| elf.initDataSize    | <code>number</code> | The size of the initialized data section of the ELF file.           |
| elf.initDataContent | <code>Array</code>  | The content of the initialized data section of the ELF file.        |
| elf.bssSize         | <code>number</code> | The size of the block started by symbol section of the ELF file.    |
| elf.bssContent      | <code>Array</code>  | The content of the block started by symbol section of the ELF file. |

<a name="module_Core.Mmu"></a>

### Core.Mmu

Represents a virtual memory management unit (MMU).

**Kind**: static class of [<code>Core</code>](#module_Core)

- [.Mmu](#module_Core.Mmu)
  - [new exports.Mmu()](#new_module_Core.Mmu_new)
  - [.PROCESSES](#module_Core.Mmu+PROCESSES) : <code>Map.&lt;number, Process&gt;</code>
  - [.conn2bus(bus)](#module_Core.Mmu+conn2bus)
  - [.processAlloc(size)](#module_Core.Mmu+processAlloc) ⇒ <code>number</code>
  - [.for(pid)](#module_Core.Mmu+for) ⇒ <code>Process</code> \| <code>null</code>
  - [.malloc(pid, section, size, content)](#module_Core.Mmu+malloc) ⇒ <code>Array.&lt;number&gt;</code>
  - [.translate(virtualAddress)](#module_Core.Mmu+translate) ⇒ <code>number</code>

<a name="new_module_Core.Mmu_new"></a>

#### new exports.Mmu()

Creates an instance of the Mmu class.

<a name="module_Core.Mmu+PROCESSES"></a>

#### mmu.PROCESSES : <code>Map.&lt;number, Process&gt;</code>

Map of processes, with process ID as the key and Process instances as values.

**Kind**: instance property of [<code>Mmu</code>](#module_Core.Mmu)  
<a name="module_Core.Mmu+conn2bus"></a>

#### mmu.conn2bus(bus)

Connects the MMU to a bus.

**Kind**: instance method of [<code>Mmu</code>](#module_Core.Mmu)

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| bus   | <code>object</code> | The bus object. |

<a name="module_Core.Mmu+processAlloc"></a>

#### mmu.processAlloc(size) ⇒ <code>number</code>

Allocates memory for a new process and assigns page memory that maps to physical memory frame.

**Kind**: instance method of [<code>Mmu</code>](#module_Core.Mmu)  
**Returns**: <code>number</code> - - The process ID.

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| size  | <code>number</code> | The size of the process. |

<a name="module_Core.Mmu+for"></a>

#### mmu.for(pid) ⇒ <code>Process</code> \| <code>null</code>

Returns the process instance given the process ID.

**Kind**: instance method of [<code>Mmu</code>](#module_Core.Mmu)  
**Returns**: <code>Process</code> \| <code>null</code> - - The process instance, or null if not found.

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| pid   | <code>number</code> | The process ID. |

<a name="module_Core.Mmu+malloc"></a>

#### mmu.malloc(pid, section, size, content) ⇒ <code>Array.&lt;number&gt;</code>

Allocates a section for a process and packs content into the allocated section.

**Kind**: instance method of [<code>Mmu</code>](#module_Core.Mmu)  
**Returns**: <code>Array.&lt;number&gt;</code> - - An array of checksums for each packed entry.

| Param   | Type                              | Description                           |
| ------- | --------------------------------- | ------------------------------------- |
| pid     | <code>number</code>               | The process ID.                       |
| section | <code>string</code>               | The section to allocate.              |
| size    | <code>number</code>               | The size of the section.              |
| content | <code>Array.&lt;number&gt;</code> | The content to pack into the section. |

<a name="module_Core.Mmu+translate"></a>

#### mmu.translate(virtualAddress) ⇒ <code>number</code>

Translates a virtual page address to a physical frame address.

**Kind**: instance method of [<code>Mmu</code>](#module_Core.Mmu)  
**Returns**: <code>number</code> - - The physical frame address.

| Param          | Type                | Description               |
| -------------- | ------------------- | ------------------------- |
| virtualAddress | <code>number</code> | The virtual page address. |

<a name="module_Core.Process"></a>

### Core.Process

Represents a process.

**Kind**: static class of [<code>Core</code>](#module_Core)

- [.Process](#module_Core.Process)
  - [new exports.Process(pid, startAddr, endAddr)](#new_module_Core.Process_new)
  - [.PID](#module_Core.Process+PID) : <code>number</code>
  - [.PROC_START_ADDRESS](#module_Core.Process+PROC_START_ADDRESS) : <code>number</code>
  - [.PROC_END_ADDRESS](#module_Core.Process+PROC_END_ADDRESS) : <code>number</code>
  - [.set(section, size)](#module_Core.Process+set) ⇒ <code>number</code>

<a name="new_module_Core.Process_new"></a>

#### new exports.Process(pid, startAddr, endAddr)

Creates an instance of the Process class.
start and end byte are inclusive

| Param     | Type                | Description                       |
| --------- | ------------------- | --------------------------------- |
| pid       | <code>number</code> | The process ID.                   |
| startAddr | <code>number</code> | The start address of the process. |
| endAddr   | <code>number</code> | The end address of the process.   |

<a name="module_Core.Process+PID"></a>

#### process.PID : <code>number</code>

The process ID.

**Kind**: instance property of [<code>Process</code>](#module_Core.Process)  
<a name="module_Core.Process+PROC_START_ADDRESS"></a>

#### process.PROC_START_ADDRESS : <code>number</code>

The start address of the process.

**Kind**: instance property of [<code>Process</code>](#module_Core.Process)  
<a name="module_Core.Process+PROC_END_ADDRESS"></a>

#### process.PROC_END_ADDRESS : <code>number</code>

The end address of the process.

**Kind**: instance property of [<code>Process</code>](#module_Core.Process)  
<a name="module_Core.Process+set"></a>

#### process.set(section, size) ⇒ <code>number</code>

Sets the specified section and returns the start address.

**Kind**: instance method of [<code>Process</code>](#module_Core.Process)  
**Returns**: <code>number</code> - - The start address of the section.

| Param   | Type                | Description                                                                                                                                        |
| ------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| section | <code>string</code> | The section to set. Must be one of the section constants (BSS_SECTION, ENV_SECTION, HEAP_SECTION, INIT_DATA_SECTION, STACK_SECTION, TEXT_SECTION). |
| size    | <code>number</code> | The size of the section.                                                                                                                           |

<a name="module_Core.Ram"></a>

### Core.Ram ⇐ <code>EventTarget</code>

A class representing a memory buffer that can be read and written to.

**Kind**: static class of [<code>Core</code>](#module_Core)  
**Extends**: <code>EventTarget</code>

- [.Ram](#module_Core.Ram) ⇐ <code>EventTarget</code>
  - [new exports.Ram()](#new_module_Core.Ram_new)
  - [.read8([byteOffset])](#module_Core.Ram+read8) ⇒ <code>number</code>
  - [.read16([byteOffset])](#module_Core.Ram+read16) ⇒ <code>number</code>
  - [.read32([byteOffset])](#module_Core.Ram+read32) ⇒ <code>number</code>
  - [.write8(val, [byteOffset])](#module_Core.Ram+write8) ⇒ <code>number</code>
  - [.write16(val, [byteOffset])](#module_Core.Ram+write16) ⇒ <code>number</code>
  - [.write32(val, [byteOffset])](#module_Core.Ram+write32) ⇒ <code>number</code>
  - [.getByteLength()](#module_Core.Ram+getByteLength) ⇒ <code>number</code>
  - [.view()](#module_Core.Ram+view) ⇒ <code>Array.&lt;string&gt;</code>
  - [.Symbol.iterator()](#module_Core.Ram+Symbol.iterator) ⇒ <code>Object</code>

<a name="new_module_Core.Ram_new"></a>

#### new exports.Ram()

Creates a new Ram object.

<a name="module_Core.Ram+read8"></a>

#### ram.read8([byteOffset]) ⇒ <code>number</code>

Reads an 8-bit value from the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The 8-bit value read from the memory buffer.  
**Emits**: <code>event:ON_RAM_READ</code>

| Param        | Type                | Default        | Description                                 |
| ------------ | ------------------- | -------------- | ------------------------------------------- |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to read the value. |

<a name="module_Core.Ram+read16"></a>

#### ram.read16([byteOffset]) ⇒ <code>number</code>

Reads a 16-bit value from the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The 16-bit value read from the memory buffer.  
**Emits**: <code>event:ON_RAM_READ</code>

| Param        | Type                | Default        | Description                                 |
| ------------ | ------------------- | -------------- | ------------------------------------------- |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to read the value. |

<a name="module_Core.Ram+read32"></a>

#### ram.read32([byteOffset]) ⇒ <code>number</code>

Reads a 32-bit value from the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The 32-bit value read from the memory buffer.  
**Emits**: <code>event:ON_RAM_READ</code>

| Param        | Type                | Default        | Description                                 |
| ------------ | ------------------- | -------------- | ------------------------------------------- |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to read the value. |

<a name="module_Core.Ram+write8"></a>

#### ram.write8(val, [byteOffset]) ⇒ <code>number</code>

Writes an 8-bit value to the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The OK_CODE indicating success.  
**Emits**: <code>event:ON_RAM_WRITE</code>

| Param        | Type                | Default        | Description                                    |
| ------------ | ------------------- | -------------- | ---------------------------------------------- |
| val          | <code>number</code> |                | The 8-bit value to write to the memory buffer. |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to write the value.   |

<a name="module_Core.Ram+write16"></a>

#### ram.write16(val, [byteOffset]) ⇒ <code>number</code>

Writes a 16-bit value to the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The OK_CODE indicating success.  
**Emits**: <code>event:ON_RAM_WRITE</code>

| Param        | Type                | Default        | Description                                     |
| ------------ | ------------------- | -------------- | ----------------------------------------------- |
| val          | <code>number</code> |                | The 16-bit value to write to the memory buffer. |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to write the value.    |

<a name="module_Core.Ram+write32"></a>

#### ram.write32(val, [byteOffset]) ⇒ <code>number</code>

Writes a 32-bit value to the memory buffer at the specified byte offset.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The OK_CODE indicating success.  
**Emits**: <code>event:ON_RAM_WRITE</code>

| Param        | Type                | Default        | Description                                     |
| ------------ | ------------------- | -------------- | ----------------------------------------------- |
| val          | <code>number</code> |                | The 32-bit value to write to the memory buffer. |
| [byteOffset] | <code>number</code> | <code>0</code> | The byte offset at which to write the value.    |

<a name="module_Core.Ram+getByteLength"></a>

#### ram.getByteLength() ⇒ <code>number</code>

Returns the length of the memory buffer in bytes.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>number</code> - The length of the memory buffer in bytes.  
<a name="module_Core.Ram+view"></a>

#### ram.view() ⇒ <code>Array.&lt;string&gt;</code>

Returns an array containing the binary representation of each byte in the memory buffer.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>Array.&lt;string&gt;</code> - An array containing the binary representation of each byte in the memory buffer.  
<a name="module_Core.Ram+Symbol.iterator"></a>

#### ram.Symbol.iterator() ⇒ <code>Object</code>

An iterator function that allows the memory buffer to be iterated over with a `for-of` loop.

**Kind**: instance method of [<code>Ram</code>](#module_Core.Ram)  
**Returns**: <code>Object</code> - An object with a `next` method that returns an object with a `value` property
representing the current byte in the memory buffer as a binary string, and a `done` property
indicating whether the end of the memory buffer has been reached.  
<a name="module_Core.Reg"></a>

### Core.Reg ⇐ <code>EventTarget</code>

A class representing a set of registers in a processor.

**Kind**: static class of [<code>Core</code>](#module_Core)  
**Extends**: <code>EventTarget</code>

- [.Reg](#module_Core.Reg) ⇐ <code>EventTarget</code>
  - [new exports.Reg()](#new_module_Core.Reg_new)
  - [.r1](#module_Core.Reg+r1) ⇒ <code>Buffer32Bit</code>
  - [.r2](#module_Core.Reg+r2) ⇒ <code>Buffer32Bit</code>
  - [.r3](#module_Core.Reg+r3) ⇒ <code>Buffer32Bit</code>
  - [.r4](#module_Core.Reg+r4) ⇒ <code>Buffer32Bit</code>
  - [.r5](#module_Core.Reg+r5) ⇒ <code>Buffer32Bit</code>
  - [.r6](#module_Core.Reg+r6) ⇒ <code>Buffer32Bit</code>
  - [.r7](#module_Core.Reg+r7) ⇒ <code>Buffer32Bit</code>
  - [.r8](#module_Core.Reg+r8) ⇒ <code>Buffer32Bit</code>
  - [.r9](#module_Core.Reg+r9) ⇒ <code>Buffer32Bit</code>
  - [.r10](#module_Core.Reg+r10) ⇒ <code>Buffer32Bit</code>
  - [.r11](#module_Core.Reg+r11) ⇒ <code>Buffer32Bit</code>
  - [.r12](#module_Core.Reg+r12) ⇒ <code>Buffer32Bit</code>
  - [.sp](#module_Core.Reg+sp) ⇒ <code>Buffer32Bit</code>
  - [.lr](#module_Core.Reg+lr) ⇒ <code>Buffer32Bit</code>
  - [.pc](#module_Core.Reg+pc) ⇒ <code>Buffer32Bit</code>
  - [.cpsr](#module_Core.Reg+cpsr) ⇒ <code>Buffer32Bit</code>
  - [.Symbol.iterator()](#module_Core.Reg+Symbol.iterator) ⇒ <code>Object</code>

<a name="new_module_Core.Reg_new"></a>

#### new exports.Reg()

Creates a new set of registers.

<a name="module_Core.Reg+r1"></a>

#### reg.r1 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r1 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r2"></a>

#### reg.r2 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r2 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r3"></a>

#### reg.r3 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r3 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r4"></a>

#### reg.r4 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r4 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r5"></a>

#### reg.r5 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r5 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r6"></a>

#### reg.r6 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r6 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r7"></a>

#### reg.r7 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r7 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r8"></a>

#### reg.r8 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r8 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r9"></a>

#### reg.r9 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r9 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r10"></a>

#### reg.r10 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r10 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r11"></a>

#### reg.r11 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r11 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+r12"></a>

#### reg.r12 ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r12 general-purpose register. Can be used for any purpose.  
<a name="module_Core.Reg+sp"></a>

#### reg.sp ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r13 stack pointer register. Points to the top of the stack.[alias SP]  
<a name="module_Core.Reg+lr"></a>

#### reg.lr ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r14 link register. Stores the return address for function calls.[alias LR]  
<a name="module_Core.Reg+pc"></a>

#### reg.pc ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The r15 program counter register. Stores the address of the current instruction.[alias PC]  
<a name="module_Core.Reg+cpsr"></a>

#### reg.cpsr ⇒ <code>Buffer32Bit</code>

**Kind**: instance property of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Buffer32Bit</code> - The current program status register.
Stores the current status of the processor, such as the current processor mode and condition flags.  
<a name="module_Core.Reg+Symbol.iterator"></a>

#### reg.Symbol.iterator() ⇒ <code>Object</code>

Allows an instance of Reg class(this) to be used in a for...of loop returning one of the
registers in each iteration.

**Kind**: instance method of [<code>Reg</code>](#module_Core.Reg)  
**Returns**: <code>Object</code> - An object conforming to the iterator protocol with a `next` method.
The `next` method returns an object with two properties: `value` and `done`.
The `value` property represents the next value in the iteration.
The `done` property is a boolean indicating if the iteration has finished.  
<a name="module_Core"></a>
