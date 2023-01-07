!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 14));
})([
  function (e, t, n) {
    'use strict';
    e.exports = n(15);
  },
  function (e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      'use strict';
      var n = {}.hasOwnProperty;
      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var o = typeof r;
            if ('string' === o || 'number' === o) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var a = i.apply(null, r);
              a && e.push(a);
            } else if ('object' === o)
              for (var l in r) n.call(r, l) && r[l] && e.push(l);
          }
        }
        return e.join(' ');
      }
      e.exports
        ? ((i.default = i), (e.exports = i))
        : void 0 ===
            (r = function () {
              return i;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return l;
    }),
      n.d(t, 'c', function () {
        return p;
      }),
      n.d(t, 'a', function () {
        return g;
      }),
      n.d(t, 'b', function () {
        return F;
      });
    var r = n(0),
      i = n.n(r),
      o = n(9),
      a = n.n(o);
    var l = function (e) {
        var t = e.header,
          n = e.body,
          o = e.footer,
          l = Object(r.useRef)(null);
        return (
          (function (e) {
            var t = function () {
              var t = 500,
                n = 1200,
                r = 12,
                i = 20,
                o = 30,
                l = a()(e.current),
                u = l.width(),
                s = (u > n ? n : u < t ? t : u) / o,
                c = s > i ? i : s < r ? r : s;
              l.css('font-size', c + 'px');
            };
            Object(r.useEffect)(function () {
              return (
                e && t(),
                window.addEventListener('resize', t),
                function () {
                  window.removeEventListener('resize', t);
                }
              );
            }, []);
          })(l),
          i.a.createElement(
            'div',
            {
              className:
                'min-h-screen bg-black text-white flex flex-col justify-between',
              ref: l
            },
            t,
            n,
            o
          )
        );
      },
      u = n(10),
      s = n.n(u),
      c = n(1),
      f = n.n(c),
      d = n(5),
      p = function () {
        return i.a.createElement(
          'div',
          { className: f()(s.a.container, 'w-full') },
          i.a.createElement(
            'div',
            { className: '' },
            i.a.createElement(
              'button',
              {
                className:
                  'w-40 bg-transparent hover:bg-gray-900 text-white font-bold py-2 px-4'
              },
              d.name
            )
          ),
          i.a.createElement('hr', null)
        );
      },
      h = n(11),
      m = n.n(h),
      g = function () {
        return i.a.createElement('div', {
          className: f()(m.a.container, 'flex justify-center overflow-hidden')
        });
      },
      v = n(12),
      y = n.n(v);
    function b(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = e[Symbol.iterator]();
              !(r = (a = l.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        x(e, t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function w(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return T(e);
        })(e) ||
        (function (e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        x(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function x(e, t) {
      if (e) {
        if ('string' == typeof e) return T(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? T(e, t)
            : void 0
        );
      }
    }
    function T(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function _(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function k(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function E(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function S(e, t, n) {
      return t && E(e.prototype, t), n && E(e, n), e;
    }
    var C = (function () {
        function e() {
          var t;
          k(this, e),
            (this.OBSERVERS =
              (_((t = {}), 0, []), _(t, 1, []), _(t, 2, []), t)),
            (this.TICKER = null),
            (this.COUNTER = 0),
            (this.CYCLE = 0),
            (this.STATE = 0),
            (this.SPEED = 50),
            (this._trigger_observers = this._trigger_observers.bind(this));
        }
        return (
          S(e, [
            {
              key: 'addObserver',
              value: function (e, t) {
                var n;
                (n = this.OBSERVERS[e]).push.apply(
                  n,
                  w(Array.isArray(t) ? t : [t])
                );
              }
            },
            {
              key: 'start',
              value: function () {
                (this.STATE = 1),
                  (this.TICKER = setInterval(
                    this._trigger_observers,
                    this.SPEED
                  ));
              }
            },
            {
              key: 'stop',
              value: function () {
                this.TICKER && clearInterval(this.TICKER),
                  (this.COUNTER = 0),
                  (this.CYCLE = 0),
                  (this.STATE = 0);
              }
            },
            {
              key: 'pause',
              value: function () {
                this.TICKER && clearInterval(this.TICKER), (this.STATE = 2);
              }
            },
            {
              key: 'resume',
              value: function () {
                (this.STATE = 1),
                  (this.TICKER = setInterval(
                    this._trigger_observers,
                    this.SPEED
                  ));
              }
            },
            {
              key: 'changeSpeed',
              value: function (e) {
                (this.SPEED = e), this.pause(), this.resume();
              }
            },
            {
              key: '_trigger_observers',
              value: function () {
                for (
                  var e = this.OBSERVERS[this.CYCLE], t = 0, n = e.length;
                  t < n;
                  t++
                )
                  e[t].call();
                1 == this.STATE &&
                  (this.COUNTER++, (this.CYCLE = this.COUNTER % 3));
              }
            }
          ]),
          e
        );
      })(),
      N = (function () {
        function e() {
          k(this, e),
            (this.START_ADDRESS = 0),
            (this.BUFFER = new DataView(
              new ArrayBuffer(2097152),
              this.START_ADDRESS
            ));
        }
        return (
          S(e, [
            {
              key: 'read8',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return this.BUFFER.getUint8(e);
              }
            },
            {
              key: 'read16',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return this.BUFFER.getUint16(e);
              }
            },
            {
              key: 'read32',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return this.BUFFER.getUint32(e);
              }
            },
            {
              key: 'write8',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return this.BUFFER.setUint8(t, e), 1;
              }
            },
            {
              key: 'write16',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return this.BUFFER.setUint16(t, e), 1;
              }
            },
            {
              key: 'write32',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return this.BUFFER.setUint32(t, e), 1;
              }
            },
            {
              key: 'view',
              value: function () {
                return w(this);
              }
            },
            {
              key: Symbol.iterator,
              value: function () {
                var e = this,
                  t = 0;
                return {
                  next: function () {
                    if (t < 2097152) {
                      var n = e.BUFFER.getUint8(t).toString(2),
                        r = '00000000'.substring(n.length) + n;
                      return (
                        t++,
                        {
                          value: r.split('').map(function (e) {
                            return +e;
                          }),
                          done: !1
                        }
                      );
                    }
                    return { done: !0 };
                  }
                };
              }
            }
          ]),
          e
        );
      })(),
      R = (function () {
        function e() {
          k(this, e),
            (this.IS_EMPTY = 1),
            (this.BUFFER = new DataView(new ArrayBuffer(4)));
        }
        return (
          S(e, [
            {
              key: 'read',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return this.BUFFER.getUint32(e);
              }
            },
            {
              key: 'write',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return this.BUFFER.setUint32(t, e), (this.IS_EMPTY = 0), 1;
              }
            },
            {
              key: 'flush',
              value: function () {
                return this.BUFFER.setUint32(0, 0), (this.IS_EMPTY = 1), 1;
              }
            },
            {
              key: 'view',
              value: function () {
                return w(this);
              }
            },
            {
              key: Symbol.iterator,
              value: function () {
                var e = this.BUFFER.getUint32(0).toString(2),
                  t =
                    '00000000000000000000000000000000'.substring(e.length) + e,
                  n = 0;
                return {
                  next: function () {
                    return n < t.length
                      ? { value: +t[n++], done: !1 }
                      : { done: !0 };
                  }
                };
              }
            }
          ]),
          e
        );
      })(),
      P = (function () {
        function e(t) {
          k(this, e),
            (this.DEVICES = t),
            (this.A_BUS_BUFFER = new R()),
            (this.D_BUS_BUFFER = new R()),
            (this.C_BUS_BUFFER = new R()),
            (this.onTick = this.onTick.bind(this));
        }
        return (
          S(e, [
            {
              key: 'setAddress',
              value: function (e) {
                this.A_BUS_BUFFER.write(e);
              }
            },
            {
              key: 'setData',
              value: function (e) {
                this.D_BUS_BUFFER.write(e);
              }
            },
            {
              key: 'getData',
              value: function () {
                var e = this.D_BUS_BUFFER.read();
                return this.D_BUS_BUFFER.flush(), e;
              }
            },
            {
              key: 'setControl',
              value: function (e) {
                this.C_BUS_BUFFER.write(e);
              }
            },
            {
              key: 'view',
              value: function () {
                return {
                  address: this.A_BUS_BUFFER.view(),
                  data: this.D_BUS_BUFFER.view(),
                  control: this.C_BUS_BUFFER.view()
                };
              }
            },
            {
              key: 'onTick',
              value: function () {
                if (!this.A_BUS_BUFFER.IS_EMPTY) {
                  var e = this.DEVICES[4278190080 & this.A_BUS_BUFFER.read()],
                    t = 16777216 ^ this.A_BUS_BUFFER.read();
                  65536 ^ this.C_BUS_BUFFER.read() ||
                    this.D_BUS_BUFFER.write(e.read8(t)),
                    131072 ^ this.C_BUS_BUFFER.read() ||
                      this.D_BUS_BUFFER.write(e.read16(t)),
                    196608 ^ this.C_BUS_BUFFER.read() ||
                      this.D_BUS_BUFFER.write(e.read32(t)),
                    256 ^ this.C_BUS_BUFFER.read() ||
                      e.write8(this.D_BUS_BUFFER.read(), t),
                    512 ^ this.C_BUS_BUFFER.read() ||
                      e.write16(this.D_BUS_BUFFER.read(), t),
                    768 ^ this.C_BUS_BUFFER.read() ||
                      e.write32(this.D_BUS_BUFFER.read(), t),
                    1 ^ this.C_BUS_BUFFER.read() ||
                      console.log('TODO: handle interrupt signals here'),
                    this.A_BUS_BUFFER.flush();
                }
              }
            }
          ]),
          e
        );
      })(),
      D = (function () {
        function e(t) {
          k(this, e),
            (this.ALU = t.alu),
            (this.DEC = t.dec),
            (this.IVT = t.ivt),
            (this.BUS = t.bus),
            (this.REG = t.reg),
            (this.MMU = t.mmu),
            (this.CLK = t.clk),
            (this.CURRENT_INSTRUCTION = null),
            (this.HANDLER_CODE = null),
            (this.PROG_START_ADDRESS = 0),
            (this.PROG_BYTE_SIZE = 0),
            (this.STACK_BYTE_SIZE = 0),
            (this.STACK_START_ADDRESS = 0),
            (this._fetch = this._fetch.bind(this)),
            (this._decode = this._decode.bind(this)),
            (this._execute = this._execute.bind(this)),
            this.MMU.conn2bus(this.BUS),
            this.CLK.addObserver(0, [this._fetch, this.BUS.onTick]),
            this.CLK.addObserver(1, [this._decode, this.BUS.onTick]),
            this.CLK.addObserver(2, [this._execute, this.BUS.onTick]);
        }
        return (
          S(e, [
            {
              key: 'loadProg',
              value: function (e) {
                return (
                  (this.PROG_BYTE_SIZE = e.progSize),
                  (this.STACK_BYTE_SIZE = e.stackSize),
                  (this.PROG_START_ADDRESS = this.MMU.byteAlloc(
                    this.PROG_BYTE_SIZE,
                    0
                  )),
                  (this.STACK_START_ADDRESS = this.MMU.byteAlloc(
                    this.STACK_BYTE_SIZE,
                    this.PROG_START_ADDRESS + this.PROG_BYTE_SIZE + 4
                  )),
                  this.REG.pc.write(this.PROG_START_ADDRESS),
                  this.REG.sp.write(this.PROG_START_ADDRESS),
                  this.MMU.initProg(e.text),
                  this
                );
              }
            },
            {
              key: 'run',
              value: function () {
                return this.CLK.start(), this;
              }
            },
            {
              key: '_fetch',
              value: function () {
                if (
                  this.REG.pc.read() <
                  this.PROG_START_ADDRESS + this.PROG_BYTE_SIZE
                ) {
                  var e = this.REG.pc.read(),
                    t = this.MMU.map2ram(e);
                  this.BUS.setAddress(t),
                    this.BUS.setControl(196608),
                    this.REG.pc.write(e + 4);
                } else this.CLK.stop();
              }
            },
            {
              key: '_decode',
              value: function () {
                (this.CURRENT_INSTRUCTION = this.BUS.getData()),
                  this.CURRENT_INSTRUCTION &&
                    (this.HANDLER_CODE = this.DEC.decode(
                      this.CURRENT_INSTRUCTION
                    ));
              }
            },
            {
              key: '_execute',
              value: function () {
                if (this.CURRENT_INSTRUCTION) {
                  var e = 65280 & this.HANDLER_CODE;
                  256 ^ e ||
                    this.IVT.handle(
                      this.HANDLER_CODE,
                      this.CURRENT_INSTRUCTION
                    ),
                    0 ^ e ||
                      this.ALU.handle(
                        this.HANDLER_CODE,
                        this.CURRENT_INSTRUCTION
                      );
                }
              }
            }
          ]),
          e
        );
      })(),
      I = (function () {
        function e() {
          k(this, e),
            (this._r0 = new R()),
            (this._r1 = new R()),
            (this._r2 = new R()),
            (this._r3 = new R()),
            (this._r4 = new R()),
            (this._r5 = new R()),
            (this._r6 = new R()),
            (this._r7 = new R()),
            (this._r8 = new R()),
            (this._r9 = new R()),
            (this._r10 = new R()),
            (this._r11 = new R()),
            (this._r12 = new R()),
            (this._r13 = new R()),
            (this._r14 = new R()),
            (this._r15 = new R()),
            (this._cpsr = new R());
        }
        return (
          S(e, [
            {
              key: 'r0',
              get: function () {
                return this._r0;
              }
            },
            {
              key: 'r1',
              get: function () {
                return this._r1;
              }
            },
            {
              key: 'r2',
              get: function () {
                return this._r2;
              }
            },
            {
              key: 'r3',
              get: function () {
                return this._r3;
              }
            },
            {
              key: 'r4',
              get: function () {
                return this._r4;
              }
            },
            {
              key: 'r5',
              get: function () {
                return this._r5;
              }
            },
            {
              key: 'r6',
              get: function () {
                return this._r6;
              }
            },
            {
              key: 'r7',
              get: function () {
                return this._r7;
              }
            },
            {
              key: 'r8',
              get: function () {
                return this._r8;
              }
            },
            {
              key: 'r9',
              get: function () {
                return this._r9;
              }
            },
            {
              key: 'r10',
              get: function () {
                return this._r10;
              }
            },
            {
              key: 'r11',
              get: function () {
                return this._r11;
              }
            },
            {
              key: 'r12',
              get: function () {
                return this._r12;
              }
            },
            {
              key: 'r13',
              get: function () {
                return this._r13;
              }
            },
            {
              key: 'r14',
              get: function () {
                return this._r14;
              }
            },
            {
              key: 'r15',
              get: function () {
                return this._r15;
              }
            },
            {
              key: 'sp',
              get: function () {
                return this._r13;
              }
            },
            {
              key: 'lr',
              get: function () {
                return this._r14;
              }
            },
            {
              key: 'pc',
              get: function () {
                return this._r15;
              }
            },
            {
              key: 'cpsr',
              get: function () {
                return this._cpsr;
              }
            }
          ]),
          e
        );
      })(),
      O = (function () {
        function e() {
          k(this, e), (this.BUS = null);
        }
        return (
          S(e, [
            {
              key: 'conn2bus',
              value: function (e) {
                this.BUS = e;
              }
            },
            {
              key: 'map2ram',
              value: function (e) {
                return 16777216 | e;
              }
            },
            {
              key: 'byteAlloc',
              value: function (e, t) {
                return t;
              }
            },
            {
              key: 'initProg',
              value: function (e) {
                for (
                  var t = this.BUS.DEVICES[16777216],
                    n = 0 + t.START_ADDRESS,
                    r = e.length + t.START_ADDRESS;
                  n < r;
                  n++
                )
                  t.write32(e[n], 4 * n);
              }
            }
          ]),
          e
        );
      })(),
      A = (function () {
        function e() {
          k(this, e),
            (this.INSTRUCTION = null),
            (this.T0 = [
              [['_ne', 15], ['_eqC', '00x'], ['_any'], ['_lup', '_T1']],
              [['_ne', 15], ['_eq', 2], ['_any'], ['_lup', '_T2']],
              [
                ['_ne', 15],
                ['_eq', 3],
                ['_eq', 0],
                ['_lup', '_T3']
              ],
              [
                ['_ne', 15],
                ['_eq', 3],
                ['_eq', 1],
                ['_ret', 257]
              ],
              [['_any'], ['_eqC', '10x'], ['_any'], ['_lup', '_T5']],
              [['_any'], ['_eqC', '11x'], ['_any'], ['_ret', 257]],
              [['_eq', 15], ['_eqC', '0xx'], ['_any'], ['_ret', 257]]
            ]),
            (this.T1 = [
              [
                ['_eq', 0],
                ['_any'],
                ['_eq', 1],
                ['_ne', 0],
                ['_eq', 1],
                ['_ret', 257]
              ],
              [
                ['_eq', 0],
                ['_eqC', '0xxxx'],
                ['_eq', 1],
                ['_eq', 0],
                ['_eq', 1],
                ['_lup', '_T12']
              ],
              [
                ['_eq', 0],
                ['_eqC', '1xxxx'],
                ['_eq', 1],
                ['_eq', 0],
                ['_eq', 1],
                ['_ret', 257]
              ],
              [
                ['_eq', 0],
                ['_eqC', '10xx0'],
                ['_eq', 0],
                ['_any'],
                ['_any'],
                ['_lup', '_T14']
              ],
              [
                ['_eq', 0],
                ['_eqC', '10xx0'],
                ['_eq', 1],
                ['_any'],
                ['_eq', 0],
                ['_ret', 257]
              ],
              [
                ['_eq', 0],
                ['_neC', '10xx0'],
                ['_any'],
                ['_any'],
                ['_eq', 0],
                ['_lup', '_T16']
              ],
              [
                ['_eq', 0],
                ['_neC', '10xx0'],
                ['_eq', 0],
                ['_any'],
                ['_eq', 1],
                ['_lup', '_T16']
              ],
              [
                ['_eq', 1],
                ['_any'],
                ['_any'],
                ['_any'],
                ['_any'],
                ['_lup', '_T18']
              ]
            ]),
            (this.T12 = [[['_eq', 0], ['_any'], ['_ret', 'MUL_MULS']]]),
            (this.T14 = [
              [
                ['_eq', 1],
                ['_eq', 1],
                ['_ret', 'BX']
              ],
              [
                ['_eq', 3],
                ['_eq', 1],
                ['_ret', 'CLZ']
              ]
            ]),
            (this.T18 = [
              [['_eqC', '0x'], ['_any'], ['_lup', '_T181']],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_lup', '_T182']
              ],
              [
                ['_eq', 2],
                ['_eq', 2],
                ['_ret', 257]
              ],
              [
                ['_eq', 2],
                ['_eqC', 'x1'],
                ['_lup', '_T184']
              ],
              [['_eq', 3], ['_any'], ['_lup', '_T185']]
            ]),
            (this.T181 = [
              [['_eq', 0], ['_any'], ['_any'], ['_ret', 'AND_ANDS_IMD']],
              [['_eq', 1], ['_any'], ['_any'], ['_ret', 'EOR_EORS_IMD']],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_neC', '11x1'],
                ['_ret', 'SUB_IMD']
              ],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_eq', 13],
                ['_ret', 'SUB_IMD_SP']
              ],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_eq', 15],
                ['_ret', 'ADR_A2']
              ],
              [
                ['_eq', 2],
                ['_eq', 1],
                ['_ne', 13],
                ['_ret', 'SUBS_IMD']
              ],
              [
                ['_eq', 2],
                ['_eq', 1],
                ['_eq', 13],
                ['_ret', 'SUBS_IMD_SP']
              ],
              [['_eq', 3], ['_any'], ['_any'], ['_ret', 'RSB_RSBS_IMD']],
              [
                ['_eq', 4],
                ['_eq', 0],
                ['_neC', '11x1'],
                ['_ret', 'ADD_IMD']
              ],
              [
                ['_eq', 4],
                ['_eq', 0],
                ['_eq', 13],
                ['_ret', 'ADD_IMD_SP']
              ],
              [
                ['_eq', 4],
                ['_eq', 0],
                ['_eq', 15],
                ['_ret', 'ADR_A1']
              ],
              [
                ['_eq', 4],
                ['_eq', 1],
                ['_ne', 13],
                ['_ret', 'ADDS_IMD']
              ],
              [
                ['_eq', 4],
                ['_eq', 1],
                ['_eq', 13],
                ['_ret', 'ADDS_IMD_SP']
              ],
              [['_eq', 5], ['_any'], ['_any'], ['_ret', 'ADC_ADCS_IMD']],
              [['_eq', 6], ['_any'], ['_any'], ['_ret', 'SBC_SBCS_IMD']],
              [['_eq', 7], ['_any'], ['_any'], ['_ret', 'RSC_RSCS_IMD']]
            ]),
            (this.T182 = [
              [
                ['_eq', 0],
                ['_ret', 'MOV_MOVS_IMD']
              ],
              [
                ['_eq', 1],
                ['_ret', 'MOVT']
              ]
            ]),
            (this.T184 = [
              [
                ['_eq', 0],
                ['_ret', 'TST_IMD']
              ],
              [
                ['_eq', 1],
                ['_ret', 'TEQ_IMD']
              ],
              [
                ['_eq', 2],
                ['_ret', 'CMP_IMD']
              ],
              [
                ['_eq', 3],
                ['_ret', 'CMN_IMD']
              ]
            ]),
            (this.T185 = [
              [
                ['_eq', 0],
                ['_ret', 'ORR_ORRS_IMD']
              ],
              [
                ['_eq', 1],
                ['_ret', 'MOV_MOVS_IMD']
              ],
              [
                ['_eq', 2],
                ['_ret', 'BIC_BICS_IMD']
              ],
              [
                ['_eq', 3],
                ['_ret', 'MVN_MVNS_IMD']
              ]
            ]),
            (this.T2 = [
              [
                ['_ne', 1],
                ['_eq', 0],
                ['_eq', 1],
                ['_eq', 15],
                ['_ret', 'LDR_LIT']
              ],
              [
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 1],
                ['_ne', 15],
                ['_ret', 'LDR_IMD_POST']
              ],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_eq', 1],
                ['_ne', 15],
                ['_ret', 'LDR_IMD_OFST']
              ],
              [
                ['_ne', 1],
                ['_eq', 1],
                ['_eq', 1],
                ['_eq', 15],
                ['_ret', 'LDRB_LIT']
              ],
              [
                ['_eq', 0],
                ['_eq', 1],
                ['_eq', 1],
                ['_ne', 15],
                ['_ret', 'LDRB_IMD_POST']
              ],
              [
                ['_eq', 2],
                ['_eq', 1],
                ['_eq', 1],
                ['_ne', 15],
                ['_ret', 'LDRB_IMD_OFST']
              ],
              [
                ['_eq', 3],
                ['_eq', 0],
                ['_eq', 0],
                ['_any'],
                ['_ret', 'STR_IMD_PRE']
              ],
              [
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 0],
                ['_any'],
                ['_ret', 'STR_IMD_POST']
              ],
              [
                ['_eq', 2],
                ['_eq', 0],
                ['_eq', 0],
                ['_any'],
                ['_ret', 'STR_IMD_OFST']
              ],
              [
                ['_eq', 0],
                ['_eq', 1],
                ['_eq', 0],
                ['_any'],
                ['_ret', 'STRB_IMD_POST']
              ],
              [
                ['_eq', 2],
                ['_eq', 1],
                ['_eq', 0],
                ['_any'],
                ['_ret', 'STRB_IMD_OFST']
              ]
            ]),
            (this.T3 = [
              [
                ['_eq', 1],
                ['_eq', 0],
                ['_any'],
                ['_eq', 1],
                ['_ret', 'LDR_REG_PRE']
              ],
              [
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 1],
                ['_ret', 'LDR_REG_POST']
              ],
              [
                ['_eq', 1],
                ['_eq', 1],
                ['_any'],
                ['_eq', 1],
                ['_ret', 'LDRB_REG_PRE']
              ],
              [
                ['_eq', 0],
                ['_eq', 1],
                ['_eq', 0],
                ['_eq', 1],
                ['_ret', 'LDRB_REG_POST']
              ],
              [
                ['_eq', 1],
                ['_eq', 0],
                ['_any'],
                ['_eq', 0],
                ['_ret', 'STR_REG_PRE']
              ],
              [
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 0],
                ['_eq', 0],
                ['_ret', 'STR_REG_POST']
              ],
              [
                ['_eq', 1],
                ['_eq', 1],
                ['_any'],
                ['_eq', 0],
                ['_ret', 'STRB_REG_PRE']
              ],
              [
                ['_eq', 0],
                ['_eq', 1],
                ['_eq', 0],
                ['_eq', 0],
                ['_ret', 'STRB_REG_POST']
              ]
            ]),
            (this.T5 = [
              [
                ['_eq', 15],
                ['_eq', 0],
                ['_ret', 257]
              ],
              [
                ['_ne', 15],
                ['_eq', 0],
                ['_ret', 257]
              ],
              [['any'], ['_eq', 1], ['_lup', 'T53']]
            ]),
            (this.T53 = [
              [
                ['_ne', 15],
                ['_eq', 0],
                ['_ret', 'B']
              ],
              [
                ['_ne', 15],
                ['_eq', 1],
                ['_ret', 'BL']
              ],
              [['_eq', 15], ['_any'], ['_ret', 'BLX']]
            ]);
        }
        return (
          S(e, [
            {
              key: 'decode',
              value: function (e) {
                return (this.INSTRUCTION = e), this._T0();
              }
            },
            {
              key: '_any',
              value: function () {
                return !0;
              }
            },
            {
              key: '_lup',
              value: function (e) {
                return this[e].call(this);
              }
            },
            {
              key: '_ret',
              value: function (e) {
                return e;
              }
            },
            {
              key: '_ne',
              value: function (e, t) {
                return !!(e ^ t);
              }
            },
            {
              key: '_eq',
              value: function (e, t) {
                return !(e ^ t);
              }
            },
            {
              key: '_neC',
              value: function (e, t) {
                for (var n = t.toString(2), r = e.length; n.length < r; )
                  n = '0' + n;
                for (var i = 0; i < r; i++) {
                  var o = e[i],
                    a = n[i];
                  if ('x' != o && o != a) return !0;
                }
                return !1;
              }
            },
            {
              key: '_eqC',
              value: function (e, t) {
                for (var n = t.toString(2), r = e.length; n.length < r; )
                  n = '0' + n;
                for (var i = 0; i < r; i++) {
                  var o = e[i],
                    a = n[i];
                  if ('x' != o && o != a) return !1;
                }
                return !0;
              }
            },
            {
              key: '_T0',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 28) & 15,
                    t = (this.INSTRUCTION >>> 25) & 7,
                    n = (this.INSTRUCTION >>> 4) & 1,
                    r = 0,
                    i = this.T0.length;
                  r < i;
                  r++
                ) {
                  var o = this.T0[r],
                    a = b(o[0], 2),
                    l = a[0],
                    u = a[1],
                    s = b(o[1], 2),
                    c = s[0],
                    f = s[1],
                    d = b(o[2], 2),
                    p = d[0],
                    h = d[1],
                    m = [
                      this[l].call(this, u, e),
                      this[c].call(this, f, t),
                      this[p].call(this, h, n)
                    ];
                  if (
                    m.every(function (e) {
                      return e;
                    })
                  ) {
                    var g = b(o[m.length], 2),
                      v = g[0],
                      y = g[1];
                    return this[v].call(this, y);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T1',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 25) & 1,
                    t = (this.INSTRUCTION >>> 20) & 31,
                    n = (this.INSTRUCTION >>> 7) & 1,
                    r = (this.INSTRUCTION >>> 5) & 3,
                    i = (this.INSTRUCTION >>> 4) & 1,
                    o = 0,
                    a = this.T1.length;
                  o < a;
                  o++
                ) {
                  var l = this.T1[o],
                    u = b(l[0], 2),
                    s = u[0],
                    c = u[1],
                    f = b(l[1], 2),
                    d = f[0],
                    p = f[1],
                    h = b(l[2], 2),
                    m = h[0],
                    g = h[1],
                    v = b(l[3], 2),
                    y = v[0],
                    w = v[1],
                    x = b(l[4], 2),
                    T = x[0],
                    _ = x[1],
                    k = [
                      this[s].call(this, c, e),
                      this[d].call(this, p, t),
                      this[m].call(this, g, n),
                      this[y].call(this, w, r),
                      this[T].call(this, _, i)
                    ];
                  if (
                    k.every(function (e) {
                      return e;
                    })
                  ) {
                    var E = b(l[k.length], 2),
                      S = E[0],
                      C = E[1];
                    return this[S].call(this, C);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T2',
              value: function () {
                for (
                  var e =
                      (((this.INSTRUCTION >>> 24) & 1) << 1) +
                      ((this.INSTRUCTION >>> 21) & 1),
                    t = (this.INSTRUCTION >>> 22) & 1,
                    n = (this.INSTRUCTION >>> 20) & 1,
                    r = (this.INSTRUCTION >>> 16) & 15,
                    i = 0,
                    o = this.T2.length;
                  i < o;
                  i++
                ) {
                  var a = this.T2[i],
                    l = b(a[0], 2),
                    u = l[0],
                    s = l[1],
                    c = b(a[1], 2),
                    f = c[0],
                    d = c[1],
                    p = b(a[2], 2),
                    h = p[0],
                    m = p[1],
                    g = b(a[3], 2),
                    v = g[0],
                    y = g[1],
                    w = [
                      this[u].call(this, s, e),
                      this[f].call(this, d, t),
                      this[h].call(this, m, n),
                      this[v].call(this, y, r)
                    ];
                  if (
                    w.every(function (e) {
                      return e;
                    })
                  ) {
                    var x = b(a[w.length], 2),
                      T = x[0],
                      _ = x[1];
                    return this[T].call(this, _);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T3',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 24) & 1,
                    t = (this.INSTRUCTION >>> 22) & 1,
                    n = (this.INSTRUCTION >>> 21) & 1,
                    r = (this.INSTRUCTION >>> 20) & 1,
                    i = 0,
                    o = this.T3.length;
                  i < o;
                  i++
                ) {
                  var a = this.T3[i],
                    l = b(a[0], 2),
                    u = l[0],
                    s = l[1],
                    c = b(a[1], 2),
                    f = c[0],
                    d = c[1],
                    p = b(a[3], 2),
                    h = p[0],
                    m = p[1],
                    g = b(a[2], 2),
                    v = g[0],
                    y = g[1],
                    w = [
                      this[u].call(this, s, e),
                      this[f].call(this, d, t),
                      this[h].call(this, m, n),
                      this[v].call(this, y, r)
                    ];
                  if (
                    w.every(function (e) {
                      return e;
                    })
                  ) {
                    var x = b(a[w.length], 2),
                      T = x[0],
                      _ = x[1];
                    return this[T].call(this, _);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T5',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 28) & 15,
                    t = (this.INSTRUCTION >>> 25) & 1,
                    n = 0,
                    r = this.T5.length;
                  n < r;
                  n++
                ) {
                  var i = this.T5[n],
                    o = b(i[0], 2),
                    a = o[0],
                    l = o[1],
                    u = b(i[1], 2),
                    s = u[0],
                    c = u[1],
                    f = [this[a].call(this, l, e), this[s].call(this, c, t)];
                  if (
                    f.every(function (e) {
                      return e;
                    })
                  ) {
                    var d = b(i[f.length], 2),
                      p = d[0],
                      h = d[1];
                    return this[p].call(this, h);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T12',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 21) & 7,
                    t = (this.INSTRUCTION >>> 20) & 1,
                    n = 0,
                    r = this.T12.length;
                  n < r;
                  n++
                ) {
                  var i = this.T12[n],
                    o = b(i[0], 2),
                    a = o[0],
                    l = o[1],
                    u = b(i[1], 2),
                    s = u[0],
                    c = u[1],
                    f = [this[a].call(this, l, e), this[s].call(this, c, t)];
                  if (
                    f.every(function (e) {
                      return e;
                    })
                  ) {
                    var d = b(i[f.length], 2),
                      p = d[0],
                      h = d[1];
                    return this[p].call(this, h);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T14',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 21) & 3,
                    t = (this.INSTRUCTION >>> 4) & 7,
                    n = 0,
                    r = this.T14.length;
                  n < r;
                  n++
                ) {
                  var i = this.T14[n],
                    o = b(i[0], 2),
                    a = o[0],
                    l = o[1],
                    u = b(i[1], 2),
                    s = u[0],
                    c = u[1],
                    f = [this[a].call(this, l, e), this[s].call(this, c, t)];
                  if (
                    f.every(function (e) {
                      return e;
                    })
                  ) {
                    var d = b(i[f.length], 2),
                      p = d[0],
                      h = d[1];
                    return this[p].call(this, h);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T16',
              value: function () {
                return 'T16';
              }
            },
            {
              key: '_T17',
              value: function () {
                return 'T17';
              }
            },
            {
              key: '_T18',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 23) & 3,
                    t = (this.INSTRUCTION >>> 20) & 3,
                    n = 0,
                    r = this.T18.length;
                  n < r;
                  n++
                ) {
                  var i = this.T18[n],
                    o = b(i[0], 2),
                    a = o[0],
                    l = o[1],
                    u = b(i[1], 2),
                    s = u[0],
                    c = u[1],
                    f = [this[a].call(this, l, e), this[s].call(this, c, t)];
                  if (
                    f.every(function (e) {
                      return e;
                    })
                  ) {
                    var d = b(i[f.length], 2),
                      p = d[0],
                      h = d[1];
                    return this[p].call(this, h);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T181',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 21) & 7,
                    t = (this.INSTRUCTION >>> 20) & 1,
                    n = (this.INSTRUCTION >>> 16) & 15,
                    r = 0,
                    i = this.T181.length;
                  r < i;
                  r++
                ) {
                  var o = this.T181[r],
                    a = b(o[0], 2),
                    l = a[0],
                    u = a[1],
                    s = b(o[1], 2),
                    c = s[0],
                    f = s[1],
                    d = b(o[2], 2),
                    p = d[0],
                    h = d[1],
                    m = [
                      this[l].call(this, u, e),
                      this[c].call(this, f, t),
                      this[p].call(this, h, n)
                    ];
                  if (
                    m.every(function (e) {
                      return e;
                    })
                  ) {
                    var g = b(o[m.length], 2),
                      v = g[0],
                      y = g[1];
                    return this[v].call(this, y);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T182',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 22) & 1,
                    t = 0,
                    n = this.T182.length;
                  t < n;
                  t++
                ) {
                  var r = this.T182[t],
                    i = b(r[0], 2),
                    o = i[0],
                    a = i[1],
                    l = [this[o].call(this, a, e)];
                  if (
                    l.every(function (e) {
                      return e;
                    })
                  ) {
                    var u = b(r[l.length], 2),
                      s = u[0],
                      c = u[1];
                    return this[s].call(this, c);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T184',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 21) & 3,
                    t = 0,
                    n = this.T184.length;
                  t < n;
                  t++
                ) {
                  var r = this.T184[t],
                    i = b(r[0], 2),
                    o = i[0],
                    a = i[1],
                    l = [this[o].call(this, a, e)];
                  if (
                    l.every(function (e) {
                      return e;
                    })
                  ) {
                    var u = b(r[l.length], 2),
                      s = u[0],
                      c = u[1];
                    return this[s].call(this, c);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T185',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 21) & 3,
                    t = 0,
                    n = this.T185.length;
                  t < n;
                  t++
                ) {
                  var r = this.T185[t],
                    i = b(r[0], 2),
                    o = i[0],
                    a = i[1],
                    l = [this[o].call(this, a, e)];
                  if (
                    l.every(function (e) {
                      return e;
                    })
                  ) {
                    var u = b(r[l.length], 2),
                      s = u[0],
                      c = u[1];
                    return this[s].call(this, c);
                  }
                }
                return 257;
              }
            },
            {
              key: '_T53',
              value: function () {
                for (
                  var e = (this.INSTRUCTION >>> 28) & 15,
                    t = (this.INSTRUCTION >>> 24) & 1,
                    n = 0,
                    r = this.T53.length;
                  n < r;
                  n++
                ) {
                  var i = this.T53[n],
                    o = b(i[0], 2),
                    a = o[0],
                    l = o[1],
                    u = b(i[1], 2),
                    s = u[0],
                    c = u[1],
                    f = [this[a].call(this, l, e), this[s].call(this, c, t)];
                  if (
                    f.every(function (e) {
                      return e;
                    })
                  ) {
                    var d = b(i[f.length], 2),
                      p = d[0],
                      h = d[1];
                    return this[p].call(this, h);
                  }
                }
                return 257;
              }
            }
          ]),
          e
        );
      })(),
      q = (function () {
        function e() {
          k(this, e);
        }
        return (
          S(e, [
            {
              key: 'handle',
              value: function (e, t) {
                console.log(
                  'Execute Opcode - '
                    .concat(e.toString(2), ' - ')
                    .concat(t.toString(16), '\n\n')
                );
              }
            }
          ]),
          e
        );
      })(),
      M = (function () {
        function e() {
          k(this, e);
        }
        return (
          S(e, [
            {
              key: 'handle',
              value: function (e, t) {
                console.log(
                  '%c Handle Interrupt - '
                    .concat(e.toString(2), ' - ')
                    .concat(t.toString(16), '\n\n'),
                  'background: black; color: white'
                );
              }
            }
          ]),
          e
        );
      })(),
      j = new D({
        bus: new P(_({}, 16777216, new N())),
        reg: new I(),
        mmu: new O(),
        dec: new A(),
        alu: new q(),
        ivt: new M(),
        clk: new C()
      });
    var F = function () {
      var e = function (e, t) {
          return (
            void 0 === t && (t = 'armbe'),
            fetch('http://localhost:9001/kstool', {
              cache: 'no-cache',
              method: 'POST',
              body: JSON.stringify({ arch_mode: t, asm_str: e })
            })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return {
                  stackSize: 1024,
                  progSize: 4 * e.text.length,
                  text: e.text.map(function (e) {
                    return parseInt(e, 16);
                  })
                };
              })
          );
        },
        t = j;
      return i.a.createElement(
        'div',
        { className: f()(y.a.container, 'text-center w-full') },
        i.a.createElement('hr', null),
        i.a.createElement(
          'div',
          { className: 'my-2' },
          i.a.createElement(
            'button',
            {
              className:
                'w-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l-lg',
              onClick: function () {
                e(
                  'cmp r3, #245; push {r7}; sub sp, sp, #12; add r7, sp, #0; str r0, [r7, #4]; ldr r3, [r7, #4]; mul r3, r3, r3; mov r0, r3; adds r7, r7, #12; mov sp, r7; ldr r7, [sp], #4; bx lr'
                ).then(function (e) {
                  return t.loadProg(e).run();
                });
              }
            },
            'Start'
          ),
          i.a.createElement(
            'button',
            {
              className:
                'w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4'
            },
            'Stop'
          ),
          i.a.createElement(
            'button',
            {
              className:
                'w-40 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4'
            },
            'Pause'
          ),
          i.a.createElement(
            'button',
            {
              className:
                'w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg'
            },
            'Step'
          )
        ),
        i.a.createElement('hr', null),
        i.a.createElement(
          'p',
          { className: 'text-lg my-2' },
          new Date().getFullYear() + ' | © CC0-1.0 by ' + d.author
        )
      );
    };
  },
  function (e, t, n) {
    'use strict';
    var r,
      i = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function l(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, r = [], i = 0; i < e.length; i++) {
        var o = e[i],
          u = t.base ? o[0] + t.base : o[0],
          s = n[u] || 0,
          c = ''.concat(u, ' ').concat(s);
        n[u] = s + 1;
        var f = l(c),
          d = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(d))
          : a.push({ identifier: c, updater: g(d, t), references: 1 }),
          r.push(c);
      }
      return r;
    }
    function s(e) {
      var t = document.createElement('style'),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var i = n.nc;
        i && (r.nonce = i);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        'function' == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = o(e.insert || 'head');
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var c,
      f =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join('\n');
        });
    function d(e, t, n, r) {
      var i = n
        ? ''
        : r.media
        ? '@media '.concat(r.media, ' {').concat(r.css, '}')
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, i);
      else {
        var o = document.createTextNode(i),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        i = n.media,
        o = n.sourceMap;
      if (
        (i ? e.setAttribute('media', i) : e.removeAttribute('media'),
        o &&
          btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function g(e, t) {
      var n, r, i;
      if (t.singleton) {
        var o = m++;
        (n = h || (h = s(t))),
          (r = d.bind(null, n, o, !1)),
          (i = d.bind(null, n, o, !0));
      } else
        (n = s(t)),
          (r = p.bind(null, n, t)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else i();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        'boolean' == typeof t.singleton ||
        (t.singleton = i());
      var n = u((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          '[object Array]' === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var i = l(n[r]);
            a[i].references--;
          }
          for (var o = u(e, t), s = 0; s < n.length; s++) {
            var c = l(n[s]);
            0 === a[c].references && (a[c].updater(), a.splice(c, 1));
          }
          n = o;
        }
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || '',
                r = e[3];
              if (!r) return n;
              if (t && 'function' == typeof btoa) {
                var i =
                    ((a = r),
                    '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      ' */'),
                  o = r.sources.map(function (e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n].concat(o).concat([i]).join('\n');
              }
              var a;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }),
        (t.i = function (e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            'number' == typeof o && (r[o] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var a = e[i];
            ('number' == typeof a[0] && r[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
              t.push(a));
          }
        }),
        t
      );
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"ARMulator","version":"1.0.0","description":"JavaScript Visual Emulator for ARM","main":"index.js","scripts":{"start":"webpack-dev-server --open --config webpack.dev.js","build":"NODE_ENV=production webpack --config webpack.prod.js && cp -a dev/assets docs","test":"echo \\"Error: no test specified\\" && exit 1","prettier-format":"prettier --config .prettierrc \'src/**/*.*\' --write"},"author":"Owusu K","license":"CC0-1.0","bugs":{"url":"https://github.com/nanacnote/armulator/issues"},"homepage":"https://github.com/nanacnote/armulator#readme","email":"adjeibohyen@hotmail.co.uk","repository":{"type":"git","url":"https://github.com/nanacnote/armulator.git"},"devDependencies":{"@babel/cli":"^7.11.5","@babel/core":"^7.11.5","@babel/preset-env":"^7.11.5","@babel/preset-react":"^7.10.4","@types/react":"^16.9.49","babel-loader":"^8.1.0","clean-webpack-plugin":"^3.0.0","css-loader":"^1.0.1","eslint":"^7.8.1","eslint-plugin-react":"^7.20.6","file-loader":"^6.1.0","html-webpack-harddisk-plugin":"^1.0.2","html-webpack-plugin":"^4.4.1","husky":"^4.3.0","postcss":"^7.0.32","postcss-loader":"^4.0.1","postcss-preset-env":"^6.7.0","prettier":"^2.1.1","style-loader":"^1.2.1","ts-loader":"^8.0.3","typed-css-modules-webpack-plugin":"^0.2.0","typescript":"^4.0.2","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","webpack-merge":"^5.1.4"},"dependencies":{"@types/classnames":"^2.2.10","@types/jquery":"^3.5.1","autoprefixer":"^9.8.6","classnames":"^2.2.6","gsap":"^3.5.1","jquery":"^3.5.1","react":"^16.13.1","react-dom":"^16.13.1","react-hot-loader":"^4.12.21","react-icons":"^3.11.0","tailwindcss":"^1.8.8"}}'
    );
  },
  function (e, t, n) {
    'use strict';
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join('')
        )
          return !1;
        var r = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            r[e] = e;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, l, u = a(e), s = 1; s < arguments.length; s++) {
            for (var c in (n = Object(arguments[s])))
              i.call(n, c) && (u[c] = n[c]);
            if (r) {
              l = r(n);
              for (var f = 0; f < l.length; f++)
                o.call(n, l[f]) && (u[l[f]] = n[l[f]]);
            }
          }
          return u;
        };
  },
  function (e, t, n) {
    'use strict';
    !(function e() {
      if (
        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(16));
  },
  function (e, t, n) {
    'use strict';
    (function (e) {
      var r = n(13),
        i = n(0),
        o = n.n(i),
        a = (n(20), n(2));
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = p(e);
          if (t) {
            var i = p(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ('object' !== l(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var h = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && c(e, t);
        })(l, e);
        var t,
          n,
          r,
          i = f(l);
        function l() {
          return u(this, l), i.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: 'render',
              value: function () {
                return o.a.createElement(
                  'div',
                  { className: 'app-wrapper' },
                  o.a.createElement(a.d, {
                    header: o.a.createElement(a.c, null),
                    body: o.a.createElement(a.a, null),
                    footer: o.a.createElement(a.b, null)
                  })
                );
              }
            }
          ]) && s(t.prototype, n),
          r && s(t, r),
          l
        );
      })(i.Component);
      t.a = Object(r.hot)(e)(h);
    }.call(this, n(19)(e)));
  },
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      'use strict';
      'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function (n, i) {
      'use strict';
      var o = [],
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        s = o.push,
        c = o.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        m = h.call(Object),
        g = {},
        v = function (e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var r,
          i,
          o = (n = n || b).createElement('script');
        if (((o.text = e), t))
          for (r in w)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? f[d.call(e)] || 'object'
          : typeof e;
      }
      var _ = function (e, t) {
        return new _.fn.init(e, t);
      };
      function k(e) {
        var t = !!e && 'length' in e && e.length,
          n = T(e);
        return (
          !v(e) &&
          !y(e) &&
          ('array' === n ||
            0 === t ||
            ('number' == typeof t && t > 0 && t - 1 in e))
        );
      }
      (_.fn = _.prototype = {
        jquery: '3.5.1',
        constructor: _,
        length: 0,
        toArray: function () {
          return l.call(this);
        },
        get: function (e) {
          return null == e
            ? l.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = _.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return _.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            _.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            _.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            _.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: s,
        sort: o.sort,
        splice: o.splice
      }),
        (_.extend = _.fn.extend = function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            l = 1,
            u = arguments.length,
            s = !1;
          for (
            'boolean' == typeof a && ((s = a), (a = arguments[l] || {}), l++),
              'object' == typeof a || v(a) || (a = {}),
              l === u && ((a = this), l--);
            l < u;
            l++
          )
            if (null != (e = arguments[l]))
              for (t in e)
                (r = e[t]),
                  '__proto__' !== t &&
                    a !== r &&
                    (s && r && (_.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || _.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = _.extend(s, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        _.extend({
          expando: 'jQuery' + ('3.5.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== d.call(e)) &&
              (!(t = a(e)) ||
                ('function' ==
                  typeof (n = p.call(t, 'constructor') && t.constructor) &&
                  h.call(n) === m))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            x(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (k(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (k(Object(e))
                  ? _.merge(n, 'string' == typeof e ? [e] : e)
                  : s.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (k(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return u(a);
          },
          guid: 1,
          support: g
        }),
        'function' == typeof Symbol &&
          (_.fn[Symbol.iterator] = o[Symbol.iterator]),
        _.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function (e, t) {
            f['[object ' + t + ']'] = t.toLowerCase();
          }
        );
      var E =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            w = 'sizzle' + 1 * new Date(),
            x = e.document,
            T = 0,
            _ = 0,
            k = ue(),
            E = ue(),
            S = ue(),
            C = ue(),
            N = function (e, t) {
              return e === t && (f = !0), 0;
            },
            R = {}.hasOwnProperty,
            P = [],
            D = P.pop,
            I = P.push,
            O = P.push,
            A = P.slice,
            q = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            M =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            j = '[\\x20\\t\\r\\n\\f]',
            F =
              '(?:\\\\[\\da-fA-F]{1,6}' +
              j +
              '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            U =
              '\\[' +
              j +
              '*(' +
              F +
              ')(?:' +
              j +
              '*([*^$|!~]?=)' +
              j +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              F +
              '))|)' +
              j +
              '*\\]',
            L =
              ':(' +
              F +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              U +
              ')*)|.*)\\)|)',
            z = new RegExp(j + '+', 'g'),
            B = new RegExp(
              '^' + j + '+|((?:^|[^\\\\])(?:\\\\.)*)' + j + '+$',
              'g'
            ),
            H = new RegExp('^' + j + '*,' + j + '*'),
            W = new RegExp('^' + j + '*([>+~]|' + j + ')' + j + '*'),
            $ = new RegExp(j + '|>'),
            V = new RegExp(L),
            Q = new RegExp('^' + F + '$'),
            K = {
              ID: new RegExp('^#(' + F + ')'),
              CLASS: new RegExp('^\\.(' + F + ')'),
              TAG: new RegExp('^(' + F + '|[*])'),
              ATTR: new RegExp('^' + U),
              PSEUDO: new RegExp('^' + L),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  j +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  j +
                  '*(?:([+-]|)' +
                  j +
                  '*(\\d+)|))' +
                  j +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + M + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  j +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  j +
                  '*((?:-\\d)?\\d*)' +
                  j +
                  '*\\)|)(?=[^-]|$)',
                'i'
              )
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              '\\\\[\\da-fA-F]{1,6}' + j + '?|\\\\([^\\r\\n\\f])',
              'g'
            ),
            ne = function (e, t) {
              var n = '0x' + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? '\0' === e
                  ? '�'
                  : e.slice(0, -1) +
                    '\\' +
                    e.charCodeAt(e.length - 1).toString(16) +
                    ' '
                : '\\' + e;
            },
            oe = function () {
              d();
            },
            ae = we(
              function (e) {
                return (
                  !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
                );
              },
              { dir: 'parentNode', next: 'legend' }
            );
          try {
            O.apply((P = A.call(x.childNodes)), x.childNodes),
              P[x.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: P.length
                ? function (e, t) {
                    I.apply(e, A.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          function le(e, t, r, i) {
            var o,
              l,
              s,
              c,
              f,
              h,
              v,
              y = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              'string' != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
            )
              return r;
            if (!i && (d(t), (t = t || p), m)) {
              if (11 !== x && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === x) {
                    if (!(s = t.getElementById(o))) return r;
                    if (s.id === o) return r.push(s), r;
                  } else if (
                    y &&
                    (s = y.getElementById(o)) &&
                    b(t, s) &&
                    s.id === o
                  )
                    return r.push(s), r;
                } else {
                  if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !C[e + ' '] &&
                (!g || !g.test(e)) &&
                (1 !== x || 'object' !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === x && ($.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute('id'))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute('id', (c = w))),
                      l = (h = a(e)).length;
                    l--;

                  )
                    h[l] = (c ? '#' + c : ':scope') + ' ' + be(h[l]);
                  v = h.join(',');
                }
                try {
                  return O.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  C(e, !0);
                } finally {
                  c === w && t.removeAttribute('id');
                }
              }
            }
            return u(e.replace(B, '$1'), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
                (t[n + ' '] = i)
              );
            };
          }
          function se(e) {
            return (e[w] = !0), e;
          }
          function ce(e) {
            var t = p.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split('|'), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ('input' === n || 'button' === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e;
            };
          }
          function ge(e) {
            return se(function (t) {
              return (
                (t = +t),
                se(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = le.support = {}),
          (o = le.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || 'HTML');
          }),
          (d = le.setDocument = function (e) {
            var t,
              i,
              a = e ? e.ownerDocument || e : x;
            return a != p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (m = !o(p)),
                x != p &&
                  (i = p.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener('unload', oe, !1)
                    : i.attachEvent && i.attachEvent('onunload', oe)),
                (n.scope = ce(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement('div')),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(':scope fieldset div').length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = 'i'), !e.getAttribute('className');
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return (
                    e.appendChild(p.createComment('')),
                    !e.getElementsByTagName('*').length
                  );
                })),
                (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (h.appendChild(e).id = w),
                    !p.getElementsByName || !p.getElementsByName(w).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute('id') === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode('id');
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode('id')) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode('id')) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ('*' === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (g = []),
                (n.qsa = J.test(p.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      w +
                      "'></a><select id='" +
                      w +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push('[*^$]=' + j + '*(?:\'\'|"")'),
                      e.querySelectorAll('[selected]').length ||
                        g.push('\\[' + j + '*(?:value|' + M + ')'),
                      e.querySelectorAll('[id~=' + w + '-]').length ||
                        g.push('~='),
                      (t = p.createElement('input')).setAttribute('name', ''),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        g.push(
                          '\\[' + j + '*name' + j + '*=' + j + '*(?:\'\'|"")'
                        ),
                      e.querySelectorAll(':checked').length ||
                        g.push(':checked'),
                      e.querySelectorAll('a#' + w + '+*').length ||
                        g.push('.#.+[+~]'),
                      e.querySelectorAll('\\\f'),
                      g.push('[\\r\\n\\f]');
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement('input');
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length &&
                        g.push('name' + j + '*[*^$|!~]?='),
                      2 !== e.querySelectorAll(':enabled').length &&
                        g.push(':enabled', ':disabled'),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(':disabled').length &&
                        g.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      g.push(',.*:');
                  })),
                (n.matchesSelector = J.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, '*')),
                      y.call(e, "[s!='']:x"),
                      v.push('!=', L);
                  }),
                (g = g.length && new RegExp(g.join('|'))),
                (v = v.length && new RegExp(v.join('|'))),
                (t = J.test(h.compareDocumentPosition)),
                (b =
                  t || J.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (N = t
                  ? function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == x && b(x, e))
                            ? -1
                            : t == p || (t.ownerDocument == x && b(x, t))
                            ? 1
                            : c
                            ? q(c, e) - q(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        l = [t];
                      if (!i || !o)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : c
                          ? q(c, e) - q(c, t)
                          : 0;
                      if (i === o) return de(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; a[r] === l[r]; ) r++;
                      return r
                        ? de(a[r], l[r])
                        : a[r] == x
                        ? -1
                        : l[r] == x
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
          (le.matches = function (e, t) {
            return le(e, null, null, t);
          }),
          (le.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                m &&
                !C[t + ' '] &&
                (!v || !v.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                C(t, !0);
              }
            return le(t, p, null, [e]).length > 0;
          }),
          (le.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), b(e, t);
          }),
          (le.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && R.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !m)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !m
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (le.escape = function (e) {
            return (e + '').replace(re, ie);
          }),
          (le.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }),
          (le.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(N),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = le.getText = function (e) {
            var t,
              n = '',
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ('string' == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = le.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' }
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                  '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  'nth' === e[1].slice(0, 3)
                    ? (e[3] || le.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ('even' === e[3] || 'odd' === e[3]))),
                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                    : e[3] && le.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return K.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        V.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return '*' === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = k[e + ' '];
                return (
                  t ||
                  ((t = new RegExp('(^|' + j + ')' + e + '(' + j + '|$)')) &&
                    k(e, function (e) {
                      return t.test(
                        ('string' == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = le.attr(r, e);
                  return null == i
                    ? '!=' === t
                    : !t ||
                        ((i += ''),
                        '=' === t
                          ? i === n
                          : '!=' === t
                          ? i !== n
                          : '^=' === t
                          ? n && 0 === i.indexOf(n)
                          : '*=' === t
                          ? n && i.indexOf(n) > -1
                          : '$=' === t
                          ? n && i.slice(-n.length) === n
                          : '~=' === t
                          ? (' ' + i.replace(z, ' ') + ' ').indexOf(n) > -1
                          : '|=' === t &&
                            (i === n || i.slice(0, n.length + 1) === n + '-'));
                };
              },
              CHILD: function (e, t, n, r, i) {
                var o = 'nth' !== e.slice(0, 3),
                  a = 'last' !== e.slice(-4),
                  l = 'of-type' === t;
                return 1 === r && 0 === i
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, u) {
                      var s,
                        c,
                        f,
                        d,
                        p,
                        h,
                        m = o !== a ? 'nextSibling' : 'previousSibling',
                        g = t.parentNode,
                        v = l && t.nodeName.toLowerCase(),
                        y = !u && !l,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (d = t; (d = d[m]); )
                              if (
                                l
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = m = 'only' === e && !h && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                          for (
                            b =
                              (p =
                                (s =
                                  (c =
                                    (f = (d = g)[w] || (d[w] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  T && s[1]) && s[2],
                              d = p && g.childNodes[p];
                            (d = (++p && d && d[m]) || (b = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++b && d === t) {
                              c[e] = [T, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (s =
                                (c =
                                  (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              s[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
                            ((l
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[w] || (d[w] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [T, b]),
                              d !== t));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    le.error('unsupported pseudo: ' + e);
                return i[w]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, '', t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? se(function (e, n) {
                          for (var r, o = i(e, t), a = o.length; a--; )
                            e[(r = q(e, o[a]))] = !(n[r] = o[a]);
                        })
                      : function (e) {
                          return i(e, 0, n);
                        })
                  : i;
              }
            },
            pseudos: {
              not: se(function (e) {
                var t = [],
                  n = [],
                  r = l(e.replace(B, '$1'));
                return r[w]
                  ? se(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), l = e.length; l--; )
                        (o = a[l]) && (e[l] = !(t[l] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: se(function (e) {
                return function (t) {
                  return le(e, t).length > 0;
                };
              }),
              contains: se(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: se(function (e) {
                return (
                  Q.test(e || '') || le.error('unsupported lang: ' + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = m
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + '-')
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: me(!1),
              disabled: me(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ('input' === t && !!e.checked) ||
                  ('option' === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return G.test(e.nodeName);
              },
              input: function (e) {
                return X.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t && 'button' === e.type) || 'button' === t;
              },
              text: function (e) {
                var t;
                return (
                  'input' === e.nodeName.toLowerCase() &&
                  'text' === e.type &&
                  (null == (t = e.getAttribute('type')) ||
                    'text' === t.toLowerCase())
                );
              },
              first: ge(function () {
                return [0];
              }),
              last: ge(function (e, t) {
                return [t - 1];
              }),
              eq: ge(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ge(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
          }
          function we(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && 'parentNode' === o,
              l = _++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var s,
                    c,
                    f,
                    d = [T, l];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((s = c[o]) && s[0] === T && s[1] === l)
                            return (d[2] = s[2]);
                          if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, a = [], l = 0, u = e.length, s = null != t; l < u; l++)
              (o = e[l]) && ((n && !n(o, r, i)) || (a.push(o), s && t.push(l)));
            return a;
          }
          function _e(e, t, n, r, i, o) {
            return (
              r && !r[w] && (r = _e(r)),
              i && !i[w] && (i = _e(i, o)),
              se(function (o, a, l, u) {
                var s,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  m =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) le(e, t[r], n);
                      return n;
                    })(t || '*', l.nodeType ? [l] : l, []),
                  g = !e || (!o && t) ? m : Te(m, d, e, l, u),
                  v = n ? (i || (o ? e : h || r) ? [] : a) : g;
                if ((n && n(g, v, l, u), r))
                  for (s = Te(v, p), r(s, [], l, u), c = s.length; c--; )
                    (f = s[c]) && (v[p[c]] = !(g[p[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (s = [], c = v.length; c--; )
                        (f = v[c]) && s.push((g[c] = f));
                      i(null, (v = []), s, u);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (s = i ? q(o, f) : d[c]) > -1 &&
                        (o[s] = !(a[s] = f));
                  }
                } else (v = Te(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : O.apply(a, v);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                l = a || r.relative[' '],
                u = a ? 1 : 0,
                c = we(
                  function (e) {
                    return e === t;
                  },
                  l,
                  !0
                ),
                f = we(
                  function (e) {
                    return q(t, e) > -1;
                  },
                  l,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== s)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  }
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) d = [we(xe(d), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return _e(
                    u > 1 && xe(d),
                    u > 1 &&
                      be(
                        e
                          .slice(0, u - 1)
                          .concat({ value: ' ' === e[u - 2].type ? '*' : '' })
                      ).replace(B, '$1'),
                    n,
                    u < i && ke(e.slice(u, i)),
                    i < o && ke((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                d.push(n);
              }
            return xe(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = le.tokenize = function (e, t) {
              var n,
                i,
                o,
                a,
                l,
                u,
                s,
                c = E[e + ' '];
              if (c) return t ? 0 : c.slice(0);
              for (l = e, u = [], s = r.preFilter; l; ) {
                for (a in ((n && !(i = H.exec(l))) ||
                  (i && (l = l.slice(i[0].length) || l), u.push((o = []))),
                (n = !1),
                (i = W.exec(l)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, ' ') }),
                  (l = l.slice(n.length))),
                r.filter))
                  !(i = K[a].exec(l)) ||
                    (s[a] && !(i = s[a](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: a, matches: i }),
                    (l = l.slice(n.length)));
                if (!n) break;
              }
              return t ? l.length : l ? le.error(e) : E(e, u).slice(0);
            }),
            (l = le.compile = function (e, t) {
              var n,
                i = [],
                o = [],
                l = S[e + ' '];
              if (!l) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (l = ke(t[n]))[w] ? i.push(l) : o.push(l);
                (l = S(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, a, l, u, c) {
                        var f,
                          h,
                          g,
                          v = 0,
                          y = '0',
                          b = o && [],
                          w = [],
                          x = s,
                          _ = o || (i && r.find.TAG('*', c)),
                          k = (T += null == x ? 1 : Math.random() || 0.1),
                          E = _.length;
                        for (
                          c && (s = a == p || a || c);
                          y !== E && null != (f = _[y]);
                          y++
                        ) {
                          if (i && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument == p || (d(f), (l = !m));
                              (g = e[h++]);

                            )
                              if (g(f, a || p, l)) {
                                u.push(f);
                                break;
                              }
                            c && (T = k);
                          }
                          n && ((f = !g && f) && v--, o && b.push(f));
                        }
                        if (((v += y), n && y !== v)) {
                          for (h = 0; (g = t[h++]); ) g(b, w, a, l);
                          if (o) {
                            if (v > 0)
                              for (; y--; ) b[y] || w[y] || (w[y] = D.call(u));
                            w = Te(w);
                          }
                          O.apply(u, w),
                            c &&
                              !o &&
                              w.length > 0 &&
                              v + t.length > 1 &&
                              le.uniqueSort(u);
                        }
                        return c && ((T = k), (s = x)), b;
                      };
                    return n ? se(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return l;
            }),
            (u = le.select = function (e, t, n, i) {
              var o,
                u,
                s,
                c,
                f,
                d = 'function' == typeof e && e,
                p = !i && a((e = d.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (u = p[0] = p[0].slice(0)).length > 2 &&
                  'ID' === (s = u[0]).type &&
                  9 === t.nodeType &&
                  m &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(s.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  o = K.needsContext.test(e) ? 0 : u.length;
                  o-- && ((s = u[o]), !r.relative[(c = s.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (i = f(
                      s.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(o, 1), !(e = i.length && be(u))))
                      return O.apply(n, i), n;
                    break;
                  }
              }
              return (
                (d || l(e, p))(
                  i,
                  t,
                  !m,
                  n,
                  !t || (ee.test(e) && ve(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = w.split('').sort(N).join('') === w),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                '#' === e.firstChild.getAttribute('href')
              );
            }) ||
              fe('type|href|height|width', function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  '' === e.firstChild.getAttribute('value')
                );
              })) ||
              fe('value', function (e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute('disabled');
            }) ||
              fe(M, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            le
          );
        })(n);
      (_.find = E),
        (_.expr = E.selectors),
        (_.expr[':'] = _.expr.pseudos),
        (_.uniqueSort = _.unique = E.uniqueSort),
        (_.text = E.getText),
        (_.isXMLDoc = E.isXML),
        (_.contains = E.contains),
        (_.escapeSelector = E.escape);
      var S = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && _(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        C = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        N = _.expr.match.needsContext;
      function R(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function D(e, t, n) {
        return v(t)
          ? _.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? _.grep(e, function (e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
          ? _.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : _.filter(t, e, n);
      }
      (_.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === r.nodeType
            ? _.find.matchesSelector(r, e)
              ? [r]
              : []
            : _.find.matches(
                e,
                _.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        _.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ('string' != typeof e)
              return this.pushStack(
                _(e).filter(function () {
                  for (t = 0; t < r; t++) if (_.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
            return r > 1 ? _.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(D(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(D(this, e || [], !0));
          },
          is: function (e) {
            return !!D(
              this,
              'string' == typeof e && N.test(e) ? _(e) : e || [],
              !1
            ).length;
          }
        });
      var I,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((_.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || I), 'string' == typeof e)) {
          if (
            !(r =
              '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof _ ? t[0] : t),
              _.merge(
                this,
                _.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              P.test(r[1]) && _.isPlainObject(t))
            )
              for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(_)
          : _.makeArray(e, this);
      }).prototype = _.fn),
        (I = _(b));
      var A = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      _.fn.extend({
        has: function (e) {
          var t = _(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = 'string' != typeof e && _(e);
          if (!N.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && _.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? c.call(_(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        _.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return S(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return S(e, 'parentNode', n);
            },
            next: function (e) {
              return M(e, 'nextSibling');
            },
            prev: function (e) {
              return M(e, 'previousSibling');
            },
            nextAll: function (e) {
              return S(e, 'nextSibling');
            },
            prevAll: function (e) {
              return S(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return S(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return S(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return C((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return C(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (R(e, 'template') && (e = e.content || e),
                  _.merge([], e.childNodes));
            }
          },
          function (e, t) {
            _.fn[e] = function (n, r) {
              var i = _.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (r = n),
                r && 'string' == typeof r && (i = _.filter(r, i)),
                this.length > 1 &&
                  (q[e] || _.uniqueSort(i), A.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var j = /[^\x20\t\r\n\f]+/g;
      function F(e) {
        return e;
      }
      function U(e) {
        throw e;
      }
      function L(e, t, n, r) {
        var i;
        try {
          e && v((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && v((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (_.Callbacks = function (e) {
        e =
          'string' == typeof e
            ? (function (e) {
                var t = {};
                return (
                  _.each(e.match(j) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : _.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          l = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; l = -1)
              for (n = a.shift(); ++l < o.length; )
                !1 === o[l].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((l = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
          },
          s = {
            add: function () {
              return (
                o &&
                  (n && !t && ((l = o.length - 1), a.push(n)),
                  (function t(n) {
                    _.each(n, function (n, r) {
                      v(r)
                        ? (e.unique && s.has(r)) || o.push(r)
                        : r && r.length && 'string' !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                _.each(arguments, function (e, t) {
                  for (var n; (n = _.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= l && l--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? _.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ''), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ''), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return s.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            }
          };
        return s;
      }),
        _.extend({
          Deferred: function (e) {
            var t = [
                [
                  'notify',
                  'progress',
                  _.Callbacks('memory'),
                  _.Callbacks('memory'),
                  2
                ],
                [
                  'resolve',
                  'done',
                  _.Callbacks('once memory'),
                  _.Callbacks('once memory'),
                  0,
                  'resolved'
                ],
                [
                  'reject',
                  'fail',
                  _.Callbacks('once memory'),
                  _.Callbacks('once memory'),
                  1,
                  'rejected'
                ]
              ],
              r = 'pending',
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return _.Deferred(function (n) {
                    _.each(t, function (t, r) {
                      var i = v(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && v(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + 'With'](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function () {
                      var l = this,
                        u = arguments,
                        s = function () {
                          var n, s;
                          if (!(e < o)) {
                            if ((n = r.apply(l, u)) === t.promise())
                              throw new TypeError('Thenable self-resolution');
                            (s =
                              n &&
                              ('object' == typeof n ||
                                'function' == typeof n) &&
                              n.then),
                              v(s)
                                ? i
                                  ? s.call(n, a(o, t, F, i), a(o, t, U, i))
                                  : (o++,
                                    s.call(
                                      n,
                                      a(o, t, F, i),
                                      a(o, t, U, i),
                                      a(o, t, F, t.notifyWith)
                                    ))
                                : (r !== F && ((l = void 0), (u = [n])),
                                  (i || t.resolveWith)(l, u));
                          }
                        },
                        c = i
                          ? s
                          : function () {
                              try {
                                s();
                              } catch (n) {
                                _.Deferred.exceptionHook &&
                                  _.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== U && ((l = void 0), (u = [n])),
                                    t.rejectWith(l, u));
                              }
                            };
                      e
                        ? c()
                        : (_.Deferred.getStackHook &&
                            (c.stackTrace = _.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return _.Deferred(function (n) {
                    t[0][3].add(a(0, n, v(i) ? i : F, n.notifyWith)),
                      t[1][3].add(a(0, n, v(e) ? e : F)),
                      t[2][3].add(a(0, n, v(r) ? r : U));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? _.extend(e, i) : i;
                }
              },
              o = {};
            return (
              _.each(t, function (e, n) {
                var a = n[2],
                  l = n[5];
                (i[n[1]] = a.add),
                  l &&
                    a.add(
                      function () {
                        r = l;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + 'With'](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + 'With'] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = l.call(arguments),
              o = _.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (L(e, o.done(a(n)).resolve, o.reject, !t),
              'pending' === o.state() || v(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) L(i[n], a(n), o.reject);
            return o.promise();
          }
        });
      var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (_.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          z.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (_.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var B = _.Deferred();
      function H() {
        b.removeEventListener('DOMContentLoaded', H),
          n.removeEventListener('load', H),
          _.ready();
      }
      (_.fn.ready = function (e) {
        return (
          B.then(e).catch(function (e) {
            _.readyException(e);
          }),
          this
        );
      }),
        _.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) ||
              ((_.isReady = !0),
              (!0 !== e && --_.readyWait > 0) || B.resolveWith(b, [_]));
          }
        }),
        (_.ready.then = B.then),
        'complete' === b.readyState ||
        ('loading' !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(_.ready)
          : (b.addEventListener('DOMContentLoaded', H),
            n.addEventListener('load', H));
      var W = function (e, t, n, r, i, o, a) {
          var l = 0,
            u = e.length,
            s = null == n;
          if ('object' === T(n))
            for (l in ((i = !0), n)) W(e, t, l, n[l], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            v(r) || (a = !0),
            s &&
              (a
                ? (t.call(e, r), (t = null))
                : ((s = t),
                  (t = function (e, t, n) {
                    return s.call(_(e), n);
                  }))),
            t)
          )
            for (; l < u; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
          return i ? e : s ? t.call(e) : u ? t(e[0], n) : o;
        },
        $ = /^-ms-/,
        V = /-([a-z])/g;
      function Q(e, t) {
        return t.toUpperCase();
      }
      function K(e) {
        return e.replace($, 'ms-').replace(V, Q);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = _.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ('string' == typeof t) i[K(t)] = n;
            else for (r in t) i[K(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][K(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(K)
                  : (t = K(t)) in r
                  ? [t]
                  : t.match(j) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || _.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t);
          }
        });
      var G = new X(),
        J = new X(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = 'data-' + t.replace(ee, '-$&').toLowerCase()),
            'string' == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  'true' === e ||
                  ('false' !== e &&
                    ('null' === e
                      ? null
                      : e === +e + ''
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            J.set(e, t, n);
          } else n = void 0;
        return n;
      }
      _.extend({
        hasData: function (e) {
          return J.hasData(e) || G.hasData(e);
        },
        data: function (e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function (e, t) {
          J.remove(e, t);
        },
        _data: function (e, t, n) {
          return G.access(e, t, n);
        },
        _removeData: function (e, t) {
          G.remove(e, t);
        }
      }),
        _.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = J.get(o)), 1 === o.nodeType && !G.get(o, 'hasDataAttrs'))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf('data-') &&
                    ((r = K(r.slice(5))), te(o, r, i[r]));
                G.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  J.set(this, e);
                })
              : W(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = J.get(o, e)) ||
                        void 0 !== (n = te(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      J.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              J.remove(this, e);
            });
          }
        }),
        _.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = G.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = G.access(e, t, _.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = _.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = _._queueHooks(e, t);
            'inprogress' === i && ((i = n.shift()), r--),
              i &&
                ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    _.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return (
              G.get(e, n) ||
              G.access(e, n, {
                empty: _.Callbacks('once memory').add(function () {
                  G.remove(e, [t + 'queue', n]);
                })
              })
            );
          }
        }),
        _.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? _.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = _.queue(this, e, t);
                    _._queueHooks(this, e),
                      'fx' === e && 'inprogress' !== n[0] && _.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              _.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = _.Deferred(),
              o = this,
              a = this.length,
              l = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
              a--;

            )
              (n = G.get(o[a], e + 'queueHooks')) &&
                n.empty &&
                (r++, n.empty.add(l));
            return l(), i.promise(t);
          }
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp('^(?:([+-])=|)(' + ne + ')([a-z%]*)$', 'i'),
        ie = ['Top', 'Right', 'Bottom', 'Left'],
        oe = b.documentElement,
        ae = function (e) {
          return _.contains(e.ownerDocument, e);
        },
        le = { composed: !0 };
      oe.getRootNode &&
        (ae = function (e) {
          return (
            _.contains(e.ownerDocument, e) ||
            e.getRootNode(le) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
        return (
          'none' === (e = t || e).style.display ||
          ('' === e.style.display && ae(e) && 'none' === _.css(e, 'display'))
        );
      };
      function se(e, t, n, r) {
        var i,
          o,
          a = 20,
          l = r
            ? function () {
                return r.cur();
              }
            : function () {
                return _.css(e, t, '');
              },
          u = l(),
          s = (n && n[3]) || (_.cssNumber[t] ? '' : 'px'),
          c =
            e.nodeType &&
            (_.cssNumber[t] || ('px' !== s && +u)) &&
            re.exec(_.css(e, t));
        if (c && c[3] !== s) {
          for (u /= 2, s = s || c[3], c = +u || 1; a--; )
            _.style(e, t, c + s),
              (1 - o) * (1 - (o = l() / u || 0.5)) <= 0 && (a = 0),
              (c /= o);
          (c *= 2), _.style(e, t, c + s), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = s), (r.start = c), (r.end = i))),
          i
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = _.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === i && (i = 'block'),
          (ce[r] = i),
          i)
        );
      }
      function de(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ('none' === n &&
                  ((i[o] = G.get(r, 'display') || null),
                  i[o] || (r.style.display = '')),
                '' === r.style.display && ue(r) && (i[o] = fe(r)))
              : 'none' !== n && ((i[o] = 'none'), G.set(r, 'display', n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      _.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? _(this).show() : _(this).hide();
              });
        }
      });
      var pe,
        he,
        me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement('div'))),
        (he = b.createElement('input')).setAttribute('type', 'radio'),
        he.setAttribute('checked', 'checked'),
        he.setAttribute('name', 't'),
        pe.appendChild(he),
        (g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = '<textarea>x</textarea>'),
        (g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = '<option></option>'),
        (g.option = !!pe.lastChild);
      var ye = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && R(e, t)) ? _.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          G.set(e[n], 'globalEval', !t || G.get(t[n], 'globalEval'));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        g.option ||
          (ye.optgroup = ye.option = [
            1,
            "<select multiple='multiple'>",
            '</select>'
          ]);
      var xe = /<|&#?\w+;/;
      function Te(e, t, n, r, i) {
        for (
          var o,
            a,
            l,
            u,
            s,
            c,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ('object' === T(o)) _.merge(d, o.nodeType ? [o] : o);
            else if (xe.test(o)) {
              for (
                a = a || f.appendChild(t.createElement('div')),
                  l = (ge.exec(o) || ['', ''])[1].toLowerCase(),
                  u = ye[l] || ye._default,
                  a.innerHTML = u[1] + _.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              _.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', p = 0; (o = d[p++]); )
          if (r && _.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((s = ae(o)), (a = be(f.appendChild(o), 'script')), s && we(a), n)
          )
            for (c = 0; (o = a[c++]); ) ve.test(o.type || '') && n.push(o);
        return f;
      }
      var _e = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function Se() {
        return !0;
      }
      function Ce() {
        return !1;
      }
      function Ne(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ('focus' === t)
        );
      }
      function Re(e, t, n, r, i, o) {
        var a, l;
        if ('object' == typeof t) {
          for (l in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
            Re(e, l, n, r, t[l], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ('string' == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ce;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return _().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = _.guid++))),
          e.each(function () {
            _.event.add(this, t, i, r, n);
          })
        );
      }
      function Pe(e, t, n) {
        n
          ? (G.set(e, t, !1),
            _.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (_.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = l.call(arguments)),
                    G.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = G.get(this, t)) || r
                      ? G.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (G.set(this, t, {
                      value: _.event.trigger(
                        _.extend(o[0], _.Event.prototype),
                        o.slice(1),
                        this
                      )
                    }),
                    e.stopImmediatePropagation());
              }
            }))
          : void 0 === G.get(e, t) && _.event.add(e, t, Se);
      }
      (_.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            g = G.get(e);
          if (Y(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && _.find.matchesSelector(oe, i),
                n.guid || (n.guid = _.guid++),
                (u = g.events) || (u = g.events = Object.create(null)),
                (a = g.handle) ||
                  (a = g.handle = function (t) {
                    return void 0 !== _ && _.event.triggered !== t.type
                      ? _.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                s = (t = (t || '').match(j) || ['']).length;
              s--;

            )
              (p = m = (l = Ee.exec(t[s]) || [])[1]),
                (h = (l[2] || '').split('.').sort()),
                p &&
                  ((f = _.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = _.event.special[p] || {}),
                  (c = _.extend(
                    {
                      type: p,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && _.expr.match.needsContext.test(i),
                      namespace: h.join('.')
                    },
                    o
                  )),
                  (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (_.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            g = G.hasData(e) && G.get(e);
          if (g && (u = g.events)) {
            for (s = (t = (t || '').match(j) || ['']).length; s--; )
              if (
                ((p = m = (l = Ee.exec(t[s]) || [])[1]),
                (h = (l[2] || '').split('.').sort()),
                p)
              ) {
                for (
                  f = _.event.special[p] || {},
                    d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    l =
                      l[2] &&
                      new RegExp(
                        '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      ),
                    a = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && m !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (l && !l.test(c.namespace)) ||
                      (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                    _.removeEvent(e, p, g.handle),
                  delete u[p]);
              } else for (p in u) _.event.remove(e, p + t[s], n, r, !0);
            _.isEmptyObject(u) && G.remove(e, 'handle events');
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            l = new Array(arguments.length),
            u = _.event.fix(e),
            s = (G.get(this, 'events') || Object.create(null))[u.type] || [],
            c = _.event.special[u.type] || {};
          for (l[0] = u, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = _.event.handlers.call(this, u, s), t = 0;
              (i = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (r = (
                      (_.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, l)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            l = [],
            u = t.delegateCount,
            s = e.target;
          if (u && s.nodeType && !('click' === e.type && e.button >= 1))
            for (; s !== this; s = s.parentNode || this)
              if (
                1 === s.nodeType &&
                ('click' !== e.type || !0 !== s.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                    (a[i] = r.needsContext
                      ? _(i, this).index(s) > -1
                      : _.find(i, this, null, [s]).length),
                    a[i] && o.push(r);
                o.length && l.push({ elem: s, handlers: o });
              }
          return (
            (s = this),
            u < t.length && l.push({ elem: s, handlers: t.slice(u) }),
            l
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(_.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function (e) {
          return e[_.expando] ? e : new _.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                me.test(t.type) &&
                  t.click &&
                  R(t, 'input') &&
                  Pe(t, 'click', Se),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                me.test(t.type) && t.click && R(t, 'input') && Pe(t, 'click'),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (me.test(t.type) &&
                  t.click &&
                  R(t, 'input') &&
                  G.get(t, 'click')) ||
                R(t, 'a')
              );
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (_.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (_.Event = function (e, t) {
          if (!(this instanceof _.Event)) return new _.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Se
                  : Ce),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && _.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[_.expando] = !0);
        }),
        (_.Event.prototype = {
          constructor: _.Event,
          isDefaultPrevented: Ce,
          isPropagationStopped: Ce,
          isImmediatePropagationStopped: Ce,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Se),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Se),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Se),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        _.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && _e.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            }
          },
          _.event.addProp
        ),
        _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          _.event.special[e] = {
            setup: function () {
              return Pe(this, e, Ne), !1;
            },
            trigger: function () {
              return Pe(this, e), !0;
            },
            delegateType: t
          };
        }),
        _.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout'
          },
          function (e, t) {
            _.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || _.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        _.fn.extend({
          on: function (e, t, n, r) {
            return Re(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Re(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                _(e.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ('object' == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ce),
              this.each(function () {
                _.event.remove(this, e, n, t);
              })
            );
          }
        });
      var De = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Ae(e, t) {
        return (
          (R(e, 'table') &&
            R(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
            _(e).children('tbody')[0]) ||
          e
        );
      }
      function qe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function Me(e) {
        return (
          'true/' === (e.type || '').slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function je(e, t) {
        var n, r, i, o, a, l;
        if (1 === t.nodeType) {
          if (G.hasData(e) && (l = G.get(e).events))
            for (i in (G.remove(t, 'handle events'), l))
              for (n = 0, r = l[i].length; n < r; n++)
                _.event.add(t, i, l[i][n]);
          J.hasData(e) &&
            ((o = J.access(e)), (a = _.extend({}, o)), J.set(t, a));
        }
      }
      function Fe(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ('input' !== n && 'textarea' !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Ue(e, t, n, r) {
        t = u(t);
        var i,
          o,
          a,
          l,
          s,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          m = v(h);
        if (m || (d > 1 && 'string' == typeof h && !g.checkClone && Ie.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = h.call(this, i, o.html())), Ue(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (l = (a = _.map(be(i, 'script'), qe)).length; f < d; f++)
            (s = i),
              f !== p &&
                ((s = _.clone(s, !0, !0)), l && _.merge(a, be(s, 'script'))),
              n.call(e[f], s, f);
          if (l)
            for (
              c = a[a.length - 1].ownerDocument, _.map(a, Me), f = 0;
              f < l;
              f++
            )
              (s = a[f]),
                ve.test(s.type || '') &&
                  !G.access(s, 'globalEval') &&
                  _.contains(c, s) &&
                  (s.src && 'module' !== (s.type || '').toLowerCase()
                    ? _._evalUrl &&
                      !s.noModule &&
                      _._evalUrl(
                        s.src,
                        { nonce: s.nonce || s.getAttribute('nonce') },
                        c
                      )
                    : x(s.textContent.replace(Oe, ''), s, c));
        }
        return e;
      }
      function Le(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || _.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && we(be(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      _.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            l = e.cloneNode(!0),
            u = ae(e);
          if (
            !(
              g.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              _.isXMLDoc(e)
            )
          )
            for (a = be(l), r = 0, i = (o = be(e)).length; r < i; r++)
              Fe(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || be(e), a = a || be(l), r = 0, i = o.length;
                r < i;
                r++
              )
                je(o[r], a[r]);
            else je(e, l);
          return (
            (a = be(l, 'script')).length > 0 && we(a, !u && be(e, 'script')), l
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = _.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Y(n)) {
              if ((t = n[G.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                n[G.expando] = void 0;
              }
              n[J.expando] && (n[J.expando] = void 0);
            }
        }
      }),
        _.fn.extend({
          detach: function (e) {
            return Le(this, e, !0);
          },
          remove: function (e) {
            return Le(this, e);
          },
          text: function (e) {
            return W(
              this,
              function (e) {
                return void 0 === e
                  ? _.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ue(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Ae(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ue(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Ae(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ue(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ue(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (_.cleanData(be(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return _.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return W(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  'string' == typeof e &&
                  !De.test(e) &&
                  !ye[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = _.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (_.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ue(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 &&
                  (_.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        _.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
          },
          function (e, t) {
            _.fn[e] = function (e) {
              for (
                var n, r = [], i = _(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  _(i[a])[t](n),
                  s.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ze = new RegExp('^(' + ne + ')(?!px)[a-z%]+$', 'i'),
        Be = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        He = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        We = new RegExp(ie.join('|'), 'i');
      function $e(e, t, n) {
        var r,
          i,
          o,
          a,
          l = e.style;
        return (
          (n = n || Be(e)) &&
            ('' !== (a = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (a = _.style(e, t)),
            !g.pixelBoxStyles() &&
              ze.test(a) &&
              We.test(t) &&
              ((r = l.width),
              (i = l.minWidth),
              (o = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = n.width),
              (l.width = r),
              (l.minWidth = i),
              (l.maxWidth = o))),
          void 0 !== a ? a + '' : a
        );
      }
      function Ve(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function () {
        function e() {
          if (c) {
            (s.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              oe.appendChild(s).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = '1%' !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (o = 12 === t(c.offsetWidth / 3)),
              oe.removeChild(s),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          l,
          u,
          s = b.createElement('div'),
          c = b.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (g.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          _.extend(g, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == l &&
                  ((e = b.createElement('table')),
                  (t = b.createElement('tr')),
                  (r = b.createElement('div')),
                  (e.style.cssText = 'position:absolute;left:-11111px'),
                  (t.style.height = '1px'),
                  (r.style.height = '9px'),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (l = parseInt(i.height) > 3),
                  oe.removeChild(e)),
                l
              );
            }
          }));
      })();
      var Qe = ['Webkit', 'Moz', 'ms'],
        Ke = b.createElement('div').style,
        Ye = {};
      function Xe(e) {
        var t = _.cssProps[e] || Ye[e];
        return (
          t ||
          (e in Ke
            ? e
            : (Ye[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Qe.length;
                    n--;

                  )
                    if ((e = Qe[n] + t) in Ke) return e;
                })(e) || e))
        );
      }
      var Ge = /^(none|table(?!-c[ea]).+)/,
        Je = /^--/,
        Ze = { position: 'absolute', visibility: 'hidden', display: 'block' },
        et = { letterSpacing: '0', fontWeight: '400' };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function nt(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
          l = 0,
          u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
          'margin' === n && (u += _.css(e, n + ie[a], !0, i)),
            r
              ? ('content' === n && (u -= _.css(e, 'padding' + ie[a], !0, i)),
                'margin' !== n &&
                  (u -= _.css(e, 'border' + ie[a] + 'Width', !0, i)))
              : ((u += _.css(e, 'padding' + ie[a], !0, i)),
                'padding' !== n
                  ? (u += _.css(e, 'border' + ie[a] + 'Width', !0, i))
                  : (l += _.css(e, 'border' + ie[a] + 'Width', !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    l -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function rt(e, t, n) {
        var r = Be(e),
          i =
            (!g.boxSizingReliable() || n) &&
            'border-box' === _.css(e, 'boxSizing', !1, r),
          o = i,
          a = $e(e, t, r),
          l = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (ze.test(a)) {
          if (!n) return a;
          a = 'auto';
        }
        return (
          ((!g.boxSizingReliable() && i) ||
            (!g.reliableTrDimensions() && R(e, 'tr')) ||
            'auto' === a ||
            (!parseFloat(a) && 'inline' === _.css(e, 'display', !1, r))) &&
            e.getClientRects().length &&
            ((i = 'border-box' === _.css(e, 'boxSizing', !1, r)),
            (o = l in e) && (a = e[l])),
          (a = parseFloat(a) || 0) +
            nt(e, t, n || (i ? 'border' : 'content'), o, r, a) +
            'px'
        );
      }
      function it(e, t, n, r, i) {
        return new it.prototype.init(e, t, n, r, i);
      }
      _.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = $e(e, 'opacity');
                return '' === n ? '1' : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              l = K(t),
              u = Je.test(t),
              s = e.style;
            if (
              (u || (t = Xe(l)),
              (a = _.cssHooks[t] || _.cssHooks[l]),
              void 0 === n)
            )
              return a && 'get' in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : s[t];
            'string' === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = se(e, t, i)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' !== o ||
                  u ||
                  (n += (i && i[3]) || (_.cssNumber[l] ? '' : 'px')),
                g.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (s[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? s.setProperty(t, n) : (s[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            l = K(t);
          return (
            Je.test(t) || (t = Xe(l)),
            (a = _.cssHooks[t] || _.cssHooks[l]) &&
              'get' in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = $e(e, t, r)),
            'normal' === i && t in et && (i = et[t]),
            '' === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        }
      }),
        _.each(['height', 'width'], function (e, t) {
          _.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ge.test(_.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : He(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Be(e),
                a = !g.scrollboxSize() && 'absolute' === o.position,
                l = (a || r) && 'border-box' === _.css(e, 'boxSizing', !1, o),
                u = r ? nt(e, t, r, l, o) : 0;
              return (
                l &&
                  a &&
                  (u -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      nt(e, t, 'border', !1, o) -
                      0.5
                  )),
                u &&
                  (i = re.exec(n)) &&
                  'px' !== (i[3] || 'px') &&
                  ((e.style[t] = n), (n = _.css(e, t))),
                tt(0, n, u)
              );
            }
          };
        }),
        (_.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat($e(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  He(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        _.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          (_.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = 'string' == typeof n ? n.split(' ') : [n];
                r < 4;
                r++
              )
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            }
          }),
            'margin' !== e && (_.cssHooks[e + t].set = tt);
        }),
        _.fn.extend({
          css: function (e, t) {
            return W(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Be(e), i = t.length; a < i; a++)
                    o[t[a]] = _.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (_.Tween = it),
        (it.prototype = {
          constructor: it,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || _.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (_.cssNumber[n] ? '' : 'px'));
          },
          cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = it.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = _.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : it.propHooks._default.set(this),
              this
            );
          }
        }),
        (it.prototype.init.prototype = it.prototype),
        (it.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = _.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0;
            },
            set: function (e) {
              _.fx.step[e.prop]
                ? _.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!_.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : _.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (_.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing'
        }),
        (_.fx = it.prototype.init),
        (_.fx.step = {});
      var ot,
        at,
        lt = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function st() {
        at &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(st)
            : n.setTimeout(st, _.fx.interval),
          _.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i['margin' + (n = ie[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function dt(e, t, n) {
        for (
          var r,
            i = (pt.tweeners[t] || []).concat(pt.tweeners['*']),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function pt(e, t, n) {
        var r,
          i,
          o = 0,
          a = pt.prefilters.length,
          l = _.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = ot || ct(),
                n = Math.max(0, s.startTime + s.duration - t),
                r = 1 - (n / s.duration || 0),
                o = 0,
                a = s.tweens.length;
              o < a;
              o++
            )
              s.tweens[o].run(r);
            return (
              l.notifyWith(e, [s, r, n]),
              r < 1 && a
                ? n
                : (a || l.notifyWith(e, [s, 1, 0]), l.resolveWith(e, [s]), !1)
            );
          },
          s = l.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(
              !0,
              { specialEasing: {}, easing: _.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = _.Tween(
                e,
                s.opts,
                t,
                n,
                s.opts.specialEasing[t] || s.opts.easing
              );
              return s.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? s.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) s.tweens[n].run(1);
              return (
                t
                  ? (l.notifyWith(e, [s, 1, 0]), l.resolveWith(e, [s, t]))
                  : l.rejectWith(e, [s, t]),
                this
              );
            }
          }),
          c = s.props;
        for (
          !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = K(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = _.cssHooks[r]) && ('expand' in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, s.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = pt.prefilters[o].call(s, e, c, s.opts)))
            return (
              v(r.stop) &&
                (_._queueHooks(s.elem, s.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          _.map(c, dt, s),
          v(s.opts.start) && s.opts.start.call(e, s),
          s
            .progress(s.opts.progress)
            .done(s.opts.done, s.opts.complete)
            .fail(s.opts.fail)
            .always(s.opts.always),
          _.fx.timer(_.extend(u, { elem: e, anim: s, queue: s.opts.queue })),
          s
        );
      }
      (_.Animation = _.extend(pt, {
        tweeners: {
          '*': [
            function (e, t) {
              var n = this.createTween(e, t);
              return se(n.elem, e, re.exec(t), n), n;
            }
          ]
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ['*'])) : (e = e.match(j));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              l,
              u,
              s,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              p = {},
              h = e.style,
              m = e.nodeType && ue(e),
              g = G.get(e, 'fxshow');
            for (r in (n.queue ||
              (null == (a = _._queueHooks(e, 'fx')).unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || l();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, _.queue(e, 'fx').length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), lt.test(i))) {
                if (
                  (delete t[r],
                  (o = o || 'toggle' === i),
                  i === (m ? 'hide' : 'show'))
                ) {
                  if ('show' !== i || !g || void 0 === g[r]) continue;
                  m = !0;
                }
                p[r] = (g && g[r]) || _.style(e, r);
              }
            if ((u = !_.isEmptyObject(t)) || !_.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (s = g && g.display) && (s = G.get(e, 'display')),
                'none' === (c = _.css(e, 'display')) &&
                  (s
                    ? (c = s)
                    : (de([e], !0),
                      (s = e.style.display || s),
                      (c = _.css(e, 'display')),
                      de([e]))),
                ('inline' === c || ('inline-block' === c && null != s)) &&
                  'none' === _.css(e, 'float') &&
                  (u ||
                    (d.done(function () {
                      h.display = s;
                    }),
                    null == s &&
                      ((c = h.display), (s = 'none' === c ? '' : c))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              p))
                u ||
                  (g
                    ? 'hidden' in g && (m = g.hidden)
                    : (g = G.access(e, 'fxshow', { display: s })),
                  o && (g.hidden = !m),
                  m && de([e], !0),
                  d.done(function () {
                    for (r in (m || de([e]), G.remove(e, 'fxshow'), p))
                      _.style(e, r, p[r]);
                  })),
                  (u = dt(m ? g[r] : 0, r, d)),
                  r in g ||
                    ((g[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
          }
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
      })),
        (_.speed = function (e, t, n) {
          var r =
            e && 'object' == typeof e
              ? _.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t)
                };
          return (
            _.fx.off
              ? (r.duration = 0)
              : 'number' != typeof r.duration &&
                (r.duration in _.fx.speeds
                  ? (r.duration = _.fx.speeds[r.duration])
                  : (r.duration = _.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function () {
              v(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue);
            }),
            r
          );
        }),
        _.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = _.isEmptyObject(e),
              o = _.speed(t, n, r),
              a = function () {
                var t = pt(this, _.extend({}, e), o);
                (i || G.get(this, 'finish')) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + 'queueHooks',
                  o = _.timers,
                  a = G.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ut.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || _.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t,
                  n = G.get(this),
                  r = n[e + 'queue'],
                  i = n[e + 'queueHooks'],
                  o = _.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    _.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        _.each(['toggle', 'show', 'hide'], function (e, t) {
          var n = _.fn[t];
          _.fn[t] = function (e, r, i) {
            return null == e || 'boolean' == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, r, i);
          };
        }),
        _.each(
          {
            slideDown: ft('show'),
            slideUp: ft('hide'),
            slideToggle: ft('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' }
          },
          function (e, t) {
            _.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (_.timers = []),
        (_.fx.tick = function () {
          var e,
            t = 0,
            n = _.timers;
          for (ot = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || _.fx.stop(), (ot = void 0);
        }),
        (_.fx.timer = function (e) {
          _.timers.push(e), _.fx.start();
        }),
        (_.fx.interval = 13),
        (_.fx.start = function () {
          at || ((at = !0), st());
        }),
        (_.fx.stop = function () {
          at = null;
        }),
        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (_.fn.delay = function (e, t) {
          return (
            (e = (_.fx && _.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement('input'),
            t = b
              .createElement('select')
              .appendChild(b.createElement('option'));
          (e.type = 'checkbox'),
            (g.checkOn = '' !== e.value),
            (g.optSelected = t.selected),
            ((e = b.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (g.radioValue = 't' === e.value);
        })();
      var ht,
        mt = _.expr.attrHandle;
      _.fn.extend({
        attr: function (e, t) {
          return W(this, _.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            _.removeAttr(this, e);
          });
        }
      }),
        _.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? _.prop(e, t, n)
                : ((1 === o && _.isXMLDoc(e)) ||
                    (i =
                      _.attrHooks[t.toLowerCase()] ||
                      (_.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void _.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = _.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!g.radioValue && 'radio' === t && R(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(j);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          }
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = mt[t] || _.find.attr;
          mt[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = mt[a]),
                (mt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (mt[a] = o)),
              i
            );
          };
        });
      var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(j) || []).join(' ');
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function wt(e) {
        return Array.isArray(e)
          ? e
          : ('string' == typeof e && e.match(j)) || [];
      }
      _.fn.extend({
        prop: function (e, t) {
          return W(this, _.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[_.propFix[e] || e];
          });
        }
      }),
        _.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && _.isXMLDoc(e)) ||
                  ((t = _.propFix[t] || t), (i = _.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = _.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: 'htmlFor', class: 'className' }
        }),
        g.optSelected ||
          (_.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        _.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable'
          ],
          function () {
            _.propFix[this.toLowerCase()] = this;
          }
        ),
        _.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              l,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                _(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = wt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && ' ' + yt(i) + ' '))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                  i !== (l = yt(r)) && n.setAttribute('class', l);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              l,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                _(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = wt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && ' ' + yt(i) + ' '))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(' ' + o + ' ') > -1; )
                      r = r.replace(' ' + o + ' ', ' ');
                  i !== (l = yt(r)) && n.setAttribute('class', l);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function (n) {
                  _(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = _(this), a = wt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = bt(this)) && G.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e
                            ? ''
                            : G.get(this, '__className__') || ''
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = ' ' + e + ' '; (n = this[r++]); )
              if (1 === n.nodeType && (' ' + yt(bt(n)) + ' ').indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var xt = /\r/g;
      _.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = v(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, _(this).val()) : e)
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = _.map(i, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t =
                    _.valHooks[this.type] ||
                    _.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : 'string' == typeof (n = i.value)
              ? n.replace(xt, '')
              : null == n
              ? ''
              : n
            : void 0;
        }
      }),
        _.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = _.find.attr(e, 'value');
                return null != t ? t : yt(_.text(e));
              }
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = 'select-one' === e.type,
                  l = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !R(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = _(n).val()), a)) return t;
                    l.push(t);
                  }
                return l;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = _.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        _.each(['radio', 'checkbox'], function () {
          (_.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = _.inArray(_(e).val(), t) > -1);
            }
          }),
            g.checkOn ||
              (_.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (g.focusin = 'onfocusin' in n);
      var Tt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function (e) {
          e.stopPropagation();
        };
      _.extend(_.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            l,
            u,
            s,
            c,
            f,
            d,
            h = [r || b],
            m = p.call(e, 'type') ? e.type : e,
            g = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((a = d = l = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Tt.test(m + _.event.triggered) &&
              (m.indexOf('.') > -1 &&
                ((g = m.split('.')), (m = g.shift()), g.sort()),
              (s = m.indexOf(':') < 0 && 'on' + m),
              ((e = e[_.expando]
                ? e
                : new _.Event(m, 'object' == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = g.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : _.makeArray(t, [e])),
              (f = _.event.special[m] || {}),
              i || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!i && !f.noBubble && !y(r)) {
              for (
                u = f.delegateType || m, Tt.test(u + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (l = a);
              l === (r.ownerDocument || b) &&
                h.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = o > 1 ? u : f.bindType || m),
                (c =
                  (G.get(a, 'events') || Object.create(null))[e.type] &&
                  G.get(a, 'handle')) && c.apply(a, t),
                (c = s && a[s]) &&
                  c.apply &&
                  Y(a) &&
                  ((e.result = c.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              i ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !Y(r) ||
                (s &&
                  v(r[m]) &&
                  !y(r) &&
                  ((l = r[s]) && (r[s] = null),
                  (_.event.triggered = m),
                  e.isPropagationStopped() && d.addEventListener(m, _t),
                  r[m](),
                  e.isPropagationStopped() && d.removeEventListener(m, _t),
                  (_.event.triggered = void 0),
                  l && (r[s] = l))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
          _.event.trigger(r, null, t);
        }
      }),
        _.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              _.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0);
          }
        }),
        g.focusin ||
          _.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var n = function (e) {
              _.event.simulate(t, e.target, _.event.fix(e));
            };
            _.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t);
                i || r.addEventListener(e, n, !0), G.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = G.access(r, t) - 1;
                i
                  ? G.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), G.remove(r, t));
              }
            };
          });
      var kt = n.location,
        Et = { guid: Date.now() },
        St = /\?/;
      _.parseXML = function (e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName('parsererror').length) ||
            _.error('Invalid XML: ' + e),
          t
        );
      };
      var Ct = /\[\]$/,
        Nt = /\r?\n/g,
        Rt = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          _.each(t, function (t, i) {
            n || Ct.test(e)
              ? r(e, i)
              : Dt(
                  e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
                  i,
                  n,
                  r
                );
          });
        else if (n || 'object' !== T(t)) r(e, t);
        else for (i in t) Dt(e + '[' + i + ']', t[i], n, r);
      }
      (_.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = v(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              '=' +
              encodeURIComponent(null == n ? '' : n);
          };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
          _.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join('&');
      }),
        _.fn.extend({
          serialize: function () {
            return _.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = _.prop(this, 'elements');
              return e ? _.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !_(this).is(':disabled') &&
                  Pt.test(this.nodeName) &&
                  !Rt.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = _(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? _.map(n, function (e) {
                      return { name: t.name, value: e.replace(Nt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(Nt, '\r\n') };
              })
              .get();
          }
        });
      var It = /%20/g,
        Ot = /#.*$/,
        At = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ft = {},
        Ut = {},
        Lt = '*/'.concat('*'),
        zt = b.createElement('a');
      function Bt(e) {
        return function (t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var r,
            i = 0,
            o = t.toLowerCase().match(j) || [];
          if (v(n))
            for (; (r = o[i++]); )
              '+' === r[0]
                ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ht(e, t, n, r) {
        var i = {},
          o = e === Ut;
        function a(l) {
          var u;
          return (
            (i[l] = !0),
            _.each(e[l] || [], function (e, l) {
              var s = l(t, n, r);
              return 'string' != typeof s || o || i[s]
                ? o
                  ? !(u = s)
                  : void 0
                : (t.dataTypes.unshift(s), a(s), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i['*'] && a('*'));
      }
      function Wt(e, t) {
        var n,
          r,
          i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e;
      }
      (zt.href = kt.href),
        _.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              kt.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Lt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript'
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON'
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': _.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, _.ajaxSettings), t) : Wt(_.ajaxSettings, e);
          },
          ajaxPrefilter: Bt(Ft),
          ajaxTransport: Bt(Ut),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              l,
              u,
              s,
              c,
              f,
              d,
              p = _.ajaxSetup({}, t),
              h = p.context || p,
              m = p.context && (h.nodeType || h.jquery) ? _(h) : _.event,
              g = _.Deferred(),
              v = _.Callbacks('once memory'),
              y = p.statusCode || {},
              w = {},
              x = {},
              T = 'canceled',
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (s) {
                    if (!a)
                      for (a = {}; (t = qt.exec(o)); )
                        a[t[1].toLowerCase() + ' '] = (
                          a[t[1].toLowerCase() + ' '] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + ' '];
                  }
                  return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function () {
                  return s ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == s &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == s && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (s) k.always(e[k.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), E(0, t), this;
                }
              };
            if (
              (g.promise(k),
              (p.url = ((e || p.url || kt.href) + '').replace(
                jt,
                kt.protocol + '//'
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match(j) || [
                ''
              ]),
              null == p.crossDomain)
            ) {
              u = b.createElement('a');
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    zt.protocol + '//' + zt.host != u.protocol + '//' + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                'string' != typeof p.data &&
                (p.data = _.param(p.data, p.traditional)),
              Ht(Ft, p, t, k),
              s)
            )
              return k;
            for (f in ((c = _.event && p.global) &&
              0 == _.active++ &&
              _.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Mt.test(p.type)),
            (i = p.url.replace(Ot, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                (p.data = p.data.replace(It, '+'))
              : ((d = p.url.slice(i.length)),
                p.data &&
                  (p.processData || 'string' == typeof p.data) &&
                  ((i += (St.test(i) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache &&
                  ((i = i.replace(At, '$1')),
                  (d = (St.test(i) ? '&' : '?') + '_=' + Et.guid++ + d)),
                (p.url = i + d)),
            p.ifModified &&
              (_.lastModified[i] &&
                k.setRequestHeader('If-Modified-Since', _.lastModified[i]),
              _.etag[i] && k.setRequestHeader('If-None-Match', _.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              k.setRequestHeader('Content-Type', p.contentType),
            k.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ('*' !== p.dataTypes[0] ? ', ' + Lt + '; q=0.01' : '')
                : p.accepts['*']
            ),
            p.headers))
              k.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || s))
              return k.abort();
            if (
              ((T = 'abort'),
              v.add(p.complete),
              k.done(p.success),
              k.fail(p.error),
              (r = Ht(Ut, p, t, k)))
            ) {
              if (((k.readyState = 1), c && m.trigger('ajaxSend', [k, p]), s))
                return k;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function () {
                  k.abort('timeout');
                }, p.timeout));
              try {
                (s = !1), r.send(w, E);
              } catch (e) {
                if (s) throw e;
                E(-1, e);
              }
            } else E(-1, 'No Transport');
            function E(e, t, a, u) {
              var f,
                d,
                b,
                w,
                x,
                T = t;
              s ||
                ((s = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (o = u || ''),
                (k.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (w = (function (e, t, n) {
                    for (
                      var r, i, o, a, l = e.contents, u = e.dataTypes;
                      '*' === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                      for (i in l)
                        if (l[i] && l[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + ' ' + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(p, k, a)),
                !f &&
                  _.inArray('script', p.dataTypes) > -1 &&
                  (p.converters['text script'] = function () {}),
                (w = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    l,
                    u,
                    s = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      s[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = u;
                      else if ('*' !== u && u !== o) {
                        if (!(a = s[u + ' ' + o] || s['* ' + o]))
                          for (i in s)
                            if (
                              (l = i.split(' '))[1] === o &&
                              (a = s[u + ' ' + l[0]] || s['* ' + l[0]])
                            ) {
                              !0 === a
                                ? (a = s[i])
                                : !0 !== s[i] && ((o = l[0]), c.unshift(l[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: a
                                  ? e
                                  : 'No conversion from ' + u + ' to ' + o
                              };
                            }
                      }
                  return { state: 'success', data: t };
                })(p, w, k, f)),
                f
                  ? (p.ifModified &&
                      ((x = k.getResponseHeader('Last-Modified')) &&
                        (_.lastModified[i] = x),
                      (x = k.getResponseHeader('etag')) && (_.etag[i] = x)),
                    204 === e || 'HEAD' === p.type
                      ? (T = 'nocontent')
                      : 304 === e
                      ? (T = 'notmodified')
                      : ((T = w.state), (d = w.data), (f = !(b = w.error))))
                  : ((b = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || T) + ''),
                f ? g.resolveWith(h, [d, T, k]) : g.rejectWith(h, [k, T, b]),
                k.statusCode(y),
                (y = void 0),
                c &&
                  m.trigger(f ? 'ajaxSuccess' : 'ajaxError', [k, p, f ? d : b]),
                v.fireWith(h, [k, T]),
                c &&
                  (m.trigger('ajaxComplete', [k, p]),
                  --_.active || _.event.trigger('ajaxStop')));
            }
            return k;
          },
          getJSON: function (e, t, n) {
            return _.get(e, t, n, 'json');
          },
          getScript: function (e, t) {
            return _.get(e, void 0, t, 'script');
          }
        }),
        _.each(['get', 'post'], function (e, t) {
          _[t] = function (e, n, r, i) {
            return (
              v(n) && ((i = i || r), (r = n), (n = void 0)),
              _.ajax(
                _.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  _.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        _.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            'content-type' === t.toLowerCase() &&
              (e.contentType = e.headers[t] || '');
        }),
        (_._evalUrl = function (e, t, n) {
          return _.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (e) {
              _.globalEval(e, t, n);
            }
          });
        }),
        _.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  _(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = _(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              _(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not('body')
                .each(function () {
                  _(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (_.expr.pseudos.hidden = function (e) {
          return !_.expr.pseudos.visible(e);
        }),
        (_.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (_.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var $t = { 0: 200, 1223: 204 },
        Vt = _.ajaxSettings.xhr();
      (g.cors = !!Vt && 'withCredentials' in Vt),
        (g.ajax = Vt = !!Vt),
        _.ajaxTransport(function (e) {
          var t, r;
          if (g.cors || (Vt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  l = e.xhr();
                if (
                  (l.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) l[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  l.overrideMimeType &&
                  l.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i['X-Requested-With'] ||
                  (i['X-Requested-With'] = 'XMLHttpRequest'),
                i))
                  l.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                      'abort' === e
                        ? l.abort()
                        : 'error' === e
                        ? 'number' != typeof l.status
                          ? o(0, 'error')
                          : o(l.status, l.statusText)
                        : o(
                            $t[l.status] || l.status,
                            l.statusText,
                            'text' !== (l.responseType || 'text') ||
                              'string' != typeof l.responseText
                              ? { binary: l.response }
                              : { text: l.responseText },
                            l.getAllResponseHeaders()
                          ));
                  };
                }),
                  (l.onload = t()),
                  (r = l.onerror = l.ontimeout = t('error')),
                  void 0 !== l.onabort
                    ? (l.onabort = r)
                    : (l.onreadystatechange = function () {
                        4 === l.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t('abort'));
                try {
                  l.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              }
            };
        }),
        _.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        _.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return _.globalEval(e), e;
            }
          }
        }),
        _.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET');
        }),
        _.ajaxTransport('script', function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = _('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i('error' === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              }
            };
        });
      var Qt,
        Kt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      _.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Kt.pop() || _.expando + '_' + Et.guid++;
          return (this[e] = !0), e;
        }
      }),
        _.ajaxPrefilter('json jsonp', function (e, t, r) {
          var i,
            o,
            a,
            l =
              !1 !== e.jsonp &&
              (Yt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 ===
                    (e.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  Yt.test(e.data) &&
                  'data');
          if (l || 'jsonp' === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = v(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              l
                ? (e[l] = e[l].replace(Yt, '$1' + i))
                : !1 !== e.jsonp &&
                  (e.url += (St.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
              (e.converters['script json'] = function () {
                return a || _.error(i + ' was not called'), a[0];
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? _(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(i)),
                  a && v(o) && o(a[0]),
                  (a = o = void 0);
              }),
              'script'
            );
        }),
        (g.createHTMLDocument =
          (((Qt = b.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          2 === Qt.childNodes.length)),
        (_.parseHTML = function (e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (g.createHTMLDocument
                  ? (((r = (t = b.implementation.createHTMLDocument(
                      ''
                    )).createElement('base')).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (o = !n && []),
              (i = P.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Te([e], t, o)),
                  o && o.length && _(o).remove(),
                  _.merge([], i.childNodes)));
          var r, i, o;
        }),
        (_.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            l = e.indexOf(' ');
          return (
            l > -1 && ((r = yt(e.slice(l))), (e = e.slice(0, l))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && 'object' == typeof t && (i = 'POST'),
            a.length > 0 &&
              _.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? _('<div>').append(_.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (_.expr.pseudos.animated = function (e) {
          return _.grep(_.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (_.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              l,
              u,
              s = _.css(e, 'position'),
              c = _(e),
              f = {};
            'static' === s && (e.style.position = 'relative'),
              (l = c.offset()),
              (o = _.css(e, 'top')),
              (u = _.css(e, 'left')),
              ('absolute' === s || 'fixed' === s) &&
              (o + u).indexOf('auto') > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              v(t) && (t = t.call(e, n, _.extend({}, l))),
              null != t.top && (f.top = t.top - l.top + a),
              null != t.left && (f.left = t.left - l.left + i),
              'using' in t
                ? t.using.call(e, f)
                : ('number' == typeof f.top && (f.top += 'px'),
                  'number' == typeof f.left && (f.left += 'px'),
                  c.css(f));
          }
        }),
        _.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    _.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ('fixed' === _.css(r, 'position'))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  'static' === _.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = _(e).offset()).top += _.css(e, 'borderTopWidth', !0)),
                  (i.left += _.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - i.top - _.css(r, 'marginTop', !0),
                left: t.left - i.left - _.css(r, 'marginLeft', !0)
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && 'static' === _.css(e, 'position');

              )
                e = e.offsetParent;
              return e || oe;
            });
          }
        }),
        _.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, t) {
            var n = 'pageYOffset' === t;
            _.fn[e] = function (r) {
              return W(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        _.each(['top', 'left'], function (e, t) {
          _.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
            if (n)
              return (n = $e(e, t)), ze.test(n) ? _(e).position()[t] + 'px' : n;
          });
        }),
        _.each({ Height: 'height', Width: 'width' }, function (e, t) {
          _.each(
            { padding: 'inner' + e, content: t, '': 'outer' + e },
            function (n, r) {
              _.fn[r] = function (i, o) {
                var a = arguments.length && (n || 'boolean' != typeof i),
                  l = n || (!0 === i || !0 === o ? 'margin' : 'border');
                return W(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf('outer')
                        ? t['inner' + e]
                        : t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body['scroll' + e],
                          o['scroll' + e],
                          t.body['offset' + e],
                          o['offset' + e],
                          o['client' + e]
                        ))
                      : void 0 === i
                      ? _.css(t, n, l)
                      : _.style(t, n, i, l);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        _.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend'
          ],
          function (e, t) {
            _.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        _.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        _.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (e, t) {
            _.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (_.proxy = function (e, t) {
        var n, r, i;
        if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (r = l.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(l.call(arguments)));
            }).guid = e.guid = e.guid || _.guid++),
            i
          );
      }),
        (_.holdReady = function (e) {
          e ? _.readyWait++ : _.ready(!0);
        }),
        (_.isArray = Array.isArray),
        (_.parseJSON = JSON.parse),
        (_.nodeName = R),
        (_.isFunction = v),
        (_.isWindow = y),
        (_.camelCase = K),
        (_.type = T),
        (_.now = Date.now),
        (_.isNumeric = function (e) {
          var t = _.type(e);
          return (
            ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (_.trim = function (e) {
          return null == e ? '' : (e + '').replace(Xt, '');
        }),
        void 0 ===
          (r = function () {
            return _;
          }.apply(t, [])) || (e.exports = r);
      var Gt = n.jQuery,
        Jt = n.$;
      return (
        (_.noConflict = function (e) {
          return (
            n.$ === _ && (n.$ = Jt), e && n.jQuery === _ && (n.jQuery = Gt), _
          );
        }),
        void 0 === i && (n.jQuery = n.$ = _),
        _
      );
    });
  },
  function (e, t, n) {
    var r = n(3),
      i = n(22);
    'string' == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, '']]);
    var o = { insert: 'head', singleton: !1 };
    r(i, o);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    var r = n(3),
      i = n(23);
    'string' == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, '']]);
    var o = { insert: 'head', singleton: !1 };
    r(i, o);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    var r = n(3),
      i = n(24);
    'string' == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, '']]);
    var o = { insert: 'head', singleton: !1 };
    r(i, o);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    'use strict';
    e.exports = n(25);
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      l = n(8);
    a.a.render(i.a.createElement(l.a, null), document.getElementById('root'));
  },
  function (e, t, n) {
    'use strict';
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(6),
      i = 'function' == typeof Symbol && Symbol.for,
      o = i ? Symbol.for('react.element') : 60103,
      a = i ? Symbol.for('react.portal') : 60106,
      l = i ? Symbol.for('react.fragment') : 60107,
      u = i ? Symbol.for('react.strict_mode') : 60108,
      s = i ? Symbol.for('react.profiler') : 60114,
      c = i ? Symbol.for('react.provider') : 60109,
      f = i ? Symbol.for('react.context') : 60110,
      d = i ? Symbol.for('react.forward_ref') : 60112,
      p = i ? Symbol.for('react.suspense') : 60113,
      h = i ? Symbol.for('react.memo') : 60115,
      m = i ? Symbol.for('react.lazy') : 60116,
      g = 'function' == typeof Symbol && Symbol.iterator;
    function v(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      b = {};
    function w(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || y);
    }
    function x() {}
    function T(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || y);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (x.prototype = w.prototype);
    var _ = (T.prototype = new x());
    (_.constructor = T), r(_, w.prototype), (_.isPureReactComponent = !0);
    var k = { current: null },
      E = Object.prototype.hasOwnProperty,
      S = { key: !0, ref: !0, __self: !0, __source: !0 };
    function C(e, t, n) {
      var r,
        i = {},
        a = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (a = '' + t.key),
        t))
          E.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
      var u = arguments.length - 2;
      if (1 === u) i.children = n;
      else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        i.children = s;
      }
      if (e && e.defaultProps)
        for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
      return {
        $$typeof: o,
        type: e,
        key: a,
        ref: l,
        props: i,
        _owner: k.current
      };
    }
    function N(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var R = /\/+/g,
      P = [];
    function D(e, t, n, r) {
      if (P.length) {
        var i = P.pop();
        return (
          (i.result = e),
          (i.keyPrefix = t),
          (i.func = n),
          (i.context = r),
          (i.count = 0),
          i
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function I(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > P.length && P.push(e);
    }
    function O(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, i) {
            var l = typeof t;
            ('undefined' !== l && 'boolean' !== l) || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else
              switch (l) {
                case 'string':
                case 'number':
                  u = !0;
                  break;
                case 'object':
                  switch (t.$$typeof) {
                    case o:
                    case a:
                      u = !0;
                  }
              }
            if (u) return r(i, t, '' === n ? '.' + A(t, 0) : n), 1;
            if (((u = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(t)))
              for (var s = 0; s < t.length; s++) {
                var c = n + A((l = t[s]), s);
                u += e(l, c, r, i);
              }
            else if (
              (null === t || 'object' != typeof t
                ? (c = null)
                : (c =
                    'function' == typeof (c = (g && t[g]) || t['@@iterator'])
                      ? c
                      : null),
              'function' == typeof c)
            )
              for (t = c.call(t), s = 0; !(l = t.next()).done; )
                u += e((l = l.value), (c = n + A(l, s++)), r, i);
            else if ('object' === l)
              throw (
                ((r = '' + t),
                Error(
                  v(
                    31,
                    '[object Object]' === r
                      ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                      : r,
                    ''
                  )
                ))
              );
            return u;
          })(e, '', t, n);
    }
    function A(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { '=': '=0', ':': '=2' };
            return (
              '$' +
              ('' + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function q(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function M(e, t, n) {
      var r = e.result,
        i = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? j(e, r, n, function (e) {
              return e;
            })
          : null != e &&
            (N(e) &&
              (e = (function (e, t) {
                return {
                  $$typeof: o,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                i +
                  (!e.key || (t && t.key === e.key)
                    ? ''
                    : ('' + e.key).replace(R, '$&/') + '/') +
                  n
              )),
            r.push(e));
    }
    function j(e, t, n, r, i) {
      var o = '';
      null != n && (o = ('' + n).replace(R, '$&/') + '/'),
        O(e, M, (t = D(t, o, r, i))),
        I(t);
    }
    var F = { current: null };
    function U() {
      var e = F.current;
      if (null === e) throw Error(v(321));
      return e;
    }
    var L = {
      ReactCurrentDispatcher: F,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: k,
      IsSomeRendererActing: { current: !1 },
      assign: r
    };
    (t.Children = {
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return j(e, r, null, t, n), r;
      },
      forEach: function (e, t, n) {
        if (null == e) return e;
        O(e, q, (t = D(null, null, t, n))), I(t);
      },
      count: function (e) {
        return O(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          j(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!N(e)) throw Error(v(143));
        return e;
      }
    }),
      (t.Component = w),
      (t.Fragment = l),
      (t.Profiler = s),
      (t.PureComponent = T),
      (t.StrictMode = u),
      (t.Suspense = p),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
      (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(v(267, e));
        var i = r({}, e.props),
          a = e.key,
          l = e.ref,
          u = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((l = t.ref), (u = k.current)),
            void 0 !== t.key && (a = '' + t.key),
            e.type && e.type.defaultProps)
          )
            var s = e.type.defaultProps;
          for (c in t)
            E.call(t, c) &&
              !S.hasOwnProperty(c) &&
              (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) i.children = n;
        else if (1 < c) {
          s = Array(c);
          for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
          i.children = s;
        }
        return {
          $$typeof: o,
          type: e.type,
          key: a,
          ref: l,
          props: i,
          _owner: u
        };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: c, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = C),
      (t.createFactory = function (e) {
        var t = C.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: d, render: e };
      }),
      (t.isValidElement = N),
      (t.lazy = function (e) {
        return { $$typeof: m, _ctor: e, _status: -1, _result: null };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return U().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return U().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return U().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, n) {
        return U().useImperativeHandle(e, t, n);
      }),
      (t.useLayoutEffect = function (e, t) {
        return U().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return U().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, n) {
        return U().useReducer(e, t, n);
      }),
      (t.useRef = function (e) {
        return U().useRef(e);
      }),
      (t.useState = function (e) {
        return U().useState(e);
      }),
      (t.version = '16.13.1');
  },
  function (e, t, n) {
    'use strict';
    /** @license React v16.13.1
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(0),
      i = n(6),
      o = n(17);
    function a(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    if (!r) throw Error(a(227));
    function l(e, t, n, r, i, o, a, l, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var u = !1,
      s = null,
      c = !1,
      f = null,
      d = {
        onError: function (e) {
          (u = !0), (s = e);
        }
      };
    function p(e, t, n, r, i, o, a, c, f) {
      (u = !1), (s = null), l.apply(d, arguments);
    }
    var h = null,
      m = null,
      g = null;
    function v(e, t, n) {
      var r = e.type || 'unknown-event';
      (e.currentTarget = g(n)),
        (function (e, t, n, r, i, o, l, d, h) {
          if ((p.apply(this, arguments), u)) {
            if (!u) throw Error(a(198));
            var m = s;
            (u = !1), (s = null), c || ((c = !0), (f = m));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    var y = null,
      b = {};
    function w() {
      if (y)
        for (var e in b) {
          var t = b[e],
            n = y.indexOf(e);
          if (!(-1 < n)) throw Error(a(96, e));
          if (!T[n]) {
            if (!t.extractEvents) throw Error(a(97, e));
            for (var r in ((T[n] = t), (n = t.eventTypes))) {
              var i = void 0,
                o = n[r],
                l = t,
                u = r;
              if (_.hasOwnProperty(u)) throw Error(a(99, u));
              _[u] = o;
              var s = o.phasedRegistrationNames;
              if (s) {
                for (i in s) s.hasOwnProperty(i) && x(s[i], l, u);
                i = !0;
              } else
                o.registrationName
                  ? (x(o.registrationName, l, u), (i = !0))
                  : (i = !1);
              if (!i) throw Error(a(98, r, e));
            }
          }
        }
    }
    function x(e, t, n) {
      if (k[e]) throw Error(a(100, e));
      (k[e] = t), (E[e] = t.eventTypes[n].dependencies);
    }
    var T = [],
      _ = {},
      k = {},
      E = {};
    function S(e) {
      var t,
        n = !1;
      for (t in e)
        if (e.hasOwnProperty(t)) {
          var r = e[t];
          if (!b.hasOwnProperty(t) || b[t] !== r) {
            if (b[t]) throw Error(a(102, t));
            (b[t] = r), (n = !0);
          }
        }
      n && w();
    }
    var C = !(
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      N = null,
      R = null,
      P = null;
    function D(e) {
      if ((e = m(e))) {
        if ('function' != typeof N) throw Error(a(280));
        var t = e.stateNode;
        t && ((t = h(t)), N(e.stateNode, e.type, t));
      }
    }
    function I(e) {
      R ? (P ? P.push(e) : (P = [e])) : (R = e);
    }
    function O() {
      if (R) {
        var e = R,
          t = P;
        if (((P = R = null), D(e), t)) for (e = 0; e < t.length; e++) D(t[e]);
      }
    }
    function A(e, t) {
      return e(t);
    }
    function q(e, t, n, r, i) {
      return e(t, n, r, i);
    }
    function M() {}
    var j = A,
      F = !1,
      U = !1;
    function L() {
      (null === R && null === P) || (M(), O());
    }
    function z(e, t, n) {
      if (U) return e(t, n);
      U = !0;
      try {
        return j(e, t, n);
      } finally {
        (U = !1), L();
      }
    }
    var B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      H = Object.prototype.hasOwnProperty,
      W = {},
      $ = {};
    function V(e, t, n, r, i, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o);
    }
    var Q = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        Q[e] = new V(e, 0, !1, e, null, !1);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv']
      ].forEach(function (e) {
        var t = e[0];
        Q[t] = new V(t, 1, !1, e[1], null, !1);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
        e
      ) {
        Q[e] = new V(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha'
      ].forEach(function (e) {
        Q[e] = new V(e, 2, !1, e, null, !1);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          Q[e] = new V(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        Q[e] = new V(e, 3, !0, e, null, !1);
      }),
      ['capture', 'download'].forEach(function (e) {
        Q[e] = new V(e, 4, !1, e, null, !1);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        Q[e] = new V(e, 6, !1, e, null, !1);
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        Q[e] = new V(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var K = /[\-:]([a-z])/g;
    function Y(e) {
      return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(K, Y);
        Q[t] = new V(t, 1, !1, e, null, !1);
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(K, Y);
          Q[t] = new V(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1);
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(K, Y);
        Q[t] = new V(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1);
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        Q[e] = new V(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (Q.xlinkHref = new V(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        Q[e] = new V(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var X = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(e, t, n, r) {
      var i = Q.hasOwnProperty(t) ? Q[t] : null;
      (null !== i
        ? 0 === i.type
        : !r &&
          2 < t.length &&
          ('o' === t[0] || 'O' === t[0]) &&
          ('n' === t[1] || 'N' === t[1])) ||
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0;
                case 'boolean':
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                        'aria-' !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, i, r) && (n = null),
        r || null === i
          ? (function (e) {
              return (
                !!H.call($, e) ||
                (!H.call(W, e) && (B.test(e) ? ($[e] = !0) : ((W[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
          : i.mustUseProperty
          ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    X.hasOwnProperty('ReactCurrentDispatcher') ||
      (X.ReactCurrentDispatcher = { current: null }),
      X.hasOwnProperty('ReactCurrentBatchConfig') ||
        (X.ReactCurrentBatchConfig = { suspense: null });
    var J = /^(.*)[\\\/]/,
      Z = 'function' == typeof Symbol && Symbol.for,
      ee = Z ? Symbol.for('react.element') : 60103,
      te = Z ? Symbol.for('react.portal') : 60106,
      ne = Z ? Symbol.for('react.fragment') : 60107,
      re = Z ? Symbol.for('react.strict_mode') : 60108,
      ie = Z ? Symbol.for('react.profiler') : 60114,
      oe = Z ? Symbol.for('react.provider') : 60109,
      ae = Z ? Symbol.for('react.context') : 60110,
      le = Z ? Symbol.for('react.concurrent_mode') : 60111,
      ue = Z ? Symbol.for('react.forward_ref') : 60112,
      se = Z ? Symbol.for('react.suspense') : 60113,
      ce = Z ? Symbol.for('react.suspense_list') : 60120,
      fe = Z ? Symbol.for('react.memo') : 60115,
      de = Z ? Symbol.for('react.lazy') : 60116,
      pe = Z ? Symbol.for('react.block') : 60121,
      he = 'function' == typeof Symbol && Symbol.iterator;
    function me(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (he && e[he]) || e['@@iterator'])
        ? e
        : null;
    }
    function ge(e) {
      if (null == e) return null;
      if ('function' == typeof e) return e.displayName || e.name || null;
      if ('string' == typeof e) return e;
      switch (e) {
        case ne:
          return 'Fragment';
        case te:
          return 'Portal';
        case ie:
          return 'Profiler';
        case re:
          return 'StrictMode';
        case se:
          return 'Suspense';
        case ce:
          return 'SuspenseList';
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case ae:
            return 'Context.Consumer';
          case oe:
            return 'Context.Provider';
          case ue:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ''),
              e.displayName ||
                ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
          case fe:
            return ge(e.type);
          case pe:
            return ge(e.render);
          case de:
            if ((e = 1 === e._status ? e._result : null)) return ge(e);
        }
      return null;
    }
    function ve(e) {
      var t = '';
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = '';
            break e;
          default:
            var r = e._debugOwner,
              i = e._debugSource,
              o = ge(e.type);
            (n = null),
              r && (n = ge(r.type)),
              (r = o),
              (o = ''),
              i
                ? (o =
                    ' (at ' +
                    i.fileName.replace(J, '') +
                    ':' +
                    i.lineNumber +
                    ')')
                : n && (o = ' (created by ' + n + ')'),
              (n = '\n    in ' + (r || 'Unknown') + o);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    function ye(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return e;
        default:
          return '';
      }
    }
    function be(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      );
    }
    function we(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = be(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var i = n.get,
              o = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return i.call(this);
                },
                set: function (e) {
                  (r = '' + e), o.call(this, e);
                }
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = '' + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                }
              }
            );
          }
        })(e));
    }
    function xe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = '';
      return (
        e && (r = be(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function Te(e, t) {
      var n = t.checked;
      return i({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      });
    }
    function _e(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = ye(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            'checkbox' === t.type || 'radio' === t.type
              ? null != t.checked
              : null != t.value
        });
    }
    function ke(e, t) {
      null != (t = t.checked) && G(e, 'checked', t, !1);
    }
    function Ee(e, t) {
      ke(e, t);
      var n = ye(t.value),
        r = t.type;
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n);
      else if ('submit' === r || 'reset' === r)
        return void e.removeAttribute('value');
      t.hasOwnProperty('value')
        ? Ce(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Ce(e, t.type, ye(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Se(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
          !(
            ('submit' !== r && 'reset' !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = '' + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
    }
    function Ce(e, t, n) {
      ('number' === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
    }
    function Ne(e, t) {
      return (
        (e = i({ children: void 0 }, t)),
        (t = (function (e) {
          var t = '';
          return (
            r.Children.forEach(e, function (e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function Re(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = '' + ye(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n)
            return (
              (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
            );
          null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Pe(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
      return i({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue
      });
    }
    function De(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(a(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(a(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ''), (n = t);
      }
      e._wrapperState = { initialValue: ye(n) };
    }
    function Ie(e, t) {
      var n = ye(t.value),
        r = ye(t.defaultValue);
      null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
    }
    function Oe(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        '' !== t &&
        null !== t &&
        (e.value = t);
    }
    var Ae = 'http://www.w3.org/1999/xhtml',
      qe = 'http://www.w3.org/2000/svg';
    function Me(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function je(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? Me(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
        ? 'http://www.w3.org/1999/xhtml'
        : e;
    }
    var Fe,
      Ue = (function (e) {
        return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== qe || 'innerHTML' in e) e.innerHTML = t;
        else {
          for (
            (Fe = Fe || document.createElement('div')).innerHTML =
              '<svg>' + t.valueOf().toString() + '</svg>',
              t = Fe.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Le(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function ze(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
      );
    }
    var Be = {
        animationend: ze('Animation', 'AnimationEnd'),
        animationiteration: ze('Animation', 'AnimationIteration'),
        animationstart: ze('Animation', 'AnimationStart'),
        transitionend: ze('Transition', 'TransitionEnd')
      },
      He = {},
      We = {};
    function $e(e) {
      if (He[e]) return He[e];
      if (!Be[e]) return e;
      var t,
        n = Be[e];
      for (t in n) if (n.hasOwnProperty(t) && t in We) return (He[e] = n[t]);
      return e;
    }
    C &&
      ((We = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete Be.animationend.animation,
        delete Be.animationiteration.animation,
        delete Be.animationstart.animation),
      'TransitionEvent' in window || delete Be.transitionend.transition);
    var Ve = $e('animationend'),
      Qe = $e('animationiteration'),
      Ke = $e('animationstart'),
      Ye = $e('transitionend'),
      Xe = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
      Ge = new ('function' == typeof WeakMap ? WeakMap : Map)();
    function Je(e) {
      var t = Ge.get(e);
      return void 0 === t && ((t = new Map()), Ge.set(e, t)), t;
    }
    function Ze(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function et(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function tt(e) {
      if (Ze(e) !== e) throw Error(a(188));
    }
    function nt(e) {
      if (
        !(e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Ze(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var i = n.return;
            if (null === i) break;
            var o = i.alternate;
            if (null === o) {
              if (null !== (r = i.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (i.child === o.child) {
              for (o = i.child; o; ) {
                if (o === n) return tt(i), e;
                if (o === r) return tt(i), t;
                o = o.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = i), (r = o);
            else {
              for (var l = !1, u = i.child; u; ) {
                if (u === n) {
                  (l = !0), (n = i), (r = o);
                  break;
                }
                if (u === r) {
                  (l = !0), (r = i), (n = o);
                  break;
                }
                u = u.sibling;
              }
              if (!l) {
                for (u = o.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = o), (r = i);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = o), (n = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function rt(e, t) {
      if (null == t) throw Error(a(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? Array.isArray(t)
          ? (e.push.apply(e, t), e)
          : (e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function it(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var ot = null;
    function at(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            v(e, t[r], n[r]);
        else t && v(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function lt(e) {
      if ((null !== e && (ot = rt(ot, e)), (e = ot), (ot = null), e)) {
        if ((it(e, at), ot)) throw Error(a(95));
        if (c) throw ((e = f), (c = !1), (f = null), e);
      }
    }
    function ut(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function st(e) {
      if (!C) return !1;
      var t = (e = 'on' + e) in document;
      return (
        t ||
          ((t = document.createElement('div')).setAttribute(e, 'return;'),
          (t = 'function' == typeof t[e])),
        t
      );
    }
    var ct = [];
    function ft(e) {
      (e.topLevelType = null),
        (e.nativeEvent = null),
        (e.targetInst = null),
        (e.ancestors.length = 0),
        10 > ct.length && ct.push(e);
    }
    function dt(e, t, n, r) {
      if (ct.length) {
        var i = ct.pop();
        return (
          (i.topLevelType = e),
          (i.eventSystemFlags = r),
          (i.nativeEvent = t),
          (i.targetInst = n),
          i
        );
      }
      return {
        topLevelType: e,
        eventSystemFlags: r,
        nativeEvent: t,
        targetInst: n,
        ancestors: []
      };
    }
    function pt(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = Cn(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var i = ut(e.nativeEvent);
        r = e.topLevelType;
        var o = e.nativeEvent,
          a = e.eventSystemFlags;
        0 === n && (a |= 64);
        for (var l = null, u = 0; u < T.length; u++) {
          var s = T[u];
          s && (s = s.extractEvents(r, t, o, i, a)) && (l = rt(l, s));
        }
        lt(l);
      }
    }
    function ht(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case 'scroll':
            Kt(t, 'scroll', !0);
            break;
          case 'focus':
          case 'blur':
            Kt(t, 'focus', !0),
              Kt(t, 'blur', !0),
              n.set('blur', null),
              n.set('focus', null);
            break;
          case 'cancel':
          case 'close':
            st(e) && Kt(t, e, !0);
            break;
          case 'invalid':
          case 'submit':
          case 'reset':
            break;
          default:
            -1 === Xe.indexOf(e) && Qt(e, t);
        }
        n.set(e, null);
      }
    }
    var mt,
      gt,
      vt,
      yt = !1,
      bt = [],
      wt = null,
      xt = null,
      Tt = null,
      _t = new Map(),
      kt = new Map(),
      Et = [],
      St = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
        ' '
      ),
      Ct = 'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
        ' '
      );
    function Nt(e, t, n, r, i) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: i,
        container: r
      };
    }
    function Rt(e, t) {
      switch (e) {
        case 'focus':
        case 'blur':
          wt = null;
          break;
        case 'dragenter':
        case 'dragleave':
          xt = null;
          break;
        case 'mouseover':
        case 'mouseout':
          Tt = null;
          break;
        case 'pointerover':
        case 'pointerout':
          _t.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          kt.delete(t.pointerId);
      }
    }
    function Pt(e, t, n, r, i, o) {
      return null === e || e.nativeEvent !== o
        ? ((e = Nt(t, n, r, i, o)),
          null !== t && null !== (t = Nn(t)) && gt(t),
          e)
        : ((e.eventSystemFlags |= r), e);
    }
    function Dt(e) {
      var t = Cn(e.target);
      if (null !== t) {
        var n = Ze(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = et(n)))
              return (
                (e.blockedOn = t),
                void o.unstable_runWithPriority(e.priority, function () {
                  vt(n);
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function It(e) {
      if (null !== e.blockedOn) return !1;
      var t = Jt(
        e.topLevelType,
        e.eventSystemFlags,
        e.container,
        e.nativeEvent
      );
      if (null !== t) {
        var n = Nn(t);
        return null !== n && gt(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function Ot(e, t, n) {
      It(e) && n.delete(t);
    }
    function At() {
      for (yt = !1; 0 < bt.length; ) {
        var e = bt[0];
        if (null !== e.blockedOn) {
          null !== (e = Nn(e.blockedOn)) && mt(e);
          break;
        }
        var t = Jt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        null !== t ? (e.blockedOn = t) : bt.shift();
      }
      null !== wt && It(wt) && (wt = null),
        null !== xt && It(xt) && (xt = null),
        null !== Tt && It(Tt) && (Tt = null),
        _t.forEach(Ot),
        kt.forEach(Ot);
    }
    function qt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        yt ||
          ((yt = !0),
          o.unstable_scheduleCallback(o.unstable_NormalPriority, At)));
    }
    function Mt(e) {
      function t(t) {
        return qt(t, e);
      }
      if (0 < bt.length) {
        qt(bt[0], e);
        for (var n = 1; n < bt.length; n++) {
          var r = bt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== wt && qt(wt, e),
          null !== xt && qt(xt, e),
          null !== Tt && qt(Tt, e),
          _t.forEach(t),
          kt.forEach(t),
          n = 0;
        n < Et.length;
        n++
      )
        (r = Et[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Et.length && null === (n = Et[0]).blockedOn; )
        Dt(n), null === n.blockedOn && Et.shift();
    }
    var jt = {},
      Ft = new Map(),
      Ut = new Map(),
      Lt = [
        'abort',
        'abort',
        Ve,
        'animationEnd',
        Qe,
        'animationIteration',
        Ke,
        'animationStart',
        'canplay',
        'canPlay',
        'canplaythrough',
        'canPlayThrough',
        'durationchange',
        'durationChange',
        'emptied',
        'emptied',
        'encrypted',
        'encrypted',
        'ended',
        'ended',
        'error',
        'error',
        'gotpointercapture',
        'gotPointerCapture',
        'load',
        'load',
        'loadeddata',
        'loadedData',
        'loadedmetadata',
        'loadedMetadata',
        'loadstart',
        'loadStart',
        'lostpointercapture',
        'lostPointerCapture',
        'playing',
        'playing',
        'progress',
        'progress',
        'seeking',
        'seeking',
        'stalled',
        'stalled',
        'suspend',
        'suspend',
        'timeupdate',
        'timeUpdate',
        Ye,
        'transitionEnd',
        'waiting',
        'waiting'
      ];
    function zt(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          i = e[n + 1],
          o = 'on' + (i[0].toUpperCase() + i.slice(1));
        (o = {
          phasedRegistrationNames: { bubbled: o, captured: o + 'Capture' },
          dependencies: [r],
          eventPriority: t
        }),
          Ut.set(r, t),
          Ft.set(r, o),
          (jt[i] = o);
      }
    }
    zt(
      'blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
      ),
      0
    ),
      zt(
        'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
          ' '
        ),
        1
      ),
      zt(Lt, 2);
    for (
      var Bt = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
          ' '
        ),
        Ht = 0;
      Ht < Bt.length;
      Ht++
    )
      Ut.set(Bt[Ht], 0);
    var Wt = o.unstable_UserBlockingPriority,
      $t = o.unstable_runWithPriority,
      Vt = !0;
    function Qt(e, t) {
      Kt(t, e, !1);
    }
    function Kt(e, t, n) {
      var r = Ut.get(t);
      switch (void 0 === r ? 2 : r) {
        case 0:
          r = Yt.bind(null, t, 1, e);
          break;
        case 1:
          r = Xt.bind(null, t, 1, e);
          break;
        default:
          r = Gt.bind(null, t, 1, e);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function Yt(e, t, n, r) {
      F || M();
      var i = Gt,
        o = F;
      F = !0;
      try {
        q(i, e, t, n, r);
      } finally {
        (F = o) || L();
      }
    }
    function Xt(e, t, n, r) {
      $t(Wt, Gt.bind(null, e, t, n, r));
    }
    function Gt(e, t, n, r) {
      if (Vt)
        if (0 < bt.length && -1 < St.indexOf(e))
          (e = Nt(null, e, t, n, r)), bt.push(e);
        else {
          var i = Jt(e, t, n, r);
          if (null === i) Rt(e, r);
          else if (-1 < St.indexOf(e)) (e = Nt(i, e, t, n, r)), bt.push(e);
          else if (
            !(function (e, t, n, r, i) {
              switch (t) {
                case 'focus':
                  return (wt = Pt(wt, e, t, n, r, i)), !0;
                case 'dragenter':
                  return (xt = Pt(xt, e, t, n, r, i)), !0;
                case 'mouseover':
                  return (Tt = Pt(Tt, e, t, n, r, i)), !0;
                case 'pointerover':
                  var o = i.pointerId;
                  return _t.set(o, Pt(_t.get(o) || null, e, t, n, r, i)), !0;
                case 'gotpointercapture':
                  return (
                    (o = i.pointerId),
                    kt.set(o, Pt(kt.get(o) || null, e, t, n, r, i)),
                    !0
                  );
              }
              return !1;
            })(i, e, t, n, r)
          ) {
            Rt(e, r), (e = dt(e, r, null, t));
            try {
              z(pt, e);
            } finally {
              ft(e);
            }
          }
        }
    }
    function Jt(e, t, n, r) {
      if (null !== (n = Cn((n = ut(r))))) {
        var i = Ze(n);
        if (null === i) n = null;
        else {
          var o = i.tag;
          if (13 === o) {
            if (null !== (n = et(i))) return n;
            n = null;
          } else if (3 === o) {
            if (i.stateNode.hydrate)
              return 3 === i.tag ? i.stateNode.containerInfo : null;
            n = null;
          } else i !== n && (n = null);
        }
      }
      e = dt(e, r, n, t);
      try {
        z(pt, e);
      } finally {
        ft(e);
      }
      return null;
    }
    var Zt = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      en = ['Webkit', 'ms', 'Moz', 'O'];
    function tn(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
          'number' != typeof t ||
          0 === t ||
          (Zt.hasOwnProperty(e) && Zt[e])
        ? ('' + t).trim()
        : t + 'px';
    }
    function nn(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            i = tn(n, t[n], r);
          'float' === n && (n = 'cssFloat'),
            r ? e.setProperty(n, i) : (e[n] = i);
        }
    }
    Object.keys(Zt).forEach(function (e) {
      en.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zt[t] = Zt[e]);
      });
    });
    var rn = i(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    );
    function on(e, t) {
      if (t) {
        if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(a(137, e, ''));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(a(60));
          if (
            'object' != typeof t.dangerouslySetInnerHTML ||
            !('__html' in t.dangerouslySetInnerHTML)
          )
            throw Error(a(61));
        }
        if (null != t.style && 'object' != typeof t.style)
          throw Error(a(62, ''));
      }
    }
    function an(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var ln = Ae;
    function un(e, t) {
      var n = Je(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = E[t];
      for (var r = 0; r < t.length; r++) ht(t[r], e, n);
    }
    function sn() {}
    function cn(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function fn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function dn(e, t) {
      var n,
        r = fn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = fn(r);
      }
    }
    function pn() {
      for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = cn((e = t.contentWindow).document);
      }
      return t;
    }
    function hn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      );
    }
    var mn = null,
      gn = null;
    function vn(e, t) {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!t.autoFocus;
      }
      return !1;
    }
    function yn(e, t) {
      return (
        'textarea' === e ||
        'option' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var bn = 'function' == typeof setTimeout ? setTimeout : void 0,
      wn = 'function' == typeof clearTimeout ? clearTimeout : void 0;
    function xn(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function Tn(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('$' === n || '$!' === n || '$?' === n) {
            if (0 === t) return e;
            t--;
          } else '/$' === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var _n = Math.random().toString(36).slice(2),
      kn = '__reactInternalInstance$' + _n,
      En = '__reactEventHandlers$' + _n,
      Sn = '__reactContainere$' + _n;
    function Cn(e) {
      var t = e[kn];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Sn] || n[kn])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = Tn(e); null !== e; ) {
              if ((n = e[kn])) return n;
              e = Tn(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function Nn(e) {
      return !(e = e[kn] || e[Sn]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Rn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(a(33));
    }
    function Pn(e) {
      return e[En] || null;
    }
    function Dn(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function In(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = h(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          (r = !r.disabled) ||
            (r = !(
              'button' === (e = e.type) ||
              'input' === e ||
              'select' === e ||
              'textarea' === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && 'function' != typeof n) throw Error(a(231, t, typeof n));
      return n;
    }
    function On(e, t, n) {
      (t = In(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = rt(n._dispatchListeners, t)),
        (n._dispatchInstances = rt(n._dispatchInstances, e)));
    }
    function An(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Dn(t));
        for (t = n.length; 0 < t--; ) On(n[t], 'captured', e);
        for (t = 0; t < n.length; t++) On(n[t], 'bubbled', e);
      }
    }
    function qn(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = In(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = rt(n._dispatchListeners, t)),
        (n._dispatchInstances = rt(n._dispatchInstances, e)));
    }
    function Mn(e) {
      e && e.dispatchConfig.registrationName && qn(e._targetInst, null, e);
    }
    function jn(e) {
      it(e, An);
    }
    var Fn = null,
      Un = null,
      Ln = null;
    function zn() {
      if (Ln) return Ln;
      var e,
        t,
        n = Un,
        r = n.length,
        i = 'value' in Fn ? Fn.value : Fn.textContent,
        o = i.length;
      for (e = 0; e < r && n[e] === i[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
      return (Ln = i.slice(e, 1 < t ? 1 - t : void 0));
    }
    function Bn() {
      return !0;
    }
    function Hn() {
      return !1;
    }
    function Wn(e, t, n, r) {
      for (var i in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(i) &&
          ((t = e[i])
            ? (this[i] = t(n))
            : 'target' === i
            ? (this.target = r)
            : (this[i] = n[i]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? Bn
          : Hn),
        (this.isPropagationStopped = Hn),
        this
      );
    }
    function $n(e, t, n, r) {
      if (this.eventPool.length) {
        var i = this.eventPool.pop();
        return this.call(i, e, t, n, r), i;
      }
      return new this(e, t, n, r);
    }
    function Vn(e) {
      if (!(e instanceof this)) throw Error(a(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function Qn(e) {
      (e.eventPool = []), (e.getPooled = $n), (e.release = Vn);
    }
    i(Wn.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Bn));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Bn));
      },
      persist: function () {
        this.isPersistent = Bn;
      },
      isPersistent: Hn,
      destructor: function () {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = Hn),
          (this._dispatchInstances = this._dispatchListeners = null);
      }
    }),
      (Wn.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      }),
      (Wn.extend = function (e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t();
        return (
          i(o, n.prototype),
          (n.prototype = o),
          (n.prototype.constructor = n),
          (n.Interface = i({}, r.Interface, e)),
          (n.extend = r.extend),
          Qn(n),
          n
        );
      }),
      Qn(Wn);
    var Kn = Wn.extend({ data: null }),
      Yn = Wn.extend({ data: null }),
      Xn = [9, 13, 27, 32],
      Gn = C && 'CompositionEvent' in window,
      Jn = null;
    C && 'documentMode' in document && (Jn = document.documentMode);
    var Zn = C && 'TextEvent' in window && !Jn,
      er = C && (!Gn || (Jn && 8 < Jn && 11 >= Jn)),
      tr = String.fromCharCode(32),
      nr = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture'
          },
          dependencies: ['compositionend', 'keypress', 'textInput', 'paste']
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture'
          },
          dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
            ' '
          )
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture'
          },
          dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
            ' '
          )
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture'
          },
          dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
            ' '
          )
        }
      },
      rr = !1;
    function ir(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== Xn.indexOf(t.keyCode);
        case 'keydown':
          return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'blur':
          return !0;
        default:
          return !1;
      }
    }
    function or(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var ar = !1;
    var lr = {
        eventTypes: nr,
        extractEvents: function (e, t, n, r) {
          var i;
          if (Gn)
            e: {
              switch (e) {
                case 'compositionstart':
                  var o = nr.compositionStart;
                  break e;
                case 'compositionend':
                  o = nr.compositionEnd;
                  break e;
                case 'compositionupdate':
                  o = nr.compositionUpdate;
                  break e;
              }
              o = void 0;
            }
          else
            ar
              ? ir(e, n) && (o = nr.compositionEnd)
              : 'keydown' === e &&
                229 === n.keyCode &&
                (o = nr.compositionStart);
          return (
            o
              ? (er &&
                  'ko' !== n.locale &&
                  (ar || o !== nr.compositionStart
                    ? o === nr.compositionEnd && ar && (i = zn())
                    : ((Un = 'value' in (Fn = r) ? Fn.value : Fn.textContent),
                      (ar = !0))),
                (o = Kn.getPooled(o, t, n, r)),
                i ? (o.data = i) : null !== (i = or(n)) && (o.data = i),
                jn(o),
                (i = o))
              : (i = null),
            (e = Zn
              ? (function (e, t) {
                  switch (e) {
                    case 'compositionend':
                      return or(t);
                    case 'keypress':
                      return 32 !== t.which ? null : ((rr = !0), tr);
                    case 'textInput':
                      return (e = t.data) === tr && rr ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (ar)
                    return 'compositionend' === e || (!Gn && ir(e, t))
                      ? ((e = zn()), (Ln = Un = Fn = null), (ar = !1), e)
                      : null;
                  switch (e) {
                    case 'paste':
                      return null;
                    case 'keypress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case 'compositionend':
                      return er && 'ko' !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = Yn.getPooled(nr.beforeInput, t, n, r)).data = e), jn(t))
              : (t = null),
            null === i ? t : null === t ? i : [i, t]
          );
        }
      },
      ur = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
    function sr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!ur[e.type] : 'textarea' === t;
    }
    var cr = {
      change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture'
        },
        dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
          ' '
        )
      }
    };
    function fr(e, t, n) {
      return (
        ((e = Wn.getPooled(cr.change, e, t, n)).type = 'change'), I(n), jn(e), e
      );
    }
    var dr = null,
      pr = null;
    function hr(e) {
      lt(e);
    }
    function mr(e) {
      if (xe(Rn(e))) return e;
    }
    function gr(e, t) {
      if ('change' === e) return t;
    }
    var vr = !1;
    function yr() {
      dr && (dr.detachEvent('onpropertychange', br), (pr = dr = null));
    }
    function br(e) {
      if ('value' === e.propertyName && mr(pr))
        if (((e = fr(pr, e, ut(e))), F)) lt(e);
        else {
          F = !0;
          try {
            A(hr, e);
          } finally {
            (F = !1), L();
          }
        }
    }
    function wr(e, t, n) {
      'focus' === e
        ? (yr(), (pr = n), (dr = t).attachEvent('onpropertychange', br))
        : 'blur' === e && yr();
    }
    function xr(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
        return mr(pr);
    }
    function Tr(e, t) {
      if ('click' === e) return mr(t);
    }
    function _r(e, t) {
      if ('input' === e || 'change' === e) return mr(t);
    }
    C &&
      (vr =
        st('input') && (!document.documentMode || 9 < document.documentMode));
    var kr = {
        eventTypes: cr,
        _isInputEventSupported: vr,
        extractEvents: function (e, t, n, r) {
          var i = t ? Rn(t) : window,
            o = i.nodeName && i.nodeName.toLowerCase();
          if ('select' === o || ('input' === o && 'file' === i.type))
            var a = gr;
          else if (sr(i))
            if (vr) a = _r;
            else {
              a = xr;
              var l = wr;
            }
          else
            (o = i.nodeName) &&
              'input' === o.toLowerCase() &&
              ('checkbox' === i.type || 'radio' === i.type) &&
              (a = Tr);
          if (a && (a = a(e, t))) return fr(a, n, r);
          l && l(e, i, t),
            'blur' === e &&
              (e = i._wrapperState) &&
              e.controlled &&
              'number' === i.type &&
              Ce(i, 'number', i.value);
        }
      },
      Er = Wn.extend({ view: null, detail: null }),
      Sr = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey'
      };
    function Cr(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Sr[e]) && !!t[e];
    }
    function Nr() {
      return Cr;
    }
    var Rr = 0,
      Pr = 0,
      Dr = !1,
      Ir = !1,
      Or = Er.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Nr,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        movementX: function (e) {
          if ('movementX' in e) return e.movementX;
          var t = Rr;
          return (
            (Rr = e.screenX),
            Dr ? ('mousemove' === e.type ? e.screenX - t : 0) : ((Dr = !0), 0)
          );
        },
        movementY: function (e) {
          if ('movementY' in e) return e.movementY;
          var t = Pr;
          return (
            (Pr = e.screenY),
            Ir ? ('mousemove' === e.type ? e.screenY - t : 0) : ((Ir = !0), 0)
          );
        }
      }),
      Ar = Or.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
      }),
      qr = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['mouseout', 'mouseover']
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['mouseout', 'mouseover']
        },
        pointerEnter: {
          registrationName: 'onPointerEnter',
          dependencies: ['pointerout', 'pointerover']
        },
        pointerLeave: {
          registrationName: 'onPointerLeave',
          dependencies: ['pointerout', 'pointerover']
        }
      },
      Mr = {
        eventTypes: qr,
        extractEvents: function (e, t, n, r, i) {
          var o = 'mouseover' === e || 'pointerover' === e,
            a = 'mouseout' === e || 'pointerout' === e;
          if (
            (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement)) ||
            (!a && !o)
          )
            return null;
          ((o =
            r.window === r
              ? r
              : (o = r.ownerDocument)
              ? o.defaultView || o.parentWindow
              : window),
          a)
            ? ((a = t),
              null !==
                (t = (t = n.relatedTarget || n.toElement) ? Cn(t) : null) &&
                (t !== Ze(t) || (5 !== t.tag && 6 !== t.tag)) &&
                (t = null))
            : (a = null);
          if (a === t) return null;
          if ('mouseout' === e || 'mouseover' === e)
            var l = Or,
              u = qr.mouseLeave,
              s = qr.mouseEnter,
              c = 'mouse';
          else
            ('pointerout' !== e && 'pointerover' !== e) ||
              ((l = Ar),
              (u = qr.pointerLeave),
              (s = qr.pointerEnter),
              (c = 'pointer'));
          if (
            ((e = null == a ? o : Rn(a)),
            (o = null == t ? o : Rn(t)),
            ((u = l.getPooled(u, a, n, r)).type = c + 'leave'),
            (u.target = e),
            (u.relatedTarget = o),
            ((n = l.getPooled(s, t, n, r)).type = c + 'enter'),
            (n.target = o),
            (n.relatedTarget = e),
            (c = t),
            (r = a) && c)
          )
            e: {
              for (s = c, a = 0, e = l = r; e; e = Dn(e)) a++;
              for (e = 0, t = s; t; t = Dn(t)) e++;
              for (; 0 < a - e; ) (l = Dn(l)), a--;
              for (; 0 < e - a; ) (s = Dn(s)), e--;
              for (; a--; ) {
                if (l === s || l === s.alternate) break e;
                (l = Dn(l)), (s = Dn(s));
              }
              l = null;
            }
          else l = null;
          for (
            s = l, l = [];
            r && r !== s && (null === (a = r.alternate) || a !== s);

          )
            l.push(r), (r = Dn(r));
          for (
            r = [];
            c && c !== s && (null === (a = c.alternate) || a !== s);

          )
            r.push(c), (c = Dn(c));
          for (c = 0; c < l.length; c++) qn(l[c], 'bubbled', u);
          for (c = r.length; 0 < c--; ) qn(r[c], 'captured', n);
          return 0 == (64 & i) ? [u] : [u, n];
        }
      };
    var jr =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      Fr = Object.prototype.hasOwnProperty;
    function Ur(e, t) {
      if (jr(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Fr.call(t, n[r]) || !jr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var Lr = C && 'documentMode' in document && 11 >= document.documentMode,
      zr = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture'
          },
          dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
            ' '
          )
        }
      },
      Br = null,
      Hr = null,
      Wr = null,
      $r = !1;
    function Vr(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return $r || null == Br || Br !== cn(n)
        ? null
        : ('selectionStart' in (n = Br) && hn(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
              }),
          Wr && Ur(Wr, n)
            ? null
            : ((Wr = n),
              ((e = Wn.getPooled(zr.select, Hr, e, t)).type = 'select'),
              (e.target = Br),
              jn(e),
              e));
    }
    var Qr = {
        eventTypes: zr,
        extractEvents: function (e, t, n, r, i, o) {
          if (
            !(o = !(i =
              o ||
              (r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument)))
          ) {
            e: {
              (i = Je(i)), (o = E.onSelect);
              for (var a = 0; a < o.length; a++)
                if (!i.has(o[a])) {
                  i = !1;
                  break e;
                }
              i = !0;
            }
            o = !i;
          }
          if (o) return null;
          switch (((i = t ? Rn(t) : window), e)) {
            case 'focus':
              (sr(i) || 'true' === i.contentEditable) &&
                ((Br = i), (Hr = t), (Wr = null));
              break;
            case 'blur':
              Wr = Hr = Br = null;
              break;
            case 'mousedown':
              $r = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              return ($r = !1), Vr(n, r);
            case 'selectionchange':
              if (Lr) break;
            case 'keydown':
            case 'keyup':
              return Vr(n, r);
          }
          return null;
        }
      },
      Kr = Wn.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      Yr = Wn.extend({
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        }
      }),
      Xr = Er.extend({ relatedTarget: null });
    function Gr(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var Jr = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified'
      },
      Zr = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta'
      },
      ei = Er.extend({
        key: function (e) {
          if (e.key) {
            var t = Jr[e.key] || e.key;
            if ('Unidentified' !== t) return t;
          }
          return 'keypress' === e.type
            ? 13 === (e = Gr(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? Zr[e.keyCode] || 'Unidentified'
            : '';
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Nr,
        charCode: function (e) {
          return 'keypress' === e.type ? Gr(e) : 0;
        },
        keyCode: function (e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return 'keypress' === e.type
            ? Gr(e)
            : 'keydown' === e.type || 'keyup' === e.type
            ? e.keyCode
            : 0;
        }
      }),
      ti = Or.extend({ dataTransfer: null }),
      ni = Er.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Nr
      }),
      ri = Wn.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      ii = Or.extend({
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null
      }),
      oi = {
        eventTypes: jt,
        extractEvents: function (e, t, n, r) {
          var i = Ft.get(e);
          if (!i) return null;
          switch (e) {
            case 'keypress':
              if (0 === Gr(n)) return null;
            case 'keydown':
            case 'keyup':
              e = ei;
              break;
            case 'blur':
            case 'focus':
              e = Xr;
              break;
            case 'click':
              if (2 === n.button) return null;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              e = Or;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              e = ti;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              e = ni;
              break;
            case Ve:
            case Qe:
            case Ke:
              e = Kr;
              break;
            case Ye:
              e = ri;
              break;
            case 'scroll':
              e = Er;
              break;
            case 'wheel':
              e = ii;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              e = Yr;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              e = Ar;
              break;
            default:
              e = Wn;
          }
          return jn((t = e.getPooled(i, t, n, r))), t;
        }
      };
    if (y) throw Error(a(101));
    (y = Array.prototype.slice.call(
      'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
        ' '
      )
    )),
      w(),
      (h = Pn),
      (m = Nn),
      (g = Rn),
      S({
        SimpleEventPlugin: oi,
        EnterLeaveEventPlugin: Mr,
        ChangeEventPlugin: kr,
        SelectEventPlugin: Qr,
        BeforeInputEventPlugin: lr
      });
    var ai = [],
      li = -1;
    function ui(e) {
      0 > li || ((e.current = ai[li]), (ai[li] = null), li--);
    }
    function si(e, t) {
      li++, (ai[li] = e.current), (e.current = t);
    }
    var ci = {},
      fi = { current: ci },
      di = { current: !1 },
      pi = ci;
    function hi(e, t) {
      var n = e.type.contextTypes;
      if (!n) return ci;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i,
        o = {};
      for (i in n) o[i] = t[i];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function mi(e) {
      return null != (e = e.childContextTypes);
    }
    function gi() {
      ui(di), ui(fi);
    }
    function vi(e, t, n) {
      if (fi.current !== ci) throw Error(a(168));
      si(fi, t), si(di, n);
    }
    function yi(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), 'function' != typeof r.getChildContext))
        return n;
      for (var o in (r = r.getChildContext()))
        if (!(o in e)) throw Error(a(108, ge(t) || 'Unknown', o));
      return i({}, n, {}, r);
    }
    function bi(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          ci),
        (pi = fi.current),
        si(fi, e),
        si(di, di.current),
        !0
      );
    }
    function wi(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(a(169));
      n
        ? ((e = yi(e, t, pi)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          ui(di),
          ui(fi),
          si(fi, e))
        : ui(di),
        si(di, n);
    }
    var xi = o.unstable_runWithPriority,
      Ti = o.unstable_scheduleCallback,
      _i = o.unstable_cancelCallback,
      ki = o.unstable_requestPaint,
      Ei = o.unstable_now,
      Si = o.unstable_getCurrentPriorityLevel,
      Ci = o.unstable_ImmediatePriority,
      Ni = o.unstable_UserBlockingPriority,
      Ri = o.unstable_NormalPriority,
      Pi = o.unstable_LowPriority,
      Di = o.unstable_IdlePriority,
      Ii = {},
      Oi = o.unstable_shouldYield,
      Ai = void 0 !== ki ? ki : function () {},
      qi = null,
      Mi = null,
      ji = !1,
      Fi = Ei(),
      Ui =
        1e4 > Fi
          ? Ei
          : function () {
              return Ei() - Fi;
            };
    function Li() {
      switch (Si()) {
        case Ci:
          return 99;
        case Ni:
          return 98;
        case Ri:
          return 97;
        case Pi:
          return 96;
        case Di:
          return 95;
        default:
          throw Error(a(332));
      }
    }
    function zi(e) {
      switch (e) {
        case 99:
          return Ci;
        case 98:
          return Ni;
        case 97:
          return Ri;
        case 96:
          return Pi;
        case 95:
          return Di;
        default:
          throw Error(a(332));
      }
    }
    function Bi(e, t) {
      return (e = zi(e)), xi(e, t);
    }
    function Hi(e, t, n) {
      return (e = zi(e)), Ti(e, t, n);
    }
    function Wi(e) {
      return null === qi ? ((qi = [e]), (Mi = Ti(Ci, Vi))) : qi.push(e), Ii;
    }
    function $i() {
      if (null !== Mi) {
        var e = Mi;
        (Mi = null), _i(e);
      }
      Vi();
    }
    function Vi() {
      if (!ji && null !== qi) {
        ji = !0;
        var e = 0;
        try {
          var t = qi;
          Bi(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (qi = null);
        } catch (t) {
          throw (null !== qi && (qi = qi.slice(e + 1)), Ti(Ci, $i), t);
        } finally {
          ji = !1;
        }
      }
    }
    function Qi(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function Ki(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = i({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var Yi = { current: null },
      Xi = null,
      Gi = null,
      Ji = null;
    function Zi() {
      Ji = Gi = Xi = null;
    }
    function eo(e) {
      var t = Yi.current;
      ui(Yi), (e.type._context._currentValue = t);
    }
    function to(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function no(e, t) {
      (Xi = e),
        (Ji = Gi = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (e.expirationTime >= t && (Pa = !0), (e.firstContext = null));
    }
    function ro(e, t) {
      if (Ji !== e && !1 !== t && 0 !== t)
        if (
          (('number' == typeof t && 1073741823 !== t) ||
            ((Ji = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === Gi)
        ) {
          if (null === Xi) throw Error(a(308));
          (Gi = t),
            (Xi.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null
            });
        } else Gi = Gi.next = t;
      return e._currentValue;
    }
    var io = !1;
    function oo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: { pending: null },
        effects: null
      };
    }
    function ao(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
          });
    }
    function lo(e, t) {
      return ((e = {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      }).next = e);
    }
    function uo(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
    }
    function so(e, t) {
      var n = e.alternate;
      null !== n && ao(n, e),
        null === (n = (e = e.updateQueue).baseQueue)
          ? ((e.baseQueue = t.next = t), (t.next = t))
          : ((t.next = n.next), (n.next = t));
    }
    function co(e, t, n, r) {
      var o = e.updateQueue;
      io = !1;
      var a = o.baseQueue,
        l = o.shared.pending;
      if (null !== l) {
        if (null !== a) {
          var u = a.next;
          (a.next = l.next), (l.next = u);
        }
        (a = l),
          (o.shared.pending = null),
          null !== (u = e.alternate) &&
            null !== (u = u.updateQueue) &&
            (u.baseQueue = l);
      }
      if (null !== a) {
        u = a.next;
        var s = o.baseState,
          c = 0,
          f = null,
          d = null,
          p = null;
        if (null !== u)
          for (var h = u; ; ) {
            if ((l = h.expirationTime) < r) {
              var m = {
                expirationTime: h.expirationTime,
                suspenseConfig: h.suspenseConfig,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              null === p ? ((d = p = m), (f = s)) : (p = p.next = m),
                l > c && (c = l);
            } else {
              null !== p &&
                (p = p.next = {
                  expirationTime: 1073741823,
                  suspenseConfig: h.suspenseConfig,
                  tag: h.tag,
                  payload: h.payload,
                  callback: h.callback,
                  next: null
                }),
                ou(l, h.suspenseConfig);
              e: {
                var g = e,
                  v = h;
                switch (((l = t), (m = n), v.tag)) {
                  case 1:
                    if ('function' == typeof (g = v.payload)) {
                      s = g.call(m, s, l);
                      break e;
                    }
                    s = g;
                    break e;
                  case 3:
                    g.effectTag = (-4097 & g.effectTag) | 64;
                  case 0:
                    if (
                      null ==
                      (l =
                        'function' == typeof (g = v.payload)
                          ? g.call(m, s, l)
                          : g)
                    )
                      break e;
                    s = i({}, s, l);
                    break e;
                  case 2:
                    io = !0;
                }
              }
              null !== h.callback &&
                ((e.effectTag |= 32),
                null === (l = o.effects) ? (o.effects = [h]) : l.push(h));
            }
            if (null === (h = h.next) || h === u) {
              if (null === (l = o.shared.pending)) break;
              (h = a.next = l.next),
                (l.next = u),
                (o.baseQueue = a = l),
                (o.shared.pending = null);
            }
          }
        null === p ? (f = s) : (p.next = d),
          (o.baseState = f),
          (o.baseQueue = p),
          au(c),
          (e.expirationTime = c),
          (e.memoizedState = s);
      }
    }
    function fo(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            i = r.callback;
          if (null !== i) {
            if (((r.callback = null), (r = i), (i = n), 'function' != typeof r))
              throw Error(a(191, r));
            r.call(i);
          }
        }
    }
    var po = X.ReactCurrentBatchConfig,
      ho = new r.Component().refs;
    function mo(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : i({}, t, n)),
        (e.memoizedState = n),
        0 === e.expirationTime && (e.updateQueue.baseState = n);
    }
    var go = {
      isMounted: function (e) {
        return !!(e = e._reactInternalFiber) && Ze(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = Vl(),
          i = po.suspense;
        ((i = lo((r = Ql(r, e, i)), i)).payload = t),
          null != n && (i.callback = n),
          uo(e, i),
          Kl(e, r);
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = Vl(),
          i = po.suspense;
        ((i = lo((r = Ql(r, e, i)), i)).tag = 1),
          (i.payload = t),
          null != n && (i.callback = n),
          uo(e, i),
          Kl(e, r);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternalFiber;
        var n = Vl(),
          r = po.suspense;
        ((r = lo((n = Ql(n, e, r)), r)).tag = 2),
          null != t && (r.callback = t),
          uo(e, r),
          Kl(e, n);
      }
    };
    function vo(e, t, n, r, i, o, a) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !Ur(n, r) ||
            !Ur(i, o);
    }
    function yo(e, t, n) {
      var r = !1,
        i = ci,
        o = t.contextType;
      return (
        'object' == typeof o && null !== o
          ? (o = ro(o))
          : ((i = mi(t) ? pi : fi.current),
            (o = (r = null != (r = t.contextTypes)) ? hi(e, i) : ci)),
        (t = new t(n, o)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = go),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function bo(e, t, n, r) {
      (e = t.state),
        'function' == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && go.enqueueReplaceState(t, t.state, null);
    }
    function wo(e, t, n, r) {
      var i = e.stateNode;
      (i.props = n), (i.state = e.memoizedState), (i.refs = ho), oo(e);
      var o = t.contextType;
      'object' == typeof o && null !== o
        ? (i.context = ro(o))
        : ((o = mi(t) ? pi : fi.current), (i.context = hi(e, o))),
        co(e, n, i, r),
        (i.state = e.memoizedState),
        'function' == typeof (o = t.getDerivedStateFromProps) &&
          (mo(e, t, o, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof i.getSnapshotBeforeUpdate ||
          ('function' != typeof i.UNSAFE_componentWillMount &&
            'function' != typeof i.componentWillMount) ||
          ((t = i.state),
          'function' == typeof i.componentWillMount && i.componentWillMount(),
          'function' == typeof i.UNSAFE_componentWillMount &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && go.enqueueReplaceState(i, i.state, null),
          co(e, n, i, r),
          (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.effectTag |= 4);
    }
    var xo = Array.isArray;
    function To(e, t, n) {
      if (
        null !== (e = n.ref) &&
        'function' != typeof e &&
        'object' != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(a(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(a(147, e));
          var i = '' + e;
          return null !== t &&
            null !== t.ref &&
            'function' == typeof t.ref &&
            t.ref._stringRef === i
            ? t.ref
            : (((t = function (e) {
                var t = r.refs;
                t === ho && (t = r.refs = {}),
                  null === e ? delete t[i] : (t[i] = e);
              })._stringRef = i),
              t);
        }
        if ('string' != typeof e) throw Error(a(284));
        if (!n._owner) throw Error(a(290, e));
      }
      return e;
    }
    function _o(e, t) {
      if ('textarea' !== e.type)
        throw Error(
          a(
            31,
            '[object Object]' === Object.prototype.toString.call(t)
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : t,
            ''
          )
        );
    }
    function ko(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function i(e, t) {
        return ((e = Su(e, t)).index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function l(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function u(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Ru(n, e.mode, r)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function s(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = i(t, n.props)).ref = To(e, t, n)), (r.return = e), r)
          : (((r = Cu(n.type, n.key, n.props, null, e.mode, r)).ref = To(
              e,
              t,
              n
            )),
            (r.return = e),
            r);
      }
      function c(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Pu(n, e.mode, r)).return = e), t)
          : (((t = i(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, o) {
        return null === t || 7 !== t.tag
          ? (((t = Nu(n, e.mode, r, o)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function d(e, t, n) {
        if ('string' == typeof t || 'number' == typeof t)
          return ((t = Ru('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case ee:
              return (
                ((n = Cu(t.type, t.key, t.props, null, e.mode, n)).ref = To(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case te:
              return ((t = Pu(t, e.mode, n)).return = e), t;
          }
          if (xo(t) || me(t))
            return ((t = Nu(t, e.mode, n, null)).return = e), t;
          _o(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if ('string' == typeof n || 'number' == typeof n)
          return null !== i ? null : u(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case ee:
              return n.key === i
                ? n.type === ne
                  ? f(e, t, n.props.children, r, i)
                  : s(e, t, n, r)
                : null;
            case te:
              return n.key === i ? c(e, t, n, r) : null;
          }
          if (xo(n) || me(n)) return null !== i ? null : f(e, t, n, r, null);
          _o(e, n);
        }
        return null;
      }
      function h(e, t, n, r, i) {
        if ('string' == typeof r || 'number' == typeof r)
          return u(t, (e = e.get(n) || null), '' + r, i);
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case ee:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === ne
                  ? f(t, e, r.props.children, i, r.key)
                  : s(t, e, r, i)
              );
            case te:
              return c(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                i
              );
          }
          if (xo(r) || me(r)) return f(t, (e = e.get(n) || null), r, i, null);
          _o(t, r);
        }
        return null;
      }
      function m(i, a, l, u) {
        for (
          var s = null, c = null, f = a, m = (a = 0), g = null;
          null !== f && m < l.length;
          m++
        ) {
          f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
          var v = p(i, f, l[m], u);
          if (null === v) {
            null === f && (f = g);
            break;
          }
          e && f && null === v.alternate && t(i, f),
            (a = o(v, a, m)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v),
            (f = g);
        }
        if (m === l.length) return n(i, f), s;
        if (null === f) {
          for (; m < l.length; m++)
            null !== (f = d(i, l[m], u)) &&
              ((a = o(f, a, m)),
              null === c ? (s = f) : (c.sibling = f),
              (c = f));
          return s;
        }
        for (f = r(i, f); m < l.length; m++)
          null !== (g = h(f, i, m, l[m], u)) &&
            (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
            (a = o(g, a, m)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            f.forEach(function (e) {
              return t(i, e);
            }),
          s
        );
      }
      function g(i, l, u, s) {
        var c = me(u);
        if ('function' != typeof c) throw Error(a(150));
        if (null == (u = c.call(u))) throw Error(a(151));
        for (
          var f = (c = null), m = l, g = (l = 0), v = null, y = u.next();
          null !== m && !y.done;
          g++, y = u.next()
        ) {
          m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
          var b = p(i, m, y.value, s);
          if (null === b) {
            null === m && (m = v);
            break;
          }
          e && m && null === b.alternate && t(i, m),
            (l = o(b, l, g)),
            null === f ? (c = b) : (f.sibling = b),
            (f = b),
            (m = v);
        }
        if (y.done) return n(i, m), c;
        if (null === m) {
          for (; !y.done; g++, y = u.next())
            null !== (y = d(i, y.value, s)) &&
              ((l = o(y, l, g)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y));
          return c;
        }
        for (m = r(i, m); !y.done; g++, y = u.next())
          null !== (y = h(m, i, g, y.value, s)) &&
            (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
            (l = o(y, l, g)),
            null === f ? (c = y) : (f.sibling = y),
            (f = y));
        return (
          e &&
            m.forEach(function (e) {
              return t(i, e);
            }),
          c
        );
      }
      return function (e, r, o, u) {
        var s =
          'object' == typeof o && null !== o && o.type === ne && null === o.key;
        s && (o = o.props.children);
        var c = 'object' == typeof o && null !== o;
        if (c)
          switch (o.$$typeof) {
            case ee:
              e: {
                for (c = o.key, s = r; null !== s; ) {
                  if (s.key === c) {
                    switch (s.tag) {
                      case 7:
                        if (o.type === ne) {
                          n(e, s.sibling),
                            ((r = i(s, o.props.children)).return = e),
                            (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (s.elementType === o.type) {
                          n(e, s.sibling),
                            ((r = i(s, o.props)).ref = To(e, s, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                    }
                    n(e, s);
                    break;
                  }
                  t(e, s), (s = s.sibling);
                }
                o.type === ne
                  ? (((r = Nu(o.props.children, e.mode, u, o.key)).return = e),
                    (e = r))
                  : (((u = Cu(
                      o.type,
                      o.key,
                      o.props,
                      null,
                      e.mode,
                      u
                    )).ref = To(e, r, o)),
                    (u.return = e),
                    (e = u));
              }
              return l(e);
            case te:
              e: {
                for (s = o.key; null !== r; ) {
                  if (r.key === s) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = i(r, o.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Pu(o, e.mode, u)).return = e), (e = r);
              }
              return l(e);
          }
        if ('string' == typeof o || 'number' == typeof o)
          return (
            (o = '' + o),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
              : (n(e, r), ((r = Ru(o, e.mode, u)).return = e), (e = r)),
            l(e)
          );
        if (xo(o)) return m(e, r, o, u);
        if (me(o)) return g(e, r, o, u);
        if ((c && _o(e, o), void 0 === o && !s))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                ((e = e.type),
                Error(a(152, e.displayName || e.name || 'Component')))
              );
          }
        return n(e, r);
      };
    }
    var Eo = ko(!0),
      So = ko(!1),
      Co = {},
      No = { current: Co },
      Ro = { current: Co },
      Po = { current: Co };
    function Do(e) {
      if (e === Co) throw Error(a(174));
      return e;
    }
    function Io(e, t) {
      switch ((si(Po, t), si(Ro, e), si(No, Co), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : je(null, '');
          break;
        default:
          t = je(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      ui(No), si(No, t);
    }
    function Oo() {
      ui(No), ui(Ro), ui(Po);
    }
    function Ao(e) {
      Do(Po.current);
      var t = Do(No.current),
        n = je(t, e.type);
      t !== n && (si(Ro, e), si(No, n));
    }
    function qo(e) {
      Ro.current === e && (ui(No), ui(Ro));
    }
    var Mo = { current: 0 };
    function jo(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Fo(e, t) {
      return { responder: e, props: t };
    }
    var Uo = X.ReactCurrentDispatcher,
      Lo = X.ReactCurrentBatchConfig,
      zo = 0,
      Bo = null,
      Ho = null,
      Wo = null,
      $o = !1;
    function Vo() {
      throw Error(a(321));
    }
    function Qo(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function Ko(e, t, n, r, i, o) {
      if (
        ((zo = o),
        (Bo = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.expirationTime = 0),
        (Uo.current = null === e || null === e.memoizedState ? va : ya),
        (e = n(r, i)),
        t.expirationTime === zo)
      ) {
        o = 0;
        do {
          if (((t.expirationTime = 0), !(25 > o))) throw Error(a(301));
          (o += 1),
            (Wo = Ho = null),
            (t.updateQueue = null),
            (Uo.current = ba),
            (e = n(r, i));
        } while (t.expirationTime === zo);
      }
      if (
        ((Uo.current = ga),
        (t = null !== Ho && null !== Ho.next),
        (zo = 0),
        (Wo = Ho = Bo = null),
        ($o = !1),
        t)
      )
        throw Error(a(300));
      return e;
    }
    function Yo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return null === Wo ? (Bo.memoizedState = Wo = e) : (Wo = Wo.next = e), Wo;
    }
    function Xo() {
      if (null === Ho) {
        var e = Bo.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Ho.next;
      var t = null === Wo ? Bo.memoizedState : Wo.next;
      if (null !== t) (Wo = t), (Ho = e);
      else {
        if (null === e) throw Error(a(310));
        (e = {
          memoizedState: (Ho = e).memoizedState,
          baseState: Ho.baseState,
          baseQueue: Ho.baseQueue,
          queue: Ho.queue,
          next: null
        }),
          null === Wo ? (Bo.memoizedState = Wo = e) : (Wo = Wo.next = e);
      }
      return Wo;
    }
    function Go(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function Jo(e) {
      var t = Xo(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = Ho,
        i = r.baseQueue,
        o = n.pending;
      if (null !== o) {
        if (null !== i) {
          var l = i.next;
          (i.next = o.next), (o.next = l);
        }
        (r.baseQueue = i = o), (n.pending = null);
      }
      if (null !== i) {
        (i = i.next), (r = r.baseState);
        var u = (l = o = null),
          s = i;
        do {
          var c = s.expirationTime;
          if (c < zo) {
            var f = {
              expirationTime: s.expirationTime,
              suspenseConfig: s.suspenseConfig,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null
            };
            null === u ? ((l = u = f), (o = r)) : (u = u.next = f),
              c > Bo.expirationTime && ((Bo.expirationTime = c), au(c));
          } else
            null !== u &&
              (u = u.next = {
                expirationTime: 1073741823,
                suspenseConfig: s.suspenseConfig,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null
              }),
              ou(c, s.suspenseConfig),
              (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
          s = s.next;
        } while (null !== s && s !== i);
        null === u ? (o = r) : (u.next = l),
          jr(r, t.memoizedState) || (Pa = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function Zo(e) {
      var t = Xo(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (null !== i) {
        n.pending = null;
        var l = (i = i.next);
        do {
          (o = e(o, l.action)), (l = l.next);
        } while (l !== i);
        jr(o, t.memoizedState) || (Pa = !0),
          (t.memoizedState = o),
          null === t.baseQueue && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function ea(e) {
      var t = Yo();
      return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Go,
          lastRenderedState: e
        }).dispatch = ma.bind(null, Bo, e)),
        [t.memoizedState, e]
      );
    }
    function ta(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Bo.updateQueue)
          ? ((t = { lastEffect: null }),
            (Bo.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function na() {
      return Xo().memoizedState;
    }
    function ra(e, t, n, r) {
      var i = Yo();
      (Bo.effectTag |= e),
        (i.memoizedState = ta(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function ia(e, t, n, r) {
      var i = Xo();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== Ho) {
        var a = Ho.memoizedState;
        if (((o = a.destroy), null !== r && Qo(r, a.deps)))
          return void ta(t, n, o, r);
      }
      (Bo.effectTag |= e), (i.memoizedState = ta(1 | t, n, o, r));
    }
    function oa(e, t) {
      return ra(516, 4, e, t);
    }
    function aa(e, t) {
      return ia(516, 4, e, t);
    }
    function la(e, t) {
      return ia(4, 2, e, t);
    }
    function ua(e, t) {
      return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function sa(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), ia(4, 2, ua.bind(null, t, e), n)
      );
    }
    function ca() {}
    function fa(e, t) {
      return (Yo().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function da(e, t) {
      var n = Xo();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Qo(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function pa(e, t) {
      var n = Xo();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && Qo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function ha(e, t, n) {
      var r = Li();
      Bi(98 > r ? 98 : r, function () {
        e(!0);
      }),
        Bi(97 < r ? 97 : r, function () {
          var r = Lo.suspense;
          Lo.suspense = void 0 === t ? null : t;
          try {
            e(!1), n();
          } finally {
            Lo.suspense = r;
          }
        });
    }
    function ma(e, t, n) {
      var r = Vl(),
        i = po.suspense;
      i = {
        expirationTime: (r = Ql(r, e, i)),
        suspenseConfig: i,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var o = t.pending;
      if (
        (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
        (t.pending = i),
        (o = e.alternate),
        e === Bo || (null !== o && o === Bo))
      )
        ($o = !0), (i.expirationTime = zo), (Bo.expirationTime = zo);
      else {
        if (
          0 === e.expirationTime &&
          (null === o || 0 === o.expirationTime) &&
          null !== (o = t.lastRenderedReducer)
        )
          try {
            var a = t.lastRenderedState,
              l = o(a, n);
            if (((i.eagerReducer = o), (i.eagerState = l), jr(l, a))) return;
          } catch (e) {}
        Kl(e, r);
      }
    }
    var ga = {
        readContext: ro,
        useCallback: Vo,
        useContext: Vo,
        useEffect: Vo,
        useImperativeHandle: Vo,
        useLayoutEffect: Vo,
        useMemo: Vo,
        useReducer: Vo,
        useRef: Vo,
        useState: Vo,
        useDebugValue: Vo,
        useResponder: Vo,
        useDeferredValue: Vo,
        useTransition: Vo
      },
      va = {
        readContext: ro,
        useCallback: fa,
        useContext: ro,
        useEffect: oa,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ra(4, 2, ua.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return ra(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Yo();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Yo();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }).dispatch = ma.bind(null, Bo, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (Yo().memoizedState = e);
        },
        useState: ea,
        useDebugValue: ca,
        useResponder: Fo,
        useDeferredValue: function (e, t) {
          var n = ea(e),
            r = n[0],
            i = n[1];
          return (
            oa(
              function () {
                var n = Lo.suspense;
                Lo.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  Lo.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = ea(!1),
            n = t[0];
          return (t = t[1]), [fa(ha.bind(null, t, e), [t, e]), n];
        }
      },
      ya = {
        readContext: ro,
        useCallback: da,
        useContext: ro,
        useEffect: aa,
        useImperativeHandle: sa,
        useLayoutEffect: la,
        useMemo: pa,
        useReducer: Jo,
        useRef: na,
        useState: function () {
          return Jo(Go);
        },
        useDebugValue: ca,
        useResponder: Fo,
        useDeferredValue: function (e, t) {
          var n = Jo(Go),
            r = n[0],
            i = n[1];
          return (
            aa(
              function () {
                var n = Lo.suspense;
                Lo.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  Lo.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = Jo(Go),
            n = t[0];
          return (t = t[1]), [da(ha.bind(null, t, e), [t, e]), n];
        }
      },
      ba = {
        readContext: ro,
        useCallback: da,
        useContext: ro,
        useEffect: aa,
        useImperativeHandle: sa,
        useLayoutEffect: la,
        useMemo: pa,
        useReducer: Zo,
        useRef: na,
        useState: function () {
          return Zo(Go);
        },
        useDebugValue: ca,
        useResponder: Fo,
        useDeferredValue: function (e, t) {
          var n = Zo(Go),
            r = n[0],
            i = n[1];
          return (
            aa(
              function () {
                var n = Lo.suspense;
                Lo.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  Lo.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = Zo(Go),
            n = t[0];
          return (t = t[1]), [da(ha.bind(null, t, e), [t, e]), n];
        }
      },
      wa = null,
      xa = null,
      Ta = !1;
    function _a(e, t) {
      var n = ku(5, null, null, 0);
      (n.elementType = 'DELETED'),
        (n.type = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function ka(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function Ea(e) {
      if (Ta) {
        var t = xa;
        if (t) {
          var n = t;
          if (!ka(e, t)) {
            if (!(t = xn(n.nextSibling)) || !ka(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Ta = !1),
                void (wa = e)
              );
            _a(wa, n);
          }
          (wa = e), (xa = xn(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ta = !1), (wa = e);
      }
    }
    function Sa(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      wa = e;
    }
    function Ca(e) {
      if (e !== wa) return !1;
      if (!Ta) return Sa(e), (Ta = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ('head' !== t && 'body' !== t && !yn(t, e.memoizedProps))
      )
        for (t = xa; t; ) _a(e, t), (t = xn(t.nextSibling));
      if ((Sa(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(a(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('/$' === n) {
                if (0 === t) {
                  xa = xn(e.nextSibling);
                  break e;
                }
                t--;
              } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
            }
            e = e.nextSibling;
          }
          xa = null;
        }
      } else xa = wa ? xn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Na() {
      (xa = wa = null), (Ta = !1);
    }
    var Ra = X.ReactCurrentOwner,
      Pa = !1;
    function Da(e, t, n, r) {
      t.child = null === e ? So(t, null, n, r) : Eo(t, e.child, n, r);
    }
    function Ia(e, t, n, r, i) {
      n = n.render;
      var o = t.ref;
      return (
        no(t, i),
        (r = Ko(e, t, n, r, o, i)),
        null === e || Pa
          ? ((t.effectTag |= 1), Da(e, t, r, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            Ka(e, t, i))
      );
    }
    function Oa(e, t, n, r, i, o) {
      if (null === e) {
        var a = n.type;
        return 'function' != typeof a ||
          Eu(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Cu(n.type, null, r, null, t.mode, o)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = a), Aa(e, t, a, r, i, o));
      }
      return (
        (a = e.child),
        i < o &&
        ((i = a.memoizedProps),
        (n = null !== (n = n.compare) ? n : Ur)(i, r) && e.ref === t.ref)
          ? Ka(e, t, o)
          : ((t.effectTag |= 1),
            ((e = Su(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Aa(e, t, n, r, i, o) {
      return null !== e &&
        Ur(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((Pa = !1), i < o)
        ? ((t.expirationTime = e.expirationTime), Ka(e, t, o))
        : Ma(e, t, n, r, o);
    }
    function qa(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Ma(e, t, n, r, i) {
      var o = mi(n) ? pi : fi.current;
      return (
        (o = hi(t, o)),
        no(t, i),
        (n = Ko(e, t, n, r, o, i)),
        null === e || Pa
          ? ((t.effectTag |= 1), Da(e, t, n, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            Ka(e, t, i))
      );
    }
    function ja(e, t, n, r, i) {
      if (mi(n)) {
        var o = !0;
        bi(t);
      } else o = !1;
      if ((no(t, i), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          yo(t, n, r),
          wo(t, n, r, i),
          (r = !0);
      else if (null === e) {
        var a = t.stateNode,
          l = t.memoizedProps;
        a.props = l;
        var u = a.context,
          s = n.contextType;
        'object' == typeof s && null !== s
          ? (s = ro(s))
          : (s = hi(t, (s = mi(n) ? pi : fi.current)));
        var c = n.getDerivedStateFromProps,
          f =
            'function' == typeof c ||
            'function' == typeof a.getSnapshotBeforeUpdate;
        f ||
          ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
            'function' != typeof a.componentWillReceiveProps) ||
          ((l !== r || u !== s) && bo(t, a, r, s)),
          (io = !1);
        var d = t.memoizedState;
        (a.state = d),
          co(t, r, a, i),
          (u = t.memoizedState),
          l !== r || d !== u || di.current || io
            ? ('function' == typeof c &&
                (mo(t, n, c, r), (u = t.memoizedState)),
              (l = io || vo(t, n, l, r, d, u, s))
                ? (f ||
                    ('function' != typeof a.UNSAFE_componentWillMount &&
                      'function' != typeof a.componentWillMount) ||
                    ('function' == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    'function' == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  'function' == typeof a.componentDidMount &&
                    (t.effectTag |= 4))
                : ('function' == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (a.props = r),
              (a.state = u),
              (a.context = s),
              (r = l))
            : ('function' == typeof a.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (a = t.stateNode),
          ao(e, t),
          (l = t.memoizedProps),
          (a.props = t.type === t.elementType ? l : Ki(t.type, l)),
          (u = a.context),
          'object' == typeof (s = n.contextType) && null !== s
            ? (s = ro(s))
            : (s = hi(t, (s = mi(n) ? pi : fi.current))),
          (f =
            'function' == typeof (c = n.getDerivedStateFromProps) ||
            'function' == typeof a.getSnapshotBeforeUpdate) ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
              'function' != typeof a.componentWillReceiveProps) ||
            ((l !== r || u !== s) && bo(t, a, r, s)),
          (io = !1),
          (u = t.memoizedState),
          (a.state = u),
          co(t, r, a, i),
          (d = t.memoizedState),
          l !== r || u !== d || di.current || io
            ? ('function' == typeof c &&
                (mo(t, n, c, r), (d = t.memoizedState)),
              (c = io || vo(t, n, l, r, u, d, s))
                ? (f ||
                    ('function' != typeof a.UNSAFE_componentWillUpdate &&
                      'function' != typeof a.componentWillUpdate) ||
                    ('function' == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(r, d, s),
                    'function' == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(r, d, s)),
                  'function' == typeof a.componentDidUpdate &&
                    (t.effectTag |= 4),
                  'function' == typeof a.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ('function' != typeof a.componentDidUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 4),
                  'function' != typeof a.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = d)),
              (a.props = r),
              (a.state = d),
              (a.context = s),
              (r = c))
            : ('function' != typeof a.componentDidUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 4),
              'function' != typeof a.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return Fa(e, t, n, r, o, i);
    }
    function Fa(e, t, n, r, i, o) {
      qa(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!r && !a) return i && wi(t, n, !1), Ka(e, t, o);
      (r = t.stateNode), (Ra.current = t);
      var l =
        a && 'function' != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && a
          ? ((t.child = Eo(t, e.child, null, o)), (t.child = Eo(t, null, l, o)))
          : Da(e, t, l, o),
        (t.memoizedState = r.state),
        i && wi(t, n, !0),
        t.child
      );
    }
    function Ua(e) {
      var t = e.stateNode;
      t.pendingContext
        ? vi(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && vi(0, t.context, !1),
        Io(e, t.containerInfo);
    }
    var La,
      za,
      Ba,
      Ha = { dehydrated: null, retryTime: 0 };
    function Wa(e, t, n) {
      var r,
        i = t.mode,
        o = t.pendingProps,
        a = Mo.current,
        l = !1;
      if (
        ((r = 0 != (64 & t.effectTag)) ||
          (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
        r
          ? ((l = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === o.fallback ||
            !0 === o.unstable_avoidThisFallback ||
            (a |= 1),
        si(Mo, 1 & a),
        null === e)
      ) {
        if ((void 0 !== o.fallback && Ea(t), l)) {
          if (
            ((l = o.fallback),
            ((o = Nu(null, i, 0, null)).return = t),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                o.child = e;
              null !== e;

            )
              (e.return = o), (e = e.sibling);
          return (
            ((n = Nu(l, i, n, null)).return = t),
            (o.sibling = n),
            (t.memoizedState = Ha),
            (t.child = o),
            n
          );
        }
        return (
          (i = o.children),
          (t.memoizedState = null),
          (t.child = So(t, null, i, n))
        );
      }
      if (null !== e.memoizedState) {
        if (((i = (e = e.child).sibling), l)) {
          if (
            ((o = o.fallback),
            ((n = Su(e, e.pendingProps)).return = t),
            0 == (2 & t.mode) &&
              (l = null !== t.memoizedState ? t.child.child : t.child) !==
                e.child)
          )
            for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
          return (
            ((i = Su(i, o)).return = t),
            (n.sibling = i),
            (n.childExpirationTime = 0),
            (t.memoizedState = Ha),
            (t.child = n),
            i
          );
        }
        return (
          (n = Eo(t, e.child, o.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), l)) {
        if (
          ((l = o.fallback),
          ((o = Nu(null, i, 0, null)).return = t),
          (o.child = e),
          null !== e && (e.return = o),
          0 == (2 & t.mode))
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, o.child = e;
            null !== e;

          )
            (e.return = o), (e = e.sibling);
        return (
          ((n = Nu(l, i, n, null)).return = t),
          (o.sibling = n),
          (n.effectTag |= 2),
          (o.childExpirationTime = 0),
          (t.memoizedState = Ha),
          (t.child = o),
          n
        );
      }
      return (t.memoizedState = null), (t.child = Eo(t, e, o.children, n));
    }
    function $a(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t),
        to(e.return, t);
    }
    function Va(e, t, n, r, i, o) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: o
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailExpiration = 0),
          (a.tailMode = i),
          (a.lastEffect = o));
    }
    function Qa(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
      if ((Da(e, t, r.children, n), 0 != (2 & (r = Mo.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && $a(e, n);
            else if (19 === e.tag) $a(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((si(Mo, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (i) {
          case 'forwards':
            for (n = t.child, i = null; null !== n; )
              null !== (e = n.alternate) && null === jo(e) && (i = n),
                (n = n.sibling);
            null === (n = i)
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
              Va(t, !1, i, n, o, t.lastEffect);
            break;
          case 'backwards':
            for (n = null, i = t.child, t.child = null; null !== i; ) {
              if (null !== (e = i.alternate) && null === jo(e)) {
                t.child = i;
                break;
              }
              (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            Va(t, !0, n, null, o, t.lastEffect);
            break;
          case 'together':
            Va(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ka(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && au(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(a(153));
      if (null !== t.child) {
        for (
          n = Su((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Su(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Ya(e, t) {
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function Xa(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return mi(t.type) && gi(), null;
        case 3:
          return (
            Oo(),
            ui(di),
            ui(fi),
            (n = t.stateNode).pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (null !== e && null !== e.child) || !Ca(t) || (t.effectTag |= 4),
            null
          );
        case 5:
          qo(t), (n = Do(Po.current));
          var o = t.type;
          if (null !== e && null != t.stateNode)
            za(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(a(166));
              return null;
            }
            if (((e = Do(No.current)), Ca(t))) {
              (r = t.stateNode), (o = t.type);
              var l = t.memoizedProps;
              switch (((r[kn] = t), (r[En] = l), o)) {
                case 'iframe':
                case 'object':
                case 'embed':
                  Qt('load', r);
                  break;
                case 'video':
                case 'audio':
                  for (e = 0; e < Xe.length; e++) Qt(Xe[e], r);
                  break;
                case 'source':
                  Qt('error', r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Qt('error', r), Qt('load', r);
                  break;
                case 'form':
                  Qt('reset', r), Qt('submit', r);
                  break;
                case 'details':
                  Qt('toggle', r);
                  break;
                case 'input':
                  _e(r, l), Qt('invalid', r), un(n, 'onChange');
                  break;
                case 'select':
                  (r._wrapperState = { wasMultiple: !!l.multiple }),
                    Qt('invalid', r),
                    un(n, 'onChange');
                  break;
                case 'textarea':
                  De(r, l), Qt('invalid', r), un(n, 'onChange');
              }
              for (var u in (on(o, l), (e = null), l))
                if (l.hasOwnProperty(u)) {
                  var s = l[u];
                  'children' === u
                    ? 'string' == typeof s
                      ? r.textContent !== s && (e = ['children', s])
                      : 'number' == typeof s &&
                        r.textContent !== '' + s &&
                        (e = ['children', '' + s])
                    : k.hasOwnProperty(u) && null != s && un(n, u);
                }
              switch (o) {
                case 'input':
                  we(r), Se(r, l, !0);
                  break;
                case 'textarea':
                  we(r), Oe(r);
                  break;
                case 'select':
                case 'option':
                  break;
                default:
                  'function' == typeof l.onClick && (r.onclick = sn);
              }
              (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
            } else {
              switch (
                ((u = 9 === n.nodeType ? n : n.ownerDocument),
                e === ln && (e = Me(o)),
                e === ln
                  ? 'script' === o
                    ? (((e = u.createElement('div')).innerHTML =
                        '<script></script>'),
                      (e = e.removeChild(e.firstChild)))
                    : 'string' == typeof r.is
                    ? (e = u.createElement(o, { is: r.is }))
                    : ((e = u.createElement(o)),
                      'select' === o &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                  : (e = u.createElementNS(e, o)),
                (e[kn] = t),
                (e[En] = r),
                La(e, t),
                (t.stateNode = e),
                (u = an(o, r)),
                o)
              ) {
                case 'iframe':
                case 'object':
                case 'embed':
                  Qt('load', e), (s = r);
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < Xe.length; s++) Qt(Xe[s], e);
                  s = r;
                  break;
                case 'source':
                  Qt('error', e), (s = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  Qt('error', e), Qt('load', e), (s = r);
                  break;
                case 'form':
                  Qt('reset', e), Qt('submit', e), (s = r);
                  break;
                case 'details':
                  Qt('toggle', e), (s = r);
                  break;
                case 'input':
                  _e(e, r), (s = Te(e, r)), Qt('invalid', e), un(n, 'onChange');
                  break;
                case 'option':
                  s = Ne(e, r);
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = i({}, r, { value: void 0 })),
                    Qt('invalid', e),
                    un(n, 'onChange');
                  break;
                case 'textarea':
                  De(e, r), (s = Pe(e, r)), Qt('invalid', e), un(n, 'onChange');
                  break;
                default:
                  s = r;
              }
              on(o, s);
              var c = s;
              for (l in c)
                if (c.hasOwnProperty(l)) {
                  var f = c[l];
                  'style' === l
                    ? nn(e, f)
                    : 'dangerouslySetInnerHTML' === l
                    ? null != (f = f ? f.__html : void 0) && Ue(e, f)
                    : 'children' === l
                    ? 'string' == typeof f
                      ? ('textarea' !== o || '' !== f) && Le(e, f)
                      : 'number' == typeof f && Le(e, '' + f)
                    : 'suppressContentEditableWarning' !== l &&
                      'suppressHydrationWarning' !== l &&
                      'autoFocus' !== l &&
                      (k.hasOwnProperty(l)
                        ? null != f && un(n, l)
                        : null != f && G(e, l, f, u));
                }
              switch (o) {
                case 'input':
                  we(e), Se(e, r, !1);
                  break;
                case 'textarea':
                  we(e), Oe(e);
                  break;
                case 'option':
                  null != r.value && e.setAttribute('value', '' + ye(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    null != (n = r.value)
                      ? Re(e, !!r.multiple, n, !1)
                      : null != r.defaultValue &&
                        Re(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  'function' == typeof s.onClick && (e.onclick = sn);
              }
              vn(o, r) && (t.effectTag |= 4);
            }
            null !== t.ref && (t.effectTag |= 128);
          }
          return null;
        case 6:
          if (e && null != t.stateNode) Ba(0, t, e.memoizedProps, r);
          else {
            if ('string' != typeof r && null === t.stateNode)
              throw Error(a(166));
            (n = Do(Po.current)),
              Do(No.current),
              Ca(t)
                ? ((n = t.stateNode),
                  (r = t.memoizedProps),
                  (n[kn] = t),
                  n.nodeValue !== r && (t.effectTag |= 4))
                : (((n = (9 === n.nodeType
                    ? n
                    : n.ownerDocument
                  ).createTextNode(r))[kn] = t),
                  (t.stateNode = n));
          }
          return null;
        case 13:
          return (
            ui(Mo),
            (r = t.memoizedState),
            0 != (64 & t.effectTag)
              ? ((t.expirationTime = n), t)
              : ((n = null !== r),
                (r = !1),
                null === e
                  ? void 0 !== t.memoizedProps.fallback && Ca(t)
                  : ((r = null !== (o = e.memoizedState)),
                    n ||
                      null === o ||
                      (null !== (o = e.child.sibling) &&
                        (null !== (l = t.firstEffect)
                          ? ((t.firstEffect = o), (o.nextEffect = l))
                          : ((t.firstEffect = t.lastEffect = o),
                            (o.nextEffect = null)),
                        (o.effectTag = 8)))),
                n &&
                  !r &&
                  0 != (2 & t.mode) &&
                  ((null === e &&
                    !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                  0 != (1 & Mo.current)
                    ? Cl === wl && (Cl = xl)
                    : ((Cl !== wl && Cl !== xl) || (Cl = Tl),
                      0 !== Il && null !== kl && (Ou(kl, Sl), Au(kl, Il)))),
                (n || r) && (t.effectTag |= 4),
                null)
          );
        case 4:
          return Oo(), null;
        case 10:
          return eo(t), null;
        case 17:
          return mi(t.type) && gi(), null;
        case 19:
          if ((ui(Mo), null === (r = t.memoizedState))) return null;
          if (((o = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
            if (o) Ya(r, !1);
            else if (Cl !== wl || (null !== e && 0 != (64 & e.effectTag)))
              for (l = t.child; null !== l; ) {
                if (null !== (e = jo(l))) {
                  for (
                    t.effectTag |= 64,
                      Ya(r, !1),
                      null !== (o = e.updateQueue) &&
                        ((t.updateQueue = o), (t.effectTag |= 4)),
                      null === r.lastEffect && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = t.child;
                    null !== r;

                  )
                    (l = n),
                      ((o = r).effectTag &= 2),
                      (o.nextEffect = null),
                      (o.firstEffect = null),
                      (o.lastEffect = null),
                      null === (e = o.alternate)
                        ? ((o.childExpirationTime = 0),
                          (o.expirationTime = l),
                          (o.child = null),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null))
                        : ((o.childExpirationTime = e.childExpirationTime),
                          (o.expirationTime = e.expirationTime),
                          (o.child = e.child),
                          (o.memoizedProps = e.memoizedProps),
                          (o.memoizedState = e.memoizedState),
                          (o.updateQueue = e.updateQueue),
                          (l = e.dependencies),
                          (o.dependencies =
                            null === l
                              ? null
                              : {
                                  expirationTime: l.expirationTime,
                                  firstContext: l.firstContext,
                                  responders: l.responders
                                })),
                      (r = r.sibling);
                  return si(Mo, (1 & Mo.current) | 2), t.child;
                }
                l = l.sibling;
              }
          } else {
            if (!o)
              if (null !== (e = jo(l))) {
                if (
                  ((t.effectTag |= 64),
                  (o = !0),
                  null !== (n = e.updateQueue) &&
                    ((t.updateQueue = n), (t.effectTag |= 4)),
                  Ya(r, !0),
                  null === r.tail && 'hidden' === r.tailMode && !l.alternate)
                )
                  return (
                    null !== (t = t.lastEffect = r.lastEffect) &&
                      (t.nextEffect = null),
                    null
                  );
              } else
                2 * Ui() - r.renderingStartTime > r.tailExpiration &&
                  1 < n &&
                  ((t.effectTag |= 64),
                  (o = !0),
                  Ya(r, !1),
                  (t.expirationTime = t.childExpirationTime = n - 1));
            r.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                (r.last = l));
          }
          return null !== r.tail
            ? (0 === r.tailExpiration && (r.tailExpiration = Ui() + 500),
              (n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = Ui()),
              (n.sibling = null),
              (t = Mo.current),
              si(Mo, o ? (1 & t) | 2 : 1 & t),
              n)
            : null;
      }
      throw Error(a(156, t.tag));
    }
    function Ga(e) {
      switch (e.tag) {
        case 1:
          mi(e.type) && gi();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Oo(), ui(di), ui(fi), 0 != (64 & (t = e.effectTag))))
            throw Error(a(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return qo(e), null;
        case 13:
          return (
            ui(Mo),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return ui(Mo), null;
        case 4:
          return Oo(), null;
        case 10:
          return eo(e), null;
        default:
          return null;
      }
    }
    function Ja(e, t) {
      return { value: e, source: t, stack: ve(t) };
    }
    (La = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (za = function (e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
          var l,
            u,
            s = t.stateNode;
          switch ((Do(No.current), (e = null), n)) {
            case 'input':
              (a = Te(s, a)), (r = Te(s, r)), (e = []);
              break;
            case 'option':
              (a = Ne(s, a)), (r = Ne(s, r)), (e = []);
              break;
            case 'select':
              (a = i({}, a, { value: void 0 })),
                (r = i({}, r, { value: void 0 })),
                (e = []);
              break;
            case 'textarea':
              (a = Pe(s, a)), (r = Pe(s, r)), (e = []);
              break;
            default:
              'function' != typeof a.onClick &&
                'function' == typeof r.onClick &&
                (s.onclick = sn);
          }
          for (l in (on(n, r), (n = null), a))
            if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
              if ('style' === l)
                for (u in (s = a[l]))
                  s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
              else
                'dangerouslySetInnerHTML' !== l &&
                  'children' !== l &&
                  'suppressContentEditableWarning' !== l &&
                  'suppressHydrationWarning' !== l &&
                  'autoFocus' !== l &&
                  (k.hasOwnProperty(l)
                    ? e || (e = [])
                    : (e = e || []).push(l, null));
          for (l in r) {
            var c = r[l];
            if (
              ((s = null != a ? a[l] : void 0),
              r.hasOwnProperty(l) && c !== s && (null != c || null != s))
            )
              if ('style' === l)
                if (s) {
                  for (u in s)
                    !s.hasOwnProperty(u) ||
                      (c && c.hasOwnProperty(u)) ||
                      (n || (n = {}), (n[u] = ''));
                  for (u in c)
                    c.hasOwnProperty(u) &&
                      s[u] !== c[u] &&
                      (n || (n = {}), (n[u] = c[u]));
                } else n || (e || (e = []), e.push(l, n)), (n = c);
              else
                'dangerouslySetInnerHTML' === l
                  ? ((c = c ? c.__html : void 0),
                    (s = s ? s.__html : void 0),
                    null != c && s !== c && (e = e || []).push(l, c))
                  : 'children' === l
                  ? s === c ||
                    ('string' != typeof c && 'number' != typeof c) ||
                    (e = e || []).push(l, '' + c)
                  : 'suppressContentEditableWarning' !== l &&
                    'suppressHydrationWarning' !== l &&
                    (k.hasOwnProperty(l)
                      ? (null != c && un(o, l), e || s === c || (e = []))
                      : (e = e || []).push(l, c));
          }
          n && (e = e || []).push('style', n),
            (o = e),
            (t.updateQueue = o) && (t.effectTag |= 4);
        }
      }),
      (Ba = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4);
      });
    var Za = 'function' == typeof WeakSet ? WeakSet : Set;
    function el(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = ve(n)),
        null !== n && ge(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && ge(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tl(e) {
      var t = e.ref;
      if (null !== t)
        if ('function' == typeof t)
          try {
            t(null);
          } catch (t) {
            yu(e, t);
          }
        else t.current = null;
    }
    function nl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : Ki(t.type, n),
              r
            )),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(a(163));
    }
    function rl(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.destroy;
            (n.destroy = void 0), void 0 !== r && r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function il(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function ol(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void il(3, n);
        case 1:
          if (((e = n.stateNode), 4 & n.effectTag))
            if (null === t) e.componentDidMount();
            else {
              var r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : Ki(n.type, t.memoizedProps);
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          return void (null !== (t = n.updateQueue) && fo(n, t, e));
        case 3:
          if (null !== (t = n.updateQueue)) {
            if (((e = null), null !== n.child))
              switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            fo(n, t, e);
          }
          return;
        case 5:
          return (
            (e = n.stateNode),
            void (
              null === t &&
              4 & n.effectTag &&
              vn(n.type, n.memoizedProps) &&
              e.focus()
            )
          );
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === n.memoizedState &&
            ((n = n.alternate),
            null !== n &&
              ((n = n.memoizedState),
              null !== n && ((n = n.dehydrated), null !== n && Mt(n))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }
      throw Error(a(163));
    }
    function al(e, t, n) {
      switch (('function' == typeof Tu && Tu(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            Bi(97 < n ? 97 : n, function () {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var i = t;
                  try {
                    n();
                  } catch (e) {
                    yu(i, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          tl(t),
            'function' == typeof (n = t.stateNode).componentWillUnmount &&
              (function (e, t) {
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  yu(e, t);
                }
              })(t, n);
          break;
        case 5:
          tl(t);
          break;
        case 4:
          cl(e, t, n);
      }
    }
    function ll(e) {
      var t = e.alternate;
      (e.return = null),
        (e.child = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.alternate = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.pendingProps = null),
        (e.memoizedProps = null),
        (e.stateNode = null),
        null !== t && ll(t);
    }
    function ul(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function sl(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (ul(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(a(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(a(161));
      }
      16 & n.effectTag && (Le(t, ''), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || ul(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      r
        ? (function e(t, n, r) {
            var i = t.tag,
              o = 5 === i || 6 === i;
            if (o)
              (t = o ? t.stateNode : t.stateNode.instance),
                n
                  ? 8 === r.nodeType
                    ? r.parentNode.insertBefore(t, n)
                    : r.insertBefore(t, n)
                  : (8 === r.nodeType
                      ? (n = r.parentNode).insertBefore(t, r)
                      : (n = r).appendChild(t),
                    (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                      null !== n.onclick ||
                      (n.onclick = sn));
            else if (4 !== i && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; )
                e(t, n, r), (t = t.sibling);
          })(e, n, t)
        : (function e(t, n, r) {
            var i = t.tag,
              o = 5 === i || 6 === i;
            if (o)
              (t = o ? t.stateNode : t.stateNode.instance),
                n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== i && null !== (t = t.child))
              for (e(t, n, r), t = t.sibling; null !== t; )
                e(t, n, r), (t = t.sibling);
          })(e, n, t);
    }
    function cl(e, t, n) {
      for (var r, i, o = t, l = !1; ; ) {
        if (!l) {
          l = o.return;
          e: for (;;) {
            if (null === l) throw Error(a(160));
            switch (((r = l.stateNode), l.tag)) {
              case 5:
                i = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (i = !0);
                break e;
            }
            l = l.return;
          }
          l = !0;
        }
        if (5 === o.tag || 6 === o.tag) {
          e: for (var u = e, s = o, c = n, f = s; ; )
            if ((al(u, f, c), null !== f.child && 4 !== f.tag))
              (f.child.return = f), (f = f.child);
            else {
              if (f === s) break e;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === s) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
          i
            ? ((u = r),
              (s = o.stateNode),
              8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s))
            : r.removeChild(o.stateNode);
        } else if (4 === o.tag) {
          if (null !== o.child) {
            (r = o.stateNode.containerInfo),
              (i = !0),
              (o.child.return = o),
              (o = o.child);
            continue;
          }
        } else if ((al(e, o, n), null !== o.child)) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === t) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === t) return;
          4 === (o = o.return).tag && (l = !1);
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function fl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void rl(3, t);
        case 1:
          return;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              i = null !== e ? e.memoizedProps : r;
            e = t.type;
            var o = t.updateQueue;
            if (((t.updateQueue = null), null !== o)) {
              for (
                n[En] = r,
                  'input' === e &&
                    'radio' === r.type &&
                    null != r.name &&
                    ke(n, r),
                  an(e, i),
                  t = an(e, r),
                  i = 0;
                i < o.length;
                i += 2
              ) {
                var l = o[i],
                  u = o[i + 1];
                'style' === l
                  ? nn(n, u)
                  : 'dangerouslySetInnerHTML' === l
                  ? Ue(n, u)
                  : 'children' === l
                  ? Le(n, u)
                  : G(n, l, u, t);
              }
              switch (e) {
                case 'input':
                  Ee(n, r);
                  break;
                case 'textarea':
                  Ie(n, r);
                  break;
                case 'select':
                  (t = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (e = r.value)
                      ? Re(n, !!r.multiple, e, !1)
                      : t !== !!r.multiple &&
                        (null != r.defaultValue
                          ? Re(n, !!r.multiple, r.defaultValue, !0)
                          : Re(n, !!r.multiple, r.multiple ? [] : '', !1));
              }
            }
          }
          return;
        case 6:
          if (null === t.stateNode) throw Error(a(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void (
            (t = t.stateNode).hydrate && ((t.hydrate = !1), Mt(t.containerInfo))
          );
        case 12:
          return;
        case 13:
          if (
            ((n = t),
            null === t.memoizedState
              ? (r = !1)
              : ((r = !0), (n = t.child), (Al = Ui())),
            null !== n)
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (o = e.stateNode),
                  r
                    ? 'function' == typeof (o = o.style).setProperty
                      ? o.setProperty('display', 'none', 'important')
                      : (o.display = 'none')
                    : ((o = e.stateNode),
                      (i =
                        null != (i = e.memoizedProps.style) &&
                        i.hasOwnProperty('display')
                          ? i.display
                          : null),
                      (o.style.display = tn('display', i)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? '' : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((o = e.child.sibling).return = e), (e = o);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          return void dl(t);
        case 19:
          return void dl(t);
        case 17:
          return;
      }
      throw Error(a(163));
    }
    function dl(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Za()),
          t.forEach(function (t) {
            var r = wu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    var pl = 'function' == typeof WeakMap ? WeakMap : Map;
    function hl(e, t, n) {
      ((n = lo(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          Ml || ((Ml = !0), (jl = r)), el(e, t);
        }),
        n
      );
    }
    function ml(e, t, n) {
      (n = lo(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ('function' == typeof r) {
        var i = t.value;
        n.payload = function () {
          return el(e, t), r(i);
        };
      }
      var o = e.stateNode;
      return (
        null !== o &&
          'function' == typeof o.componentDidCatch &&
          (n.callback = function () {
            'function' != typeof r &&
              (null === Fl ? (Fl = new Set([this])) : Fl.add(this), el(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : ''
            });
          }),
        n
      );
    }
    var gl,
      vl = Math.ceil,
      yl = X.ReactCurrentDispatcher,
      bl = X.ReactCurrentOwner,
      wl = 0,
      xl = 3,
      Tl = 4,
      _l = 0,
      kl = null,
      El = null,
      Sl = 0,
      Cl = wl,
      Nl = null,
      Rl = 1073741823,
      Pl = 1073741823,
      Dl = null,
      Il = 0,
      Ol = !1,
      Al = 0,
      ql = null,
      Ml = !1,
      jl = null,
      Fl = null,
      Ul = !1,
      Ll = null,
      zl = 90,
      Bl = null,
      Hl = 0,
      Wl = null,
      $l = 0;
    function Vl() {
      return 0 != (48 & _l)
        ? 1073741821 - ((Ui() / 10) | 0)
        : 0 !== $l
        ? $l
        : ($l = 1073741821 - ((Ui() / 10) | 0));
    }
    function Ql(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var r = Li();
      if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if (0 != (16 & _l)) return Sl;
      if (null !== n) e = Qi(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Qi(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Qi(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(a(326));
        }
      return null !== kl && e === Sl && --e, e;
    }
    function Kl(e, t) {
      if (50 < Hl) throw ((Hl = 0), (Wl = null), Error(a(185)));
      if (null !== (e = Yl(e, t))) {
        var n = Li();
        1073741823 === t
          ? 0 != (8 & _l) && 0 == (48 & _l)
            ? Zl(e)
            : (Gl(e), 0 === _l && $i())
          : Gl(e),
          0 == (4 & _l) ||
            (98 !== n && 99 !== n) ||
            (null === Bl
              ? (Bl = new Map([[e, t]]))
              : (void 0 === (n = Bl.get(e)) || n > t) && Bl.set(e, t));
      }
    }
    function Yl(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        i = null;
      if (null === r && 3 === e.tag) i = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            i = r.stateNode;
            break;
          }
          r = r.return;
        }
      return (
        null !== i && (kl === i && (au(t), Cl === Tl && Ou(i, Sl)), Au(i, t)), i
      );
    }
    function Xl(e) {
      var t = e.lastExpiredTime;
      if (0 !== t) return t;
      if (!Iu(e, (t = e.firstPendingTime))) return t;
      var n = e.lastPingedTime;
      return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
        ? 0
        : e;
    }
    function Gl(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = Wi(Zl.bind(null, e)));
      else {
        var t = Xl(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var r = Vl();
          if (
            (1073741823 === t
              ? (r = 99)
              : 1 === t || 2 === t
              ? (r = 95)
              : (r =
                  0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
            null !== n)
          ) {
            var i = e.callbackPriority;
            if (e.callbackExpirationTime === t && i >= r) return;
            n !== Ii && _i(n);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = r),
            (t =
              1073741823 === t
                ? Wi(Zl.bind(null, e))
                : Hi(r, Jl.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Ui()
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function Jl(e, t) {
      if ((($l = 0), t)) return qu(e, (t = Vl())), Gl(e), null;
      var n = Xl(e);
      if (0 !== n) {
        if (((t = e.callbackNode), 0 != (48 & _l))) throw Error(a(327));
        if ((mu(), (e === kl && n === Sl) || nu(e, n), null !== El)) {
          var r = _l;
          _l |= 16;
          for (var i = iu(); ; )
            try {
              uu();
              break;
            } catch (t) {
              ru(e, t);
            }
          if ((Zi(), (_l = r), (yl.current = i), 1 === Cl))
            throw ((t = Nl), nu(e, n), Ou(e, n), Gl(e), t);
          if (null === El)
            switch (
              ((i = e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = n),
              (r = Cl),
              (kl = null),
              r)
            ) {
              case wl:
              case 1:
                throw Error(a(345));
              case 2:
                qu(e, 2 < n ? 2 : n);
                break;
              case xl:
                if (
                  (Ou(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = fu(i)),
                  1073741823 === Rl && 10 < (i = Al + 500 - Ui()))
                ) {
                  if (Ol) {
                    var o = e.lastPingedTime;
                    if (0 === o || o >= n) {
                      (e.lastPingedTime = n), nu(e, n);
                      break;
                    }
                  }
                  if (0 !== (o = Xl(e)) && o !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  e.timeoutHandle = bn(du.bind(null, e), i);
                  break;
                }
                du(e);
                break;
              case Tl:
                if (
                  (Ou(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = fu(i)),
                  Ol && (0 === (i = e.lastPingedTime) || i >= n))
                ) {
                  (e.lastPingedTime = n), nu(e, n);
                  break;
                }
                if (0 !== (i = Xl(e)) && i !== n) break;
                if (0 !== r && r !== n) {
                  e.lastPingedTime = r;
                  break;
                }
                if (
                  (1073741823 !== Pl
                    ? (r = 10 * (1073741821 - Pl) - Ui())
                    : 1073741823 === Rl
                    ? (r = 0)
                    : ((r = 10 * (1073741821 - Rl) - 5e3),
                      0 > (r = (i = Ui()) - r) && (r = 0),
                      (n = 10 * (1073741821 - n) - i) <
                        (r =
                          (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * vl(r / 1960)) - r) && (r = n)),
                  10 < r)
                ) {
                  e.timeoutHandle = bn(du.bind(null, e), r);
                  break;
                }
                du(e);
                break;
              case 5:
                if (1073741823 !== Rl && null !== Dl) {
                  o = Rl;
                  var l = Dl;
                  if (
                    (0 >= (r = 0 | l.busyMinDurationMs)
                      ? (r = 0)
                      : ((i = 0 | l.busyDelayMs),
                        (r =
                          (o =
                            Ui() -
                            (10 * (1073741821 - o) -
                              (0 | l.timeoutMs || 5e3))) <= i
                            ? 0
                            : i + r - o)),
                    10 < r)
                  ) {
                    Ou(e, n), (e.timeoutHandle = bn(du.bind(null, e), r));
                    break;
                  }
                }
                du(e);
                break;
              default:
                throw Error(a(329));
            }
          if ((Gl(e), e.callbackNode === t)) return Jl.bind(null, e);
        }
      }
      return null;
    }
    function Zl(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), 0 != (48 & _l))) throw Error(a(327));
      if ((mu(), (e === kl && t === Sl) || nu(e, t), null !== El)) {
        var n = _l;
        _l |= 16;
        for (var r = iu(); ; )
          try {
            lu();
            break;
          } catch (t) {
            ru(e, t);
          }
        if ((Zi(), (_l = n), (yl.current = r), 1 === Cl))
          throw ((n = Nl), nu(e, t), Ou(e, t), Gl(e), n);
        if (null !== El) throw Error(a(261));
        (e.finishedWork = e.current.alternate),
          (e.finishedExpirationTime = t),
          (kl = null),
          du(e),
          Gl(e);
      }
      return null;
    }
    function eu(e, t) {
      var n = _l;
      _l |= 1;
      try {
        return e(t);
      } finally {
        0 === (_l = n) && $i();
      }
    }
    function tu(e, t) {
      var n = _l;
      (_l &= -2), (_l |= 8);
      try {
        return e(t);
      } finally {
        0 === (_l = n) && $i();
      }
    }
    function nu(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== El))
        for (n = El.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && gi();
              break;
            case 3:
              Oo(), ui(di), ui(fi);
              break;
            case 5:
              qo(r);
              break;
            case 4:
              Oo();
              break;
            case 13:
            case 19:
              ui(Mo);
              break;
            case 10:
              eo(r);
          }
          n = n.return;
        }
      (kl = e),
        (El = Su(e.current, null)),
        (Sl = t),
        (Cl = wl),
        (Nl = null),
        (Pl = Rl = 1073741823),
        (Dl = null),
        (Il = 0),
        (Ol = !1);
    }
    function ru(e, t) {
      for (;;) {
        try {
          if ((Zi(), (Uo.current = ga), $o))
            for (var n = Bo.memoizedState; null !== n; ) {
              var r = n.queue;
              null !== r && (r.pending = null), (n = n.next);
            }
          if (
            ((zo = 0),
            (Wo = Ho = Bo = null),
            ($o = !1),
            null === El || null === El.return)
          )
            return (Cl = 1), (Nl = t), (El = null);
          e: {
            var i = e,
              o = El.return,
              a = El,
              l = t;
            if (
              ((t = Sl),
              (a.effectTag |= 2048),
              (a.firstEffect = a.lastEffect = null),
              null !== l && 'object' == typeof l && 'function' == typeof l.then)
            ) {
              var u = l;
              if (0 == (2 & a.mode)) {
                var s = a.alternate;
                s
                  ? ((a.updateQueue = s.updateQueue),
                    (a.memoizedState = s.memoizedState),
                    (a.expirationTime = s.expirationTime))
                  : ((a.updateQueue = null), (a.memoizedState = null));
              }
              var c = 0 != (1 & Mo.current),
                f = o;
              do {
                var d;
                if ((d = 13 === f.tag)) {
                  var p = f.memoizedState;
                  if (null !== p) d = null !== p.dehydrated;
                  else {
                    var h = f.memoizedProps;
                    d =
                      void 0 !== h.fallback &&
                      (!0 !== h.unstable_avoidThisFallback || !c);
                  }
                }
                if (d) {
                  var m = f.updateQueue;
                  if (null === m) {
                    var g = new Set();
                    g.add(u), (f.updateQueue = g);
                  } else m.add(u);
                  if (0 == (2 & f.mode)) {
                    if (
                      ((f.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag)
                    )
                      if (null === a.alternate) a.tag = 17;
                      else {
                        var v = lo(1073741823, null);
                        (v.tag = 2), uo(a, v);
                      }
                    a.expirationTime = 1073741823;
                    break e;
                  }
                  (l = void 0), (a = t);
                  var y = i.pingCache;
                  if (
                    (null === y
                      ? ((y = i.pingCache = new pl()),
                        (l = new Set()),
                        y.set(u, l))
                      : void 0 === (l = y.get(u)) &&
                        ((l = new Set()), y.set(u, l)),
                    !l.has(a))
                  ) {
                    l.add(a);
                    var b = bu.bind(null, i, u, a);
                    u.then(b, b);
                  }
                  (f.effectTag |= 4096), (f.expirationTime = t);
                  break e;
                }
                f = f.return;
              } while (null !== f);
              l = Error(
                (ge(a.type) || 'A React component') +
                  ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                  ve(a)
              );
            }
            5 !== Cl && (Cl = 2), (l = Ja(l, a)), (f = o);
            do {
              switch (f.tag) {
                case 3:
                  (u = l),
                    (f.effectTag |= 4096),
                    (f.expirationTime = t),
                    so(f, hl(f, u, t));
                  break e;
                case 1:
                  u = l;
                  var w = f.type,
                    x = f.stateNode;
                  if (
                    0 == (64 & f.effectTag) &&
                    ('function' == typeof w.getDerivedStateFromError ||
                      (null !== x &&
                        'function' == typeof x.componentDidCatch &&
                        (null === Fl || !Fl.has(x))))
                  ) {
                    (f.effectTag |= 4096),
                      (f.expirationTime = t),
                      so(f, ml(f, u, t));
                    break e;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          El = cu(El);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function iu() {
      var e = yl.current;
      return (yl.current = ga), null === e ? ga : e;
    }
    function ou(e, t) {
      e < Rl && 2 < e && (Rl = e),
        null !== t && e < Pl && 2 < e && ((Pl = e), (Dl = t));
    }
    function au(e) {
      e > Il && (Il = e);
    }
    function lu() {
      for (; null !== El; ) El = su(El);
    }
    function uu() {
      for (; null !== El && !Oi(); ) El = su(El);
    }
    function su(e) {
      var t = gl(e.alternate, e, Sl);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = cu(e)),
        (bl.current = null),
        t
      );
    }
    function cu(e) {
      El = e;
      do {
        var t = El.alternate;
        if (((e = El.return), 0 == (2048 & El.effectTag))) {
          if (((t = Xa(t, El, Sl)), 1 === Sl || 1 !== El.childExpirationTime)) {
            for (var n = 0, r = El.child; null !== r; ) {
              var i = r.expirationTime,
                o = r.childExpirationTime;
              i > n && (n = i), o > n && (n = o), (r = r.sibling);
            }
            El.childExpirationTime = n;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = El.firstEffect),
            null !== El.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = El.firstEffect),
              (e.lastEffect = El.lastEffect)),
            1 < El.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = El)
                : (e.firstEffect = El),
              (e.lastEffect = El)));
        } else {
          if (null !== (t = Ga(El))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = El.sibling)) return t;
        El = e;
      } while (null !== El);
      return Cl === wl && (Cl = 5), null;
    }
    function fu(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function du(e) {
      var t = Li();
      return Bi(99, pu.bind(null, e, t)), null;
    }
    function pu(e, t) {
      do {
        mu();
      } while (null !== Ll);
      if (0 != (48 & _l)) throw Error(a(327));
      var n = e.finishedWork,
        r = e.finishedExpirationTime;
      if (null === n) return null;
      if (
        ((e.finishedWork = null),
        (e.finishedExpirationTime = 0),
        n === e.current)
      )
        throw Error(a(177));
      (e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90),
        (e.nextKnownPendingLevel = 0);
      var i = fu(n);
      if (
        ((e.firstPendingTime = i),
        r <= e.lastSuspendedTime
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === kl && ((El = kl = null), (Sl = 0)),
        1 < n.effectTag
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
            : (i = n)
          : (i = n.firstEffect),
        null !== i)
      ) {
        var o = _l;
        (_l |= 32), (bl.current = null), (mn = Vt);
        var l = pn();
        if (hn(l)) {
          if ('selectionStart' in l)
            var u = { start: l.selectionStart, end: l.selectionEnd };
          else
            e: {
              var s =
                (u = ((u = l.ownerDocument) && u.defaultView) || window)
                  .getSelection && u.getSelection();
              if (s && 0 !== s.rangeCount) {
                u = s.anchorNode;
                var c = s.anchorOffset,
                  f = s.focusNode;
                s = s.focusOffset;
                try {
                  u.nodeType, f.nodeType;
                } catch (e) {
                  u = null;
                  break e;
                }
                var d = 0,
                  p = -1,
                  h = -1,
                  m = 0,
                  g = 0,
                  v = l,
                  y = null;
                t: for (;;) {
                  for (
                    var b;
                    v !== u || (0 !== c && 3 !== v.nodeType) || (p = d + c),
                      v !== f || (0 !== s && 3 !== v.nodeType) || (h = d + s),
                      3 === v.nodeType && (d += v.nodeValue.length),
                      null !== (b = v.firstChild);

                  )
                    (y = v), (v = b);
                  for (;;) {
                    if (v === l) break t;
                    if (
                      (y === u && ++m === c && (p = d),
                      y === f && ++g === s && (h = d),
                      null !== (b = v.nextSibling))
                    )
                      break;
                    y = (v = y).parentNode;
                  }
                  v = b;
                }
                u = -1 === p || -1 === h ? null : { start: p, end: h };
              } else u = null;
            }
          u = u || { start: 0, end: 0 };
        } else u = null;
        (gn = {
          activeElementDetached: null,
          focusedElem: l,
          selectionRange: u
        }),
          (Vt = !1),
          (ql = i);
        do {
          try {
            hu();
          } catch (e) {
            if (null === ql) throw Error(a(330));
            yu(ql, e), (ql = ql.nextEffect);
          }
        } while (null !== ql);
        ql = i;
        do {
          try {
            for (l = e, u = t; null !== ql; ) {
              var w = ql.effectTag;
              if ((16 & w && Le(ql.stateNode, ''), 128 & w)) {
                var x = ql.alternate;
                if (null !== x) {
                  var T = x.ref;
                  null !== T &&
                    ('function' == typeof T ? T(null) : (T.current = null));
                }
              }
              switch (1038 & w) {
                case 2:
                  sl(ql), (ql.effectTag &= -3);
                  break;
                case 6:
                  sl(ql), (ql.effectTag &= -3), fl(ql.alternate, ql);
                  break;
                case 1024:
                  ql.effectTag &= -1025;
                  break;
                case 1028:
                  (ql.effectTag &= -1025), fl(ql.alternate, ql);
                  break;
                case 4:
                  fl(ql.alternate, ql);
                  break;
                case 8:
                  cl(l, (c = ql), u), ll(c);
              }
              ql = ql.nextEffect;
            }
          } catch (e) {
            if (null === ql) throw Error(a(330));
            yu(ql, e), (ql = ql.nextEffect);
          }
        } while (null !== ql);
        if (
          ((T = gn),
          (x = pn()),
          (w = T.focusedElem),
          (u = T.selectionRange),
          x !== w &&
            w &&
            w.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : 'contains' in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition &&
                        !!(16 & t.compareDocumentPosition(n)))))
              );
            })(w.ownerDocument.documentElement, w))
        ) {
          null !== u &&
            hn(w) &&
            ((x = u.start),
            void 0 === (T = u.end) && (T = x),
            'selectionStart' in w
              ? ((w.selectionStart = x),
                (w.selectionEnd = Math.min(T, w.value.length)))
              : (T =
                  ((x = w.ownerDocument || document) && x.defaultView) ||
                  window).getSelection &&
                ((T = T.getSelection()),
                (c = w.textContent.length),
                (l = Math.min(u.start, c)),
                (u = void 0 === u.end ? l : Math.min(u.end, c)),
                !T.extend && l > u && ((c = u), (u = l), (l = c)),
                (c = dn(w, l)),
                (f = dn(w, u)),
                c &&
                  f &&
                  (1 !== T.rangeCount ||
                    T.anchorNode !== c.node ||
                    T.anchorOffset !== c.offset ||
                    T.focusNode !== f.node ||
                    T.focusOffset !== f.offset) &&
                  ((x = x.createRange()).setStart(c.node, c.offset),
                  T.removeAllRanges(),
                  l > u
                    ? (T.addRange(x), T.extend(f.node, f.offset))
                    : (x.setEnd(f.node, f.offset), T.addRange(x))))),
            (x = []);
          for (T = w; (T = T.parentNode); )
            1 === T.nodeType &&
              x.push({ element: T, left: T.scrollLeft, top: T.scrollTop });
          for (
            'function' == typeof w.focus && w.focus(), w = 0;
            w < x.length;
            w++
          )
            ((T = x[w]).element.scrollLeft = T.left),
              (T.element.scrollTop = T.top);
        }
        (Vt = !!mn), (gn = mn = null), (e.current = n), (ql = i);
        do {
          try {
            for (w = e; null !== ql; ) {
              var _ = ql.effectTag;
              if ((36 & _ && ol(w, ql.alternate, ql), 128 & _)) {
                x = void 0;
                var k = ql.ref;
                if (null !== k) {
                  var E = ql.stateNode;
                  switch (ql.tag) {
                    case 5:
                      x = E;
                      break;
                    default:
                      x = E;
                  }
                  'function' == typeof k ? k(x) : (k.current = x);
                }
              }
              ql = ql.nextEffect;
            }
          } catch (e) {
            if (null === ql) throw Error(a(330));
            yu(ql, e), (ql = ql.nextEffect);
          }
        } while (null !== ql);
        (ql = null), Ai(), (_l = o);
      } else e.current = n;
      if (Ul) (Ul = !1), (Ll = e), (zl = t);
      else
        for (ql = i; null !== ql; )
          (t = ql.nextEffect), (ql.nextEffect = null), (ql = t);
      if (
        (0 === (t = e.firstPendingTime) && (Fl = null),
        1073741823 === t ? (e === Wl ? Hl++ : ((Hl = 0), (Wl = e))) : (Hl = 0),
        'function' == typeof xu && xu(n.stateNode, r),
        Gl(e),
        Ml)
      )
        throw ((Ml = !1), (e = jl), (jl = null), e);
      return 0 != (8 & _l) || $i(), null;
    }
    function hu() {
      for (; null !== ql; ) {
        var e = ql.effectTag;
        0 != (256 & e) && nl(ql.alternate, ql),
          0 == (512 & e) ||
            Ul ||
            ((Ul = !0),
            Hi(97, function () {
              return mu(), null;
            })),
          (ql = ql.nextEffect);
      }
    }
    function mu() {
      if (90 !== zl) {
        var e = 97 < zl ? 97 : zl;
        return (zl = 90), Bi(e, gu);
      }
    }
    function gu() {
      if (null === Ll) return !1;
      var e = Ll;
      if (((Ll = null), 0 != (48 & _l))) throw Error(a(331));
      var t = _l;
      for (_l |= 32, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                rl(5, n), il(5, n);
            }
        } catch (t) {
          if (null === e) throw Error(a(330));
          yu(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (_l = t), $i(), !0;
    }
    function vu(e, t, n) {
      uo(e, (t = hl(e, (t = Ja(n, t)), 1073741823))),
        null !== (e = Yl(e, 1073741823)) && Gl(e);
    }
    function yu(e, t) {
      if (3 === e.tag) vu(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            vu(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              'function' == typeof n.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch &&
                (null === Fl || !Fl.has(r)))
            ) {
              uo(n, (e = ml(n, (e = Ja(t, e)), 1073741823))),
                null !== (n = Yl(n, 1073741823)) && Gl(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function bu(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        kl === e && Sl === n
          ? Cl === Tl || (Cl === xl && 1073741823 === Rl && Ui() - Al < 500)
            ? nu(e, Sl)
            : (Ol = !0)
          : Iu(e, n) &&
            ((0 !== (t = e.lastPingedTime) && t < n) ||
              ((e.lastPingedTime = n), Gl(e)));
    }
    function wu(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) && (t = Ql((t = Vl()), e, null)),
        null !== (e = Yl(e, t)) && Gl(e);
    }
    gl = function (e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var i = t.pendingProps;
        if (e.memoizedProps !== i || di.current) Pa = !0;
        else {
          if (r < n) {
            switch (((Pa = !1), t.tag)) {
              case 3:
                Ua(t), Na();
                break;
              case 5:
                if ((Ao(t), 4 & t.mode && 1 !== n && i.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                mi(t.type) && bi(t);
                break;
              case 4:
                Io(t, t.stateNode.containerInfo);
                break;
              case 10:
                (r = t.memoizedProps.value),
                  (i = t.type._context),
                  si(Yi, i._currentValue),
                  (i._currentValue = r);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? Wa(e, t, n)
                    : (si(Mo, 1 & Mo.current),
                      null !== (t = Ka(e, t, n)) ? t.sibling : null);
                si(Mo, 1 & Mo.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                ) {
                  if (r) return Qa(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (null !== (i = t.memoizedState) &&
                    ((i.rendering = null), (i.tail = null)),
                  si(Mo, Mo.current),
                  !r)
                )
                  return null;
            }
            return Ka(e, t, n);
          }
          Pa = !1;
        }
      } else Pa = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (i = hi(t, fi.current)),
            no(t, n),
            (i = Ko(null, t, r, e, i, n)),
            (t.effectTag |= 1),
            'object' == typeof i &&
              null !== i &&
              'function' == typeof i.render &&
              void 0 === i.$$typeof)
          ) {
            if (
              ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              mi(r))
            ) {
              var o = !0;
              bi(t);
            } else o = !1;
            (t.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
              oo(t);
            var l = r.getDerivedStateFromProps;
            'function' == typeof l && mo(t, r, l, e),
              (i.updater = go),
              (t.stateNode = i),
              (i._reactInternalFiber = t),
              wo(t, r, e, n),
              (t = Fa(null, t, r, !0, o, n));
          } else (t.tag = 0), Da(null, t, i, n), (t = t.child);
          return t;
        case 16:
          e: {
            if (
              ((i = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function (t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function (t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(i),
              1 !== i._status)
            )
              throw i._result;
            switch (
              ((i = i._result),
              (t.type = i),
              (o = t.tag = (function (e) {
                if ('function' == typeof e) return Eu(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === ue) return 11;
                  if (e === fe) return 14;
                }
                return 2;
              })(i)),
              (e = Ki(i, e)),
              o)
            ) {
              case 0:
                t = Ma(null, t, i, e, n);
                break e;
              case 1:
                t = ja(null, t, i, e, n);
                break e;
              case 11:
                t = Ia(null, t, i, e, n);
                break e;
              case 14:
                t = Oa(null, t, i, Ki(i.type, e), r, n);
                break e;
            }
            throw Error(a(306, i, ''));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Ma(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
          );
        case 1:
          return (
            (r = t.type),
            (i = t.pendingProps),
            ja(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
          );
        case 3:
          if ((Ua(t), (r = t.updateQueue), null === e || null === r))
            throw Error(a(282));
          if (
            ((r = t.pendingProps),
            (i = null !== (i = t.memoizedState) ? i.element : null),
            ao(e, t),
            co(t, r, null, n),
            (r = t.memoizedState.element) === i)
          )
            Na(), (t = Ka(e, t, n));
          else {
            if (
              ((i = t.stateNode.hydrate) &&
                ((xa = xn(t.stateNode.containerInfo.firstChild)),
                (wa = t),
                (i = Ta = !0)),
              i)
            )
              for (n = So(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else Da(e, t, r, n), Na();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Ao(t),
            null === e && Ea(t),
            (r = t.type),
            (i = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (l = i.children),
            yn(r, i)
              ? (l = null)
              : null !== o && yn(r, o) && (t.effectTag |= 16),
            qa(e, t),
            4 & t.mode && 1 !== n && i.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (Da(e, t, l, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && Ea(t), null;
        case 13:
          return Wa(e, t, n);
        case 4:
          return (
            Io(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = Eo(t, null, r, n)) : Da(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Ia(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
          );
        case 7:
          return Da(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Da(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context),
              (i = t.pendingProps),
              (l = t.memoizedProps),
              (o = i.value);
            var u = t.type._context;
            if ((si(Yi, u._currentValue), (u._currentValue = o), null !== l))
              if (
                ((u = l.value),
                0 ===
                  (o = jr(u, o)
                    ? 0
                    : 0 |
                      ('function' == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(u, o)
                        : 1073741823)))
              ) {
                if (l.children === i.children && !di.current) {
                  t = Ka(e, t, n);
                  break e;
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                  var s = u.dependencies;
                  if (null !== s) {
                    l = u.child;
                    for (var c = s.firstContext; null !== c; ) {
                      if (c.context === r && 0 != (c.observedBits & o)) {
                        1 === u.tag && (((c = lo(n, null)).tag = 2), uo(u, c)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (c = u.alternate) &&
                            c.expirationTime < n &&
                            (c.expirationTime = n),
                          to(u.return, n),
                          s.expirationTime < n && (s.expirationTime = n);
                        break;
                      }
                      c = c.next;
                    }
                  } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                  if (null !== l) l.return = u;
                  else
                    for (l = u; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (u = l.sibling)) {
                        (u.return = l.return), (l = u);
                        break;
                      }
                      l = l.return;
                    }
                  u = l;
                }
            Da(e, t, i.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (i = t.type),
            (r = (o = t.pendingProps).children),
            no(t, n),
            (r = r((i = ro(i, o.unstable_observedBits)))),
            (t.effectTag |= 1),
            Da(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (o = Ki((i = t.type), t.pendingProps)),
            Oa(e, t, i, (o = Ki(i.type, o)), r, n)
          );
        case 15:
          return Aa(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : Ki(r, i)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            mi(r) ? ((e = !0), bi(t)) : (e = !1),
            no(t, n),
            yo(t, r, i),
            wo(t, r, i, n),
            Fa(null, t, r, !0, e, n)
          );
        case 19:
          return Qa(e, t, n);
      }
      throw Error(a(156, t.tag));
    };
    var xu = null,
      Tu = null;
    function _u(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function ku(e, t, n, r) {
      return new _u(e, t, n, r);
    }
    function Eu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Su(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = ku(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Cu(e, t, n, r, i, o) {
      var l = 2;
      if (((r = e), 'function' == typeof e)) Eu(e) && (l = 1);
      else if ('string' == typeof e) l = 5;
      else
        e: switch (e) {
          case ne:
            return Nu(n.children, i, o, t);
          case le:
            (l = 8), (i |= 7);
            break;
          case re:
            (l = 8), (i |= 1);
            break;
          case ie:
            return (
              ((e = ku(12, n, t, 8 | i)).elementType = ie),
              (e.type = ie),
              (e.expirationTime = o),
              e
            );
          case se:
            return (
              ((e = ku(13, n, t, i)).type = se),
              (e.elementType = se),
              (e.expirationTime = o),
              e
            );
          case ce:
            return (
              ((e = ku(19, n, t, i)).elementType = ce),
              (e.expirationTime = o),
              e
            );
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case oe:
                  l = 10;
                  break e;
                case ae:
                  l = 9;
                  break e;
                case ue:
                  l = 11;
                  break e;
                case fe:
                  l = 14;
                  break e;
                case de:
                  (l = 16), (r = null);
                  break e;
                case pe:
                  l = 22;
                  break e;
              }
            throw Error(a(130, null == e ? e : typeof e, ''));
        }
      return (
        ((t = ku(l, n, t, i)).elementType = e),
        (t.type = r),
        (t.expirationTime = o),
        t
      );
    }
    function Nu(e, t, n, r) {
      return ((e = ku(7, e, r, t)).expirationTime = n), e;
    }
    function Ru(e, t, n) {
      return ((e = ku(6, e, null, t)).expirationTime = n), e;
    }
    function Pu(e, t, n) {
      return (
        ((t = ku(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }),
        t
      );
    }
    function Du(e, t, n) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
    }
    function Iu(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function Ou(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function Au(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (t >= n
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function qu(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function Mu(e, t, n, r) {
      var i = t.current,
        o = Vl(),
        l = po.suspense;
      o = Ql(o, i, l);
      e: if (n) {
        t: {
          if (Ze((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
            throw Error(a(170));
          var u = n;
          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break t;
              case 1:
                if (mi(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            u = u.return;
          } while (null !== u);
          throw Error(a(171));
        }
        if (1 === n.tag) {
          var s = n.type;
          if (mi(s)) {
            n = yi(n, s, u);
            break e;
          }
        }
        n = u;
      } else n = ci;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = lo(o, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        uo(i, t),
        Kl(i, o),
        o
      );
    }
    function ju(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Fu(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function Uu(e, t) {
      Fu(e, t), (e = e.alternate) && Fu(e, t);
    }
    function Lu(e, t, n) {
      var r = new Du(e, t, (n = null != n && !0 === n.hydrate)),
        i = ku(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = i),
        (i.stateNode = r),
        oo(i),
        (e[Sn] = r.current),
        n &&
          0 !== t &&
          (function (e, t) {
            var n = Je(t);
            St.forEach(function (e) {
              ht(e, t, n);
            }),
              Ct.forEach(function (e) {
                ht(e, t, n);
              });
          })(0, 9 === e.nodeType ? e : e.ownerDocument),
        (this._internalRoot = r);
    }
    function zu(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      );
    }
    function Bu(e, t, n, r, i) {
      var o = n._reactRootContainer;
      if (o) {
        var a = o._internalRoot;
        if ('function' == typeof i) {
          var l = i;
          i = function () {
            var e = ju(a);
            l.call(e);
          };
        }
        Mu(t, a, e, i);
      } else {
        if (
          ((o = n._reactRootContainer = (function (e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e
                    ? 9 === e.nodeType
                      ? e.documentElement
                      : e.firstChild
                    : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute('data-reactroot')
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new Lu(e, 0, t ? { hydrate: !0 } : void 0);
          })(n, r)),
          (a = o._internalRoot),
          'function' == typeof i)
        ) {
          var u = i;
          i = function () {
            var e = ju(a);
            u.call(e);
          };
        }
        tu(function () {
          Mu(t, a, e, i);
        });
      }
      return ju(a);
    }
    function Hu(e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: te,
        key: null == r ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    function Wu(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!zu(t)) throw Error(a(200));
      return Hu(e, t, null, n);
    }
    (Lu.prototype.render = function (e) {
      Mu(e, this._internalRoot, null, null);
    }),
      (Lu.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo;
        Mu(null, e, null, function () {
          t[Sn] = null;
        });
      }),
      (mt = function (e) {
        if (13 === e.tag) {
          var t = Qi(Vl(), 150, 100);
          Kl(e, t), Uu(e, t);
        }
      }),
      (gt = function (e) {
        13 === e.tag && (Kl(e, 3), Uu(e, 3));
      }),
      (vt = function (e) {
        if (13 === e.tag) {
          var t = Vl();
          Kl(e, (t = Ql(t, e, null))), Uu(e, t);
        }
      }),
      (N = function (e, t, n) {
        switch (t) {
          case 'input':
            if ((Ee(e, n), (t = n.name), 'radio' === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = Pn(r);
                  if (!i) throw Error(a(90));
                  xe(r), Ee(r, i);
                }
              }
            }
            break;
          case 'textarea':
            Ie(e, n);
            break;
          case 'select':
            null != (t = n.value) && Re(e, !!n.multiple, t, !1);
        }
      }),
      (A = eu),
      (q = function (e, t, n, r, i) {
        var o = _l;
        _l |= 4;
        try {
          return Bi(98, e.bind(null, t, n, r, i));
        } finally {
          0 === (_l = o) && $i();
        }
      }),
      (M = function () {
        0 == (49 & _l) &&
          ((function () {
            if (null !== Bl) {
              var e = Bl;
              (Bl = null),
                e.forEach(function (e, t) {
                  qu(t, e), Gl(t);
                }),
                $i();
            }
          })(),
          mu());
      }),
      (j = function (e, t) {
        var n = _l;
        _l |= 2;
        try {
          return e(t);
        } finally {
          0 === (_l = n) && $i();
        }
      });
    var $u,
      Vu,
      Qu = {
        Events: [
          Nn,
          Rn,
          Pn,
          S,
          _,
          jn,
          function (e) {
            it(e, Mn);
          },
          I,
          O,
          Gt,
          lt,
          mu,
          { current: !1 }
        ]
      };
    (Vu = ($u = {
      findFiberByHostInstance: Cn,
      bundleType: 0,
      version: '16.13.1',
      rendererPackageName: 'react-dom'
    }).findFiberByHostInstance),
      (function (e) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (xu = function (e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (Tu = function (e) {
              try {
                t.onCommitFiberUnmount(n, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        i({}, $u, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: X.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = nt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function (e) {
            return Vu ? Vu(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        })
      ),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qu),
      (t.createPortal = Wu),
      (t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(a(188));
          throw Error(a(268, Object.keys(e)));
        }
        return (e = null === (e = nt(t)) ? null : e.stateNode);
      }),
      (t.flushSync = function (e, t) {
        if (0 != (48 & _l)) throw Error(a(187));
        var n = _l;
        _l |= 1;
        try {
          return Bi(99, e.bind(null, t));
        } finally {
          (_l = n), $i();
        }
      }),
      (t.hydrate = function (e, t, n) {
        if (!zu(t)) throw Error(a(200));
        return Bu(null, e, t, !0, n);
      }),
      (t.render = function (e, t, n) {
        if (!zu(t)) throw Error(a(200));
        return Bu(null, e, t, !1, n);
      }),
      (t.unmountComponentAtNode = function (e) {
        if (!zu(e)) throw Error(a(40));
        return (
          !!e._reactRootContainer &&
          (tu(function () {
            Bu(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Sn] = null);
            });
          }),
          !0)
        );
      }),
      (t.unstable_batchedUpdates = eu),
      (t.unstable_createPortal = function (e, t) {
        return Wu(
          e,
          t,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        );
      }),
      (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!zu(n)) throw Error(a(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
        return Bu(e, t, n, !1, r);
      }),
      (t.version = '16.13.1');
  },
  function (e, t, n) {
    'use strict';
    e.exports = n(18);
  },
  function (e, t, n) {
    'use strict';
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, i, o, a, l;
    if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
      var u = null,
        s = null,
        c = function () {
          if (null !== u)
            try {
              var e = t.unstable_now();
              u(!0, e), (u = null);
            } catch (e) {
              throw (setTimeout(c, 0), e);
            }
        },
        f = Date.now();
      (t.unstable_now = function () {
        return Date.now() - f;
      }),
        (r = function (e) {
          null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(c, 0));
        }),
        (i = function (e, t) {
          s = setTimeout(e, t);
        }),
        (o = function () {
          clearTimeout(s);
        }),
        (a = function () {
          return !1;
        }),
        (l = t.unstable_forceFrameRate = function () {});
    } else {
      var d = window.performance,
        p = window.Date,
        h = window.setTimeout,
        m = window.clearTimeout;
      if ('undefined' != typeof console) {
        var g = window.cancelAnimationFrame;
        'function' != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          'function' != typeof g &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ('object' == typeof d && 'function' == typeof d.now)
        t.unstable_now = function () {
          return d.now();
        };
      else {
        var v = p.now();
        t.unstable_now = function () {
          return p.now() - v;
        };
      }
      var y = !1,
        b = null,
        w = -1,
        x = 5,
        T = 0;
      (a = function () {
        return t.unstable_now() >= T;
      }),
        (l = function () {}),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
              )
            : (x = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var _ = new MessageChannel(),
        k = _.port2;
      (_.port1.onmessage = function () {
        if (null !== b) {
          var e = t.unstable_now();
          T = e + x;
          try {
            b(!0, e) ? k.postMessage(null) : ((y = !1), (b = null));
          } catch (e) {
            throw (k.postMessage(null), e);
          }
        } else y = !1;
      }),
        (r = function (e) {
          (b = e), y || ((y = !0), k.postMessage(null));
        }),
        (i = function (e, n) {
          w = h(function () {
            e(t.unstable_now());
          }, n);
        }),
        (o = function () {
          m(w), (w = -1);
        });
    }
    function E(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (!(void 0 !== i && 0 < N(i, t))) break e;
        (e[r] = t), (e[n] = i), (n = r);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function C(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, i = e.length; r < i; ) {
            var o = 2 * (r + 1) - 1,
              a = e[o],
              l = o + 1,
              u = e[l];
            if (void 0 !== a && 0 > N(a, n))
              void 0 !== u && 0 > N(u, a)
                ? ((e[r] = u), (e[l] = n), (r = l))
                : ((e[r] = a), (e[o] = n), (r = o));
            else {
              if (!(void 0 !== u && 0 > N(u, n))) break e;
              (e[r] = u), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function N(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var R = [],
      P = [],
      D = 1,
      I = null,
      O = 3,
      A = !1,
      q = !1,
      M = !1;
    function j(e) {
      for (var t = S(P); null !== t; ) {
        if (null === t.callback) C(P);
        else {
          if (!(t.startTime <= e)) break;
          C(P), (t.sortIndex = t.expirationTime), E(R, t);
        }
        t = S(P);
      }
    }
    function F(e) {
      if (((M = !1), j(e), !q))
        if (null !== S(R)) (q = !0), r(U);
        else {
          var t = S(P);
          null !== t && i(F, t.startTime - e);
        }
    }
    function U(e, n) {
      (q = !1), M && ((M = !1), o()), (A = !0);
      var r = O;
      try {
        for (
          j(n), I = S(R);
          null !== I && (!(I.expirationTime > n) || (e && !a()));

        ) {
          var l = I.callback;
          if (null !== l) {
            (I.callback = null), (O = I.priorityLevel);
            var u = l(I.expirationTime <= n);
            (n = t.unstable_now()),
              'function' == typeof u ? (I.callback = u) : I === S(R) && C(R),
              j(n);
          } else C(R);
          I = S(R);
        }
        if (null !== I) var s = !0;
        else {
          var c = S(P);
          null !== c && i(F, c.startTime - n), (s = !1);
        }
        return s;
      } finally {
        (I = null), (O = r), (A = !1);
      }
    }
    function L(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var z = l;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        q || A || ((q = !0), r(U));
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return O;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return S(R);
      }),
      (t.unstable_next = function (e) {
        switch (O) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = O;
        }
        var n = O;
        O = t;
        try {
          return e();
        } finally {
          O = n;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = z),
      (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = O;
        O = e;
        try {
          return t();
        } finally {
          O = n;
        }
      }),
      (t.unstable_scheduleCallback = function (e, n, a) {
        var l = t.unstable_now();
        if ('object' == typeof a && null !== a) {
          var u = a.delay;
          (u = 'number' == typeof u && 0 < u ? l + u : l),
            (a = 'number' == typeof a.timeout ? a.timeout : L(e));
        } else (a = L(e)), (u = l);
        return (
          (e = {
            id: D++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: (a = u + a),
            sortIndex: -1
          }),
          u > l
            ? ((e.sortIndex = u),
              E(P, e),
              null === S(R) && e === S(P) && (M ? o() : (M = !0), i(F, u - l)))
            : ((e.sortIndex = a), E(R, e), q || A || ((q = !0), r(U))),
          e
        );
      }),
      (t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        j(e);
        var n = S(R);
        return (
          (n !== I &&
            null !== I &&
            null !== n &&
            null !== n.callback &&
            n.startTime <= e &&
            n.expirationTime < I.expirationTime) ||
          a()
        );
      }),
      (t.unstable_wrapCallback = function (e) {
        var t = O;
        return function () {
          var n = O;
          O = t;
          try {
            return e.apply(this, arguments);
          } finally {
            O = n;
          }
        };
      });
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            }
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            }
          }),
          Object.defineProperty(t, 'exports', { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    var r = n(3),
      i = n(21);
    'string' == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, '']]);
    var o = { insert: 'head', singleton: !1 };
    r(i, o);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    (e.exports = n(4)(!1)).push([
      e.i,
      '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e2e8f0; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #a0aec0;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  color: #a0aec0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #a0aec0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that\'s\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-black {\n  --bg-opacity: 1;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, var(--bg-opacity));\n}\n\n.bg-red-500 {\n  --bg-opacity: 1;\n  background-color: #f56565;\n  background-color: rgba(245, 101, 101, var(--bg-opacity));\n}\n\n.bg-yellow-500 {\n  --bg-opacity: 1;\n  background-color: #ecc94b;\n  background-color: rgba(236, 201, 75, var(--bg-opacity));\n}\n\n.bg-green-500 {\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n}\n\n.bg-blue-500 {\n  --bg-opacity: 1;\n  background-color: #4299e1;\n  background-color: rgba(66, 153, 225, var(--bg-opacity));\n}\n\n.hover\\:bg-gray-900:hover {\n  --bg-opacity: 1;\n  background-color: #1a202c;\n  background-color: rgba(26, 32, 44, var(--bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n  --bg-opacity: 1;\n  background-color: #c53030;\n  background-color: rgba(197, 48, 48, var(--bg-opacity));\n}\n\n.hover\\:bg-yellow-700:hover {\n  --bg-opacity: 1;\n  background-color: #b7791f;\n  background-color: rgba(183, 121, 31, var(--bg-opacity));\n}\n\n.hover\\:bg-green-700:hover {\n  --bg-opacity: 1;\n  background-color: #2f855a;\n  background-color: rgba(47, 133, 90, var(--bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover {\n  --bg-opacity: 1;\n  background-color: #2b6cb0;\n  background-color: rgba(43, 108, 176, var(--bg-opacity));\n}\n\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.rounded-l-lg {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-white {\n  --text-opacity: 1;\n  color: #fff;\n  color: rgba(255, 255, 255, var(--text-opacity));\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n',
      ''
    ]);
  },
  function (e, t, n) {
    (t = e.exports = n(4)(!1)).push([e.i, '.q2cD6ZJymRhJ4fpwPoqTO {\n}\n', '']),
      (t.locals = { container: 'q2cD6ZJymRhJ4fpwPoqTO' });
  },
  function (e, t, n) {
    (t = e.exports = n(4)(!1)).push([
      e.i,
      '._2I5bzsQdahYa1awz81Q1mU img {\n  animation: _3-aGIJsnxXW7AcvfXnciKj 1s infinite alternate;\n  -webkit-animation: _3-aGIJsnxXW7AcvfXnciKj 1s infinite alternate;\n}\n\n@-webkit-keyframes _3-aGIJsnxXW7AcvfXnciKj {\n  from {\n    transform: translateY(0px);\n  }\n\n  to {\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes _3-aGIJsnxXW7AcvfXnciKj {\n  from {\n    transform: translateY(0px);\n  }\n\n  to {\n    transform: translateY(-15px);\n  }\n}\n',
      ''
    ]),
      (t.locals = {
        container: '_2I5bzsQdahYa1awz81Q1mU',
        bounce: '_3-aGIJsnxXW7AcvfXnciKj'
      });
  },
  function (e, t, n) {
    (t = e.exports = n(4)(!1)).push([
      e.i,
      '._1-vt1no3PXCd8-iSbnCNBi {\n}\n',
      ''
    ]),
      (t.locals = { container: '_1-vt1no3PXCd8-iSbnCNBi' });
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      i = (r = n(0)) && 'object' == typeof r && 'default' in r ? r.default : r;
    function o(e) {
      return (
        o.warnAboutHMRDisabled &&
          ((o.warnAboutHMRDisabled = !0),
          console.error(
            'React-Hot-Loader: misconfiguration detected, using production version in non-production environment.'
          ),
          console.error(
            'React-Hot-Loader: Hot Module Replacement is not enabled.'
          )),
        i.Children.only(e.children)
      );
    }
    o.warnAboutHMRDisabled = !1;
    var a = function e() {
      return e.shouldWrapWithAppContainer
        ? function (e) {
            return function (t) {
              return i.createElement(o, null, i.createElement(e, t));
            };
          }
        : function (e) {
            return e;
          };
    };
    a.shouldWrapWithAppContainer = !1;
    (t.AppContainer = o),
      (t.hot = a),
      (t.areComponentsEqual = function (e, t) {
        return e === t;
      }),
      (t.setConfig = function () {}),
      (t.cold = function (e) {
        return e;
      }),
      (t.configureComponent = function () {});
  }
]);
