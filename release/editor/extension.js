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
