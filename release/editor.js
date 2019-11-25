var DapJS =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUInt32LE = function (b, idx) {
    return (b[idx] |
        (b[idx + 1] << 8) |
        (b[idx + 2] << 16) |
        (b[idx + 3] << 24)) >>> 0;
};
exports.bufferConcat = function (bufs) {
    var len = 0;
    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
        var b = bufs_1[_i];
        len += b.length;
    }
    var r = new Uint8Array(len);
    len = 0;
    for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
        var b = bufs_2[_a];
        r.set(b, len);
        len += b.length;
    }
    return r;
};
exports.delay = function (t) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, t);
            })];
    });
}); };
exports.addInt32 = function (arr, val) {
    if (!arr) {
        arr = [];
    }
    arr.push(val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff);
    return arr;
};
exports.hex = function (v) {
    return "0x" + v.toString(16);
};
exports.rid = function (v) {
    var m = [
        "DP_0x0",
        "DP_0x4",
        "DP_0x8",
        "DP_0xC",
        "AP_0x0",
        "AP_0x4",
        "AP_0x8",
        "AP_0xC",
    ];
    return m[v] || "?";
};
exports.bank = function (addr) {
    var APBANKSEL = 0x000000f0;
    return (addr & APBANKSEL) | (addr & 0xff000000);
};
exports.apReg = function (r, mode) {
    var v = r | mode | 1 /* AP_ACC */;
    return (4 + ((v & 0x0c) >> 2));
};
exports.bufToUint32Array = function (buf) {
    exports.assert((buf.length & 3) === 0);
    var r = [];
    if (!buf.length) {
        return r;
    }
    r[buf.length / 4 - 1] = 0;
    for (var i = 0; i < r.length; ++i) {
        r[i] = exports.readUInt32LE(buf, i << 2);
    }
    return r;
};
exports.assert = function (cond) {
    if (!cond) {
        throw new Error("assertion failed");
    }
};
exports.regRequest = function (regId, isWrite) {
    if (isWrite === void 0) { isWrite = false; }
    var request = !isWrite ? 2 /* READ */ : 0 /* WRITE */;
    if (regId < 4) {
        request |= 0 /* DP_ACC */;
    }
    else {
        request |= 1 /* AP_ACC */;
    }
    request |= (regId & 3) << 2;
    return request;
};
exports.hexBytes = function (bytes) {
    var chk = 0;
    var r = ":";
    bytes.forEach(function (b) { return chk += b; });
    bytes.push((-chk) & 0xff);
    bytes.forEach(function (b) { return r += ("0" + b.toString(16)).slice(-2); });
    return r.toUpperCase();
};
exports.hex2bin = function (hexstr) {
    var array = new Uint8Array(hexstr.length / 2);
    for (var i = 0; i < hexstr.length / 2; i++) {
        array[i] = parseInt(hexstr.substr(2 * i, 2), 16);
    }
    return array;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * # Prepared Memory Command
 *
 * Allows multiple memory operations to be batched together to improve HID
 * interface utilisation.
 *
 * ## Usage
 *
 * Similarly to `CortexMPreparedCommand` and `DapPreparedCommand`, a convenience
 * function exists to quickly create a prepared memory command:
 *
 * ```typescript
 * const prep = core.memory.prepareCommand();
 * ```
 *
 * You can then construct the sequence of commands using the same API as `Memory`.
 *
 * ```typescript
 * prep.write32(0x20000, 1234);
 * prep.write32(0x12344, 5678);
 * prep.write16(0x12346, 123);
 * ```
 *
 * And then dispatch the prepared commands asynchronously:
 *
 * ```typescript
 * await prep.go();
 * ```
 */
var PreparedMemoryCommand = (function () {
    function PreparedMemoryCommand(dap) {
        this.cmd = dap.prepareCommand();
    }
    /**
     * Schedule a 32-bit memory write operation.
     *
     * @param addr Word-aligned memory address to write to.
     * @param data Number to be written.
     */
    PreparedMemoryCommand.prototype.write32 = function (addr, data) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.writeAp(12 /* DRW */, data);
    };
    /**
     * Schedule a 16-bit memory write operation.
     *
     * @param addr Half word-aligned memory address to write to.
     * @param data Number to be written.
     */
    PreparedMemoryCommand.prototype.write16 = function (addr, data) {
        data = data << ((addr & 0x02) << 3);
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.writeAp(12 /* DRW */, data);
    };
    /**
     * Schedule a 32-bit memory read operation.
     *
     * @param addr Word-aligned memory address to read from.
     */
    PreparedMemoryCommand.prototype.read32 = function (addr) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.readAp(12 /* DRW */);
    };
    /**
     * Schedule a 16-bit memory read operation.
     *
     * FIXME: the values need to be shifted after being read.
     *
     * @param addr Half word-aligned memory address to read from.
     */
    PreparedMemoryCommand.prototype.read16 = function (addr) {
        this.cmd.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
        this.cmd.writeAp(4 /* TAR */, addr);
        this.cmd.readAp(12 /* DRW */);
    };
    /**
     * Execute all commands asynchronously.
     */
    PreparedMemoryCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmd.go()];
            });
        });
    };
    return PreparedMemoryCommand;
}());
exports.PreparedMemoryCommand = PreparedMemoryCommand;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(5);
var memory_1 = __webpack_require__(7);
var prepared_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
var constants_1 = __webpack_require__(3);
var prepared_2 = __webpack_require__(8);
/**
 * # Cortex M
 *
 * Manages access to a CPU core, and its associated memory and debug functionality.
 *
 * > **NOTE:** all of the methods that involve interaction with the CPU core
 * > are asynchronous, so must be `await`ed, or explicitly handled as a Promise.
 *
 * ## Usage
 *
 * First, let's create an instance of `CortexM`, using an associated _Debug Access
 * Port_ (DAP) instance that we created earlier.
 *
 * ```typescript
 * const core = new CortexM(dap);
 * ```
 *
 * Now, we can halt and resume the core just like this:
 *
 * > **NOTE:** If you're not using ES2017, you can replace the use of `async` and
 * > `await` with direct use of Promises. These examples also need to be run within
 * > an `async` function for `async` to be used.
 *
 * ```typescript
 * await core.halt();
 * await core.resume();
 * ```
 *
 * Resetting the core is just as easy:
 *
 * ```typescript
 * await core.reset();
 * ```
 *
 * You can even halt immediately after reset:
 *
 * ```typescript
 * await core.reset(true);
 * ```
 *
 * We can also read and write 32-bit values to/from core registers:
 *
 * ```typescript
 * const sp = await core.readCoreRegister(CortexReg.SP);
 *
 * await core.writeCoreRegister(CortexReg.R0, 0x1000);
 * await core.writeCoreRegister(CortexReg.PC, 0x1234);
 * ```
 *
 * ### See also
 *
 * For details on debugging and memory features, see the documentation for
 * `Debug` and `Memory`.
 */
var CortexM = (function () {
    function CortexM(device) {
        this.dev = device;
        this.memory = new memory_1.Memory(device);
        this.debug = new debug_1.Debug(this);
    }
    /**
     * Initialise the debug access port on the device, and read the device type.
     */
    CortexM.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.init()];
                    case 1:
                        _a.sent();
                        // FIXME: don't run this if security is enabled on the K64F
                        return [4 /*yield*/, this.debug.init()];
                    case 2:
                        // FIXME: don't run this if security is enabled on the K64F
                        _a.sent();
                        return [4 /*yield*/, this.readCoreType()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the current state of the CPU.
     *
     * @returns A member of the `CoreState` enum corresponding to the current status of the CPU.
     */
    CortexM.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, newDHCSR;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & 33554432 /* S_RESET_ST */)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        newDHCSR = _a.sent();
                        if (newDHCSR & 33554432 /* S_RESET_ST */ && !(newDHCSR & 16777216 /* S_RETIRE_ST */)) {
                            return [2 /*return*/, 0 /* TARGET_RESET */];
                        }
                        _a.label = 3;
                    case 3:
                        if (dhcsr & 524288 /* S_LOCKUP */) {
                            return [2 /*return*/, 1 /* TARGET_LOCKUP */];
                        }
                        else if (dhcsr & 262144 /* S_SLEEP */) {
                            return [2 /*return*/, 2 /* TARGET_SLEEPING */];
                        }
                        else if (dhcsr & 131072 /* S_HALT */) {
                            return [2 /*return*/, 3 /* TARGET_HALTED */];
                        }
                        else {
                            return [2 /*return*/, 4 /* TARGET_RUNNING */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the CPUID register from the CPU, and interpret its meaning in terms of implementer,
     * architecture and core type.
     */
    CortexM.prototype.readCoreType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cpuid, implementer, arch, coreType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157056 /* CPUID */)];
                    case 1:
                        cpuid = _a.sent();
                        implementer = ((cpuid & constants_1.CPUID_IMPLEMENTER_MASK) >> constants_1.CPUID_IMPLEMENTER_POS);
                        arch = ((cpuid & constants_1.CPUID_ARCHITECTURE_MASK) >> constants_1.CPUID_ARCHITECTURE_POS);
                        coreType = ((cpuid & constants_1.CPUID_PARTNO_MASK) >> constants_1.CPUID_PARTNO_POS);
                        console.debug("Found an ARM " + constants_1.CoreNames.get(coreType));
                        return [2 /*return*/, [implementer, arch, coreType]];
                }
            });
        });
    };
    CortexM.prototype.prepareCommand = function () {
        return new prepared_2.PreparedCortexMCommand(this.dev);
    };
    /**
     * Read a core register from the CPU (e.g. r0...r15, pc, sp, lr, s0...)
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     */
    CortexM.prototype.readCoreRegister = function (no) {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157300 /* DCRSR */, no)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        v = _a.sent();
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [4 /*yield*/, this.memory.read32(3758157304 /* DCRDR */)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Write a 32-bit word to the specified CPU general-purpose register.
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     * @param val Value to be written.
     */
    CortexM.prototype.writeCoreRegister = function (no, val) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = new prepared_1.PreparedMemoryCommand(this.dev);
                        prep.write32(3758157304 /* DCRDR */, val);
                        prep.write32(3758157300 /* DCRSR */, no | 65536 /* DCRSR_REGWnR */);
                        prep.read32(3758157296 /* DHCSR */);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        v = (_a.sent())[0];
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Halt the CPU core.
     */
    CortexM.prototype.halt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */ | 2 /* C_HALT */)];
            });
        });
    };
    /**
     * Resume the CPU core.
     */
    CortexM.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isHalted()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.memory.write32(3758157104 /* DFSR */, 4 /* DFSR_DWTTRAP */ | 2 /* DFSR_BKPT */ | 1 /* DFSR_HALTED */)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.debug.enable()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find out whether the CPU is halted.
     */
    CortexM.prototype.isHalted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status()];
                    case 1:
                        s = _a.sent();
                        return [2 /*return*/, s.isHalted];
                }
            });
        });
    };
    /**
     * Read the current status of the CPU.
     *
     * @returns Object containing the contents of the `DHCSR` register, the `DFSR` register, and a boolean value
     * stating the current halted state of the CPU.
     */
    CortexM.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prep, results, dhcsr, dfsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = new prepared_1.PreparedMemoryCommand(this.dev);
                        prep.read32(3758157296 /* DHCSR */);
                        prep.read32(3758157104 /* DFSR */);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        results = _a.sent();
                        dhcsr = results[0];
                        dfsr = results[1];
                        return [2 /*return*/, {
                                dfsr: dfsr,
                                dhscr: dhcsr,
                                isHalted: !!(dhcsr & 131072 /* S_HALT */),
                            }];
                }
            });
        });
    };
    /**
     * Reset the CPU core. This currently does a software reset - it is also technically possible to perform a 'hard'
     * reset using the reset pin from the debugger.
     */
    CortexM.prototype.reset = function (halt) {
        if (halt === void 0) { halt = false; }
        return __awaiter(this, void 0, void 0, function () {
            var demcr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!halt) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.halt()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157308 /* DEMCR */)];
                    case 2:
                        demcr = _a.sent();
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr | 1 /* DEMCR_VC_CORERESET */)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.softwareReset()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt()];
                    case 5:
                        _a.sent();
                        // Unset the VC_CORERESET bit
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr)];
                    case 6:
                        // Unset the VC_CORERESET bit
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.softwareReset()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Run specified machine code natively on the device. Assumes usual C calling conventions
     * - returns the value of r0 once the program has terminated. The program _must_ terminate
     * in order for this function to return. This can be achieved by placing a `bkpt`
     * instruction at the end of the function.
     *
     * @param code array containing the machine code (32-bit words).
     * @param address memory address at which to place the code.
     * @param pc initial value of the program counter.
     * @param lr initial value of the link register.
     * @param sp initial value of the stack pointer.
     * @param upload should we upload the code before running it.
     * @param args set registers r0...rn before running code
     *
     * @returns A promise for the value of r0 on completion of the function call.
     */
    CortexM.prototype.runCode = function (code, address, pc, lr, sp, upload) {
        var args = [];
        for (var _i = 6; _i < arguments.length; _i++) {
            args[_i - 6] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var cmd, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmd = this.prepareCommand();
                        cmd.halt();
                        // Point the program counter to the start of the program
                        cmd.writeCoreRegister(15 /* PC */, pc);
                        cmd.writeCoreRegister(14 /* LR */, lr);
                        cmd.writeCoreRegister(13 /* SP */, sp);
                        for (i = 0; i < args.length; i++) {
                            cmd.writeCoreRegister(i, args[i]);
                        }
                        return [4 /*yield*/, cmd.go()];
                    case 1:
                        _a.sent();
                        if (!upload) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.memory.writeBlock(address, code)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: 
                    // Run the program and wait for halt
                    return [4 /*yield*/, this.resume()];
                    case 4:
                        // Run the program and wait for halt
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt(constants_1.DEFAULT_RUNCODE_TIMEOUT)];
                    case 5:
                        _a.sent(); // timeout after 10s
                        return [4 /*yield*/, this.readCoreRegister(0 /* R0 */)];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Spin until the chip has halted.
     */
    CortexM.prototype.waitForHalt = function (timeout) {
        if (timeout === void 0) { timeout = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var running, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    running = true;
                                    if (timeout > 0) {
                                        setTimeout(function () {
                                            if (running) {
                                                reject("waitForHalt timed out.");
                                                running = false;
                                            }
                                        }, timeout);
                                    }
                                    _b.label = 1;
                                case 1:
                                    _a = running;
                                    if (!_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.isHalted()];
                                case 2:
                                    _a = !(_b.sent());
                                    _b.label = 3;
                                case 3:
                                    if (!_a) return [3 /*break*/, 4];
                                    return [3 /*break*/, 1];
                                case 4:
                                    if (running) {
                                        running = false;
                                        resolve();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CortexM.prototype.softwareReset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157068 /* NVIC_AIRCR */, 100270080 /* NVIC_AIRCR_VECTKEY */ | 4 /* NVIC_AIRCR_SYSRESETREQ */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        dhcsr = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!((dhcsr & 33554432 /* S_RESET_ST */) !== 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 4:
                        dhcsr = _a.sent();
                        return [3 /*break*/, 3];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CortexM;
}());
exports.CortexM = CortexM;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_RUNCODE_TIMEOUT = 10000 /* ms */;
exports.CPUID_IMPLEMENTER_MASK = 0xff000000;
exports.CPUID_IMPLEMENTER_POS = 24;
exports.CPUID_VARIANT_MASK = 0x00f00000;
exports.CPUID_VARIANT_POS = 20;
exports.CPUID_ARCHITECTURE_MASK = 0x000f0000;
exports.CPUID_ARCHITECTURE_POS = 16;
exports.CPUID_PARTNO_MASK = 0x0000fff0;
exports.CPUID_PARTNO_POS = 4;
exports.CPUID_REVISION_MASK = 0x0000000f;
exports.CPUID_REVISION_POS = 0;
exports.ISANames = new Map();
exports.ISANames.set(12 /* ARMv6M */, "ARMv6M");
exports.ISANames.set(15 /* ARMv7M */, "ARMv7M");
exports.CoreNames = new Map();
exports.CoreNames.set(3104 /* CortexM0 */, "Cortex-M0");
exports.CoreNames.set(3105 /* CortexM1 */, "Cortex-M1");
exports.CoreNames.set(3107 /* CortexM3 */, "Cortex-M3");
exports.CoreNames.set(3108 /* CortexM4 */, "Cortex-M4");
exports.CoreNames.set(3168 /* CortexM0p */, "Cortex-M0+");


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cortex_1 = __webpack_require__(2);
exports.CortexM = cortex_1.CortexM;
var constants_1 = __webpack_require__(3);
exports.CoreNames = constants_1.CoreNames;
exports.ISANames = constants_1.ISANames;
var dap_1 = __webpack_require__(9);
exports.DAP = dap_1.default;
var FlashTarget_1 = __webpack_require__(12);
exports.FlashTargets = FlashTarget_1.FlashTargets;
exports.FlashTarget = FlashTarget_1.FlashTarget;
var FlashProgram_1 = __webpack_require__(15);
exports.FlashProgram = FlashProgram_1.FlashProgram;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var breakpoint_1 = __webpack_require__(6);
/**
 * # Debug Interface
 *
 * Keeps track of breakpoints set on the target, as well as deciding whether to
 * use a hardware breakpoint or a software breakpoint.
 *
 * ## Usage
 *
 * ```typescript
 * const dbg = core.debug;
 *
 * await dbg.setBreakpoint(0x123456);
 *
 * // resume the core and wait for the breakpoint
 * await core.resume();
 * await core.waitForHalt();
 *
 * // step forward one instruction
 * await dbg.step();
 *
 * // remove the breakpoint
 * await dbg.deleteBreakpoint(0x123456);
 * ```
 */
var Debug = (function () {
    function Debug(core) {
        this.core = core;
        this.enabled = false;
        this.availableHWBreakpoints = [];
        this.breakpoints = new Map();
    }
    Debug.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setupFpb()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable debugging on the target CPU
     */
    Debug.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set breakpoints at specified memory addresses.
     *
     * @param addrs An array of memory addresses at which to set breakpoints.
     */
    Debug.prototype.setBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var breakpoint, bkpt, regAddr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.breakpoints.has(addr)) {
                            breakpoint = this.breakpoints.get(addr);
                            if (typeof breakpoint !== "number") {
                                // already enabled
                                console.warn("Breakpoint at " + addr.toString(16) + " already enabled.");
                                return [2 /*return*/];
                            }
                        }
                        if (!(addr < 0x20000000)) return [3 /*break*/, 5];
                        if (!(this.availableHWBreakpoints.length > 0)) return [3 /*break*/, 3];
                        if (!!this.enabled) return [3 /*break*/, 2];
                        console.log("enabling fpb");
                        return [4 /*yield*/, this.setFpbEnabled(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        regAddr = this.availableHWBreakpoints.pop();
                        console.log("using regAddr=" + regAddr.toString(16));
                        bkpt = new breakpoint_1.HWBreakpoint(regAddr, this.core, addr);
                        return [3 /*break*/, 4];
                    case 3:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 6;
                    case 6: return [4 /*yield*/, bkpt.set()];
                    case 7:
                        _a.sent();
                        this.breakpoints.set(addr, bkpt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Debug.prototype.deleteBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var bkpt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.breakpoints.has(addr)) return [3 /*break*/, 3];
                        bkpt = this.breakpoints.get(addr);
                        if (!(typeof bkpt !== "number")) return [3 /*break*/, 2];
                        return [4 /*yield*/, bkpt.clear()];
                    case 1:
                        _a.sent();
                        if (bkpt instanceof breakpoint_1.HWBreakpoint) {
                            // return the register address to the pool
                            this.availableHWBreakpoints.push(bkpt.regAddr);
                        }
                        _a.label = 2;
                    case 2:
                        this.breakpoints.delete(addr);
                        return [3 /*break*/, 4];
                    case 3:
                        console.warn("Breakpoint at " + addr.toString(16) + " does not exist.");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Step the processor forward by one instruction.
     */
    Debug.prototype.step = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, interruptsMasked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & (4 /* C_STEP */ | 2 /* C_HALT */))) {
                            console.error("Target is not halted.");
                            return [2 /*return*/];
                        }
                        interruptsMasked = (8 /* C_MASKINTS */ & dhcsr) !== 0;
                        if (!!interruptsMasked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */ |
                                8 /* C_MASKINTS */)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                            1 /* C_DEBUGEN */ |
                            8 /* C_MASKINTS */ |
                            4 /* C_STEP */)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.core.waitForHalt()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set up (and disable) the Flash Patch & Breakpoint unit. It will be enabled when
     * the first breakpoint is set.
     *
     * Also reads the number of available hardware breakpoints.
     */
    Debug.prototype.setupFpb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fpcr, nbCode, nbLit, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758104576 /* FP_CTRL */)];
                    case 1:
                        fpcr = _a.sent();
                        nbCode = ((fpcr >> 8) & 0x70) | ((fpcr >> 4) & 0xf);
                        nbLit = (fpcr >> 7) & 0xf;
                        this.totalHWBreakpoints = nbCode;
                        console.debug(nbCode + " hardware breakpoints, " + nbLit + " literal comparators");
                        return [4 /*yield*/, this.setFpbEnabled(false)];
                    case 2:
                        _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < nbCode)) return [3 /*break*/, 6];
                        this.availableHWBreakpoints.push(3758104584 /* FP_COMP0 */ + (4 * i));
                        return [4 /*yield*/, this.core.memory.write32(3758104584 /* FP_COMP0 */ + (i * 4), 0)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable or disable the Flash Patch and Breakpoint unit (FPB).
     *
     * @param enabled
     */
    Debug.prototype.setFpbEnabled = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.enabled = enabled;
                        return [4 /*yield*/, this.core.memory.write32(3758104576 /* FP_CTRL */, 2 /* FP_CTRL_KEY */ | (enabled ? 1 : 0))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Debug;
}());
exports.Debug = Debug;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HWBreakpoint = (function () {
    function HWBreakpoint(regAddr, parent, addr) {
        this.regAddr = regAddr;
        this.parent = parent;
        this.addr = addr;
    }
    HWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bpMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bpMatch = ((this.addr & 0x2) ? 2 : 1) << 30;
                        return [4 /*yield*/, this.parent.memory.write32(this.regAddr, this.addr & 0x1ffffffc | bpMatch | 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write32(this.regAddr, 0)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HWBreakpoint;
}());
exports.HWBreakpoint = HWBreakpoint;
var SWBreakpoint = (function () {
    function SWBreakpoint(parent, addr) {
        this.parent = parent;
        this.addr = addr;
    }
    SWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // read the instruction from the CPU...
                        _a = this;
                        return [4 /*yield*/, this.parent.memory.read16(this.addr)];
                    case 1:
                        // read the instruction from the CPU...
                        _a.instruction = _b.sent();
                        return [4 /*yield*/, this.parent.memory.write16(this.addr, SWBreakpoint.BKPT_INSTRUCTION)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write16(this.addr, this.instruction)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.BKPT_INSTRUCTION = 0xbe00;
    return SWBreakpoint;
}());
exports.SWBreakpoint = SWBreakpoint;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var prepared_1 = __webpack_require__(1);
/**
 * # Memory Interface
 *
 * Controls access to the target's memory.
 *
 * ## Usage
 *
 * Using an instance of `CortexM`, as described before, we can simply read and
 * write numbers to memory as follows:
 *
 * ```typescript
 * const mem = core.memory;
 *
 * // NOTE: the address parameter must be word (4-byte) aligned.
 * await mem.write32(0x200000, 12345);
 * const val = await mem.read32(0x200000);
 *
 * // val === 12345
 *
 * // NOTE: the address parameter must be half-word (2-byte) aligned
 * await mem.write16(0x2000002, 65534);
 * const val16 = await mem.read16(0x2000002);
 *
 * // val16 === 65534
 * ```
 *
 * To write a larger block of memory, we can use `readBlock` and `writeBlock`. Again,
 * these blocks must be written to word-aligned addresses in memory.
 *
 * ```typescript
 * const data = new Uint32Array([0x1234, 0x5678, 0x9ABC, 0xDEF0]);
 * await mem.writeBlock(0x200000, data);
 *
 * const readData = await mem.readBlock(0x200000, data.length, 0x100);
 * ```
 *
 * ## See also
 *
 * `PreparedMemoryCommand` provides an equivalent API with better performance (in some
 * cases) by enabling batched memory operations.
 */
var Memory = (function () {
    function Memory(dev) {
        this.dev = dev;
    }
    /**
     * Write a 32-bit word to the specified (word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**32 will be truncated)
     */
    Memory.prototype.write32 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeAp(12 /* DRW */, data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Write a 16-bit word to the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**16 will be truncated)
     */
    Memory.prototype.write16 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = data << ((addr & 0x02) << 3);
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeAp(12 /* DRW */, data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 32-bit word from the specified (word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read32 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.readAp(12 /* DRW */);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, prep.go()];
                    case 2: return [2 /*return*/, (_a.sent())[0]];
                    case 3:
                        e_1 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 4:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read32(addr)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 16-bit word from the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read16 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, val, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.readAp(12 /* DRW */);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, prep.go()];
                    case 2:
                        val = (_a.sent())[0];
                        return [3 /*break*/, 6];
                    case 3:
                        e_2 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 4:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read16(addr)];
                    case 5:
                        val = _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        val = (val >> ((addr & 0x02) << 3) & 0xffff);
                        return [2 /*return*/, val];
                }
            });
        });
    };
    /**
     * Reads a block of memory from the specified memory address.
     *
     * @param addr Address to read from
     * @param words Number of words to read
     * @param pageSize Memory page size
     */
    Memory.prototype.readBlock = function (addr, words, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var bufs, end, ptr, nextptr, len, _a, _b, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        bufs = [];
                        end = addr + words * 4;
                        ptr = addr;
                        _c.label = 1;
                    case 1:
                        if (!(ptr < end)) return [3 /*break*/, 3];
                        nextptr = ptr + pageSize;
                        if (ptr === addr) {
                            nextptr &= ~(pageSize - 1);
                        }
                        len = Math.min(nextptr - ptr, end - ptr);
                        util_1.assert((len & 3) === 0);
                        _b = (_a = bufs).push;
                        return [4 /*yield*/, this.readBlockCore(ptr, len >> 2)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        ptr = nextptr;
                        return [3 /*break*/, 1];
                    case 3:
                        result = util_1.bufferConcat(bufs);
                        return [2 /*return*/, result.subarray(0, words * 4)];
                }
            });
        });
    };
    /**
     * Write a block of memory to the specified memory address.
     *
     * @param addr Memory address to write to.
     * @param words Array of 32-bit words to write to memory.
     */
    Memory.prototype.writeBlock = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (words.length === 0) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.writeBlockCore(addr, words)];
            });
        });
    };
    Memory.prototype.prepareCommand = function () {
        return new prepared_1.PreparedMemoryCommand(this.dev);
    };
    Memory.prototype.readBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, lastSize, blocks, i, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        lastSize = words % 15;
                        if (lastSize === 0) {
                            lastSize = 15;
                        }
                        blocks = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < Math.ceil(words / 15))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.dev.readRegRepeat(util_1.apReg(12 /* DRW */, 2 /* READ */), i === blocks.length - 1 ? lastSize : 15)];
                    case 3:
                        b = _a.sent();
                        blocks.push(b);
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, util_1.bufferConcat(blocks).subarray(0, words * 4)];
                }
            });
        });
    };
    Memory.prototype.writeBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var prep, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        prep = this.dev.prepareCommand();
                        prep.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */);
                        prep.writeAp(4 /* TAR */, addr);
                        prep.writeRegRepeat(util_1.apReg(12 /* DRW */, 0 /* WRITE */), words);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        e_3 = _a.sent();
                        if (!e_3.dapWait) return [3 /*break*/, 5];
                        console.debug("transfer wait, write block");
                        return [4 /*yield*/, util_1.delay(100)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.writeBlockCore(addr, words)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: throw e_3;
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Memory;
}());
exports.Memory = Memory;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prepared_1 = __webpack_require__(1);
/**
 * # Cortex M: Prepared Command
 *
 * Allows batching of Cortex M-related commands, such as writing to a register,
 * halting and resuming the core.
 *
 * ## Example
 *
 * When preparing the sequence of commands, we can use the same API to prepare
 * a command as we would to execute them immediately.
 *
 * ```typescript
 * // Note that only the .go method is asynchronous.
 *
 * const prep = core.prepareCommand();
 * prep.writeCoreRegister(CortexReg.R0, 0x1000);
 * prep.writeCoreRegister(CortexReg.R1, 0x0);
 * prep.writeCoreRegister(CortexReg.PC, 0x2000000);
 * prep.resume();
 * ```
 *
 * We can then execute them as efficiently as possible by combining them together
 * and executing them like so.
 *
 * ```typescript
 * await prep.go();
 * ```
 *
 * The code above is equivalent to the following _non-prepared_ command:
 *
 * ```typescript
 * await core.writeCoreRegister(CortexReg.R0, 0x1000);
 * await core.writeCoreRegister(CortexReg.R1, 0x0);
 * await core.writeCoreRegister(CortexReg.PC, 0x2000000);
 * await core.resume();
 * ```
 *
 * Since the batched version of this code avoids making three round-trips to the
 * target, we are able to significantly improve performance. This is especially
 * noticable when uploading a binary to flash memory, where are large number of
 * repetetive commands are being used.
 *
 * ## Explanation
 *
 * For a detailed explanation of why prepared commands are used in DAP.js, see the
 * documentation for `PreparedDapCommand`.
 */
var PreparedCortexMCommand = (function () {
    function PreparedCortexMCommand(dap) {
        this.cmd = new prepared_1.PreparedMemoryCommand(dap);
    }
    /**
     * Schedule a 32-bit integer to be written to a core register.
     *
     * @param no Core register to be written.
     * @param val Value to write.
     */
    PreparedCortexMCommand.prototype.writeCoreRegister = function (no, val) {
        this.cmd.write32(3758157304 /* DCRDR */, val);
        this.cmd.write32(3758157300 /* DCRSR */, no | 65536 /* DCRSR_REGWnR */);
    };
    /**
     * Schedule a halt command to be written to the CPU.
     */
    PreparedCortexMCommand.prototype.halt = function () {
        this.cmd.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */ | 2 /* C_HALT */);
    };
    /**
     * Schedule a resume command to be written to the CPU.
     */
    PreparedCortexMCommand.prototype.resume = function () {
        this.cmd.write32(3758157104 /* DFSR */, 4 /* DFSR_DWTTRAP */ | 2 /* DFSR_BKPT */ | 1 /* DFSR_HALTED */);
    };
    /**
     * Execute all scheduled commands.
     */
    PreparedCortexMCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cmd.go()];
                    case 1:
                        v = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PreparedCortexMCommand;
}());
exports.PreparedCortexMCommand = PreparedCortexMCommand;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prepared_1 = __webpack_require__(10);
var cmsis_dap_1 = __webpack_require__(11);
var util_1 = __webpack_require__(0);
var DAP = (function () {
    function DAP(device) {
        this.device = device;
        this.dap = new cmsis_dap_1.CMSISDAP(device);
    }
    DAP.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, util_1.delay(100)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.init()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n, prep, m, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readDp(0 /* IDCODE */)];
                    case 2:
                        n = _a.sent();
                        this.idcode = n;
                        prep = this.prepareCommand();
                        prep.writeReg(0 /* DP_0x0 */, 1 << 2); // clear sticky error
                        prep.writeDp(2 /* SELECT */, 0);
                        prep.writeDp(1 /* CTRL_STAT */, 1073741824 /* CSYSPWRUPREQ */ | 268435456 /* CDBGPWRUPREQ */);
                        m = 536870912 /* CDBGPWRUPACK */ | 2147483648 /* CSYSPWRUPACK */;
                        prep.readDp(1 /* CTRL_STAT */);
                        return [4 /*yield*/, prep.go()];
                    case 3:
                        v = (_a.sent())[0];
                        _a.label = 4;
                    case 4:
                        if (!((v & m) !== m)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.readDp(1 /* CTRL_STAT */)];
                    case 5:
                        v = _a.sent();
                        return [3 /*break*/, 4];
                    case 6:
                        prep = this.prepareCommand();
                        prep.writeDp(1 /* CTRL_STAT */, (1073741824 /* CSYSPWRUPREQ */ |
                            268435456 /* CDBGPWRUPREQ */ |
                            0 /* TRNNORMAL */ |
                            3840 /* MASKLANE */));
                        prep.writeDp(2 /* SELECT */, 0);
                        prep.readAp(252 /* IDR */);
                        return [4 /*yield*/, prep.go()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.writeReg = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.regOp(regId, val)];
            });
        });
    };
    DAP.prototype.readReg = function (regId) {
        return __awaiter(this, void 0, void 0, function () {
            var buf, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.regOp(regId, null)];
                    case 1:
                        buf = _a.sent();
                        v = util_1.readUInt32LE(buf, 3);
                        return [2 /*return*/, v];
                }
            });
        });
    };
    DAP.prototype.prepareCommand = function () {
        return new prepared_1.PreparedDapCommand(this.dap);
    };
    DAP.prototype.readDp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.readReg(addr)];
            });
        });
    };
    DAP.prototype.readAp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prep = this.prepareCommand();
                        prep.writeDp(2 /* SELECT */, util_1.bank(addr));
                        prep.readReg(util_1.apReg(addr, 2 /* READ */));
                        return [4 /*yield*/, prep.go()];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    };
    DAP.prototype.writeDp = function (addr, data) {
        if (addr === 2 /* SELECT */) {
            if (data === this.dpSelect) {
                return Promise.resolve();
            }
            this.dpSelect = data;
        }
        return this.writeReg(addr, data);
    };
    DAP.prototype.writeAp = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            var prep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (addr === 0 /* CSW */) {
                            if (data === this.csw) {
                                return [2 /*return*/, Promise.resolve()];
                            }
                            this.csw = data;
                        }
                        prep = this.prepareCommand();
                        prep.writeDp(2 /* SELECT */, util_1.bank(addr));
                        prep.writeReg(util_1.apReg(addr, 0 /* WRITE */), data);
                        return [4 /*yield*/, prep.go()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.device.close()];
            });
        });
    };
    DAP.prototype.readRegRepeat = function (regId, cnt) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, i, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.assert(cnt <= 15);
                        request = util_1.regRequest(regId);
                        sendargs = [0, cnt];
                        for (i = 0; i < cnt; ++i) {
                            sendargs.push(request);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== cnt) {
                            throw new Error(("(many) Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            throw new Error(("(many) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf.subarray(3, 3 + cnt * 4)];
                }
            });
        });
    };
    DAP.prototype.writeRegRepeat = function (regId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var remainingLength, request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remainingLength = 64 - 1 - 1 - 2 - 1;
                        util_1.assert(data.length <= remainingLength / 4);
                        request = util_1.regRequest(regId, true);
                        sendargs = [0, data.length, 0, request];
                        data.forEach(function (d) {
                            // separate d into bytes
                            util_1.addInt32(sendargs, d);
                        });
                        return [4 /*yield*/, this.dap.cmdNums(6 /* DAP_TRANSFER_BLOCK */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[3] !== 1) {
                            throw new Error(("(many-wr) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.regOp = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = util_1.regRequest(regId, val !== null);
                        sendargs = [0, 1, request];
                        if (val !== null) {
                            util_1.addInt32(sendargs, val);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            console.error("Make sure you have initialised the DAP connection.");
                            throw new Error(("Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            if (buf[2] === 2) {
                                throw new Error(("Transfer wait"));
                            }
                            throw new Error(("Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    return DAP;
}());
exports.default = DAP;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
/**
 * # Prepared DAP Command
 *
 * Batches together multiple Debug Access Port (DAP) commands into one (or more)
 * CMSIS-DAP Transfers that can be written together to improve link utilisation.
 *
 * > **NOTE:** this will not normally need to be used by applications or libraries
 * > depending on DAP.js.
 *
 * ## Architecture
 *
 * - `PreparedDapCommand` keeps a list of CMSIS-DAP `Transfer` commands.
 * - Every time an action is scheduled (writing to or reading from a DP or AP register),
 * we check to see if there is any remaining room in the current batch, starting a new
 * batch if none is available.
 * - When `go` is called, the batches are executed sequentially (so DAP commands are
 * executed in the order they were added).
 *
 * ### Reading Values
 *
 * Writing values to registers is relatively straight forward, however mixing register
 * reads and writes together requires us to keep track of how many commands in
 * each batch are read commands.
 *
 * Once data has successfully been read back from the target, the values read are assembled
 * into an array, and returned in the order they requested. This allows `PreparedDapCommand`s
 * to be used higher up the stack in places where multiple independent read operations take
 * place sequentially.
 *
 * ### Constructing CMSIS-DAP Commands
 *
 * We keep track of the number of commands in each batch, so that we can fill in the command
 * count field of the `DAP_Transfer`.
 */
var PreparedDapCommand = (function () {
    function PreparedDapCommand(dap) {
        this.dap = dap;
        this.commands = [[0, 1]];
        this.commandCounts = [0];
        this.currentCommand = 0;
        this.readCounts = [0];
    }
    /**
     * Schedule a value to be written to an AP or DP register.
     *
     * @param regId register ID to be written to
     * @param value value to be written
     */
    PreparedDapCommand.prototype.writeReg = function (regId, value) {
        var request = util_1.regRequest(regId, true);
        if (this.commands[this.currentCommand].length + 5 > 64) {
            // start a new command
            this.commands.push([0, 1]);
            this.commandCounts.push(0);
            this.readCounts.push(0);
            this.currentCommand++;
        }
        this.commands[this.currentCommand].push(request);
        util_1.addInt32(this.commands[this.currentCommand], value);
        this.commandCounts[this.currentCommand]++;
    };
    /**
     * Schedule a value to be read from an AP or DP register.
     * @param regId register to read from
     */
    PreparedDapCommand.prototype.readReg = function (regId) {
        var request = util_1.regRequest(regId, false);
        if (this.commands[this.currentCommand].length + 1 > 64) {
            // start a new command
            this.commands.push([0, 1]);
            this.commandCounts.push(0);
            this.readCounts.push(0);
            this.currentCommand++;
        }
        this.commands[this.currentCommand].push(request);
        this.commandCounts[this.currentCommand]++;
        this.readCounts[this.currentCommand]++;
    };
    /**
     * Schedule multiple values to be written to the same register.
     *
     * **TODO:** figure out dynamically whether it's better to use DAP_TransferBlock vs
     * DAP_Transfer. We should be able to fill up the remaining space in a Transfer
     * and then start a TransferBlock _if_ we can fit in _13 or more_ values into the
     * TransferBlock. However, the gains from this are marginal unless we're using much
     * larger packet sizes than 64 bytes.
     *
     * @param regId register to write to repeatedly
     * @param data array of 32-bit values to be written
     */
    PreparedDapCommand.prototype.writeRegRepeat = function (regId, data) {
        var _this = this;
        // fill up the rest of the command we have left
        data.forEach(function (cmd) {
            _this.writeReg(regId, cmd);
        });
    };
    /**
     * Asynchronously execute the commands scheduled.
     */
    PreparedDapCommand.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v, i, command, results, i, result, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        v = [];
                        for (i = 0; i < this.commands.length; i++) {
                            command = this.commands[i];
                            command[1] = this.commandCounts[i];
                        }
                        return [4 /*yield*/, this.dap.sendTransfers(this.commands)];
                    case 1:
                        results = _a.sent();
                        for (i = 0; i < this.commands.length; i++) {
                            result = results[i];
                            for (j = 0; j < this.readCounts[i]; j++) {
                                v.push(util_1.readUInt32LE(result, 3 + 4 * j));
                            }
                        }
                        return [2 /*return*/, v];
                }
            });
        });
    };
    /**
     * Schedule a value to be written to a DP register
     *
     * @param addr Address to write to
     * @param data Data to be written
     */
    PreparedDapCommand.prototype.writeDp = function (addr, data) {
        if (addr === 2 /* SELECT */) {
            if (data === this.dpSelect) {
                return Promise.resolve();
            }
            this.dpSelect = data;
        }
        return this.writeReg(addr, data);
    };
    /**
     * Schedule a value to be written to an AP register
     *
     * @param addr Address to write to
     * @param data Data to be written
     */
    PreparedDapCommand.prototype.writeAp = function (addr, data) {
        this.writeDp(2 /* SELECT */, util_1.bank(addr));
        if (addr === 0 /* CSW */) {
            if (data === this.csw) {
                return Promise.resolve();
            }
            this.csw = data;
        }
        this.writeReg(util_1.apReg(addr, 0 /* WRITE */), data);
    };
    /**
     * Schedule a DP register to read from
     *
     * @param addr Address to read from
     */
    PreparedDapCommand.prototype.readDp = function (addr) {
        return this.readReg(addr);
    };
    /**
     * Schedule an AP register to read from
     *
     * @param addr Address to read from
     */
    PreparedDapCommand.prototype.readAp = function (addr) {
        this.writeDp(2 /* SELECT */, util_1.bank(addr));
        return this.readReg(util_1.apReg(addr, 2 /* READ */));
    };
    return PreparedDapCommand;
}());
exports.PreparedDapCommand = PreparedDapCommand;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var CMSISDAP = (function () {
    function CMSISDAP(hid) {
        this.maxSent = 1;
        this.hid = hid;
    }
    CMSISDAP.prototype.resetTarget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(10 /* DAP_RESET_TARGET */, [])];
            });
        });
    };
    CMSISDAP.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(3 /* DAP_DISCONNECT */, [])];
            });
        });
    };
    CMSISDAP.prototype.sendTransfers = function (commands) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, commands_1, cmd, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.hid.sendMany)
                            return [2 /*return*/, this.hid.sendMany(commands.map(function (cmd) {
                                    cmd.unshift(5 /* DAP_TRANSFER */);
                                    return Uint8Array.from(cmd);
                                })).then(function (bufs) {
                                    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
                                        var buf = bufs_1[_i];
                                        if (buf[0] != 5 /* DAP_TRANSFER */)
                                            throw new Error("Bad response for Transfer (many) -> " + buf[0]);
                                    }
                                    return bufs;
                                })];
                        res = [];
                        _i = 0, commands_1 = commands;
                        _c.label = 1;
                    case 1:
                        if (!(_i < commands_1.length)) return [3 /*break*/, 4];
                        cmd = commands_1[_i];
                        _b = (_a = res).push;
                        return [4 /*yield*/, this.cmdNums(5 /* DAP_TRANSFER */, cmd)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, res];
                }
            });
        });
    };
    CMSISDAP.prototype.cmdNums = function (op, data) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.unshift(op);
                        return [4 /*yield*/, this.send(data)];
                    case 1:
                        buf = _a.sent();
                        if (buf[0] !== op) {
                            throw new Error("Bad response for " + op + " -> " + buf[0]);
                        }
                        switch (op) {
                            case 2 /* DAP_CONNECT */:
                            case 0 /* DAP_INFO */:
                            case 5 /* DAP_TRANSFER */:
                            case 6 /* DAP_TRANSFER_BLOCK */:
                                break;
                            default:
                                if (op < 0x80 && buf[1] !== 0) {
                                    throw new Error("Bad status for " + op + " -> " + buf[1]);
                                }
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    CMSISDAP.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Connecting...");
                        return [4 /*yield*/, this.info(254 /* PACKET_COUNT */)];
                    case 1:
                        v = _a.sent();
                        if (v) {
                            this.maxSent = v;
                        }
                        else {
                            throw new Error("DAP_INFO returned invalid packet count.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 10000000))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(2 /* DAP_CONNECT */, [0])];
                    case 3:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            throw new Error("SWD mode not enabled.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 10000000))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(4 /* DAP_TRANSFER_CONFIGURE */, [0, 0x50, 0, 0, 0])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(19 /* DAP_SWD_CONFIGURE */, [0])];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.jtagToSwd()];
                    case 7:
                        _a.sent();
                        console.log("Connected");
                        return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.jtagToSwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrs, _i, arrs_1, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrs = [
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [16, 0x9e, 0xe7],
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [8, 0x00],
                        ];
                        _i = 0, arrs_1 = arrs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arrs_1.length)) return [3 /*break*/, 4];
                        arr = arrs_1[_i];
                        return [4 /*yield*/, this.swjSequence(arr)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.swjSequence = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(18 /* DAP_SWJ_SEQUENCE */, data)];
            });
        });
    };
    CMSISDAP.prototype.info = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cmdNums(0 /* DAP_INFO */, [id])];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] === 0) {
                            return [2 /*return*/, null];
                        }
                        switch (id) {
                            case 240 /* CAPABILITIES */:
                            case 254 /* PACKET_COUNT */:
                            case 255 /* PACKET_SIZE */:
                                if (buf[1] === 1) {
                                    return [2 /*return*/, buf[2]];
                                }
                                else if (buf[1] === 2) {
                                    return [2 /*return*/, buf[3] << 8 | buf[2]];
                                }
                        }
                        return [2 /*return*/, buf.subarray(2, buf[1] + 2 - 1)]; // .toString("utf8")
                }
            });
        });
    };
    CMSISDAP.prototype.send = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var array, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        array = Uint8Array.from(command);
                        return [4 /*yield*/, this.hid.write(array.buffer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.hid.read()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, new Uint8Array(response.buffer)];
                }
            });
        });
    };
    return CMSISDAP;
}());
exports.CMSISDAP = CMSISDAP;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cortex_1 = __webpack_require__(2);
var K64F_1 = __webpack_require__(13);
var NRF51_1 = __webpack_require__(14);
var analyzer = new Uint32Array([
    0x2180468c, 0x2600b5f0, 0x4f2c2501, 0x447f4c2c, 0x1c2b0049, 0x425b4033, 0x40230872, 0x085a4053,
    0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a,
    0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b,
    0x40534023, 0xc7083601, 0xd1d2428e, 0x2b004663, 0x4663d01f, 0x46b4009e, 0x24ff2701, 0x44844d11,
    0x1c3a447d, 0x88418803, 0x4351409a, 0xd0122a00, 0x22011856, 0x780b4252, 0x40533101, 0x009b4023,
    0x0a12595b, 0x42b1405a, 0x43d2d1f5, 0x4560c004, 0x2000d1e7, 0x2200bdf0, 0x46c0e7f8, 0x000000b6,
    0xedb88320, 0x00000044,
]);
var FlashTarget = (function (_super) {
    __extends(FlashTarget, _super);
    function FlashTarget(device, platform) {
        var _this = _super.call(this, device) || this;
        _this.platform = platform;
        _this.inited = false;
        return _this;
    }
    /**
     * Initialise the flash driver on the chip. Must be called before any of the other
     * flash-related methods.
     */
    FlashTarget.prototype.flashInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.inited) {
                            return [2 /*return*/];
                        }
                        // reset and halt
                        return [4 /*yield*/, this.reset(true)];
                    case 1:
                        // reset and halt
                        _a.sent();
                        // make sure we're in Thumb mode.
                        return [4 /*yield*/, this.writeCoreRegister(16 /* XPSR */, 1 << 24)];
                    case 2:
                        // make sure we're in Thumb mode.
                        _a.sent();
                        return [4 /*yield*/, this.writeCoreRegister(9 /* R9 */, this.platform.flashAlgo.staticBase)];
                    case 3:
                        _a.sent();
                        if (!this.platform.flashAlgo.analyzerSupported) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.writeBlock(this.platform.flashAlgo.analyzerAddress, analyzer)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcInit, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, true, 0, 0, 0, 0)];
                    case 6:
                        result = _a.sent();
                        this.inited = true;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Erase _all_ data stored in flash on the chip.
     */
    FlashTarget.prototype.eraseChip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcEraseAll, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, false, 0, 0, 0)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Upload a program to flash memory on the chip.
     * TODO: add a callback to provide progress data
     *
     * @param data Array of 32-bit integers to write to flash.
     */
    FlashTarget.prototype.flash = function (data, address, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var pageSizeWords, bufferAddress, flashStart, ptr, wordPtr, pageData, flashAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        pageSizeWords = this.platform.flashAlgo.pageSize / 4;
                        bufferAddress = this.platform.flashAlgo.pageBuffers[0];
                        flashStart = address || this.platform.flashAlgo.flashStart;
                        ptr = 0;
                        _a.label = 3;
                    case 3:
                        if (!(ptr < data.byteLength)) return [3 /*break*/, 6];
                        wordPtr = ptr / 4;
                        pageData = data.subarray(wordPtr, wordPtr + pageSizeWords);
                        flashAddress = flashStart + ptr;
                        return [4 /*yield*/, this.memory.writeBlock(bufferAddress, pageData)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcProgramPage, // pc
                            this.platform.flashAlgo.loadAddress + 1, // lr
                            this.platform.flashAlgo.stackPointer, // sp
                            /* upload? */
                            false, 
                            /* args */
                            flashAddress, this.platform.flashAlgo.pageSize, bufferAddress)];
                    case 5:
                        _a.sent();
                        if (progressCb) {
                            progressCb(ptr / data.byteLength);
                        }
                        ptr += pageData.byteLength;
                        return [3 /*break*/, 3];
                    case 6:
                        if (progressCb) {
                            progressCb(1.0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.program = function (program, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var totalBytes, cumulativeBytes, startTime, _loop_1, this_1, _i, _a, section, endTime, elapsedTime, transferRate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.eraseChip()];
                    case 2:
                        _b.sent();
                        totalBytes = program.totalByteLength();
                        cumulativeBytes = 0;
                        startTime = Date.now();
                        _loop_1 = function (section) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.flash(section.data, section.address, function (progress) {
                                            var sectionBytes = section.data.byteLength * progress;
                                            progressCb((cumulativeBytes + sectionBytes) / totalBytes);
                                        })];
                                    case 1:
                                        _a.sent();
                                        cumulativeBytes += section.data.byteLength;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = program.sections;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        section = _a[_i];
                        return [5 /*yield**/, _loop_1(section)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        endTime = Date.now();
                        elapsedTime = endTime - startTime;
                        transferRate = totalBytes / elapsedTime;
                        console.debug("Transfer took " + elapsedTime / 1000 + " s");
                        console.debug("Transfered " + totalBytes + " bytes at " + transferRate + " kB/s");
                        return [4 /*yield*/, this.flashUnInit()];
                    case 7:
                        _b.sent();
                        progressCb(1.0);
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.flashUnInit = function () {
        this.inited = false;
    };
    return FlashTarget;
}(cortex_1.CortexM));
exports.FlashTarget = FlashTarget;
exports.FlashTargets = new Map();
exports.FlashTargets.set("0240", new K64F_1.K64F());
exports.FlashTargets.set("9900", new NRF51_1.NRF51());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var K64F_FLASH_ALGO = {
    analyzerAddress: 0x1ffff000,
    analyzerSupported: true,
    flashSize: 0x100000,
    flashStart: 0x0,
    // Flash algorithm as a hex string
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x4604b570, 0x4616460d, 0x5020f24c, 0x81c84932, 0x1028f64d, 0x460881c8, 0xf0208800, 0x80080001,
        0x4448482e, 0xf8dcf000, 0x2001b108, 0x2000bd70, 0x4601e7fc, 0x47702000, 0x4929b510, 0x44484827,
        0xf8b8f000, 0xb92c4604, 0x48242100, 0xf0004448, 0x4604f9a9, 0xf837f000, 0xbd104620, 0x4604b570,
        0x4448481e, 0x46214b1e, 0xf00068c2, 0x4605f85d, 0x481ab93d, 0x23004448, 0x68c24621, 0xf946f000,
        0xf0004605, 0x4628f820, 0xb5febd70, 0x460c4605, 0x46234616, 0x46294632, 0x44484810, 0xf8f8f000,
        0xb9674607, 0x22012000, 0x2000e9cd, 0x46224633, 0x90024629, 0x44484809, 0xf984f000, 0xf0004607,
        0x4638f802, 0x4807bdfe, 0xf4206840, 0xf5000070, 0x49040070, 0x47706048, 0x40052000, 0x00000004,
        0x6b65666b, 0x4001f000, 0x4a0e2070, 0x20807010, 0xbf007010, 0x7800480b, 0x280009c0, 0x4809d0fa,
        0xf0017801, 0xb1080020, 0x47702067, 0x0010f001, 0x2068b108, 0xf001e7f9, 0xb1080001, 0xe7f42069,
        0xe7f22000, 0x40020000, 0x4df0e92d, 0x460d4604, 0x469a4690, 0xf0004650, 0x4606f891, 0x4630b116,
        0x8df0e8bd, 0x46422310, 0x46204629, 0xf86cf000, 0xb10e4606, 0xe7f34630, 0x0008eb05, 0x68e01e47,
        0xf1f0fbb7, 0x7011fb00, 0x68e0b140, 0xf0f0fbb7, 0x0b01f100, 0xfb0068e0, 0x1e47f00b, 0x480be011,
        0x68004478, 0x20096005, 0x71c84909, 0xffacf7ff, 0x69a04606, 0x69a0b108, 0xb1064780, 0x68e0e003,
        0x42bd4405, 0xbf00d9eb, 0xe7c94630, 0x000002ec, 0x40020000, 0x4604b570, 0x4628460d, 0xf84ef000,
        0xb10e4606, 0xbd704630, 0x2004b90c, 0x2044e7fb, 0x71c84902, 0xff88f7ff, 0x0000e7f5, 0x40020000,
        0xb9094601, 0x47702004, 0x6cc04826, 0x6003f3c0, 0x447b4b25, 0x0010f833, 0xb90a0302, 0xe7f22064,
        0x60082000, 0x2002604a, 0x02c06088, 0x200060c8, 0x61486108, 0xbf006188, 0x4602e7e5, 0x2004b90a,
        0x61914770, 0xe7fb2000, 0x4604b530, 0x2004b90c, 0x1e58bd30, 0xb9104008, 0x40101e58, 0x2065b108,
        0x6820e7f6, 0xd8054288, 0x0500e9d4, 0x188d4428, 0xd20142a8, 0xe7eb2066, 0xe7e92000, 0x480b4601,
        0xd0014281, 0x4770206b, 0xe7fc2000, 0xb90b4603, 0x47702004, 0xd801290f, 0xd0012a04, 0xe7f82004,
        0xe7f62000, 0x40048000, 0x0000025a, 0x6b65666b, 0x41f0e92d, 0x46884607, 0x461d4614, 0x2004b914,
        0x81f0e8bd, 0x462a2308, 0x46384641, 0xffbcf7ff, 0xb10e4606, 0xe7f34630, 0x4812e01f, 0x68004478,
        0x8000f8c0, 0x490fcc01, 0x390c4479, 0x60486809, 0x490ccc01, 0x39184479, 0x60886809, 0x490a2007,
        0xf7ff71c8, 0x4606ff01, 0xb10869b8, 0x478069b8, 0xe004b106, 0x0808f108, 0x2d003d08, 0xbf00d1dd,
        0xe7cd4630, 0x000001b0, 0x40020000, 0x4dffe92d, 0x4682b082, 0x2310460c, 0x46504621, 0xf7ff9a04,
        0x4683ff83, 0x0f00f1bb, 0x4658d003, 0xe8bdb006, 0xe9da8df0, 0xfbb00101, 0x4260f7f1, 0x40084279,
        0x42a54245, 0x443dd100, 0xe0229e04, 0x0804eba5, 0xd90045b0, 0xea4f46b0, 0x90011018, 0x4478480f,
        0x60046800, 0x490e2001, 0x980171c8, 0x72c80a00, 0x72889801, 0x72489805, 0xfeb6f7ff, 0xf1bb4683,
        0xd0010f00, 0xe7d14658, 0x0608eba6, 0x443d4444, 0x2e00bf00, 0x2000d1da, 0x0000e7c8, 0x0000010e,
        0x40020000, 0x4604b570, 0xb90c460d, 0xbd702004, 0x49032040, 0x460871c8, 0xf7ff7185, 0xe7f6fe95,
        0x40020000, 0x4dffe92d, 0x4617460c, 0xe9dd461d, 0xf8ddb80c, 0xb91da038, 0xb0042004, 0x8df0e8bd,
        0x463a2304, 0x98004621, 0xff1ef7ff, 0xb10e4606, 0xe7f24630, 0x4814e022, 0x68004478, 0x20026004,
        0x71c84912, 0xf8804608, 0x490fb00b, 0x39144479, 0x68096828, 0xf7ff6088, 0x4606fe67, 0xf1b8b15e,
        0xd0010f00, 0x4000f8c8, 0x0f00f1ba, 0x2000d002, 0x0000f8ca, 0x1f3fe004, 0x1d241d2d, 0xd1da2f00,
        0x4630bf00, 0x0000e7c9, 0x00000074, 0x40020000, 0x00000000, 0x00080000, 0x00100000, 0x00200000,
        0x00400000, 0x00800000, 0x01000000, 0x01000000, 0x40020004, 0x00000000,
    ]),
    loadAddress: 0x20000000,
    pageBuffers: [0x20003000, 0x20004000],
    pageSize: 0x1000,
    // Relative function addresses
    pcEraseAll: 0x20000059,
    pcEraseSector: 0x2000007D,
    pcInit: 0x20000021,
    // pcUnInit: 0x49,
    pcProgramPage: 0x200000AB,
    stackPointer: 0x20001000,
    staticBase: 0x20000000 + 0x20 + 0x474,
};
var K64F = (function () {
    function K64F() {
        this.flashAlgo = K64F_FLASH_ALGO;
    }
    K64F.prototype.overrideSecurityBits = function (address, data) {
        var u8data = new Uint8Array(data.buffer);
        // Kinetis security values and addresses
        var SECURITY_START = 0x400;
        var SECURITY_SIZE = 16;
        var FPROT_ADDR = 0x408;
        var FPROT_ADDR_END = 0x40c;
        var FPROT_SIZE = 4;
        var FSEC_ADDR = 0x40c;
        var FSEC_VAL = 0xFE;
        var FOPT_ADDR = 0x40d;
        var FOPT_VAL = 0xFF;
        var FEPROT_ADDR = 0x40e;
        var FEPROT_VAL = 0xFF;
        var FDPROT_ADDR = 0x40f;
        var FDPROT_VAL = 0xFF;
        if (address <= SECURITY_START && address + u8data.byteLength > SECURITY_START + SECURITY_SIZE) {
            for (var i = FPROT_ADDR; i < FPROT_ADDR_END; i++) {
                if (u8data[i - address] !== 0xff) {
                    u8data[i - address] = 0xff;
                    console.debug("FCF[" + (i - FPROT_ADDR) + "] at addr " + i + " changed to " + u8data[i - address]);
                }
            }
            if (u8data[FSEC_ADDR - address] !== FSEC_VAL) {
                u8data[FSEC_ADDR - address] = FSEC_VAL;
                console.debug("FSEC at addr " + FSEC_ADDR + " changed to " + FSEC_VAL);
            }
            if (u8data[FOPT_ADDR - address] === 0x00) {
                console.debug("FOPT set to restricted value 0x00");
            }
            if (u8data[FEPROT_ADDR - address] !== FEPROT_VAL) {
                u8data[FEPROT_ADDR - address] = FEPROT_VAL;
                console.debug("FEPROT at addr " + FEPROT_ADDR + " changed to " + FEPROT_VAL);
            }
            if (u8data[FDPROT_ADDR - address] !== FDPROT_VAL) {
                u8data[FDPROT_ADDR - address] = FDPROT_VAL;
                console.debug("FDPROT at addr " + FDPROT_ADDR + " changed to " + FDPROT_VAL);
            }
        }
    };
    return K64F;
}());
exports.K64F = K64F;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NRF51_FLASH_ALGO = {
    analyzerAddress: 0x20003000,
    analyzerSupported: true,
    beginData: 0x20002000,
    flashSize: 0x40000,
    flashStart: 0x0,
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x47702000, 0x47702000, 0x4c26b570, 0x60602002, 0x60e02001, 0x68284d24, 0xd00207c0, 0x60602000,
        0xf000bd70, 0xe7f6f82c, 0x4c1eb570, 0x60612102, 0x4288491e, 0x2001d302, 0xe0006160, 0x4d1a60a0,
        0xf81df000, 0x07c06828, 0x2000d0fa, 0xbd706060, 0x4605b5f8, 0x4813088e, 0x46142101, 0x4f126041,
        0xc501cc01, 0x07c06838, 0x1e76d006, 0x480dd1f8, 0x60412100, 0xbdf84608, 0xf801f000, 0x480ce7f2,
        0x06006840, 0xd00b0e00, 0x6849490a, 0xd0072900, 0x4a0a4909, 0xd00007c3, 0x1d09600a, 0xd1f90840,
        0x00004770, 0x4001e500, 0x4001e400, 0x10001000, 0x40010400, 0x40010500, 0x40010600, 0x6e524635,
        0x00000000,
    ]),
    loadAddress: 0x20000000,
    minProgramLength: 4,
    pageBuffers: [0x20002000, 0x20002400],
    pageSize: 0x400,
    pcEraseAll: 0x20000029,
    pcEraseSector: 0x20000049,
    pcInit: 0x20000021,
    pcProgramPage: 0x20000071,
    stackPointer: 0x20001000,
    staticBase: 0x20000170,
};
var NRF51 = (function () {
    function NRF51() {
        this.flashAlgo = NRF51_FLASH_ALGO;
    }
    NRF51.prototype.overrideSecurityBits = function (address, data) {
        /* empty */
    };
    return NRF51;
}());
exports.NRF51 = NRF51;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var FlashSection = (function () {
    function FlashSection(address, data) {
        this.address = address;
        this.data = data;
        /* empty */
    }
    FlashSection.prototype.toString = function () {
        return this.data.byteLength + " bytes @ " + this.address.toString(16);
    };
    return FlashSection;
}());
exports.FlashSection = FlashSection;
var FlashProgram = (function () {
    function FlashProgram(sections) {
        this.sections = sections;
    }
    FlashProgram.fromIntelHex = function (hex) {
        var lines = hex.split(/\n/);
        var upperAddr = 0;
        var startAddr = 0;
        var current = null;
        var chunks = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.substr(0, 1) !== ":") {
                throw new Error("Invaild line in hex file: " + (i + 1));
            }
            else {
                var length_1 = parseInt(line.substr(1, 2), 16);
                var addr = upperAddr + parseInt(line.substr(3, 4), 16);
                var fieldType = parseInt(line.substr(7, 2), 16);
                var data = line.substr(9, length_1 * 2);
                if (fieldType === 0x00) {
                    if (current && addr !== startAddr + (current.length / 2)) {
                        // non-contiguous
                        var sectionData = util_1.hex2bin(current);
                        chunks.push(new FlashSection(startAddr, new Uint32Array(sectionData.buffer)));
                        current = "";
                        startAddr = addr;
                    }
                    else if (!current) {
                        startAddr = addr;
                        current = "";
                    }
                    current += data;
                }
                else if (fieldType === 0x01) {
                    // EOF
                    break;
                }
                else if (fieldType === 0x02) {
                    // extended segment address record
                    upperAddr = parseInt(data, 16) << 4;
                }
                else if (fieldType === 0x04) {
                    // extended linear address record
                    upperAddr = parseInt(data, 16) << 16;
                }
            }
        }
        return new FlashProgram(chunks);
    };
    FlashProgram.fromBinary = function (addr, bin) {
        return new FlashProgram([new FlashSection(addr, bin)]);
    };
    FlashProgram.prototype.totalByteLength = function () {
        return this.sections.map(function (s) { return s.data.byteLength; }).reduce(function (x, y) { return x + y; });
    };
    FlashProgram.prototype.toString = function () {
        return this.sections.toString();
    };
    return FlashProgram;
}());
exports.FlashProgram = FlashProgram;


/***/ })
/******/ ]);
//# sourceMappingURL=dapjs.js.map
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
/// <reference path="dapjs.d.ts" />
var React = require("react");
var imul = Math.imul;
var pageSize = 1024;
var numPages = 256;
var timeoutMessage = "timeout";
function murmur3_core(data) {
    var h0 = 0x2F9BE6CC;
    var h1 = 0x1EC3A6C8;
    for (var i = 0; i < data.length; i += 4) {
        var k = pxt.HF2.read32(data, i) >>> 0;
        k = imul(k, 0xcc9e2d51);
        k = (k << 15) | (k >>> 17);
        k = imul(k, 0x1b873593);
        h0 ^= k;
        h1 ^= k;
        h0 = (h0 << 13) | (h0 >>> 19);
        h1 = (h1 << 13) | (h1 >>> 19);
        h0 = (imul(h0, 5) + 0xe6546b64) >>> 0;
        h1 = (imul(h1, 5) + 0xe6546b64) >>> 0;
    }
    return [h0, h1];
}
var DAPWrapper = /** @class */ (function () {
    function DAPWrapper(h) {
        var _this = this;
        this.flashing = true;
        this.pbuf = new pxt.U.PromiseBuffer();
        this.useSerial = true;
        this.packetIo = h;
        h.onData = function (buf) {
            // console.log("RD: " + pxt.Util.toHex(buf))
            _this.pbuf.push(buf);
        };
        this.allocDAP();
        var readSerial = function () {
            if (!_this.useSerial) {
                return;
            }
            if (_this.flashing) {
                setTimeout(readSerial, 300);
                return;
            }
            _this.cmsisdap.cmdNums(0x83, [])
                .then(function (r) {
                var len = r[1];
                var str = "";
                for (var i = 2; i < len + 2; ++i) {
                    str += String.fromCharCode(r[i]);
                }
                if (str.length > 0) {
                    pxt.U.nextTick(readSerial);
                    window.postMessage({
                        type: 'serial',
                        id: 'n/a',
                        data: str
                    }, "*");
                    // console.log("SERIAL: " + str)
                }
                else
                    setTimeout(readSerial, 50);
            }, function (err) {
                setTimeout(readSerial, 1000);
            });
        };
        readSerial();
    }
    DAPWrapper.prototype.allocDAP = function () {
        /*
        let sendMany = (cmds: Uint8Array[]) => {
            return h.talksAsync(cmds.map(c => ({ cmd: 0, data: c })));
        }

        if (!h.talksAsync)
            sendMany = null;
        */
        var dev = new DapJS.DAP({
            write: writeAsync,
            close: this.disconnectAsync,
            read: readAsync,
        });
        this.cmsisdap = dev.dap;
        this.cortexM = new DapJS.CortexM(dev);
        var h = this.packetIo;
        var pbuf = this.pbuf;
        function writeAsync(data) {
            // console.log("WR: " + pxt.Util.toHex(new Uint8Array(data)));
            return h.sendPacketAsync(new Uint8Array(data));
        }
        function readAsync() {
            return pbuf.shiftAsync();
        }
    };
    DAPWrapper.prototype.reconnectAsync = function (first) {
        var _this = this;
        // configure serial at 115200
        var p = Promise.resolve();
        if (!first) {
            p = this.packetIo.reconnectAsync()
                .then(function () { return _this.allocDAP(); });
        }
        return p
            .then(function () { return _this.cortexM.init(); })
            .then(function () {
            return _this.cmsisdap.cmdNums(0x82, [0x00, 0xC2, 0x01, 0x00])
                .then(function () { _this.useSerial = true; }, function (err) { _this.useSerial = false; });
        });
    };
    DAPWrapper.prototype.disconnectAsync = function () {
        return this.packetIo.disconnectAsync();
    };
    return DAPWrapper;
}());
var packetIoPromise;
function initPacketIOAsync() {
    if (!packetIoPromise) {
        packetIoPromise = pxt.HF2.mkPacketIOAsync()
            .catch(function (err) {
            packetIoPromise = null;
            return Promise.reject(err);
        });
        return packetIoPromise;
    }
    else {
        var packetIo_1;
        return packetIoPromise
            .then(function (io) {
            packetIo_1 = io;
            return io.reconnectAsync();
        })
            .then(function () { return packetIo_1; });
    }
}
var previousDapWrapper;
function dapAsync() {
    if (previousDapWrapper)
        return previousDapWrapper.reconnectAsync(false) // Always fully reconnect to handle device unplugged mid-session
            .then(function () { return previousDapWrapper; });
    return Promise.resolve()
        .then(function () {
        if (previousDapWrapper) {
            return previousDapWrapper.disconnectAsync()
                .finally(function () {
                previousDapWrapper = null;
            });
        }
        return Promise.resolve();
    })
        .then(function () { return initPacketIOAsync(); })
        .then(function (h) {
        var w = new DAPWrapper(h);
        previousDapWrapper = w;
        return w.reconnectAsync(true)
            .then(function () {
            return w;
        });
    });
}
function canHID() {
    var r = false;
    if (pxt.usb.isEnabled) {
        r = true;
    }
    else if (pxt.U.isNodeJS) {
        r = true;
    }
    else {
        var forceHexDownload = /forceHexDownload/i.test(window.location.href);
        var isUwp = !!window.Windows;
        if (pxt.BrowserUtils.isLocalHost() && pxt.Cloud.localToken && !forceHexDownload || isUwp)
            r = true;
    }
    return r;
}
function initAsync() {
    if (canHID()) {
        return dapAsync();
    }
    else {
        return Promise.reject(new Error("no HID"));
    }
}
function pageAlignBlocks(blocks, pageSize) {
    pxt.U.assert(pageSize % 256 == 0);
    var res = [];
    for (var i = 0; i < blocks.length;) {
        var b0 = blocks[i];
        var newbuf = new Uint8Array(pageSize);
        var startPad = b0.targetAddr & (pageSize - 1);
        var newAddr = b0.targetAddr - startPad;
        for (; i < blocks.length; ++i) {
            var b = blocks[i];
            if (b.targetAddr + b.payloadSize > newAddr + pageSize)
                break;
            pxt.U.memcpy(newbuf, b.targetAddr - newAddr, b.data, 0, b.payloadSize);
        }
        var bb = pxt.U.flatClone(b0);
        bb.data = newbuf;
        bb.targetAddr = newAddr;
        bb.payloadSize = pageSize;
        res.push(bb);
    }
    return res;
}
var flashPageBINquick = new Uint32Array([
    0xbe00be00,
    0x2480b5f0, 0x00e42300, 0x58cd58c2, 0xd10342aa, 0x42a33304, 0xbdf0d1f8,
    0x4b162502, 0x509d4a16, 0x2d00591d, 0x24a1d0fc, 0x511800e4, 0x3cff3c09,
    0x591e0025, 0xd0fc2e00, 0x509c2400, 0x2c00595c, 0x2401d0fc, 0x509c2580,
    0x595c00ed, 0xd0fc2c00, 0x00ed2580, 0x002e2400, 0x5107590f, 0x2f00595f,
    0x3404d0fc, 0xd1f742ac, 0x50992100, 0x2a00599a, 0xe7d0d0fc, 0x4001e000,
    0x00000504,
]);
// doesn't check if data is already there - for timing
var flashPageBIN = new Uint32Array([
    0xbe00be00,
    0x2402b5f0, 0x4a174b16, 0x2480509c, 0x002500e4, 0x2e00591e, 0x24a1d0fc,
    0x511800e4, 0x2c00595c, 0x2400d0fc, 0x2480509c, 0x002500e4, 0x2e00591e,
    0x2401d0fc, 0x595c509c, 0xd0fc2c00, 0x00ed2580, 0x002e2400, 0x5107590f,
    0x2f00595f, 0x3404d0fc, 0xd1f742ac, 0x50992100, 0x2a00599a, 0xbdf0d0fc,
    0x4001e000, 0x00000504,
]);
// void computeHashes(uint32_t *dst, uint8_t *ptr, uint32_t pageSize, uint32_t numPages)
var computeChecksums2 = new Uint32Array([
    0x4c27b5f0, 0x44a52680, 0x22009201, 0x91004f25, 0x00769303, 0x24080013,
    0x25010019, 0x40eb4029, 0xd0002900, 0x3c01407b, 0xd1f52c00, 0x468c0091,
    0xa9044665, 0x506b3201, 0xd1eb42b2, 0x089b9b01, 0x23139302, 0x9b03469c,
    0xd104429c, 0x2000be2a, 0x449d4b15, 0x9f00bdf0, 0x4d149e02, 0x49154a14,
    0x3e01cf08, 0x2111434b, 0x491341cb, 0x405a434b, 0x4663405d, 0x230541da,
    0x4b10435a, 0x466318d2, 0x230541dd, 0x4b0d435d, 0x2e0018ed, 0x6002d1e7,
    0x9a009b01, 0x18d36045, 0x93003008, 0xe7d23401, 0xfffffbec, 0xedb88320,
    0x00000414, 0x1ec3a6c8, 0x2f9be6cc, 0xcc9e2d51, 0x1b873593, 0xe6546b64,
]);
var startTime = 0;
function log(msg) {
    var now = Date.now();
    if (!startTime)
        startTime = now;
    now -= startTime;
    var ts = ("00000" + now).slice(-5);
    pxt.log("HID " + ts + ": " + msg);
}
var membase = 0x20000000;
var loadAddr = membase;
var dataAddr = 0x20002000;
var stackAddr = 0x20001000;
exports.bufferConcat = function (bufs) {
    var len = 0;
    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
        var b = bufs_1[_i];
        len += b.length;
    }
    var r = new Uint8Array(len);
    len = 0;
    for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
        var b = bufs_2[_a];
        r.set(b, len);
        len += b.length;
    }
    return r;
};
function fullVendorCommandFlashAsync(resp, wrap) {
    var chunkSize = 62;
    var aborted = false;
    return Promise.resolve()
        .then(function () {
        return wrap.cmsisdap.cmdNums(0x8A /* DAPLinkFlash.OPEN */, [1]);
    })
        .then(function (res) {
        var hexUint8 = pxt.U.stringToUint8Array(resp.outfiles[pxtc.BINARY_HEX]);
        var hexArray = Array.prototype.slice.call(hexUint8);
        var sendPages = function (offset) {
            if (offset === void 0) { offset = 0; }
            var end = Math.min(hexArray.length, offset + chunkSize);
            var nextPage = hexArray.slice(offset, end);
            nextPage.unshift(nextPage.length);
            return wrap.cmsisdap.cmdNums(0x8C /* DAPLinkFlash.WRITE */, nextPage)
                .then(function () {
                if (!aborted && end < hexArray.length) {
                    return sendPages(end);
                }
                return Promise.resolve();
            });
        };
        return sendPages();
    })
        .then(function (res) {
        return wrap.cmsisdap.cmdNums(0x8B /* DAPLinkFlash.CLOSE */, []);
    })
        .timeout(60000, timeoutMessage)
        .catch(function (e) {
        aborted = true;
        return wrap.cmsisdap.cmdNums(0x89 /* DAPLinkFlash.RESET */, [])
            .catch(function (e2) {
            // Best effort reset, no-op if there's an error
        })
            .then(function () {
            return Promise.reject(e);
        });
    });
}
function quickHidFlashAsync(resp, wrap) {
    var logV = function (msg) { };
    //let logV = log
    var aborted = false;
    var runFlash = function (b, dataAddr) {
        var cmd = wrap.cortexM.prepareCommand();
        cmd.halt();
        cmd.writeCoreRegister(15 /* PC */, loadAddr + 4 + 1);
        cmd.writeCoreRegister(14 /* LR */, loadAddr + 1);
        cmd.writeCoreRegister(13 /* SP */, stackAddr);
        cmd.writeCoreRegister(0, b.targetAddr);
        cmd.writeCoreRegister(1, dataAddr);
        return Promise.resolve()
            .then(function () {
            logV("setregs");
            return cmd.go();
        })
            .then(function () {
            logV("dbg en");
            // starts the program
            return wrap.cortexM.debug.enable();
        });
    };
    var checksums;
    return getFlashChecksumsAsync(wrap)
        .then(function (buf) {
        checksums = buf;
        log("write code");
        return wrap.cortexM.memory.writeBlock(loadAddr, flashPageBIN);
    })
        .then(function () {
        log("convert");
        // TODO this is seriously inefficient (130ms on a fast machine)
        var uf2 = ts.pxtc.UF2.newBlockFile();
        ts.pxtc.UF2.writeHex(uf2, resp.outfiles[pxtc.BINARY_HEX].split(/\r?\n/));
        var bytes = pxt.U.stringToUint8Array(ts.pxtc.UF2.serializeFile(uf2));
        var parsed = ts.pxtc.UF2.parseFile(bytes);
        var aligned = pageAlignBlocks(parsed, pageSize);
        log("initial: " + aligned.length + " pages");
        aligned = onlyChanged(aligned, checksums);
        log("incremental: " + aligned.length + " pages");
        return Promise.mapSeries(pxt.U.range(aligned.length), function (i) {
            if (aborted)
                return Promise.resolve();
            var b = aligned[i];
            if (b.targetAddr >= 0x10000000)
                return Promise.resolve();
            logV("about to write at 0x" + b.targetAddr.toString(16));
            var writeBl = Promise.resolve();
            var thisAddr = (i & 1) ? dataAddr : dataAddr + pageSize;
            var nextAddr = (i & 1) ? dataAddr + pageSize : dataAddr;
            if (i == 0) {
                var u32data = new Uint32Array(b.data.length / 4);
                for (var i_1 = 0; i_1 < b.data.length; i_1 += 4)
                    u32data[i_1 >> 2] = pxt.HF2.read32(b.data, i_1);
                writeBl = wrap.cortexM.memory.writeBlock(thisAddr, u32data);
            }
            return writeBl
                .then(function () { return runFlash(b, thisAddr); })
                .then(function () {
                var next = aligned[i + 1];
                if (!next)
                    return Promise.resolve();
                logV("write next");
                var buf = new Uint32Array(next.data.buffer);
                return wrap.cortexM.memory.writeBlock(nextAddr, buf);
            })
                .then(function () {
                logV("wait");
                return wrap.cortexM.waitForHalt(500);
            })
                .then(function () {
                logV("done block");
            });
        })
            .then(function () {
            log("flash done");
            pxt.tickEvent("hid.flash.done");
            return wrap.cortexM.reset(false);
        })
            .then(function () {
            wrap.flashing = false;
        });
    })
        .timeout(25000, timeoutMessage)
        .catch(function (e) {
        aborted = true;
        return Promise.reject(e);
    });
}
function flashAsync(resp, d) {
    if (d === void 0) { d = {}; }
    startTime = 0;
    var wrap;
    log("init");
    d.showNotification(pxt.U.lf("Downloading..."));
    pxt.tickEvent("hid.flash.start");
    return Promise.resolve()
        .then(function () {
        if (previousDapWrapper) {
            previousDapWrapper.flashing = true;
            return Promise.delay(100);
        }
        return Promise.resolve();
    })
        .then(initAsync)
        .then(function (w) {
        wrap = w;
        log("reset");
        return wrap.cortexM.init()
            .then(function () { return wrap.cortexM.reset(true); })
            .catch(function (e) {
            log("trying re-connect");
            return wrap.reconnectAsync(false)
                .then(function () { return wrap.cortexM.reset(true); });
        });
    })
        .then(function () { return wrap.cortexM.memory.readBlock(0x10001014, 1, pageSize); })
        .then(function (v) {
        if (pxt.HF2.read32(v, 0) != 0x3C000) {
            pxt.tickEvent("hid.flash.uicrfail");
            return fullVendorCommandFlashAsync(resp, wrap);
        }
        return quickHidFlashAsync(resp, wrap);
    })
        .catch(function (e) {
        pxt.log("flash error: " + e.type);
        if (e.type === "devicenotfound" && d.reportDeviceNotFoundAsync) {
            pxt.tickEvent("hid.flash.devicenotfound");
            return d.reportDeviceNotFoundAsync("/device/windows-app/troubleshoot", resp);
        }
        else if (e.message === timeoutMessage) {
            pxt.tickEvent("hid.flash.timeout");
            return previousDapWrapper.reconnectAsync(true)
                .catch(function (e) { })
                .then(function () {
                // Best effort disconnect; at this point we don't even know the state of the device
                pxt.reportException(e);
                return resp.confirmAsync({
                    header: lf("Something went wrong..."),
                    body: lf("One-click download took too long. Please disconnect your {0} from your computer and reconnect it, then manually download your program using drag and drop.", pxt.appTarget.appTheme.boardName || lf("device")),
                    agreeLbl: lf("Ok"),
                    hideCancel: true
                });
            })
                .then(function () {
                return pxt.commands.saveOnlyAsync(resp);
            });
        }
        else if (e.isUserError) {
            d.reportError(e.message);
            return Promise.resolve();
        }
        else {
            pxt.tickEvent("hid.flash.unknownerror");
            pxt.reportException(e);
            return resp.confirmAsync({
                header: pxt.U.lf("Something went wrong..."),
                body: pxt.U.lf("Please manually download your program to your device using drag and drop. One-click download might work afterwards."),
                agreeLbl: lf("Ok"),
                hideCancel: true
            })
                .then(function () {
                return pxt.commands.saveOnlyAsync(resp);
            });
        }
    });
}
function getFlashChecksumsAsync(wrap) {
    log("getting existing flash checksums");
    var pages = numPages;
    return wrap.cortexM.runCode(computeChecksums2, loadAddr, loadAddr + 1, 0xffffffff, stackAddr, true, dataAddr, 0, pageSize, pages)
        .then(function () { return wrap.cortexM.memory.readBlock(dataAddr, pages * 2, pageSize); });
}
function onlyChanged(blocks, checksums) {
    return blocks.filter(function (b) {
        var idx = b.targetAddr / pageSize;
        pxt.U.assert((idx | 0) == idx);
        pxt.U.assert(b.data.length == pageSize);
        if (idx * 8 + 8 > checksums.length)
            return true; // out of range?
        var c0 = pxt.HF2.read32(checksums, idx * 8);
        var c1 = pxt.HF2.read32(checksums, idx * 8 + 4);
        var ch = murmur3_core(b.data);
        if (c0 == ch[0] && c1 == ch[1])
            return false;
        return true;
    });
}
function uwpDeployCoreAsync(resp, d) {
    if (d === void 0) { d = {}; }
    // Go straight to flashing
    return flashAsync(resp, d);
}
function deployCoreAsync(resp, d) {
    if (d === void 0) { d = {}; }
    return pxt.usb.isPairedAsync()
        .then(function (isPaired) {
        if (isPaired) {
            // Already paired from earlier in the session or from previous session
            return flashAsync(resp, d);
        }
        // try bluetooth if device is paired
        if (pxt.webBluetooth.isPaired())
            return pxt.webBluetooth.flashAsync(resp, d)
                .catch(function (e) { return pxt.commands.saveOnlyAsync(resp); });
        // No device paired, prompt user
        return pxt.commands.saveOnlyAsync(resp);
    });
}
/**
 *       <block type="device_show_leds">
    <field name="LED00">FALSE</field>
    <field name="LED10">FALSE</field>
    <field name="LED20">FALSE</field>
    <field name="LED30">FALSE</field>
    <field name="LED40">FALSE</field>
    <field name="LED01">FALSE</field>
    <field name="LED11">FALSE</field>
    <field name="LED21">FALSE</field>
    <field name="LED31">TRUE</field>
    <field name="LED41">FALSE</field>
    <field name="LED02">FALSE</field>
    <field name="LED12">FALSE</field>
    <field name="LED22">FALSE</field>
    <field name="LED32">FALSE</field>
    <field name="LED42">FALSE</field>
    <field name="LED03">FALSE</field>
    <field name="LED13">TRUE</field>
    <field name="LED23">FALSE</field>
    <field name="LED33">FALSE</field>
    <field name="LED43">FALSE</field>
    <field name="LED04">FALSE</field>
    <field name="LED14">FALSE</field>
    <field name="LED24">FALSE</field>
    <field name="LED34">FALSE</field>
    <field name="LED44">FALSE</field>
  </block>

  to
<block type="device_show_leds">
    <field name="LEDS">`
    # # # # #
    . . . . #
    . . . . .
    . . . . #
    . . . . #
    `
    </field>
  </block>
 */
function patchBlocks(pkgTargetVersion, dom) {
    // is this a old script?
    if (pxt.semver.majorCmp(pkgTargetVersion || "0.0.0", "1.0.0") >= 0)
        return;
    // showleds
    var nodes = pxt.U.toArray(dom.querySelectorAll("block[type=device_show_leds]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("block[type=device_build_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_build_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("block[type=device_build_big_image]")))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_build_big_image]")));
    nodes.forEach(function (node) {
        // don't rewrite if already upgraded, eg. field LEDS already present
        if (pxt.U.toArray(node.children).filter(function (child) { return child.tagName == "field" && "LEDS" == child.getAttribute("name"); })[0])
            return;
        // read LEDxx value and assmebly into a new field
        var leds = [[], [], [], [], []];
        pxt.U.toArray(node.children)
            .filter(function (child) { return child.tagName == "field" && /^LED\d+$/.test(child.getAttribute("name")); })
            .forEach(function (lednode) {
            var n = lednode.getAttribute("name");
            var col = parseInt(n[3]);
            var row = parseInt(n[4]);
            leds[row][col] = lednode.innerHTML == "TRUE" ? "#" : ".";
            // remove node
            node.removeChild(lednode);
        });
        // add new field
        var f = node.ownerDocument.createElement("field");
        f.setAttribute("name", "LEDS");
        var s = '`\n' + leds.map(function (row) { return row.join(''); }).join('\n') + '\n`';
        f.appendChild(node.ownerDocument.createTextNode(s));
        node.insertBefore(f, null);
    });
    // radio
    /*
<block type="radio_on_packet" x="174" y="120">
<mutation callbackproperties="receivedNumber" renamemap="{}"></mutation>
<field name="receivedNumber">receivedNumber</field>
</block>
<block type="radio_on_packet" disabled="true" x="127" y="263">
<mutation callbackproperties="receivedString,receivedNumber" renamemap="{&quot;receivedString&quot;:&quot;name&quot;,&quot;receivedNumber&quot;:&quot;value&quot;}"></mutation>
<field name="receivedString">name</field>
<field name="receivedNumber">value</field>
</block>
<block type="radio_on_packet" disabled="true" x="162" y="420">
<mutation callbackproperties="receivedString" renamemap="{}"></mutation>
<field name="receivedString">receivedString</field>
</block>

converts to

<block type="radio_on_number" x="196" y="208">
<field name="HANDLER_receivedNumber" id="DCy(W;1)*jLWQUpoy4Mm" variabletype="">receivedNumber</field>
</block>
<block type="radio_on_value" x="134" y="408">
<field name="HANDLER_name" id="*d-Jm^MJXO]Djs(dTR*?" variabletype="">name</field>
<field name="HANDLER_value" id="A6HQjH[k^X43o3h775+G" variabletype="">value</field>
</block>
<block type="radio_on_string" x="165" y="583">
<field name="HANDLER_receivedString" id="V9KsE!h$(iO?%W:[32CV" variabletype="">receivedString</field>
</block>
*/
    var varids = {};
    function addField(node, renameMap, name) {
        var f = node.ownerDocument.createElement("field");
        f.setAttribute("name", "HANDLER_" + name);
        f.setAttribute("id", varids[renameMap[name] || name]);
        f.appendChild(node.ownerDocument.createTextNode(name));
        node.appendChild(f);
    }
    pxt.U.toArray(dom.querySelectorAll("variable")).forEach(function (node) { return varids[node.innerHTML] = node.getAttribute("id"); });
    pxt.U.toArray(dom.querySelectorAll("block[type=radio_on_packet]"))
        .forEach(function (node) {
        var mutation = node.querySelector("mutation");
        if (!mutation)
            return;
        var renameMap = JSON.parse(node.getAttribute("renamemap") || "{}");
        var props = mutation.getAttribute("callbackproperties");
        if (props) {
            var parts = props.split(",");
            // It's tempting to generate radio_on_number if parts.length === 0 but
            // that would create a variable named "receivedNumber" and possibly shadow
            // an existing variable in the user's program. It's safer to stick to the
            // old block.
            if (parts.length === 1) {
                if (parts[0] === "receivedNumber") {
                    node.setAttribute("type", "radio_on_number");
                    node.removeChild(node.querySelector("field[name=receivedNumber]"));
                    addField(node, renameMap, "receivedNumber");
                }
                else if (parts[0] === "receivedString") {
                    node.setAttribute("type", "radio_on_string");
                    node.removeChild(node.querySelector("field[name=receivedString]"));
                    addField(node, renameMap, "receivedString");
                }
                else {
                    return;
                }
                node.removeChild(mutation);
            }
            else if (parts.length === 2 && parts.indexOf("receivedNumber") !== -1 && parts.indexOf("receivedString") !== -1) {
                node.setAttribute("type", "radio_on_value");
                node.removeChild(node.querySelector("field[name=receivedNumber]"));
                node.removeChild(node.querySelector("field[name=receivedString]"));
                addField(node, renameMap, "name");
                addField(node, renameMap, "value");
                node.removeChild(mutation);
            }
        }
    });
    // device_random now refers to randomRange() so we need to add the missing lower bound argument
    pxt.U.toArray(dom.querySelectorAll("block[type=device_random]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=device_random]")))
        .forEach(function (node) {
        if (getValue(node, "min"))
            return;
        var v = node.ownerDocument.createElement("value");
        v.setAttribute("name", "min");
        addNumberShadow(v);
        node.appendChild(v);
    });
    /*
    <block type="math_arithmetic">
        <field name="OP">DIVIDE</field>
        <value name="A">
            <shadow type="math_number"><field name="NUM">0</field></shadow>
            <block type="math_number"><field name="NUM">2</field></block>
        </value>
        <value name="B">
            <shadow type="math_number"><field name="NUM">1</field></shadow>
            <block type="math_number"><field name="NUM">3</field></block>
        </value>
    </block>
    */
    pxt.U.toArray(dom.querySelectorAll("block[type=math_arithmetic]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=math_arithmetic]")))
        .forEach(function (node) {
        var op = getField(node, "OP");
        if (!op || op.textContent.trim() !== "DIVIDE")
            return;
        // Convert to integer division
        /*
        <block type="math_js_op">
            <mutation op-type="infix"></mutation>
            <field name="OP">idiv</field>
            <value name="ARG0">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
            <value name="ARG1">
                <shadow type="math_number"><field name="NUM">0</field></shadow>
            </value>
        </block>
        */
        node.setAttribute("type", "math_js_op");
        op.textContent = "idiv";
        var mutation = node.ownerDocument.createElement("mutation");
        mutation.setAttribute("op-type", "infix");
        // mutation has to be first or Blockly will drop the second argument
        node.insertBefore(mutation, node.firstChild);
        var a = getValue(node, "A");
        if (a)
            a.setAttribute("name", "ARG0");
        var b = getValue(node, "B");
        if (b)
            b.setAttribute("name", "ARG1");
    });
    renameField(dom, "math_number_minmax", "NUM", "SLIDER");
    renameField(dom, "device_note", "note", "name");
}
function renameField(dom, blockType, oldName, newName) {
    pxt.U.toArray(dom.querySelectorAll("block[type=" + blockType + "]"))
        .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=" + blockType + "]")))
        .forEach(function (node) {
        var thefield = getField(node, oldName);
        if (thefield) {
            thefield.setAttribute("name", newName);
        }
    });
}
pxt.editor.initExtensionsAsync = function (opts) {
    pxt.debug('loading microbit target extensions...');
    function cantImportAsync(project) {
        // this feature is support in v0 only
        return project.showModalDialogAsync({
            header: lf("Can't import microbit.co.uk scripts..."),
            body: lf("Importing microbit.co.uk programs is not supported in this editor anymore. Please open this script in the https://makecode.microbit.org/v0 editor."),
            buttons: [
                {
                    label: lf("Go to the old editor"),
                    url: "https://makecode.microbit.org/v0"
                }
            ]
        }).then(function () { return project.openHome(); });
    }
    var manyAny = Math;
    if (!manyAny.imul)
        manyAny.imul = function (a, b) {
            var ah = (a >>> 16) & 0xffff;
            var al = a & 0xffff;
            var bh = (b >>> 16) & 0xffff;
            var bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
        };
    var res = {
        hexFileImporters: [{
                id: "blockly",
                canImport: function (data) { return data.meta.cloudId == "microbit.co.uk" && data.meta.editor == "blockly"; },
                importAsync: function (project, data) {
                    pxt.tickEvent('import.legacyblocks.redirect');
                    return cantImportAsync(project);
                }
            }, {
                id: "td",
                canImport: function (data) { return data.meta.cloudId == "microbit.co.uk" && data.meta.editor == "touchdevelop"; },
                importAsync: function (project, data) {
                    pxt.tickEvent('import.legacytd.redirect');
                    return cantImportAsync(project);
                }
            }]
    };
    pxt.usb.setFilters([{
            vendorId: 0x0D28,
            productId: 0x0204,
            classCode: 0xff,
            subclassCode: 0x03
        }]);
    var isUwp = !!window.Windows;
    if (isUwp)
        pxt.commands.deployCoreAsync = uwpDeployCoreAsync;
    else if ((canHID() || pxt.webBluetooth.hasPartialFlash()) && !pxt.BrowserUtils.isPxtElectron())
        pxt.commands.deployCoreAsync = deployCoreAsync;
    res.blocklyPatch = patchBlocks;
    res.showUploadInstructionsAsync = showUploadInstructionsAsync;
    res.webUsbPairDialogAsync = webUsbPairDialogAsync;
    return Promise.resolve(res);
};
function getField(parent, name) {
    return getFieldOrValue(parent, name, true);
}
function getValue(parent, name) {
    return getFieldOrValue(parent, name, false);
}
function getFieldOrValue(parent, name, isField) {
    var nodeType = isField ? "field" : "value";
    for (var i = 0; i < parent.children.length; i++) {
        var child = parent.children.item(i);
        if (child.tagName === nodeType && child.getAttribute("name") === name) {
            return child;
        }
    }
    return undefined;
}
function addNumberShadow(valueNode) {
    var s = valueNode.ownerDocument.createElement("shadow");
    s.setAttribute("type", "math_number");
    var f = valueNode.ownerDocument.createElement("field");
    f.setAttribute("name", "NUM");
    f.textContent = "0";
    s.appendChild(f);
    valueNode.appendChild(s);
}
function webUsbPairDialogAsync(confirmAsync) {
    var boardName = pxt.appTarget.appTheme.boardName || "???";
    var docUrl = pxt.appTarget.appTheme.usbDocs;
    var jsx = React.createElement("div", { className: "ui grid stackable" },
        React.createElement("div", { className: "column five wide firmware" },
            React.createElement("div", { className: "ui header" }, lf("First time here?")),
            React.createElement("strong", { className: "ui small" }, lf("You must have version 0249 or above of the firmware")),
            React.createElement("div", { className: "image" },
                React.createElement("img", { className: "ui image", src: "./docs/static/download/firmware.png" })),
            React.createElement("a", { href: docUrl + "/webusb/troubleshoot", target: "_blank" }, lf("Check your firmware version here and update if needed"))),
        React.createElement("div", { className: "column eleven wide instructions" },
            React.createElement("div", { className: "ui grid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "column" },
                        React.createElement("div", { className: "ui two column grid padded" },
                            React.createElement("div", { className: "column" },
                                React.createElement("div", { className: "ui" },
                                    React.createElement("div", { className: "image" },
                                        React.createElement("img", { className: "ui medium rounded image", src: "./docs/static/download/connect.png" })),
                                    React.createElement("div", { className: "content" },
                                        React.createElement("div", { className: "description" },
                                            React.createElement("span", { className: "ui purple circular label" }, "1"),
                                            React.createElement("strong", null, lf("Connect the {0} to your computer with a USB cable", boardName)),
                                            React.createElement("br", null),
                                            React.createElement("span", { className: "ui small" }, lf("Use the microUSB port on the top of the {0}", boardName)))))),
                            React.createElement("div", { className: "column" },
                                React.createElement("div", { className: "ui" },
                                    React.createElement("div", { className: "image" },
                                        React.createElement("img", { className: "ui medium rounded image", src: "./docs/static/download/pair.png" })),
                                    React.createElement("div", { className: "content" },
                                        React.createElement("div", { className: "description" },
                                            React.createElement("span", { className: "ui purple circular label" }, "2"),
                                            React.createElement("strong", null, lf("Pair your {0}", boardName)),
                                            React.createElement("br", null),
                                            React.createElement("span", { className: "ui small" }, lf("Click 'Pair device' below and select Calliope Mini CMSIS-DAP or DAPLink CMSIS-DAP from the list"))))))))))));
    var buttons = [];
    if (docUrl) {
        buttons.push({
            label: lf("Help"),
            icon: "help",
            className: "lightgrey",
            url: docUrl + "/webusb"
        });
    }
    return confirmAsync({
        header: lf("Pair device for one-click downloads"),
        jsx: jsx,
        hasCloseIcon: true,
        agreeLbl: lf("Pair device"),
        agreeIcon: "usb",
        hideCancel: true,
        className: 'downloaddialog',
        buttons: buttons
    });
}
function showUploadInstructionsAsync(fn, url, confirmAsync) {
    var boardName = pxt.appTarget.appTheme.boardName || "???";
    var boardDriveName = pxt.appTarget.appTheme.driveDisplayName || pxt.appTarget.compile.driveName || "???";
    // https://msdn.microsoft.com/en-us/library/cc848897.aspx
    // "For security reasons, data URIs are restricted to downloaded resources.
    // Data URIs cannot be used for navigation, for scripting, or to populate frame or iframe elements"
    var userDownload = pxt.BrowserUtils.isBrowserDownloadWithinUserContext();
    var downloadAgain = !pxt.BrowserUtils.isIE() && !pxt.BrowserUtils.isEdge();
    var docUrl = pxt.appTarget.appTheme.usbDocs;
    var body = userDownload
        ? lf("Click 'Download' to open the {0} app.", pxt.appTarget.appTheme.boardName || "")
        : undefined;
    var jsx = !userDownload ?
        React.createElement("div", { className: "ui grid stackable upload" },
            React.createElement("div", { className: "column sixteen wide instructions" },
                React.createElement("div", { className: "ui grid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "column" },
                            React.createElement("div", { className: "ui two column grid padded" },
                                React.createElement("div", { className: "column" },
                                    React.createElement("div", { className: "ui" },
                                        React.createElement("div", { className: "image" },
                                            React.createElement("img", { className: "ui medium rounded image", src: "./docs/static/download/connect.png" })),
                                        React.createElement("div", { className: "content" },
                                            React.createElement("div", { className: "description" },
                                                React.createElement("span", { className: "ui purple circular label" }, "1"),
                                                React.createElement("strong", null, lf("Connect the {0} to your computer with a USB cable", boardName)),
                                                React.createElement("br", null),
                                                React.createElement("span", { className: "ui small" }, lf("Use the microUSB port on the top of the {0}", boardName)))))),
                                React.createElement("div", { className: "column" },
                                    React.createElement("div", { className: "ui" },
                                        React.createElement("div", { className: "image" },
                                            React.createElement("img", { className: "ui medium rounded image", src: "./docs/static/download/transfer.png" })),
                                        React.createElement("div", { className: "content" },
                                            React.createElement("div", { className: "description" },
                                                React.createElement("span", { className: "ui purple circular label" }, "2"),
                                                React.createElement("strong", null, lf("Move the .hex file to the {0}", boardName)),
                                                React.createElement("br", null),
                                                React.createElement("span", { className: "ui small" }, lf("Locate the downloaded .hex file and drag it to the {0} drive", boardDriveName)))))))))))) : undefined;
    var buttons = [];
    if (downloadAgain) {
        buttons.push({
            label: userDownload ? lf("Download") : fn,
            icon: "download",
            class: "" + (userDownload ? "primary" : "lightgrey"),
            url: url,
            fileName: fn
        });
    }
    if (docUrl) {
        buttons.push({
            label: lf("Help"),
            icon: "help",
            className: "lightgrey",
            url: docUrl
        });
    }
    return confirmAsync({
        header: lf("Download to your {0}", pxt.appTarget.appTheme.boardName),
        body: body,
        jsx: jsx,
        hasCloseIcon: true,
        hideCancel: true,
        hideAgree: true,
        className: 'downloaddialog',
        buttons: buttons
        //timeout: 20000
    }).then(function () { });
}

},{"react":8}],2:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))
},{"./lib/ReactPropTypesSecret":5,"_process":3}],5:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],6:[function(require,module,exports){
(function (process){
/** @license React v16.8.3
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = require('object-assign');
var checkPropTypes = require('prop-types/checkPropTypes');

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.3';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}

}).call(this,require('_process'))
},{"_process":3,"object-assign":2,"prop-types/checkPropTypes":4}],7:[function(require,module,exports){
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var k=require("object-assign"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("307"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.3",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;

},{"object-assign":2}],8:[function(require,module,exports){
(function (process){
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

}).call(this,require('_process'))
},{"./cjs/react.development.js":6,"./cjs/react.production.min.js":7,"_process":3}]},{},[1]);
