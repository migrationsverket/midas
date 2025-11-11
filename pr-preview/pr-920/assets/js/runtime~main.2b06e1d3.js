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
/******/ 			return "assets/js/" + ({"144":"fa74d00e","153":"af10bb7a","236":"12a91cff","396":"0743e332","645":"1a63ac3d","883":"27e43eea","902":"635a62b0","1064":"97dcddd8","1235":"a7456010","1392":"0fcdf09a","1513":"0ba03688","1533":"8e271ac5","1607":"8212ceed","1680":"c20fed52","1826":"3207f380","1903":"acecf23e","1906":"c71430a2","1982":"0ab4808b","2017":"17d2afbc","2038":"a8bcee01","2041":"13c36bd0","2062":"64978638","2076":"common","2138":"1a4e3797","2145":"dc931a14","2169":"9e9c7a31","2220":"946ac172","2247":"a3a1bb28","2277":"4c8a618c","2488":"3c9a9f60","2494":"f4085c03","2578":"8b2fdf92","2663":"dd4f13ee","2711":"9e4087bc","2770":"870a3819","3051":"1cc24fd5","3069":"677be058","3111":"83905f34","3118":"b86bcc0e","3207":"03dcfce2","3249":"ccc49370","3697":"77553c88","3817":"cdb1674e","3906":"387b3dd2","3910":"405a0f0e","4146":"ac3f57b8","4166":"861e2252","4203":"b9ba9847","4212":"621db11d","4225":"52c6685a","4264":"ea7cbe00","4465":"ce8da724","4527":"ad312171","4583":"1df93b7f","4595":"7e6238c4","4617":"b48b82b2","4730":"93f782fd","4741":"348cc40e","4813":"6875c492","4827":"c0f8fa1c","4921":"138e0e15","5049":"9bbb3cda","5068":"a0763d24","5095":"9b9ca316","5134":"438e25ff","5354":"10201c66","5406":"85455150","5521":"90252242","5545":"639f66b8","5588":"484468af","5605":"1c72337b","5609":"2ed31cf8","5629":"93fa90b4","5742":"aba21aa0","5750":"d0314b07","5916":"4b316ef4","6043":"e57043c1","6158":"25b68ecb","6168":"5b98bbd9","6173":"13e43bd6","6238":"4033e3a4","6253":"aca3791a","6293":"03316779","6299":"1e883308","6482":"425d95b8","6505":"7d405538","6590":"17114e42","6595":"5ab79501","6645":"1133360a","6706":"e63d0d70","6796":"a2cc83c2","6834":"de97d55b","6884":"e01a17d2","6899":"1730dc95","6946":"e49d1ef9","6960":"98db018c","7087":"3246ab13","7098":"a7bd4aaa","7128":"0e3ce4d3","7165":"2a9e8c26","7310":"67e65cef","7365":"16e7db41","7369":"ad6bf128","7447":"94bff9ec","7472":"814f3328","7643":"a6aa9e1f","7677":"2ab49a78","7684":"f3482596","7708":"f255bc04","7770":"93ee285b","7895":"86bd72be","7982":"937095bd","8116":"90377f5b","8119":"1e0b4934","8209":"01a85c17","8271":"a803bb2b","8283":"28a5ca9c","8357":"b49c4893","8401":"17896441","8506":"55843d4b","8714":"e108b786","8734":"4df45017","8849":"4b175b5f","8935":"42d05135","8949":"52a76f6a","9048":"a94703ab","9065":"e37cc8c8","9196":"8469219d","9636":"e7835942","9647":"5e95c892","9758":"8ac150c6","9765":"048ba928","9858":"36994c47","9916":"635481bf","9949":"85ecc983"}[chunkId] || chunkId) + "." + {"144":"49ddc794","153":"a8ec76ae","165":"705b7cb9","236":"dfc939f5","245":"d45fbfbc","250":"96692bfc","371":"7522dd27","396":"6121ee3b","489":"30c9a396","570":"2f7fb7e3","645":"a25742ee","776":"8d6b91a0","883":"c33ce41e","902":"4f5c11b6","1064":"0f4ca550","1149":"15340632","1235":"da9e7d43","1280":"8607f02c","1316":"96d7d513","1392":"47905ec6","1424":"835e12a9","1454":"0c027cf5","1487":"21bdb3c0","1513":"af4ee0ce","1533":"2e51097d","1607":"4a417910","1667":"60bc6edd","1680":"a6e5651a","1826":"6c7e8dcd","1903":"aeaa562f","1906":"913a9c4e","1982":"1772535f","2017":"d5fc8d77","2038":"b444e455","2041":"e7db3f1a","2062":"866cc07c","2068":"be3be3b7","2076":"b8aa5612","2130":"066f1b14","2138":"bb3882c7","2145":"f8b8c729","2152":"d1dab580","2169":"72653b67","2179":"ff1e555a","2220":"2946e774","2227":"faa12427","2237":"c95c2f29","2247":"dc4da399","2277":"52693e00","2279":"ff05f1d8","2334":"1d9c3f27","2488":"dd0ec75a","2494":"20b5fba4","2498":"7bb58592","2578":"64247720","2651":"23cdc992","2663":"b7ad9350","2711":"c4f409cc","2716":"452d7cf5","2770":"b77835c9","2875":"f182e9ca","2945":"b8851166","3051":"1cbb37ce","3069":"006a64f9","3086":"99cea32c","3111":"aac4d231","3118":"501fd31b","3207":"342477ea","3249":"6ef20137","3274":"f344e1d0","3370":"efb6950f","3457":"864a66ff","3624":"709b8f50","3697":"0cea1ce5","3817":"9bfd1b79","3849":"870c31ee","3858":"dfb09d25","3906":"05c0504f","3910":"1011b0d1","3917":"bd14b1d6","3956":"6f747100","3967":"4dea0660","4008":"dc3a03f4","4051":"eda84935","4083":"6bb9a4b8","4146":"f6eb196d","4166":"b70c34cf","4203":"43d789d9","4212":"3bb9b53e","4225":"679f3d41","4264":"93f2e626","4404":"47d1a0e9","4465":"416adee8","4504":"280eb424","4527":"6ac7180d","4583":"3e414ba8","4595":"412774b1","4617":"4a43796b","4730":"d8fb2609","4741":"b3e0db8a","4802":"7b4bcb4b","4813":"6ef20137","4827":"91c913fc","4881":"78c960e4","4921":"7b1554f6","4924":"68cf17f9","5049":"42ea7517","5068":"5f513b10","5095":"433b9512","5134":"3e6c9253","5248":"ae532f11","5354":"34626e35","5392":"d01b8053","5406":"e033518a","5450":"007ecdfc","5521":"e9e9882d","5545":"b0dd42fb","5588":"ec816cd3","5605":"259b68a0","5609":"5e66ba41","5629":"32d37cce","5741":"cf8518af","5742":"bfd93636","5750":"efad26ee","5916":"974fcc39","6043":"a7c6b68f","6108":"425c0aba","6158":"08c61ead","6168":"47610e82","6173":"063c5b05","6180":"d432df75","6228":"164b23da","6238":"48b913fa","6244":"731c0ecf","6253":"9c0858fc","6293":"1a4af919","6299":"c51db60b","6320":"82e65dc5","6325":"0bd0ee8c","6380":"3e1e0fea","6439":"d6b9ec22","6482":"c5e49fff","6505":"05382d2b","6587":"8afcb91c","6590":"8b6a98a8","6595":"dcaf307a","6645":"a349d3dc","6706":"96dcbb64","6710":"1301367c","6796":"114efd51","6834":"0a127347","6851":"ac43496d","6884":"5b8a2e65","6899":"3a1cf322","6946":"bdc56091","6960":"7ccb978e","7054":"5e9417f1","7087":"4755adac","7098":"d8fb18cc","7128":"fb5671b0","7165":"3c72bddc","7277":"a3d46d89","7310":"037f67d5","7365":"7053577e","7368":"32bb07c4","7369":"8ea36bb3","7411":"95b18fe3","7447":"145232fe","7472":"cf15c8fb","7546":"739f62c9","7573":"0930bac0","7643":"30370479","7669":"2b0b5e16","7677":"f018a6f0","7684":"96be1862","7708":"a709baa3","7770":"a5683297","7895":"b3a27737","7982":"b352ab10","8116":"a1bffe36","8119":"30bc0c70","8176":"153f9c30","8181":"c1b3efd4","8188":"6bd8e744","8209":"e86cfe03","8271":"fd6aa2ff","8283":"0807bc55","8357":"1ff252f8","8365":"b756c4e0","8401":"6ef20137","8407":"49e55f68","8506":"d591483c","8714":"6ac96cf4","8716":"018816eb","8731":"ae25de96","8734":"ced2fc41","8824":"49634d35","8849":"54531da6","8935":"6e3809fd","8949":"8441d359","9048":"ee00b7aa","9065":"28d92518","9196":"dd1bb749","9255":"2d681562","9428":"feb00af2","9501":"db63b081","9636":"b5c53626","9647":"6e26d8b6","9732":"75665a42","9741":"89c8584b","9758":"f7284aad","9765":"8a1421a1","9785":"c3b9f530","9858":"29c469b1","9916":"b296a84c","9949":"c04101d3","9974":"097abbf3"}[chunkId] + ".js";
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
/******/ 		__webpack_require__.p = "/pr-preview/pr-920/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ChunkAssetRuntimeModule */
/******/ 	(() => {
/******/ 		// Docusaurus function to get chunk asset
/******/ 		__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"8401","64978638":"2062","85455150":"5406","90252242":"5521","fa74d00e":"144","af10bb7a":"153","12a91cff":"236","0743e332":"396","1a63ac3d":"645","27e43eea":"883","635a62b0":"902","97dcddd8":"1064","a7456010":"1235","0fcdf09a":"1392","0ba03688":"1513","8e271ac5":"1533","8212ceed":"1607","c20fed52":"1680","3207f380":"1826","acecf23e":"1903","c71430a2":"1906","0ab4808b":"1982","17d2afbc":"2017","a8bcee01":"2038","13c36bd0":"2041","common":"2076","1a4e3797":"2138","dc931a14":"2145","9e9c7a31":"2169","946ac172":"2220","a3a1bb28":"2247","4c8a618c":"2277","3c9a9f60":"2488","f4085c03":"2494","8b2fdf92":"2578","dd4f13ee":"2663","9e4087bc":"2711","870a3819":"2770","1cc24fd5":"3051","677be058":"3069","83905f34":"3111","b86bcc0e":"3118","03dcfce2":"3207","ccc49370":"3249","77553c88":"3697","cdb1674e":"3817","387b3dd2":"3906","405a0f0e":"3910","ac3f57b8":"4146","861e2252":"4166","b9ba9847":"4203","621db11d":"4212","52c6685a":"4225","ea7cbe00":"4264","ce8da724":"4465","ad312171":"4527","1df93b7f":"4583","7e6238c4":"4595","b48b82b2":"4617","93f782fd":"4730","348cc40e":"4741","6875c492":"4813","c0f8fa1c":"4827","138e0e15":"4921","9bbb3cda":"5049","a0763d24":"5068","9b9ca316":"5095","438e25ff":"5134","10201c66":"5354","639f66b8":"5545","484468af":"5588","1c72337b":"5605","2ed31cf8":"5609","93fa90b4":"5629","aba21aa0":"5742","d0314b07":"5750","4b316ef4":"5916","e57043c1":"6043","25b68ecb":"6158","5b98bbd9":"6168","13e43bd6":"6173","4033e3a4":"6238","aca3791a":"6253","03316779":"6293","1e883308":"6299","425d95b8":"6482","7d405538":"6505","17114e42":"6590","5ab79501":"6595","1133360a":"6645","e63d0d70":"6706","a2cc83c2":"6796","de97d55b":"6834","e01a17d2":"6884","1730dc95":"6899","e49d1ef9":"6946","98db018c":"6960","3246ab13":"7087","a7bd4aaa":"7098","0e3ce4d3":"7128","2a9e8c26":"7165","67e65cef":"7310","16e7db41":"7365","ad6bf128":"7369","94bff9ec":"7447","814f3328":"7472","a6aa9e1f":"7643","2ab49a78":"7677","f3482596":"7684","f255bc04":"7708","93ee285b":"7770","86bd72be":"7895","937095bd":"7982","90377f5b":"8116","1e0b4934":"8119","01a85c17":"8209","a803bb2b":"8271","28a5ca9c":"8283","b49c4893":"8357","55843d4b":"8506","e108b786":"8714","4df45017":"8734","4b175b5f":"8849","42d05135":"8935","52a76f6a":"8949","a94703ab":"9048","e37cc8c8":"9065","8469219d":"9196","e7835942":"9636","5e95c892":"9647","8ac150c6":"9758","048ba928":"9765","36994c47":"9858","635481bf":"9916","85ecc983":"9949"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
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