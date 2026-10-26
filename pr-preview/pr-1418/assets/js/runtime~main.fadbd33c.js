(() => {
"use strict";
var __webpack_modules__ = ({});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
};
})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "assets/js/" + ({"1022": "93fa90b4","1027": "8ac150c6","1028": "1555d329","1036": "e49d1ef9","1042": "7d405538","106": "17896441","1150": "85ecc983","1221": "621db11d","1234": "138e0e15","1256": "28a5ca9c","1269": "f3482596","1283": "f4085c03","1384": "e57043c1","1385": "48e940a6","15": "e63d0d70","1540": "ad3eb7ea","1567": "425d95b8","1603": "67e65cef","1668": "5e95c892","1731": "243d889a","1797": "7c2aac5e","1833": "814f3328","1882": "90252242","191": "36994c47","1932": "a3a1bb28","1970": "1ed902d3","2098": "9e9c7a31","2183": "bead4daf","2234": "1a423cf2","2284": "03dcfce2","2294": "294ee15e","2311": "10201c66","2394": "f8798d75","2444": "e4d636c3","2536": "c0f8fa1c","2547": "daad1f51","2581": "90377f5b","2617": "fa74d00e","2886": "8b36fbe4","3056": "a7456010","3087": "3207f380","3149": "e8bd7304","3153": "124f519e","3193": "484132c8","3218": "0ba03688","3220": "acecf23e","325": "e531c33f","3292": "a341ea43","3423": "6f5f607c","3574": "03316779","3628": "b8a410ee","3677": "946ac172","3699": "85455150","3747": "aba21aa0","3795": "ab8aadb0","3909": "e7835942","3920": "27e43eea","395": "d0314b07","40": "8fee352f","4022": "1133360a","4083": "98df859f","4104": "3318cb9e","4116": "a803bb2b","4284": "8212ceed","4310": "1a63ac3d","434": "cdb1674e","4395": "a8bcee01","4426": "2d879dfb","4508": "94bff9ec","4559": "ac3f57b8","4701": "0743e332","4774": "5c5def13","4785": "543d8720","4809": "c20fed52","4853": "06847bd2","4900": "5bc86868","496": "fe862c7e","4968": "c8e05a9c","5005": "common","5105": "97dcddd8","5142": "1c72337b","5210": "77553c88","5211": "9ab082d7","5298": "b48b82b2","5343": "387b3dd2","5382": "b49c4893","545": "0e3ce4d3","5476": "e59ee3b6","5495": "93ee285b","5575": "a7bd4aaa","5579": "1838688e","5628": "42d05135","5630": "8f7c5456","5706": "dc931a14","5723": "635a62b0","5746": "ad6bf128","5787": "a8302b50","5818": "52c6685a","5847": "1a4e3797","5874": "af10bb7a","6074": "ccc49370","6112": "7e6238c4","6115": "014e05c1","6131": "937095bd","614": "2b7d3fe7","6167": "93c8a9d2","6302": "00518e81","6321": "afef3dfd","6361": "75f1d354","6374": "16e7db41","6405": "600a1f09","6407": "79d23d0f","6478": "2ab49a78","6525": "12a91cff","653": "f255bc04","6582": "d481a1b3","6615": "a76258bd","671": "c71430a2","6717": "a0763d24","6735": "de97d55b","6743": "2f6f63a3","6747": "861e2252","6785": "a94703ab","6803": "dec1a858","6814": "8e271ac5","7018": "ce8da724","7062": "b235458c","7089": "ea7cbe00","7195": "405a0f0e","7304": "1e883308","7325": "8469219d","7362": "2ed31cf8","7422": "7b7ebd14","7496": "a6aa9e1f","7507": "1d710a47","7592": "1cc24fd5","76": "9b9ca316","766": "6875c492","7767": "e108b786","7799": "55843d4b","7811": "4033e3a4","7827": "25b68ecb","7859": "17114e42","7949": "635481bf","7972": "0fd944e4","7980": "f6c4e442","8034": "9bbb3cda","8058": "4b175b5f","8076": "86bd72be","8099": "38f35ff6","8177": "3c9a9f60","8200": "b9ba9847","8274": "13c36bd0","8361": "b3ec44a9","8441": "98db018c","8451": "0ab4808b","8522": "17d2afbc","8565": "e01a17d2","8582": "52a76f6a","8601": "bfe4c2f5","8655": "870a3819","8733": "a2cc83c2","8908": "dd4f13ee","8926": "f9ae56e1","9008": "1d0b0786","9054": "2a9e8c26","9061": "484468af","9107": "a526d928","9217": "dabe49d0","9270": "048ba928","9304": "121d2938","9356": "1e0b4934","9373": "be649812","9385": "41e62c11","9452": "1df93b7f","9470": "aca3791a","9479": "564d7562","9591": "93f782fd","9593": "0fcdf09a","9660": "9e4087bc","9786": "01a85c17","9899": "0f37e37d","9907": "64978638","9997": "3e79c5ba",}[chunkId] || chunkId) + "." + {"1012": "bd5be962","1022": "e35656a8","1027": "f0e0bba5","1028": "aefe3d5b","1036": "d64d64c7","1042": "97c98e40","106": "53ac2a6d","1091": "7fcd5fb1","112": "c8f56c50","1134": "2453ebdc","1143": "51c05e5d","1150": "2c4ab01e","1221": "a386ab0b","1234": "cf6afb49","1256": "222934ac","1269": "88a48196","1283": "3eebd708","1384": "cef8c3c5","1385": "460d30dd","1465": "792299da","1483": "db137127","15": "443c9af1","1540": "bcc381a1","156": "443a1ca6","1567": "1b46429c","1603": "351aa35c","1668": "6caa2fa7","1731": "0e56c579","1773": "1bb21bd7","1797": "2461f4ec","1833": "88e4c8b7","1882": "3d277bcc","190": "5dd30039","191": "3e5e3442","1932": "f4c16173","1970": "90e58f73","199": "7df23e5e","2070": "735ca062","2085": "e2689fa6","2098": "f8230879","2183": "d6487456","2214": "c6eeb6e3","2234": "59b56f8e","2284": "cb8a6327","2294": "ff0d4fa4","2311": "ac1d6eb0","2371": "310e2e9a","2394": "642953ae","2395": "203693be","2432": "b8bc8e5f","2444": "9b2aa0d2","2536": "63210620","2547": "4b4b0b7c","2580": "4ba0cd6a","2581": "a70a4e78","2617": "ba6cee52","2619": "9922e91f","2642": "fbc961fb","2654": "86c70003","2831": "65e8e85b","2853": "35579317","2886": "85804694","2982": "c8b155ea","3009": "dc21a4fb","3013": "664f95b3","3017": "ab131bab","3056": "d340e9a1","3084": "5f60763d","3087": "6c5e5985","3120": "1170ee02","3149": "c76db9dc","3153": "c4e71cb6","3193": "f0b96a00","3218": "5051d726","3220": "a47a888e","325": "bb288be2","3270": "086e0b02","3292": "de2ef2e9","3303": "1f7a2362","3310": "864bbb2c","3312": "6a6ecb85","3358": "5a0820bd","3373": "c2d13d66","3423": "9954236f","3516": "6897023a","3535": "1ec6f456","3574": "85e42bdf","3628": "cf050404","365": "6fb12f0d","3671": "87c7af44","3677": "78f21d13","3685": "9bed7dbb","3693": "e1695b70","3699": "cc8a3094","373": "c0801671","3747": "8bef4b4c","3795": "0f9e7bf5","3909": "52c398fe","3920": "89a8daba","3948": "2a312edf","395": "79a7a5d9","3970": "f752bd9e","40": "9e6f842f","4022": "8de41e7e","4037": "f2a36cab","404": "e3defcb1","408": "a853700c","4083": "248621f3","4104": "46765af4","4116": "8fd8f96c","4129": "2a01a58f","4184": "b726d279","4284": "c4f030c3","4288": "ec005e1e","4310": "e979e054","434": "1e4d1b04","4392": "98dc9280","4395": "0ecaaa4e","4426": "bab09e6a","4508": "ad86c634","4522": "f301bc5f","4559": "b8db2963","4701": "2e42e326","4774": "4b7ca4e7","4779": "74baa6dd","4785": "e91455a4","4809": "8216baa0","4853": "5372c6ac","4900": "7fdc2606","4929": "8f6e567b","4932": "81d17eed","4936": "5b80d316","4950": "ee358c28","496": "8ce47098","4968": "474255dc","5005": "02842efd","5062": "f02b7e45","5082": "6a9159cd","5105": "2a915647","5142": "1d14f2d2","5155": "0a8eec52","5195": "dd6d3f09","5210": "7ebf3ded","5211": "8a3abbfe","5250": "8505ef39","5264": "7e478962","529": "0ecb3ee5","5298": "e4d3d3f8","5314": "01b3a1cd","5343": "8f54daf4","5382": "79bef660","5394": "8dd630a1","5428": "0faec702","5430": "84dec5f7","545": "b27c05b9","5476": "358467c5","549": "6426778f","5493": "d4829b0d","5495": "cdf6b542","5575": "9df4e883","5579": "aa6bdf64","5628": "dc3d956b","5630": "a9d10703","5643": "01a2f70e","5654": "4683b240","5706": "922ae1f4","5723": "bc4f0140","5746": "90a10410","5787": "617c87c2","5818": "aa793226","5847": "81a66082","5863": "697dcce3","5874": "3084ff91","5926": "a3d49a8b","5998": "81622b12","6014": "9f274b5c","6015": "f5747f35","6045": "e24b68e3","6074": "e8d12a57","6112": "d17e8e82","6115": "403af2ea","612": "35c2ba85","6131": "438fee62","614": "59e96ad0","6153": "8f72b000","6167": "446f3eb4","6261": "5367f29f","6302": "6e9c352c","6321": "72da60ad","6361": "5de9e405","6374": "96e27238","6405": "09c24aa3","6407": "1b4c43bb","6426": "963714dc","6438": "d80e4ca4","6478": "41110043","6520": "7c9a0670","6525": "561f4fdf","653": "0d8a0933","6582": "63d20a3d","6615": "0ca52088","6632": "852ab27c","671": "c76122a5","6717": "0aca9659","6726": "d0dd1b97","6735": "b5d803cc","6743": "cd3cc82a","6747": "40867edf","6762": "cd87862b","6771": "0f2e0a79","6785": "ed126e57","6803": "1d496e01","6814": "a632a51c","7018": "1880b664","705": "f5694cf1","7057": "ab93a2f5","7062": "fb93d110","7089": "0c71f00a","718": "6dac9d47","7195": "72bdd70d","7304": "4592498e","7305": "103884af","7325": "0ba25688","7362": "97c0592c","7422": "e47be0b3","7496": "e2c2090d","7507": "63c31fd4","7592": "3eda4c1d","76": "74327d51","766": "ccf1a6bf","7749": "055e6d56","7759": "4252f4d3","7767": "3635a065","7799": "a4745abe","7811": "6eacd57f","7827": "ea4600ed","7859": "39227f1e","7949": "d54ae340","7972": "1dcef9ae","7980": "3adffe72","8034": "47a3a878","8058": "65e06505","8076": "174457a6","8077": "eb1eee7e","8099": "4f8f03f8","8124": "12b68627","8177": "225b9d31","8200": "4ed2873c","8274": "899e3b35","8307": "caea0ce2","8361": "fde254cd","8364": "395b5232","8402": "94675b90","8441": "2930716c","8451": "6a683983","8522": "1b9d3d93","8534": "2c50c3a5","8565": "c95de088","8582": "21bf133c","8601": "fc5ccc55","8645": "60b32772","8655": "e62a4d42","8665": "ed3dc141","871": "29c1a753","8733": "2b50f349","8908": "303f8141","8926": "82cef24d","8963": "4a781f6f","8979": "436b8f49","9008": "414bd2fa","9009": "c482a6a9","9010": "354bb23f","9054": "b8cdefb8","9061": "0c64db0f","9107": "24472f72","92": "2de9170d","9217": "e7dc7807","9241": "e4ec4fd7","9270": "a5f1a95f","9304": "0823f8e5","9356": "d1d5e3cf","9373": "67fd929d","9385": "c879c93b","9452": "567f3b29","9464": "8c7dfda6","9470": "aa806ddf","9479": "c778d520","9591": "d4488e0b","9593": "89212579","9660": "31da2e5a","9678": "7d84e0c5","9686": "33e1c1c5","9786": "1c04fd26","9899": "a196e6a3","9907": "4760352c","9997": "a6b6d236",}[chunkId] + ".js"
}
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var uniqueName = "@midas-ds/source:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-rspack") == uniqueName + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');


script.timeout = 120;
if (__webpack_require__.nc) {
  script.setAttribute("nonce", __webpack_require__.nc);
}

script.setAttribute("data-rspack", uniqueName + key);



script.src = url;


	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/pr-preview/pr-1418/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.12")
})();
// ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"106","64978638":"9907","85455150":"3699","90252242":"1882","e63d0d70":"15","8fee352f":"40","9b9ca316":"76","36994c47":"191","e531c33f":"325","d0314b07":"395","cdb1674e":"434","fe862c7e":"496","0e3ce4d3":"545","2b7d3fe7":"614","f255bc04":"653","c71430a2":"671","6875c492":"766","93fa90b4":"1022","8ac150c6":"1027","1555d329":"1028","e49d1ef9":"1036","7d405538":"1042","85ecc983":"1150","621db11d":"1221","138e0e15":"1234","28a5ca9c":"1256","f3482596":"1269","f4085c03":"1283","e57043c1":"1384","48e940a6":"1385","ad3eb7ea":"1540","425d95b8":"1567","67e65cef":"1603","5e95c892":"1668","243d889a":"1731","7c2aac5e":"1797","814f3328":"1833","a3a1bb28":"1932","1ed902d3":"1970","9e9c7a31":"2098","bead4daf":"2183","1a423cf2":"2234","03dcfce2":"2284","294ee15e":"2294","10201c66":"2311","f8798d75":"2394","e4d636c3":"2444","c0f8fa1c":"2536","daad1f51":"2547","90377f5b":"2581","fa74d00e":"2617","8b36fbe4":"2886","a7456010":"3056","3207f380":"3087","e8bd7304":"3149","124f519e":"3153","484132c8":"3193","0ba03688":"3218","acecf23e":"3220","a341ea43":"3292","6f5f607c":"3423","03316779":"3574","b8a410ee":"3628","946ac172":"3677","aba21aa0":"3747","ab8aadb0":"3795","e7835942":"3909","27e43eea":"3920","1133360a":"4022","98df859f":"4083","3318cb9e":"4104","a803bb2b":"4116","8212ceed":"4284","1a63ac3d":"4310","a8bcee01":"4395","2d879dfb":"4426","94bff9ec":"4508","ac3f57b8":"4559","0743e332":"4701","5c5def13":"4774","543d8720":"4785","c20fed52":"4809","06847bd2":"4853","5bc86868":"4900","c8e05a9c":"4968","common":"5005","97dcddd8":"5105","1c72337b":"5142","77553c88":"5210","9ab082d7":"5211","b48b82b2":"5298","387b3dd2":"5343","b49c4893":"5382","e59ee3b6":"5476","93ee285b":"5495","a7bd4aaa":"5575","1838688e":"5579","42d05135":"5628","8f7c5456":"5630","dc931a14":"5706","635a62b0":"5723","ad6bf128":"5746","a8302b50":"5787","52c6685a":"5818","1a4e3797":"5847","af10bb7a":"5874","ccc49370":"6074","7e6238c4":"6112","014e05c1":"6115","937095bd":"6131","93c8a9d2":"6167","00518e81":"6302","afef3dfd":"6321","75f1d354":"6361","16e7db41":"6374","600a1f09":"6405","79d23d0f":"6407","2ab49a78":"6478","12a91cff":"6525","d481a1b3":"6582","a76258bd":"6615","a0763d24":"6717","de97d55b":"6735","2f6f63a3":"6743","861e2252":"6747","a94703ab":"6785","dec1a858":"6803","8e271ac5":"6814","ce8da724":"7018","b235458c":"7062","ea7cbe00":"7089","405a0f0e":"7195","1e883308":"7304","8469219d":"7325","2ed31cf8":"7362","7b7ebd14":"7422","a6aa9e1f":"7496","1d710a47":"7507","1cc24fd5":"7592","e108b786":"7767","55843d4b":"7799","4033e3a4":"7811","25b68ecb":"7827","17114e42":"7859","635481bf":"7949","0fd944e4":"7972","f6c4e442":"7980","9bbb3cda":"8034","4b175b5f":"8058","86bd72be":"8076","38f35ff6":"8099","3c9a9f60":"8177","b9ba9847":"8200","13c36bd0":"8274","b3ec44a9":"8361","98db018c":"8441","0ab4808b":"8451","17d2afbc":"8522","e01a17d2":"8565","52a76f6a":"8582","bfe4c2f5":"8601","870a3819":"8655","a2cc83c2":"8733","dd4f13ee":"8908","f9ae56e1":"8926","1d0b0786":"9008","2a9e8c26":"9054","484468af":"9061","a526d928":"9107","dabe49d0":"9217","048ba928":"9270","121d2938":"9304","1e0b4934":"9356","be649812":"9373","41e62c11":"9385","1df93b7f":"9452","aca3791a":"9470","564d7562":"9479","93f782fd":"9591","0fcdf09a":"9593","9e4087bc":"9660","01a85c17":"9786","0f37e37d":"9899","3e79c5ba":"9997"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
})();
// webpack/runtime/jsonp_chunk_loading
(() => {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"4014": 0,"9783": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (!/^(4014|9783)$/.test(chunkId)) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} else installedChunks[chunkId] = 0; 
	}
}

        }
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var __rspack_jsonp = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
	return __webpack_require__.O(result);
	
};

var chunkLoadingGlobal = self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.12";
})();
})()
;