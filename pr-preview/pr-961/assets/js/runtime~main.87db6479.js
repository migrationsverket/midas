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
/******/ 			return "assets/js/" + ({"144":"fa74d00e","153":"af10bb7a","236":"12a91cff","396":"0743e332","645":"1a63ac3d","883":"27e43eea","902":"635a62b0","1064":"97dcddd8","1202":"59ccac09","1235":"a7456010","1315":"014870a3","1392":"0fcdf09a","1508":"e531c33f","1513":"0ba03688","1516":"03796fd4","1533":"8e271ac5","1607":"8212ceed","1680":"c20fed52","1826":"3207f380","1903":"acecf23e","1906":"c71430a2","1982":"0ab4808b","2017":"17d2afbc","2038":"a8bcee01","2041":"13c36bd0","2062":"64978638","2076":"common","2138":"1a4e3797","2145":"dc931a14","2169":"9e9c7a31","2220":"946ac172","2247":"a3a1bb28","2488":"3c9a9f60","2494":"f4085c03","2578":"8b2fdf92","2608":"661f1294","2663":"dd4f13ee","2711":"9e4087bc","2770":"870a3819","3051":"1cc24fd5","3207":"03dcfce2","3249":"ccc49370","3290":"79d23d0f","3595":"4d1b2555","3697":"77553c88","3817":"cdb1674e","3906":"387b3dd2","3910":"405a0f0e","4146":"ac3f57b8","4166":"861e2252","4197":"c2f5ef7b","4203":"b9ba9847","4212":"621db11d","4225":"52c6685a","4264":"ea7cbe00","4465":"ce8da724","4526":"ea7d2168","4583":"1df93b7f","4595":"7e6238c4","4617":"b48b82b2","4730":"93f782fd","4741":"348cc40e","4813":"6875c492","4827":"c0f8fa1c","4911":"220e5099","4921":"138e0e15","5049":"9bbb3cda","5068":"a0763d24","5095":"9b9ca316","5229":"f3c35514","5354":"10201c66","5406":"85455150","5521":"90252242","5588":"484468af","5605":"1c72337b","5609":"2ed31cf8","5629":"93fa90b4","5742":"aba21aa0","5750":"d0314b07","6043":"e57043c1","6158":"25b68ecb","6238":"4033e3a4","6253":"aca3791a","6293":"03316779","6299":"1e883308","6482":"425d95b8","6505":"7d405538","6590":"17114e42","6645":"1133360a","6706":"e63d0d70","6783":"44ec01d9","6796":"a2cc83c2","6834":"de97d55b","6884":"e01a17d2","6946":"e49d1ef9","6960":"98db018c","7098":"a7bd4aaa","7128":"0e3ce4d3","7165":"2a9e8c26","7310":"67e65cef","7365":"16e7db41","7369":"ad6bf128","7447":"94bff9ec","7472":"814f3328","7643":"a6aa9e1f","7677":"2ab49a78","7684":"f3482596","7708":"f255bc04","7770":"93ee285b","7895":"86bd72be","7924":"95ad2a0a","7982":"937095bd","8116":"90377f5b","8119":"1e0b4934","8209":"01a85c17","8271":"a803bb2b","8283":"28a5ca9c","8357":"b49c4893","8401":"17896441","8506":"55843d4b","8714":"e108b786","8849":"4b175b5f","8935":"42d05135","8949":"52a76f6a","9020":"c90e21fc","9048":"a94703ab","9065":"e37cc8c8","9196":"8469219d","9402":"a76258bd","9416":"de99c1e7","9636":"e7835942","9647":"5e95c892","9758":"8ac150c6","9765":"048ba928","9858":"36994c47","9916":"635481bf","9949":"85ecc983","9975":"05e42ebc"}[chunkId] || chunkId) + "." + {"144":"038f8470","153":"3f00f2c1","165":"6cae26a3","236":"c2b4d1e2","245":"d45fbfbc","291":"20921fb7","396":"73d5c61f","451":"45f4d5e4","489":"30c9a396","570":"2f7fb7e3","617":"bdc176f4","645":"dae3fe47","883":"c61d9dd6","902":"cd0e5b31","1000":"fa7b04ea","1064":"a9a55ee9","1149":"15340632","1202":"c1fd8e6f","1203":"f9f32ec5","1235":"da9e7d43","1315":"90741b59","1392":"5991f70d","1508":"bd53f093","1513":"de23cad2","1516":"d35f8b69","1533":"82965993","1581":"b144eabb","1607":"6b821047","1667":"60bc6edd","1680":"3a0612ec","1741":"310bc176","1746":"3d222b72","1803":"0b6ded96","1826":"62363dda","1903":"7f41bdb6","1906":"bd4b9fd4","1982":"8c8769d0","2017":"44d31b6c","2038":"517accdf","2041":"c8b2183d","2062":"9b36f61e","2076":"02a2af28","2130":"cc805673","2138":"bb3882c7","2145":"a72180e2","2152":"d1dab580","2169":"4bae9211","2179":"ff1e555a","2220":"c4421338","2227":"d76061e1","2237":"c95c2f29","2247":"ba95b950","2279":"6ee1479b","2291":"d1329edd","2325":"bf1a4583","2334":"52031c06","2488":"b2497299","2494":"808f7e83","2578":"973d78e4","2608":"20799bca","2663":"ca861df9","2711":"c4f409cc","2770":"46504643","2821":"d68002d5","2875":"f182e9ca","2945":"b8851166","3051":"ddb5dd13","3069":"ed659d6f","3207":"b4709a12","3249":"233d4827","3274":"f344e1d0","3290":"818f97f4","3457":"864a66ff","3490":"1b52434e","3595":"e4b8e328","3624":"709b8f50","3697":"007bdd78","3815":"3b0233be","3817":"004dcd44","3858":"dfb09d25","3906":"432504be","3910":"e336da41","3917":"bd14b1d6","3967":"4dea0660","3996":"c5b37d59","4083":"6bb9a4b8","4146":"aa4b8223","4166":"c16bbec9","4197":"da6226d1","4203":"b73c225c","4212":"3bb9b53e","4225":"2f31781d","4250":"7d88d558","4264":"c5e3a584","4379":"bcf2c8ba","4465":"50c3dec8","4526":"89242b06","4583":"b46876fe","4595":"3b4c086c","4616":"bb7f5cdf","4617":"c7f5a177","4730":"b160d54f","4741":"4a9237a4","4802":"68dcecc5","4813":"233d4827","4827":"42c71e7f","4911":"64e394c8","4921":"7b1554f6","4981":"75dfc3ad","5049":"a543862d","5068":"96c34f97","5095":"aa2a7450","5229":"32332766","5354":"1520c3ab","5406":"58cfa5a5","5462":"6da347dd","5480":"10f312a9","5521":"072e61b3","5588":"e430d1f4","5605":"33f7d65a","5609":"59cfb850","5629":"cc829446","5741":"cf8518af","5742":"bfd93636","5750":"4da7fade","5901":"a97f7dab","5955":"db87ae1d","5996":"40fd1f2e","6043":"bc941b5d","6158":"fe473c9d","6180":"15be0cf1","6238":"e9f8ea0e","6241":"0d531f6d","6244":"731c0ecf","6253":"8b4b4258","6293":"cac85879","6299":"22fa3910","6319":"168a1d18","6325":"0bd0ee8c","6366":"36f74bc0","6380":"3e1e0fea","6482":"099e65b5","6505":"bb8f1361","6567":"d9f5654a","6590":"b45bbc37","6645":"c377c6f9","6706":"73e818a3","6783":"6c019fec","6796":"7039ca73","6834":"3ccc9216","6884":"af1f86c8","6946":"7c66ae9c","6960":"61ca061b","6992":"d8264dac","7054":"5e9417f1","7098":"d8fb18cc","7128":"92487ed8","7165":"039e44e9","7310":"abb07093","7365":"7a8f5738","7368":"32bb07c4","7369":"44614b29","7447":"b9798f1d","7472":"38e13988","7592":"88d5ab11","7643":"d95ef904","7669":"2b0b5e16","7677":"f9a797c6","7684":"7cede347","7708":"246ce89d","7770":"3948bec6","7873":"d04169d1","7895":"512480fd","7924":"05cc64f2","7928":"f5528e1f","7982":"ec55c3ca","8116":"1bd19c62","8119":"d2e5e492","8142":"02789ab3","8209":"e86cfe03","8246":"be724b4a","8249":"07885db6","8271":"3fb84afb","8283":"161bff2c","8357":"64d0a497","8401":"233d4827","8407":"49e55f68","8471":"a0066ccd","8506":"92c3e9c8","8714":"818d77cd","8731":"54b05adc","8756":"20235aad","8824":"97510324","8849":"5b9b674e","8862":"7c6cca11","8935":"93a6fa79","8949":"5d67c142","9020":"c14485cd","9032":"c86e7ad9","9048":"ee00b7aa","9065":"f4c4d4e5","9196":"b1261efa","9255":"2d681562","9402":"59d8b0b9","9412":"26554c20","9416":"67a916ab","9428":"feb00af2","9510":"0412156b","9636":"772cfa6b","9647":"6e26d8b6","9717":"8c4b593e","9732":"75665a42","9741":"89c8584b","9758":"a843767a","9765":"966dd7e8","9785":"c3b9f530","9858":"29c469b1","9916":"e89d18b3","9949":"72037ae9","9974":"097abbf3","9975":"4b12962d"}[chunkId] + ".js";
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
/******/ 		__webpack_require__.p = "/pr-preview/pr-961/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ChunkAssetRuntimeModule */
/******/ 	(() => {
/******/ 		// Docusaurus function to get chunk asset
/******/ 		__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"8401","64978638":"2062","85455150":"5406","90252242":"5521","fa74d00e":"144","af10bb7a":"153","12a91cff":"236","0743e332":"396","1a63ac3d":"645","27e43eea":"883","635a62b0":"902","97dcddd8":"1064","59ccac09":"1202","a7456010":"1235","014870a3":"1315","0fcdf09a":"1392","e531c33f":"1508","0ba03688":"1513","03796fd4":"1516","8e271ac5":"1533","8212ceed":"1607","c20fed52":"1680","3207f380":"1826","acecf23e":"1903","c71430a2":"1906","0ab4808b":"1982","17d2afbc":"2017","a8bcee01":"2038","13c36bd0":"2041","common":"2076","1a4e3797":"2138","dc931a14":"2145","9e9c7a31":"2169","946ac172":"2220","a3a1bb28":"2247","3c9a9f60":"2488","f4085c03":"2494","8b2fdf92":"2578","661f1294":"2608","dd4f13ee":"2663","9e4087bc":"2711","870a3819":"2770","1cc24fd5":"3051","03dcfce2":"3207","ccc49370":"3249","79d23d0f":"3290","4d1b2555":"3595","77553c88":"3697","cdb1674e":"3817","387b3dd2":"3906","405a0f0e":"3910","ac3f57b8":"4146","861e2252":"4166","c2f5ef7b":"4197","b9ba9847":"4203","621db11d":"4212","52c6685a":"4225","ea7cbe00":"4264","ce8da724":"4465","ea7d2168":"4526","1df93b7f":"4583","7e6238c4":"4595","b48b82b2":"4617","93f782fd":"4730","348cc40e":"4741","6875c492":"4813","c0f8fa1c":"4827","220e5099":"4911","138e0e15":"4921","9bbb3cda":"5049","a0763d24":"5068","9b9ca316":"5095","f3c35514":"5229","10201c66":"5354","484468af":"5588","1c72337b":"5605","2ed31cf8":"5609","93fa90b4":"5629","aba21aa0":"5742","d0314b07":"5750","e57043c1":"6043","25b68ecb":"6158","4033e3a4":"6238","aca3791a":"6253","03316779":"6293","1e883308":"6299","425d95b8":"6482","7d405538":"6505","17114e42":"6590","1133360a":"6645","e63d0d70":"6706","44ec01d9":"6783","a2cc83c2":"6796","de97d55b":"6834","e01a17d2":"6884","e49d1ef9":"6946","98db018c":"6960","a7bd4aaa":"7098","0e3ce4d3":"7128","2a9e8c26":"7165","67e65cef":"7310","16e7db41":"7365","ad6bf128":"7369","94bff9ec":"7447","814f3328":"7472","a6aa9e1f":"7643","2ab49a78":"7677","f3482596":"7684","f255bc04":"7708","93ee285b":"7770","86bd72be":"7895","95ad2a0a":"7924","937095bd":"7982","90377f5b":"8116","1e0b4934":"8119","01a85c17":"8209","a803bb2b":"8271","28a5ca9c":"8283","b49c4893":"8357","55843d4b":"8506","e108b786":"8714","4b175b5f":"8849","42d05135":"8935","52a76f6a":"8949","c90e21fc":"9020","a94703ab":"9048","e37cc8c8":"9065","8469219d":"9196","a76258bd":"9402","de99c1e7":"9416","e7835942":"9636","5e95c892":"9647","8ac150c6":"9758","048ba928":"9765","36994c47":"9858","635481bf":"9916","85ecc983":"9949","05e42ebc":"9975"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
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