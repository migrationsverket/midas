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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
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
/******/ 			return "assets/js/" + ({"144":"fa74d00e","153":"af10bb7a","236":"12a91cff","396":"0743e332","645":"1a63ac3d","840":"543d8720","883":"27e43eea","902":"635a62b0","1064":"97dcddd8","1169":"6c8393d0","1235":"a7456010","1392":"0fcdf09a","1503":"e59ee3b6","1508":"e531c33f","1513":"0ba03688","1533":"8e271ac5","1607":"8212ceed","1680":"c20fed52","1826":"3207f380","1903":"acecf23e","1906":"c71430a2","1982":"0ab4808b","2017":"17d2afbc","2038":"a8bcee01","2041":"13c36bd0","2062":"64978638","2076":"common","2138":"1a4e3797","2145":"dc931a14","2169":"9e9c7a31","2220":"946ac172","2247":"a3a1bb28","2488":"3c9a9f60","2494":"f4085c03","2611":"f387cb67","2663":"dd4f13ee","2711":"9e4087bc","2770":"870a3819","3051":"1cc24fd5","3204":"1d6b016c","3207":"03dcfce2","3249":"ccc49370","3290":"79d23d0f","3596":"d82da48b","3697":"77553c88","3817":"cdb1674e","3906":"387b3dd2","3910":"405a0f0e","3986":"4f68c95b","4146":"ac3f57b8","4166":"861e2252","4203":"b9ba9847","4212":"621db11d","4225":"52c6685a","4237":"93c8a9d2","4264":"ea7cbe00","4465":"ce8da724","4583":"1df93b7f","4595":"7e6238c4","4617":"b48b82b2","4676":"06847bd2","4730":"93f782fd","4741":"348cc40e","4813":"6875c492","4827":"c0f8fa1c","4921":"138e0e15","5049":"9bbb3cda","5068":"a0763d24","5095":"9b9ca316","5349":"bfdbc593","5354":"10201c66","5406":"85455150","5453":"00518e81","5521":"90252242","5588":"484468af","5605":"1c72337b","5609":"2ed31cf8","5629":"93fa90b4","5742":"aba21aa0","5750":"d0314b07","6043":"e57043c1","6158":"25b68ecb","6238":"4033e3a4","6253":"aca3791a","6293":"03316779","6299":"1e883308","6482":"425d95b8","6505":"7d405538","6590":"17114e42","6604":"1bfc0f12","6618":"4855f7f8","6645":"1133360a","6706":"e63d0d70","6796":"a2cc83c2","6834":"de97d55b","6884":"e01a17d2","6946":"e49d1ef9","6960":"98db018c","7098":"a7bd4aaa","7128":"0e3ce4d3","7165":"2a9e8c26","7170":"ea6c9fcb","7246":"98df859f","7310":"67e65cef","7365":"16e7db41","7369":"ad6bf128","7447":"94bff9ec","7448":"a8917c53","7472":"814f3328","7643":"a6aa9e1f","7677":"2ab49a78","7684":"f3482596","7708":"f255bc04","7770":"93ee285b","7895":"86bd72be","7982":"937095bd","8116":"90377f5b","8119":"1e0b4934","8154":"efa7b5d3","8209":"01a85c17","8271":"a803bb2b","8283":"28a5ca9c","8357":"b49c4893","8401":"17896441","8420":"5eda468f","8506":"55843d4b","8714":"e108b786","8849":"4b175b5f","8935":"42d05135","8949":"52a76f6a","9048":"a94703ab","9065":"e37cc8c8","9196":"8469219d","9402":"a76258bd","9436":"3fa978c6","9595":"951776eb","9636":"e7835942","9647":"5e95c892","9758":"8ac150c6","9765":"048ba928","9815":"cca219b7","9858":"36994c47","9916":"635481bf","9949":"85ecc983"}[chunkId] || chunkId) + "." + {"144":"a85e44c0","153":"dd5efb82","165":"6cae26a3","236":"ca5e65a5","245":"754575a3","291":"20921fb7","396":"31313e7c","451":"45f4d5e4","489":"30c9a396","570":"1c9e972b","617":"bdc176f4","645":"4961b879","840":"0ae36902","883":"abe69752","902":"6ca10099","1000":"fa7b04ea","1064":"77b245f4","1149":"77a7211a","1169":"3db05e30","1203":"f9f32ec5","1235":"da9e7d43","1392":"77fbbf03","1503":"d4744d08","1508":"87cfc529","1513":"485f0bc3","1533":"f4ddb2ae","1607":"104a77e5","1667":"984cb09b","1680":"630343bb","1741":"310bc176","1746":"3d222b72","1826":"8c98eaa1","1903":"3df52db0","1906":"2e95f372","1982":"feeda25f","2017":"24351e59","2038":"7f049a80","2041":"f786bfc0","2062":"2cb48b92","2076":"38a2653e","2130":"cc805673","2138":"bb3882c7","2145":"1a579191","2152":"a936f22b","2169":"7a01cff4","2179":"e17d8cd8","2220":"d4dd6aa8","2227":"d76061e1","2237":"c95c2f29","2247":"d578a66f","2279":"6ee1479b","2291":"d1329edd","2325":"bf1a4583","2334":"52031c06","2488":"b3f15d7c","2494":"695d3c6a","2611":"68ccf4ac","2663":"4a80c323","2711":"c4f409cc","2770":"f90d5153","2821":"d68002d5","2833":"af1335ef","2875":"63eb9d70","2945":"2e237fe5","3051":"e595492d","3069":"ed659d6f","3172":"b3e4d6fc","3204":"ed8588a0","3207":"d4f986f1","3249":"d3c97e82","3274":"c7e10077","3290":"993d7fdf","3457":"0fc29946","3490":"1b52434e","3596":"bedcc544","3624":"709b8f50","3697":"5c7e3520","3815":"3b0233be","3817":"490f18da","3858":"dfb09d25","3906":"c6578cbc","3910":"a4749d83","3917":"57032f28","3967":"a22c84a7","3986":"a2c88f22","3996":"c5b37d59","4083":"80bd2d01","4128":"86a4ba2a","4146":"5e96411c","4166":"e8998a5a","4203":"e6f47ef8","4212":"3bb9b53e","4225":"a0fed4d4","4237":"58f76c6d","4250":"7d88d558","4264":"bc4c5595","4379":"bcf2c8ba","4465":"36e94433","4583":"b46876fe","4595":"7fd2bc3c","4616":"bb7f5cdf","4617":"8082967c","4676":"a5c33232","4730":"899915f1","4741":"a913c101","4802":"68dcecc5","4813":"d3c97e82","4827":"0ac289d3","4845":"f417ca1b","4921":"7b1554f6","4981":"75dfc3ad","5049":"864b722f","5068":"c61f93fc","5095":"c47044c7","5349":"791056a0","5354":"e62f612f","5406":"e8d188d2","5453":"0c071c1d","5462":"7c1511ca","5480":"10f312a9","5521":"32da780e","5588":"c6d7cdca","5605":"5e322090","5609":"649ac857","5629":"5b7e350e","5741":"cf8518af","5742":"bfd93636","5750":"b51f1ff3","5901":"a97f7dab","5955":"db87ae1d","5996":"40fd1f2e","6043":"b9ad8986","6158":"c64245a7","6180":"15be0cf1","6238":"53758c0a","6241":"0d531f6d","6244":"0c40fba2","6253":"9a52aa7b","6293":"79dbaba8","6299":"83ffac80","6319":"168a1d18","6325":"0bd0ee8c","6366":"36f74bc0","6380":"a98ccdc5","6400":"ae57757b","6482":"ce8b6925","6505":"88e224c9","6567":"d9f5654a","6590":"13a0c9bf","6604":"e41663ac","6618":"7e53d6a4","6645":"0a01e2a5","6706":"bc4f856b","6796":"3c529497","6834":"289fccbc","6884":"1347e5f2","6946":"0bbd84bc","6960":"fe48000d","6992":"d8264dac","7054":"5e9417f1","7098":"d8fb18cc","7128":"162744e9","7165":"c106aa05","7170":"9317c9f3","7246":"081b8db8","7310":"0077b4c8","7365":"46d8ef8d","7369":"f8d1ab7e","7447":"f76f882f","7448":"b313a028","7472":"b583427c","7592":"88d5ab11","7643":"641cad4f","7669":"5381701c","7677":"191bae43","7684":"1f62ed0a","7708":"c385f177","7770":"f72afd90","7873":"d04169d1","7895":"a07cde5c","7928":"f5528e1f","7982":"e3c69a29","8116":"bb013867","8119":"64f49253","8142":"02789ab3","8154":"949259fd","8209":"e86cfe03","8246":"be724b4a","8249":"07885db6","8271":"93d7ef42","8283":"1a56ec4e","8357":"dee2af37","8401":"d3c97e82","8407":"dc1b9cf0","8420":"bf8e4ecb","8471":"2c0478ca","8506":"f961b615","8714":"18f16ae6","8731":"54b05adc","8756":"20235aad","8824":"0c7a8633","8849":"f975e064","8862":"7c6cca11","8935":"0c05888a","8949":"8a1c8fcb","9032":"c86e7ad9","9048":"ee00b7aa","9065":"134aec69","9196":"27e74bb4","9255":"1ce80f35","9402":"e3f41bb1","9412":"26554c20","9428":"7b2a5c58","9436":"a3865a93","9510":"0412156b","9595":"e998bb67","9636":"7521e9d4","9647":"6e26d8b6","9717":"8c4b593e","9732":"67858a33","9741":"85ae2bdc","9758":"86bcac0b","9765":"6a0772bf","9785":"c3b9f530","9815":"2556cee1","9858":"29c469b1","9916":"8b832951","9949":"72d4f3fc","9974":"7df85eac"}[chunkId] + ".js";
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
/******/ 		__webpack_require__.p = "/pr-preview/pr-990/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ChunkAssetRuntimeModule */
/******/ 	(() => {
/******/ 		// Docusaurus function to get chunk asset
/******/ 		__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"8401","64978638":"2062","85455150":"5406","90252242":"5521","fa74d00e":"144","af10bb7a":"153","12a91cff":"236","0743e332":"396","1a63ac3d":"645","543d8720":"840","27e43eea":"883","635a62b0":"902","97dcddd8":"1064","6c8393d0":"1169","a7456010":"1235","0fcdf09a":"1392","e59ee3b6":"1503","e531c33f":"1508","0ba03688":"1513","8e271ac5":"1533","8212ceed":"1607","c20fed52":"1680","3207f380":"1826","acecf23e":"1903","c71430a2":"1906","0ab4808b":"1982","17d2afbc":"2017","a8bcee01":"2038","13c36bd0":"2041","common":"2076","1a4e3797":"2138","dc931a14":"2145","9e9c7a31":"2169","946ac172":"2220","a3a1bb28":"2247","3c9a9f60":"2488","f4085c03":"2494","f387cb67":"2611","dd4f13ee":"2663","9e4087bc":"2711","870a3819":"2770","1cc24fd5":"3051","1d6b016c":"3204","03dcfce2":"3207","ccc49370":"3249","79d23d0f":"3290","d82da48b":"3596","77553c88":"3697","cdb1674e":"3817","387b3dd2":"3906","405a0f0e":"3910","4f68c95b":"3986","ac3f57b8":"4146","861e2252":"4166","b9ba9847":"4203","621db11d":"4212","52c6685a":"4225","93c8a9d2":"4237","ea7cbe00":"4264","ce8da724":"4465","1df93b7f":"4583","7e6238c4":"4595","b48b82b2":"4617","06847bd2":"4676","93f782fd":"4730","348cc40e":"4741","6875c492":"4813","c0f8fa1c":"4827","138e0e15":"4921","9bbb3cda":"5049","a0763d24":"5068","9b9ca316":"5095","bfdbc593":"5349","10201c66":"5354","00518e81":"5453","484468af":"5588","1c72337b":"5605","2ed31cf8":"5609","93fa90b4":"5629","aba21aa0":"5742","d0314b07":"5750","e57043c1":"6043","25b68ecb":"6158","4033e3a4":"6238","aca3791a":"6253","03316779":"6293","1e883308":"6299","425d95b8":"6482","7d405538":"6505","17114e42":"6590","1bfc0f12":"6604","4855f7f8":"6618","1133360a":"6645","e63d0d70":"6706","a2cc83c2":"6796","de97d55b":"6834","e01a17d2":"6884","e49d1ef9":"6946","98db018c":"6960","a7bd4aaa":"7098","0e3ce4d3":"7128","2a9e8c26":"7165","ea6c9fcb":"7170","98df859f":"7246","67e65cef":"7310","16e7db41":"7365","ad6bf128":"7369","94bff9ec":"7447","a8917c53":"7448","814f3328":"7472","a6aa9e1f":"7643","2ab49a78":"7677","f3482596":"7684","f255bc04":"7708","93ee285b":"7770","86bd72be":"7895","937095bd":"7982","90377f5b":"8116","1e0b4934":"8119","efa7b5d3":"8154","01a85c17":"8209","a803bb2b":"8271","28a5ca9c":"8283","b49c4893":"8357","5eda468f":"8420","55843d4b":"8506","e108b786":"8714","4b175b5f":"8849","42d05135":"8935","52a76f6a":"8949","a94703ab":"9048","e37cc8c8":"9065","8469219d":"9196","a76258bd":"9402","3fa978c6":"9436","951776eb":"9595","e7835942":"9636","5e95c892":"9647","8ac150c6":"9758","048ba928":"9765","cca219b7":"9815","36994c47":"9858","635481bf":"9916","85ecc983":"9949"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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