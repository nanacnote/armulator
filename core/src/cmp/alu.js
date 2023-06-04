import {
  convertToSignedIntTwoComplement,
  countLeadingZeros,
  expandImmediate,
  expandImmediateWithCarry,
  extractBits,
  fletcher16,
  setBit,
} from "../lib/utils.js";
import { MNEM, ON_ALU_EXECUTE } from "../lib/def.js";

/**
 * @module Core
 */

/**
 * Represents an arithmetic logic unit (ALU).
 * @extends {EventTarget}
 */
export class Alu extends EventTarget {
  /**
   * Creates an instance of the Alu class.
   */
  constructor() {
    super();
  }

  /**
   * Connects the ALU to a register.
   * @param {object} reg - The register object.
   */
  conn2reg(reg) {
    this.REG = reg;
    this.REGS = [...this.REG];
    this.CPSR = this.REGS[this.REGS.length - 1];
  }

  /**
   * Calls the ALU to execute an opcode.
   * @param {object} options - The options for the call.
   * @param {number} options.pid - The process ID.
   * @param {number} options.routine - The routine.
   * @param {number} options.instruction - The instruction.
   * @param {number} options.virtualAddress - The virtual address.
   */
  call({ pid, routine, instruction, virtualAddress }) {
    if (routine && this[routine]) {
      this[routine].call(this, instruction);
      this.dispatchEvent(
        new CustomEvent(ON_ALU_EXECUTE, {
          detail: {
            pid,
            instruction,
            virtualAddress,
            checkSum: fletcher16(`${pid}-${instruction}-${virtualAddress}`),
          },
        })
      );
      console.log(
        `Executed Routine - ${routine.toString()} - ${instruction.toString(
          16
        )}\n\n`
      );
    } else {
      console.log(
        `%c Unsupported Instruction - ${instruction.toString(16)}\n\n`,
        "background: black; color: white"
      );
    }
  }

  /**
   * Prints a formatted output for development debugging purposes.
   * @param {number} destReg - Destination register index.
   * @param {number} op1 - Operand 1.
   * @param {number} op2 - Operand 2.
   * @param {string} operator - Operator symbol.
   * @private
   */
  _inspectRoutine(destReg, op1, op2, operator) {
    const _op1 = op1.toString(2);
    const _op2 = op2.toString(2);
    const _dest = this.REGS[destReg].read().toString(2);
    const zeroPadLen = Math.max(_op1.length, _op2.length);
    const operatorPadLen = operator.length + zeroPadLen + 1;
    console.log(
      `${_op1
        .padStart(zeroPadLen, "0")
        .padStart(
          operatorPadLen,
          " "
        )}  ==>  ${op1}\n${operator} ${_op2.padStart(
        zeroPadLen,
        "0"
      )}  ==>  ${op2}\n${""
        .padStart(zeroPadLen, "=")
        .padStart(operatorPadLen, " ")}\n${_dest
        .padStart(zeroPadLen, "0")
        .padStart(operatorPadLen, " ")}  ==>  ${
        this.CPSR.N
          ? convertToSignedIntTwoComplement(this.CPSR.N + _dest)
          : parseInt(_dest, 2)
      }\n${""
        .padStart(zeroPadLen, "=")
        .padStart(operatorPadLen, " ")}\n\nCPSR\n-----\nN - ${
        this.CPSR.N
      }\nZ - ${this.CPSR.Z}\nC - ${this.CPSR.C}\nV - ${this.CPSR.V}`
    );
  }

  [MNEM.MUL_MULS](instruction) {
    const rd = extractBits(instruction, 16, 4);
    const rn = extractBits(instruction, 0, 4);
    const rm = extractBits(instruction, 8, 4);
    const setflags = extractBits(instruction, 20, 1);
    const result = this.REGS[rn].read() * this.REGS[rm].read();
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(result, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
    }
  }

  [MNEM.BX](instruction) {
    const rm = extractBits(instruction, 0, 4);
    const target = this.REGS[rm].read();
    this.REG.pc.write(target);
  }

  [MNEM.BLX_REG](instruction) {
    const rm = extractBits(instruction, 0, 4);
    const target = this.REGS[rm].read();
    this.REG.lr.write(this.REG.pc.read() + 4);
    this.REG.pc.write(target);
  }

  [MNEM.CLZ](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rm = extractBits(instruction, 0, 4);
    const result = countLeadingZeros(this.REGS[rm].read());
    this.REGS[rd].write(result);
  }

  [MNEM.AND_ANDS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const { imm32, carryOut } = expandImmediateWithCarry(imm12, this.CPSR.C);
    const result = this.REGS[rn].read() & imm32;
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(result, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = carryOut;
    }
  }

  [MNEM.EOR_EORS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const { imm32, carryOut } = expandImmediateWithCarry(imm12, this.CPSR.C);
    const result = this.REGS[rn].read() ^ imm32;
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(result, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = carryOut;
    }
  }

  [MNEM.SUB_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REGS[rn].read() + ~imm32 + 1;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
  }

  [MNEM.SUB_IMD_SP](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REG.sp.read() + ~imm32 + 1;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
  }

  [MNEM.SUBS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REGS[rn].read() + ~imm32 + 1;
    const signedSum =
      convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      ~convertToSignedIntTwoComplement(imm32.toString(2)) +
      1;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    this.CPSR.N = extractBits(signedSum, 31, 1);
    this.CPSR.Z = result === 0 ? 1 : 0;
    this.CPSR.C = result === unsignedSum ? 0 : 1;
    this.CPSR.V =
      convertToSignedIntTwoComplement(result.toString(2)) === signedSum ? 0 : 1;
  }

  [MNEM.SUBS_IMD_SP](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REG.sp.read() + ~imm32 + 1;
    const signedSum =
      convertToSignedIntTwoComplement(this.REG.sp.view()) +
      ~convertToSignedIntTwoComplement(imm32.toString(2)) +
      1;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    this.CPSR.N = extractBits(signedSum, 31, 1);
    this.CPSR.Z = result === 0 ? 1 : 0;
    this.CPSR.C = result === unsignedSum ? 0 : 1;
    this.CPSR.V =
      convertToSignedIntTwoComplement(result.toString(2)) === signedSum ? 0 : 1;
  }

  [MNEM.RSB_RSBS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = ~this.REGS[rn].read() + imm32 + 1;
    const signedSum =
      ~convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      convertToSignedIntTwoComplement(imm32.toString(2)) +
      1;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(signedSum, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = result === unsignedSum ? 0 : 1;
      this.CPSR.V =
        convertToSignedIntTwoComplement(result.toString(2)) === signedSum
          ? 0
          : 1;
    }
  }

  [MNEM.ADD_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REGS[rn].read() + imm32;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
  }

  [MNEM.ADD_IMD_SP](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REG.sp.read() + imm32;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
  }

  [MNEM.ADDS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REGS[rn].read() + imm32;
    const signedSum =
      convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      convertToSignedIntTwoComplement(imm32.toString(2));
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    this.CPSR.N = extractBits(signedSum, 31, 1);
    this.CPSR.Z = result === 0 ? 1 : 0;
    this.CPSR.C = result === unsignedSum ? 0 : 1;
    this.CPSR.V =
      convertToSignedIntTwoComplement(result.toString(2)) === signedSum ? 0 : 1;
  }

  [MNEM.ADDS_IMD_SP](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REG.sp.read() + imm32;
    const signedSum =
      convertToSignedIntTwoComplement(this.REG.sp.view()) +
      convertToSignedIntTwoComplement(imm32.toString(2));
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    this.CPSR.N = extractBits(signedSum, 31, 1);
    this.CPSR.Z = result === 0 ? 1 : 0;
    this.CPSR.C = result === unsignedSum ? 0 : 1;
    this.CPSR.V =
      convertToSignedIntTwoComplement(result.toString(2)) === signedSum ? 0 : 1;
  }

  [MNEM.ADC_ADCS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const imm32 = expandImmediate(imm12);
    const unsignedSum = this.REGS[rn].read() + imm32 + this.CPSR.C;
    const signedSum =
      convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      convertToSignedIntTwoComplement(imm32.toString(2)) +
      this.CPSR.C;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(signedSum, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = result === unsignedSum ? 0 : 1;
      this.CPSR.V =
        convertToSignedIntTwoComplement(result.toString(2)) === signedSum
          ? 0
          : 1;
    }
  }

  [MNEM.SBC_SBCS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const imm32 = expandImmediate(imm12);
    const notCarry = this.CPSR.C ? 0 : 1; // unclear from ARM Manual if this should be NOT(this.CPSR.C)
    const unsignedSum = this.REGS[rn].read() + ~imm32 + notCarry;
    const signedSum =
      convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      ~convertToSignedIntTwoComplement(imm32.toString(2)) +
      notCarry;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(signedSum, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = result === unsignedSum ? 0 : 1;
      this.CPSR.V =
        convertToSignedIntTwoComplement(result.toString(2)) === signedSum
          ? 0
          : 1;
    }
  }

  [MNEM.RSC_RSCS_IMD](instruction) {
    const rd = extractBits(instruction, 12, 4);
    const rn = extractBits(instruction, 16, 4);
    const imm12 = extractBits(instruction, 0, 12);
    const setflags = extractBits(instruction, 20, 1);
    const imm32 = expandImmediate(imm12);
    const notCarry = this.CPSR.C ? 0 : 1; // unclear from ARM Manual if this should be NOT(this.CPSR.C)
    const unsignedSum = ~this.REGS[rn].read() + imm32 + notCarry;
    const signedSum =
      ~convertToSignedIntTwoComplement(this.REGS[rn].view()) +
      convertToSignedIntTwoComplement(imm32.toString(2)) +
      notCarry;
    const result = extractBits(unsignedSum, 0, 31);
    // TODO: raise ALUExceptionReturn(result) if destination === pc and setflags
    this.REGS[rd].write(result);
    if (setflags) {
      this.CPSR.N = extractBits(signedSum, 31, 1);
      this.CPSR.Z = result === 0 ? 1 : 0;
      this.CPSR.C = result === unsignedSum ? 0 : 1;
      this.CPSR.V =
        convertToSignedIntTwoComplement(result.toString(2)) === signedSum
          ? 0
          : 1;
    }
  }
}
