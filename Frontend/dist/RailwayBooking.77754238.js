// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8FsOn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2328c3fa77754238";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"3FsDI","74ad5ea14201648c":"7i2ML"}],"ix3jZ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b851 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b851.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _homePageBanner1E6749C3D9698D1Ac7608Jpg = require("../../public/home_page_banner1.e6749c3d9698d1ac7608.jpg"); // Ensure this path is correct
var _homePageBanner1E6749C3D9698D1Ac7608JpgDefault = parcelHelpers.interopDefault(_homePageBanner1E6749C3D9698D1Ac7608Jpg);
var _mockRailwayData = require("../utils/mockRailwayData"); // Ensure TrainData is an array of train objects
var _mockRailwayDataDefault = parcelHelpers.interopDefault(_mockRailwayData);
var _s = $RefreshSig$();
const RailwayBooking = ()=>{
    _s();
    const [formData, setFormData] = (0, _react.useState)({
        from: "VGLJ",
        to: "NDLS",
        date: "",
        class: "GENERAL",
        disability: false,
        flexible: false,
        availableBerth: false,
        railwayPass: false
    });
    const [trainList, setTrainList] = (0, _react.useState)((0, _mockRailwayDataDefault.default));
    const [filteredTrains, setFilteredTrains] = (0, _react.useState)([]);
    const [error, setError] = (0, _react.useState)(null);
    const [currentPage, setCurrentPage] = (0, _react.useState)(1);
    const itemsPerPage = 3; // Number of items per page
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(null);
        const { from, to, date } = formData;
        if (!Array.isArray(trainList)) {
            setError("Train data is not an array");
            return;
        }
        const dayOfWeek = new Date(date).toLocaleString("en-US", {
            weekday: "short"
        });
        const dayMap = {
            Mon: "runningMon",
            Tue: "runningTue",
            Wed: "runningWed",
            Thu: "runningThu",
            Fri: "runningFri",
            Sat: "runningSat",
            Sun: "runningSun"
        };
        const filteredData = trainList.filter((train)=>train.fromStnCode.toLowerCase().includes(from.toLowerCase()) && train.toStnCode.toLowerCase().includes(to.toLowerCase()) && train[dayMap[dayOfWeek]] === "Y");
        if (filteredData.length === 0) setError("No trains found matching your criteria.");
        else setError(null);
        setFilteredTrains(filteredData);
        setCurrentPage(1); // Reset to the first page on new search
    };
    // Calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredTrains.slice(indexOfFirstItem, indexOfLastItem);
    // Function to handle page change
    const handleNextPage = ()=>{
        if (indexOfLastItem < filteredTrains.length) setCurrentPage((prevPage)=>prevPage + 1);
    };
    const handlePreviousPage = ()=>{
        if (currentPage > 1) setCurrentPage((prevPage)=>prevPage - 1);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        id: "main",
        style: {
            position: "relative",
            height: "100vh",
            backgroundColor: "rgba(50%, 50%, 50%, 0.1)"
        },
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${(0, _homePageBanner1E6749C3D9698D1Ac7608JpgDefault.default)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 1,
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "src/Components/RailwayBooking.js",
                lineNumber: 98,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                id: "Banner",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "nav",
                        style: {
                            display: "none"
                        }
                    }, void 0, false, {
                        fileName: "src/Components/RailwayBooking.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        id: "nav2",
                        style: {
                            display: "none"
                        }
                    }, void 0, false, {
                        fileName: "src/Components/RailwayBooking.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Components/RailwayBooking.js",
                lineNumber: 113,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                id: "middlepage",
                style: {
                    marginLeft: "30px"
                },
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    id: "instruction",
                    style: {
                        position: "absolute",
                        top: "140px",
                        left: "990px",
                        right: "0px",
                        zIndex: "1",
                        backgroundColor: "transparent",
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex flex-wrap flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                className: "railway p-4 font-black",
                                children: "INDIAN RAILWAYS"
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 135,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                className: "ins font-black",
                                children: "Safety | Security | Punctuality"
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 136,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RailwayBooking.js",
                        lineNumber: 134,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/Components/RailwayBooking.js",
                    lineNumber: 122,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Components/RailwayBooking.js",
                lineNumber: 121,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-start items-start h-screen bg-gray-100 bg-opacity-80 p-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                        onSubmit: handleSubmit,
                        className: "bg-white p-4 rounded shadow-md w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                className: "text-xl font-bold mb-4 text-center",
                                children: "BOOK TICKET"
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 148,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        className: "block text-gray-700",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        type: "text",
                                        name: "from",
                                        value: formData.from,
                                        readOnly: true,
                                        className: "w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 cursor-not-allowed"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        className: "block text-gray-700",
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        type: "text",
                                        name: "to",
                                        value: formData.to,
                                        readOnly: true,
                                        className: "w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 cursor-not-allowed"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 161,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        className: "block text-gray-700",
                                        children: "Date of Journey"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        type: "date",
                                        name: "date",
                                        value: formData.date,
                                        onChange: handleChange,
                                        className: "w-full p-2 border border-gray-300 rounded mt-1"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        className: "block text-gray-700",
                                        children: "Class"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                        name: "class",
                                        value: formData.class,
                                        onChange: handleChange,
                                        className: "w-full p-2 border border-gray-300 rounded mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                value: "GENERAL",
                                                children: "GENERAL"
                                            }, void 0, false, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                value: "SLEEPER",
                                                children: "SLEEPER"
                                            }, void 0, false, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                value: "AC",
                                                children: "AC"
                                            }, void 0, false, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 183,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "block text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            type: "checkbox",
                                            name: "disability",
                                            checked: formData.disability,
                                            onChange: handleChange,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "src/Components/RailwayBooking.js",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, undefined),
                                        "Person With Disability Concession"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RailwayBooking.js",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 197,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "block text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            type: "checkbox",
                                            name: "flexible",
                                            checked: formData.flexible,
                                            onChange: handleChange,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "src/Components/RailwayBooking.js",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, undefined),
                                        "Flexible With Date"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RailwayBooking.js",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 210,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "block text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            type: "checkbox",
                                            name: "availableBerth",
                                            checked: formData.availableBerth,
                                            onChange: handleChange,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "src/Components/RailwayBooking.js",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, undefined),
                                        "Train with Available Berth"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RailwayBooking.js",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "mb-2",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "block text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                            type: "checkbox",
                                            name: "railwayPass",
                                            checked: formData.railwayPass,
                                            onChange: handleChange,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "src/Components/RailwayBooking.js",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, undefined),
                                        "Railway Pass Concession"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/RailwayBooking.js",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 236,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        type: "submit",
                                        className: "bg-orange-500 text-white py-2 px-4 rounded",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        type: "button",
                                        className: "bg-blue-500 text-white py-2 px-4 rounded",
                                        onClick: ()=>alert("Easy Booking on AskDISHA"),
                                        children: "Easy Booking on AskDISHA"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 249,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RailwayBooking.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, undefined),
                    filteredTrains.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "train-data p-4 bg-white rounded shadow-md w-full max-w-md ml-8",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "Available Trains"
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 268,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                className: "space-y-2",
                                children: currentItems.map((train)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                        className: "p-2 border border-gray-200 rounded-lg shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "font-semibold text-lg",
                                                children: train.trainName
                                            }, void 0, false, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-gray-700",
                                                children: [
                                                    train.fromStnCode,
                                                    " (",
                                                    train.departureTime,
                                                    ") -",
                                                    " ",
                                                    train.toStnCode,
                                                    " (",
                                                    train.arrivalTime,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-gray-500",
                                                children: [
                                                    "Type: ",
                                                    train.trainType.join(", ")
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "text-gray-500",
                                                children: [
                                                    "Travel Time: ",
                                                    train.duration
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/RailwayBooking.js",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, train.trainNumber, true, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 269,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex justify-between mt-4",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: handlePreviousPage,
                                        disabled: currentPage === 1,
                                        className: "bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50",
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: handleNextPage,
                                        disabled: indexOfLastItem >= filteredTrains.length,
                                        className: "bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "src/Components/RailwayBooking.js",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RailwayBooking.js",
                                lineNumber: 289,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RailwayBooking.js",
                        lineNumber: 267,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Components/RailwayBooking.js",
                lineNumber: 143,
                columnNumber: 7
            }, undefined),
            error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-center mt-4 text-red-500",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: error
                }, void 0, false, {
                    fileName: "src/Components/RailwayBooking.js",
                    lineNumber: 311,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/Components/RailwayBooking.js",
                lineNumber: 310,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Components/RailwayBooking.js",
        lineNumber: 90,
        columnNumber: 5
    }, undefined);
};
_s(RailwayBooking, "lT34C+i0/YmMzbsRUxF6NGaV9L0=");
_c = RailwayBooking;
exports.default = RailwayBooking;
var _c;
$RefreshReg$(_c, "RailwayBooking");

  $parcel$ReactRefreshHelpers$b851.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../public/home_page_banner1.e6749c3d9698d1ac7608.jpg":"lndAk","../utils/mockRailwayData":"3cxir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"lndAk":[function(require,module,exports) {
module.exports = require("9aa737b764911767").getBundleURL("319py") + "home_page_banner1.e6749c3d9698d1ac7608.cd743dc0.jpg" + "?" + Date.now();

},{"9aa737b764911767":"lgJ39"}],"3cxir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const TrainData = [
    {
        trainNumber: "12192",
        trainName: "JBP NZM SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "12:00",
        departureTime: "04:20",
        distance: "403",
        duration: "07:40",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "18477",
        trainName: "UTKAL EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "13:05",
        departureTime: "04:55",
        distance: "403",
        duration: "08:10",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "SP"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "16031",
        trainName: "ANDAMAN EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "20:55",
        departureTime: "13:38",
        distance: "410",
        duration: "07:17",
        runningMon: "Y",
        runningTue: "N",
        runningWed: "N",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12171",
        trainName: "LTT HW AC EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "06:40",
        departureTime: "00:45",
        distance: "403",
        duration: "05:55",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "1A",
            "2A",
            "3A"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "18237",
        trainName: "CHATTISGARH EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "19:50",
        departureTime: "12:00",
        distance: "403",
        duration: "07:50",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12715",
        trainName: "SACHKHAND EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "13:05",
        departureTime: "06:28",
        distance: "410",
        duration: "06:37",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12617",
        trainName: "MANGLADWEEP EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "13:35",
        departureTime: "06:38",
        distance: "403",
        duration: "06:57",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12779",
        trainName: "GOA EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "06:25",
        departureTime: "23:20",
        distance: "403",
        duration: "07:05",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12615",
        trainName: "GRAND TRUNK EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "05:05",
        departureTime: "22:55",
        distance: "410",
        duration: "06:10",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "22691",
        trainName: "RAJDHANI EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "05:30",
        departureTime: "00:21",
        distance: "403",
        duration: "05:09",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A"
        ],
        trainType: [
            "R"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12155",
        trainName: "RKMP NZM SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "07:50",
        departureTime: "02:32",
        distance: "403",
        duration: "05:18",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12279",
        trainName: "TAJ EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "21:35",
        departureTime: "15:20",
        distance: "410",
        duration: "06:15",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "CC",
            "2S"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "D"
    },
    {
        trainNumber: "20171",
        trainName: "VANDE BHARAT EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "13:16",
        departureTime: "08:43",
        distance: "403",
        duration: "04:33",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "Y",
        avlClasses: [
            "EC",
            "CC"
        ],
        trainType: [
            "S"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "11841",
        trainName: "KURJ KKDE EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "08:45",
        departureTime: "23:53",
        distance: "410",
        duration: "08:52",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "D"
    },
    {
        trainNumber: "12137",
        trainName: "PUNJAB MAIL",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "21:25",
        departureTime: "14:23",
        distance: "410",
        duration: "07:02",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12285",
        trainName: "NZM DURONTO EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "10:40",
        departureTime: "05:35",
        distance: "403",
        duration: "05:05",
        runningMon: "Y",
        runningTue: "N",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL",
            "2S"
        ],
        trainType: [
            "D"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "20805",
        trainName: "AP EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "05:40",
        departureTime: "00:11",
        distance: "410",
        duration: "05:29",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL",
            "2S"
        ],
        trainType: [
            "SP"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "22221",
        trainName: "NZM RAJDHANI",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "09:55",
        departureTime: "05:11",
        distance: "403",
        duration: "04:44",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A"
        ],
        trainType: [
            "R"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12919",
        trainName: "MALWA EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "04:15",
        departureTime: "21:38",
        distance: "410",
        duration: "06:37",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "22685",
        trainName: "CDG SKRANTI EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "11:55",
        departureTime: "04:33",
        distance: "410",
        duration: "07:22",
        runningMon: "Y",
        runningTue: "N",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "CC",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "22469",
        trainName: "VANDE BHARAT EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "23:10",
        departureTime: "18:25",
        distance: "403",
        duration: "04:45",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "EC",
            "CC"
        ],
        trainType: [
            "S"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "D"
    },
    {
        trainNumber: "12627",
        trainName: "KARNATAKA EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "09:00",
        departureTime: "02:58",
        distance: "410",
        duration: "06:02",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12649",
        trainName: "SAMPARK KRANTI",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "08:10",
        departureTime: "02:48",
        distance: "403",
        duration: "05:22",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12625",
        trainName: "KERALA SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "13:30",
        departureTime: "07:30",
        distance: "410",
        duration: "06:00",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "22181",
        trainName: "JBP NZM SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "04:10",
        departureTime: "22:43",
        distance: "403",
        duration: "05:27",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12823",
        trainName: "CG SMPRK KRANTI",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "07:40",
        departureTime: "02:18",
        distance: "403",
        duration: "05:22",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12807",
        trainName: "SAMTA EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "18:10",
        departureTime: "11:40",
        distance: "403",
        duration: "06:30",
        runningMon: "Y",
        runningTue: "N",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12409",
        trainName: "GONDWANA SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "05:00",
        departureTime: "23:38",
        distance: "403",
        duration: "05:22",
        runningMon: "Y",
        runningTue: "N",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "N",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12189",
        trainName: "MAHAKAUSHAL EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "11:00",
        departureTime: "03:48",
        distance: "403",
        duration: "07:12",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12641",
        trainName: "TIRUKKURAL EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "18:35",
        departureTime: "12:13",
        distance: "403",
        duration: "06:22",
        runningMon: "N",
        runningTue: "N",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12001",
        trainName: "NDLS SHATABDI",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "23:50",
        departureTime: "18:45",
        distance: "410",
        duration: "05:05",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "EC",
            "CC"
        ],
        trainType: [
            "S"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "11077",
        trainName: "JHELUM EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "21:20",
        departureTime: "13:58",
        distance: "410",
        duration: "07:22",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12441",
        trainName: "BSP NDLS RAJ EX",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "10:40",
        departureTime: "05:25",
        distance: "410",
        duration: "05:15",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "1A",
            "2A",
            "3A"
        ],
        trainType: [
            "SP"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12485",
        trainName: "NED SGNR SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "10:10",
        departureTime: "04:09",
        distance: "410",
        duration: "06:01",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "11057",
        trainName: "CSMT ASR EXPRESS",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "03:40",
        departureTime: "20:28",
        distance: "410",
        duration: "07:12",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "B"
    },
    {
        trainNumber: "12447",
        trainName: "UP SMPRK KRANTI",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "05:22",
        departureTime: "23:30",
        distance: "403",
        duration: "05:52",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "D"
    },
    {
        trainNumber: "12723",
        trainName: "TELANGANA EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "07:40",
        departureTime: "01:24",
        distance: "410",
        duration: "06:16",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12621",
        trainName: "TAMILNADU SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NDLS",
        arrivalTime: "06:30",
        departureTime: "00:31",
        distance: "410",
        duration: "05:59",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "1A",
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "12687",
        trainName: "MDU CDG SF EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "21:35",
        departureTime: "14:33",
        distance: "403",
        duration: "07:02",
        runningMon: "N",
        runningTue: "Y",
        runningWed: "N",
        runningThu: "N",
        runningFri: "Y",
        runningSat: "N",
        runningSun: "N",
        avlClasses: [
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    },
    {
        trainNumber: "14623",
        trainName: "PATALKOT EXP",
        fromStnCode: "VGLJ",
        toStnCode: "DSJ",
        arrivalTime: "03:26",
        departureTime: "20:48",
        distance: "407",
        duration: "06:38",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "3E",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "C"
    },
    {
        trainNumber: "12721",
        trainName: "DAKSHIN EXP",
        fromStnCode: "VGLJ",
        toStnCode: "NZM",
        arrivalTime: "03:40",
        departureTime: "21:28",
        distance: "403",
        duration: "06:12",
        runningMon: "Y",
        runningTue: "Y",
        runningWed: "Y",
        runningThu: "Y",
        runningFri: "Y",
        runningSat: "Y",
        runningSun: "Y",
        avlClasses: [
            "2A",
            "3A",
            "SL"
        ],
        trainType: [
            "O"
        ],
        atasOpted: "false",
        flexiFlag: "false",
        trainOwner: "0",
        trainsiteId: "M"
    }
];
exports.default = TrainData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8FsOn","1xC6H"], null, "parcelRequire29b1")

//# sourceMappingURL=RailwayBooking.77754238.js.map
