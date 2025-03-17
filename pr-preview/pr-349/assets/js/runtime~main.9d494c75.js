/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "assets/js/" + ({"153":"af10bb7a","396":"0743e332","645":"1a63ac3d","980":"897ef20f","1235":"a7456010","1295":"7a8a5c4e","1680":"c20fed52","1743":"f7c3a41c","1903":"acecf23e","1982":"0ab4808b","2038":"a8bcee01","2076":"common","2138":"1a4e3797","2169":"9e9c7a31","2488":"3c9a9f60","2578":"8b2fdf92","2711":"9e4087bc","2770":"870a3819","2980":"51241619","3051":"1cc24fd5","3067":"a4238dfd","3143":"bf9e6831","3172":"b6bd9de1","3207":"03dcfce2","3249":"ccc49370","3293":"1039eb1c","3603":"5e4dc735","3681":"88c34ec8","3697":"77553c88","4166":"861e2252","4203":"b9ba9847","4230":"9f2a669d","4583":"1df93b7f","4595":"7e6238c4","4730":"93f782fd","4741":"348cc40e","4921":"138e0e15","5095":"9b9ca316","5320":"cdb3d205","5354":"10201c66","5521":"90252242","5605":"1c72337b","5742":"aba21aa0","5990":"f81738e1","6134":"e0ac47af","6158":"25b68ecb","6238":"4033e3a4","6253":"aca3791a","6299":"1e883308","6505":"7d405538","6530":"0b81fcdc","6731":"75d8baba","6796":"a2cc83c2","6853":"726898a3","6881":"9c8e7e87","6884":"e01a17d2","6960":"98db018c","7071":"5786736f","7098":"a7bd4aaa","7310":"67e65cef","7376":"b0405491","7472":"814f3328","7597":"7c303ed1","7643":"a6aa9e1f","7677":"2ab49a78","7679":"acc4651a","7708":"f255bc04","7893":"9a24441e","8116":"90377f5b","8197":"6d0dd831","8271":"a803bb2b","8401":"17896441","8714":"e108b786","8849":"4b175b5f","8978":"5c8a654c","9048":"a94703ab","9078":"6dc9b720","9196":"8469219d","9636":"e7835942","9647":"5e95c892","9739":"fbf77f4b","9758":"8ac150c6","9858":"36994c47"}[chunkId] || chunkId) + "." + {"147":"f0a9a893","153":"4e333976","165":"5dc7c032","391":"e3ff2399","396":"66ff8a82","489":"9ea5b436","545":"47ce4ce3","645":"e964f3a4","758":"4d03e712","890":"13c2a899","980":"0f095726","1158":"a252912b","1235":"da9e7d43","1295":"d6a0a2fb","1416":"f3708a90","1547":"24056b15","1680":"718960bb","1743":"42b4c508","1825":"3f30e479","1903":"ed07ad18","1925":"986cc5f7","1982":"a9f88b5b","2038":"97e7b9a7","2076":"cb954282","2130":"726531f4","2138":"ec7120a0","2140":"1b31b70d","2169":"f4324e63","2334":"58dbfa4b","2387":"7cb5e867","2408":"7c6f5ec5","2447":"825ed709","2466":"02f63fd5","2488":"15aefa63","2578":"e810fda9","2664":"f372692e","2711":"02bba04a","2770":"1feb3b4d","2822":"9f19ebdb","2980":"b0e2b872","3042":"2850811b","3051":"dcc714e7","3056":"43e25f36","3067":"bf9ea0c7","3080":"5ea226da","3143":"a5c47c33","3172":"f1b0627c","3175":"4742e6e7","3207":"097b7a87","3249":"e6a59c54","3293":"751ed3b3","3603":"3fb489ce","3624":"23c69f52","3681":"2c8b01e0","3697":"1cb994a7","3917":"8debf197","3967":"ac9b8ea3","4166":"801b43a2","4203":"5cb5ded2","4230":"0e840032","4485":"fad0ae10","4492":"c6754ad3","4583":"212745e7","4595":"4cd48cc6","4632":"4a6ec288","4697":"c0dbe367","4730":"fcbf75d6","4741":"66ba3a7c","4904":"36df5499","4921":"7b1554f6","5095":"f7f45e29","5110":"7d4c4f54","5145":"9a195df2","5320":"27a79996","5354":"4a397c1a","5410":"6994796d","5433":"367ddf14","5521":"371fcf6a","5605":"e41ef794","5741":"cf8518af","5742":"bfd93636","5856":"bc4a61dd","5915":"8ae508d7","5978":"f89627fb","5990":"6f236d0e","6078":"4f7afaf4","6091":"04cd22b2","6134":"f766c19c","6148":"56f3806a","6158":"de2baa8b","6237":"1d3b50da","6238":"fca42924","6240":"69e044a6","6244":"e77a81d3","6253":"4543ab21","6299":"dd02274a","6355":"7c7f6ccd","6383":"0b573c45","6445":"90e29fe6","6452":"3667d6cb","6505":"8ae5fb9e","6530":"890a563f","6731":"241c654a","6796":"66f12f58","6853":"e8d0f939","6881":"0e1ccacb","6884":"9deaeb0b","6960":"cae0148f","7071":"a07b0e10","7098":"ad07f0d0","7191":"37276e86","7306":"195b5e99","7310":"a1b43777","7354":"01699a87","7357":"7276dcf7","7376":"efbc68f8","7472":"dc7aee5a","7597":"0791a1ab","7643":"0a0715e8","7671":"c701a1bf","7677":"22859449","7679":"1d21ef5d","7691":"da257eb3","7708":"bec03244","7723":"be3ea6ea","7817":"bbd8777b","7893":"6802c9a8","8116":"4ac1cc87","8197":"ba87c970","8271":"fa83b204","8305":"3a6347a1","8401":"e6a59c54","8407":"cdd2b20f","8413":"5155fa82","8519":"d601814d","8540":"2d08cfc2","8566":"23f0c794","8578":"f4c5f837","8714":"1842fb78","8731":"2ea1f084","8849":"6b67bbc8","8978":"9032e8e1","9048":"15cf2783","9078":"37caf8ce","9169":"aff77b92","9196":"b10118bf","9636":"0de3170d","9647":"5636c500","9720":"6b9d453d","9732":"c142a75d","9739":"441adf53","9758":"de53f1f0","9764":"6a54fc2c","9858":"29c469b1","9979":"2acd3a14"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@midas-ds/source:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/pr-preview/pr-349/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ChunkAssetRuntimeModule */
/******/ 	(() => {
/******/ 		// Docusaurus function to get chunk asset
/******/ 		__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"8401","51241619":"2980","90252242":"5521","af10bb7a":"153","0743e332":"396","1a63ac3d":"645","897ef20f":"980","a7456010":"1235","7a8a5c4e":"1295","c20fed52":"1680","f7c3a41c":"1743","acecf23e":"1903","0ab4808b":"1982","a8bcee01":"2038","common":"2076","1a4e3797":"2138","9e9c7a31":"2169","3c9a9f60":"2488","8b2fdf92":"2578","9e4087bc":"2711","870a3819":"2770","1cc24fd5":"3051","a4238dfd":"3067","bf9e6831":"3143","b6bd9de1":"3172","03dcfce2":"3207","ccc49370":"3249","1039eb1c":"3293","5e4dc735":"3603","88c34ec8":"3681","77553c88":"3697","861e2252":"4166","b9ba9847":"4203","9f2a669d":"4230","1df93b7f":"4583","7e6238c4":"4595","93f782fd":"4730","348cc40e":"4741","138e0e15":"4921","9b9ca316":"5095","cdb3d205":"5320","10201c66":"5354","1c72337b":"5605","aba21aa0":"5742","f81738e1":"5990","e0ac47af":"6134","25b68ecb":"6158","4033e3a4":"6238","aca3791a":"6253","1e883308":"6299","7d405538":"6505","0b81fcdc":"6530","75d8baba":"6731","a2cc83c2":"6796","726898a3":"6853","9c8e7e87":"6881","e01a17d2":"6884","98db018c":"6960","5786736f":"7071","a7bd4aaa":"7098","67e65cef":"7310","b0405491":"7376","814f3328":"7472","7c303ed1":"7597","a6aa9e1f":"7643","2ab49a78":"7677","acc4651a":"7679","f255bc04":"7708","9a24441e":"7893","90377f5b":"8116","6d0dd831":"8197","a803bb2b":"8271","e108b786":"8714","4b175b5f":"8849","5c8a654c":"8978","a94703ab":"9048","6dc9b720":"9078","8469219d":"9196","e7835942":"9636","5e95c892":"9647","fbf77f4b":"9739","8ac150c6":"9758","36994c47":"9858"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			2973: 0,
/******/ 			1869: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(1869|2973)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	
/******/ })()
;